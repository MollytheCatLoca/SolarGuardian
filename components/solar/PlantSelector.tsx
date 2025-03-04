// components/solar/PlantSelector.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getUserPlants } from '@/lib/services/plantService';
import { Plant } from '@/types/plantTypes';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PlantSelector({ clientId }: { clientId: number }) {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loadPlants = async () => {
      try {
        setIsLoading(true);
        const userPlants = await getUserPlants(clientId);
        setPlants(userPlants);
        
        // Extraer el plantId de la URL actual si existe
        const plantIdMatch = pathname.match(/\/dashboard\/(\d+)/);
        const currentPlantId = plantIdMatch ? plantIdMatch[1] : null;
        
        // Si hay un plantId en la URL y está en la lista de
        // components/solar/PlantSelector.tsx (continuación)
        // Si hay un plantId en la URL y está en la lista de plantas del usuario, usarlo
        if (currentPlantId && userPlants.some(p => p.id.toString() === currentPlantId)) {
          setSelectedPlantId(currentPlantId);
        } 
        // Si no hay plantId en la URL o no es válido, usar la primera planta disponible
        else if (userPlants.length > 0) {
          setSelectedPlantId(userPlants[0].id.toString());
          
          // Actualizar la URL para reflejar la planta seleccionada por defecto
          const newPath = pathname.replace(/\/dashboard(?:\/\d+)?/, `/dashboard/${userPlants[0].id}`);
          router.push(newPath);
        }
      } catch (error) {
        console.error('Error cargando plantas:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPlants();
  }, [pathname, router, clientId]);

  const handlePlantChange = (value: string) => {
    setSelectedPlantId(value);
    
    // Actualizar la URL cuando cambia la planta seleccionada
    const newPath = pathname.replace(/\/dashboard(?:\/\d+)?(?:\/.*)?/, `/dashboard/${value}`);
    router.push(newPath);
  };
  
  if (isLoading) {
    return <div className="h-9 w-48 bg-[#111928] animate-pulse rounded-md"></div>;
  }
  
  if (plants.length === 0) {
    return <div className="text-gray-400 text-sm">No hay plantas disponibles</div>;
  }
  
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-400">Planta:</span>
      <Select
        value={selectedPlantId || undefined}
        onValueChange={handlePlantChange}
      >
        <SelectTrigger className="w-48 bg-[#111928] text-white border-[#374151]">
          <SelectValue placeholder="Seleccionar planta" />
        </SelectTrigger>
        <SelectContent className="bg-[#111928] text-white border-[#374151]">
          {plants.map((plant) => (
            <SelectItem key={plant.id} value={plant.id.toString()}>
              {plant.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}