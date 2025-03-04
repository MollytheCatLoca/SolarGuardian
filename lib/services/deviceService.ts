// lib/services/deviceService.ts
import { devices } from '@/data/mock/devices';
import { dummyDevices } from '@/lib/solar/dummyData';
import { UnifiedDevice, convertFromLegacyFormat, convertFromSolarFormat } from '@/types/unifiedDeviceTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todos los dispositivos, opcionalmente filtrados por planta
 */
export const getAllDevices = async (plantId?: number): Promise<UnifiedDevice[]> => {
  await simulateLatency();
  
  // En una implementación real, obtendríamos datos de una API
  // Para este mock, combinamos datos de ambas fuentes
  let legacyDevices = [...devices];
  const solarDevices = [...dummyDevices];
  
  // Filtrar dispositivos por plantId si se especifica
  if (plantId) {
    legacyDevices = legacyDevices.filter(device => device.plantId === plantId);
    // Nota: dummyDevices usa 'plantId' en lugar de 'deviceId'
    // Aquí mapeamos a un ID de planta simulado para ejemplo
    const mockPlantId = (plantId % 5) + 1; // Mapear a un valor de 1-5
    const filteredSolarDevices = solarDevices.filter(device => device.plantId === mockPlantId);
    
    // Convertir ambos conjuntos de datos al formato unificado
    const unifiedLegacyDevices = legacyDevices.map(convertFromLegacyFormat);
    const unifiedSolarDevices = filteredSolarDevices.map(convertFromSolarFormat);
    
    // Combinar y devolver
    return [...unifiedLegacyDevices, ...unifiedSolarDevices];
  }
  
  // Si no se especifica plantId, convertir y devolver todos los dispositivos
  const unifiedLegacyDevices = legacyDevices.map(convertFromLegacyFormat);
  const unifiedSolarDevices = solarDevices.map(convertFromSolarFormat);
  
  return [...unifiedLegacyDevices, ...unifiedSolarDevices];
};

/**
 * Obtiene un dispositivo por su ID
 */
export const getDeviceById = async (id: number): Promise<UnifiedDevice | undefined> => {
  await simulateLatency();
  
  // Buscar primero en devices.ts
  const legacyDevice = devices.find(device => device.id === id);
  if (legacyDevice) {
    return convertFromLegacyFormat(legacyDevice);
  }
  
  // Si no se encuentra, buscar en dummyDevices
  const solarDevice = dummyDevices.find(device => device.id === `device-${id}`);
  if (solarDevice) {
    return convertFromSolarFormat(solarDevice);
  }
  
  // Si no se encuentra en ninguna fuente, devolver undefined
  return undefined;
};

/**
 * Obtiene dispositivos por estado, opcionalmente filtrados por planta
 */
export const getDevicesByStatus = async (
  status: string,
  plantId?: number
): Promise<UnifiedDevice[]> => {
  await simulateLatency();
  
  // Obtener todos los dispositivos
  const allDevices = await getAllDevices(plantId);
  
  // Filtrar por estado
  return allDevices.filter(device => 
    device.status.toLowerCase() === status.toLowerCase()
  );
};

/**
 * Obtiene dispositivos por tipo, opcionalmente filtrados por planta
 */
export const getDevicesByType = async (
  type: string,
  plantId?: number
): Promise<UnifiedDevice[]> => {
  await simulateLatency();
  
  // Obtener todos los dispositivos
  const allDevices = await getAllDevices(plantId);
  
  // Filtrar por tipo
  return allDevices.filter(device => 
    device.type.toLowerCase() === type.toLowerCase()
  );
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
  
  // Obtener todos los dispositivos para la planta
  const allDevices = await getAllDevices(plantId);
  
  // Calcular estadísticas
  return {
    total: allDevices.length,
    online: allDevices.filter(d => d.status.toLowerCase() === 'activo').length,
    warning: allDevices.filter(d => d.status.toLowerCase() === 'advertencia').length,
    error: allDevices.filter(d => d.status.toLowerCase() === 'falla').length,
    maintenance: allDevices.filter(d => d.status.toLowerCase() === 'mantenimiento').length
  };
};

/**
 * Obtiene las últimas lecturas para un dispositivo específico
 */
export const getLatestDeviceReadings = async (deviceId: number): Promise<any> => {
  await simulateLatency();
  
  // Obtener el dispositivo
  const device = await getDeviceById(deviceId);
  
  // Si no existe o no tiene lecturas, devolver un objeto vacío
  if (!device || !device.readings || device.readings.length === 0) {
    return {};
  }
  
  // Ordenar las lecturas por timestamp (más recientes primero) y devolver la primera
  const sortedReadings = [...device.readings].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );
  
  return sortedReadings[0];
};

/**
 * Obtiene dispositivos que requieren mantenimiento (con advertencias o errores)
 */
export const getDevicesNeedingMaintenance = async (plantId?: number): Promise<UnifiedDevice[]> => {
  await simulateLatency();
  
  // Obtener todos los dispositivos
  const allDevices = await getAllDevices(plantId);
  
  // Filtrar dispositivos con estados que requieren atención
  return allDevices.filter(device => 
    device.status.toLowerCase() === 'advertencia' ||
    device.status.toLowerCase() === 'falla'
  );
};