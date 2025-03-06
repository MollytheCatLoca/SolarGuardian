"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserPlants } from '@/lib/services/plantService';
import { Plant } from '@/types/plantTypes';
import { getLoggedInUser } from '@/lib/actions/user.actions';

interface PlantContextType {
  plants: Plant[];
  selectedPlant: Plant | null;
  selectPlant: (plant: Plant) => void;
  isLoading: boolean;
}

const PlantContext = createContext<PlantContextType | undefined>(undefined);

export const PlantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPlants = async () => {
      try {
        setIsLoading(true);
        const user = await getLoggedInUser();
        
        // Si es admin (clientId = 0), obtiene todas las plantas
        // De lo contrario, obtiene solo las plantas asociadas al cliente
        const userPlants = await getUserPlants(user?.clientId || 0);
        
        setPlants(userPlants);
        
        // Seleccionar la primera planta por defecto si hay plantas disponibles
        if (userPlants.length > 0 && !selectedPlant) {
          setSelectedPlant(userPlants[0]);
        }
      } catch (error) {
        console.error('Error cargando plantas:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPlants();
  }, [selectedPlant]);

  const selectPlant = (plant: Plant) => {
    setSelectedPlant(plant);
  };

  return (
    <PlantContext.Provider value={{ plants, selectedPlant, selectPlant, isLoading }}>
      {children}
    </PlantContext.Provider>
  );
};

export const usePlant = () => {
  const context = useContext(PlantContext);
  if (context === undefined) {
    throw new Error('usePlant debe ser usado dentro de un PlantProvider');
  }
  return context;
};