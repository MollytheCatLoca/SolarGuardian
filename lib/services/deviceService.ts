// lib/services/deviceService.ts
import { devices } from '@/data/mock/devices';
import { Device } from '@/types/deviceTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todos los dispositivos, opcionalmente filtrados por planta
 */
export const getAllDevices = async (plantId?: number): Promise<Device[]> => {
  await simulateLatency();
  
  // Si no se proporciona un plantId, devuelve todos los dispositivos (para administradores)
  if (!plantId) return [...devices];
  
  // Filtra los dispositivos por plantId
  return devices.filter(device => device.plantId === plantId);
};

/**
 * Obtiene un dispositivo por su ID
 */
export const getDeviceById = async (id: number): Promise<Device | undefined> => {
  await simulateLatency();
  return devices.find(device => device.id === id);
};

/**
 * Obtiene dispositivos por estado, opcionalmente filtrados por planta
 */
export const getDevicesByStatus = async (status: string, plantId?: number): Promise<Device[]> => {
  await simulateLatency();
  
  let filteredDevices = devices.filter(device => device.status === status);
  
  // Si se proporciona un plantId, filtra por planta también
  if (plantId) {
    filteredDevices = filteredDevices.filter(device => device.plantId === plantId);
  }
  
  return filteredDevices;
};

/**
 * Obtiene dispositivos por tipo, opcionalmente filtrados por planta
 */
export const getDevicesByType = async (type: string, plantId?: number): Promise<Device[]> => {
  await simulateLatency();
  
  let filteredDevices = devices.filter(device => device.type === type);
  
  // Si se proporciona un plantId, filtra por planta también
  if (plantId) {
    filteredDevices = filteredDevices.filter(device => device.plantId === plantId);
  }
  
  return filteredDevices;
};

/**
 * Crea un nuevo dispositivo
 */
export const createDevice = async (deviceData: Omit<Device, 'id'>): Promise<Device> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID
  const newId = Math.max(...devices.map(d => d.id)) + 1;
  const newDevice: Device = {
    id: newId,
    ...deviceData
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  
  return newDevice;
};

/**
 * Actualiza un dispositivo existente
 */
export const updateDevice = async (id: number, deviceData: Partial<Device>): Promise<Device | undefined> => {
  await simulateLatency();
  
  const deviceIndex = devices.findIndex(device => device.id === id);
  if (deviceIndex === -1) return undefined;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  const updatedDevice: Device = {
    ...devices[deviceIndex],
    ...deviceData
  };
  
  return updatedDevice;
};

/**
 * Elimina un dispositivo
 */
export const deleteDevice = async (id: number): Promise<boolean> => {
  await simulateLatency();
  
  const deviceIndex = devices.findIndex(device => device.id === id);
  if (deviceIndex === -1) return false;
  
  // En una implementación real, aquí se eliminaría de la base de datos
  
  return true;
};

/**
 * Obtiene estadísticas de dispositivos por planta
 */
export const getDeviceStatsByPlantId = async (plantId?: number): Promise<{
  total: number;
  online: number;
  warning: number;
  error: number;
  maintenance: number;
}> => {
  await simulateLatency();
  
  // Filtrar dispositivos por planta si se proporciona un plantId
  const filteredDevices = plantId 
    ? devices.filter(device => device.plantId === plantId)
    : devices;
  
  return {
    total: filteredDevices.length,
    online: filteredDevices.filter(d => d.status === 'Activo').length,
    warning: filteredDevices.filter(d => d.status === 'Advertencia').length,
    error: filteredDevices.filter(d => d.status === 'Falla').length,
    maintenance: filteredDevices.filter(d => d.status === 'Mantenimiento').length
  };
};