// lib/services/plantService.ts
import { plants } from '@/data/mock/plants';
import { Plant } from '@/types/plantTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todas las plantas
 */
export const getAllPlants = async (): Promise<Plant[]> => {
  await simulateLatency();
  return [...plants];
};

/**
 * Obtiene una planta por su ID
 */
export const getPlantById = async (id: number): Promise<Plant | undefined> => {
  await simulateLatency();
  return plants.find(plant => plant.id === id);
};

/**
 * Obtiene plantas por cliente
 */
export const getPlantsByClientId = async (clientId: number): Promise<Plant[]> => {
  await simulateLatency();
  
  // Si el clientId es 0, se trata de un administrador y devolvemos todas las plantas
  if (clientId === 0) {
    return [...plants];
  }
  
  return plants.filter(plant => plant.clientId === clientId);
};

/**
 * Obtiene plantas por usuario (utiliza la función de plantas por cliente)
 */
export const getUserPlants = async (clientId: number): Promise<Plant[]> => {
  return getPlantsByClientId(clientId);
};

/**
 * Crea una nueva planta
 */
export const createPlant = async (plantData: Omit<Plant, 'id'>): Promise<Plant> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID
  const newId = Math.max(...plants.map(p => p.id)) + 1;
  const newPlant: Plant = {
    id: newId,
    ...plantData
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  
  return newPlant;
};

/**
 * Actualiza una planta existente
 */
export const updatePlant = async (id: number, plantData: Partial<Plant>): Promise<Plant | undefined> => {
  await simulateLatency();
  
  const plantIndex = plants.findIndex(plant => plant.id === id);
  if (plantIndex === -1) return undefined;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  const updatedPlant: Plant = {
    ...plants[plantIndex],
    ...plantData
  };
  
  return updatedPlant;
};

/**
 * Elimina una planta
 */
export const deletePlant = async (id: number): Promise<boolean> => {
  await simulateLatency();
  
  const plantIndex = plants.findIndex(plant => plant.id === id);
  if (plantIndex === -1) return false;
  
  // En una implementación real, aquí se eliminaría de la base de datos
  
  return true;
};