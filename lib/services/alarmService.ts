// lib/services/alarmService.ts
import { dummyAlerts, dummyDevices } from '@/lib/solar/dummyData';
import { Alarm } from '@/types/alarmTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todas las alarmas
 */
export const getAllAlarms = async (plantId?: number): Promise<Alarm[]> => {
  await simulateLatency();
  let alerts = [...dummyAlerts];
  
  // Si se proporciona un ID de planta, filtrar las alertas de esa planta
  if (plantId) {
    // Obtener IDs de dispositivos de la planta
    const plantDeviceIds = dummyDevices
      .filter(device => device.plantId === plantId)
      .map(device => device.id);
    alerts = alerts.filter(alert => plantDeviceIds.includes(alert.deviceId));
  }
  
  return alerts;
};

/**
 * Obtiene alarmas filtradas por estado
 */
export const getAlarmsByStatus = async (
  status: string,
  plantId?: number
): Promise<Alarm[]> => {
  await simulateLatency();
  let alerts = dummyAlerts.filter(alert => alert.status.toLowerCase() === status.toLowerCase());
  
  // Si se proporciona un ID de planta, filtrar las alertas de esa planta
  if (plantId) {
    // Obtener IDs de dispositivos de la planta
    const plantDeviceIds = dummyDevices
      .filter(device => device.plantId === plantId)
      .map(device => device.id);
    alerts = alerts.filter(alert => plantDeviceIds.includes(alert.deviceId));
  }
  
  return alerts;
};

/**
 * Obtiene alarmas por nivel de severidad
 */
export const getAlarmsByLevel = async (
  level: string,
  plantId?: number
): Promise<Alarm[]> => {
  await simulateLatency();
  let alerts = dummyAlerts.filter(alert => alert.level.toLowerCase() === level.toLowerCase());
  
  // Si se proporciona un ID de planta, filtrar las alertas de esa planta
  if (plantId) {
    // Obtener IDs de dispositivos de la planta
    const plantDeviceIds = dummyDevices
      .filter(device => device.plantId === plantId)
      .map(device => device.id);
    alerts = alerts.filter(alert => plantDeviceIds.includes(alert.deviceId));
  }
  
  return alerts;
};

/**
 * Obtiene una alarma por su ID
 */
export const getAlarmById = async (
  alarmId: number
): Promise<Alarm | undefined> => {
  await simulateLatency();
  return dummyAlerts.find(alert => alert.id === alarmId);
};

/**
 * Reconoce una alarma (cambia su estado a 'acknowledged')
 */
export const acknowledgeAlarm = async (
  alarmId: number,
  userId: string
): Promise<Alarm | undefined> => {
  await simulateLatency();
  const alertIndex = dummyAlerts.findIndex(alert => alert.id === alarmId);
  if (alertIndex === -1) return undefined;
  
  // En una implementación real, aquí actualizarías la alarma en la base de datos
  const updatedAlert: Alarm = {
    ...dummyAlerts[alertIndex],
    status: 'acknowledged',
    acknowledgedBy: userId,
    acknowledgedAt: new Date().toISOString()
  };
  
  return updatedAlert;
};

/**
 * Resuelve una alarma (cambia su estado a 'resolved')
 */
export const resolveAlarm = async (
  alarmId: number,
  userId: string,
  resolution?: string
): Promise<Alarm | undefined> => {
  await simulateLatency();
  const alertIndex = dummyAlerts.findIndex(alert => alert.id === alarmId);
  if (alertIndex === -1) return undefined;
  
  // En una implementación real, aquí actualizarías la alarma en la base de datos
  const updatedAlert: Alarm = {
    ...dummyAlerts[alertIndex],
    status: 'resolved',
    resolvedBy: userId,
    resolvedAt: new Date().toISOString(),
    resolution: resolution
  };
  
  return updatedAlert;
};

/**
 * Obtiene estadísticas de alarmas para un parque solar
 * Esta es la función que faltaba y causaba el error
 */
export const getAlarmStatistics = async (plantId?: number) => {
  await simulateLatency();
  
  // Obtener todas las alarmas filtradas por planta si se proporciona plantId
  const allAlarms = await getAllAlarms(plantId);
  
  // Filtrar alarmas activas
  const activeAlarms = allAlarms.filter(alarm => alarm.status === 'active');
  
  // Contar alarmas por nivel
  const byLevel: Record<string, number> = {
    critical: 0,
    high: 0,
    medium: 0,
    low: 0
  };
  
  allAlarms.forEach(alarm => {
    if (byLevel[alarm.level] !== undefined) {
      byLevel[alarm.level]++;
    }
  });
  
  // Obtener las alarmas más recientes
  const recentAlarms = [...allAlarms]
    .sort((a, b) => new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime())
    .slice(0, 5);
  
  return {
    total: allAlarms.length,
    active: activeAlarms.length,
    byLevel,
    recentAlarms
  };
};

/**
 * Versión alternativa para compatibilidad - devuelve mismo resultado que getAlarmStatistics
 */
export const getAlarmStatsByPlantId = async (plantId: number) => {
  return getAlarmStatistics(plantId);
};