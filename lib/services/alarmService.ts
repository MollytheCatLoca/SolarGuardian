// src/lib/services/alarmService.ts
import { alarms } from '@/data/mock/alarms';
import { devices } from '@/data/mock/devices';
import { Alarm, AlarmLevel, AlarmStatus } from '@/types/alarmTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todas las alarmas
 */
export const getAllAlarms = async (limit?: number): Promise<Alarm[]> => {
  await simulateLatency();
  
  const result = [...alarms].sort((a, b) => 
    new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
  );
  
  return limit ? result.slice(0, limit) : result;
};

/**
 * Obtiene alarmas por estado
 */
export const getAlarmsByStatus = async (status: AlarmStatus): Promise<Alarm[]> => {
  await simulateLatency();
  
  return alarms
    .filter(alarm => alarm.status === status)
    .sort((a, b) => 
      new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
    );
};

/**
 * Obtiene alarmas por nivel
 */
export const getAlarmsByLevel = async (level: AlarmLevel): Promise<Alarm[]> => {
  await simulateLatency();
  
  return alarms
    .filter(alarm => alarm.level === level)
    .sort((a, b) => 
      new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
    );
};

/**
 * Obtiene alarmas por dispositivo
 */
export const getAlarmsByDeviceId = async (deviceId: number): Promise<Alarm[]> => {
  await simulateLatency();
  
  return alarms
    .filter(alarm => alarm.deviceId === deviceId)
    .sort((a, b) => 
      new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
    );
};

/**
 * Obtiene alarmas por planta
 */
export const getAlarmsByPlantId = async (plantId: number): Promise<Alarm[]> => {
  await simulateLatency();
  
  // Obtenemos los IDs de los dispositivos de la planta
  const plantDeviceIds = devices
    .filter(device => device.plantId === plantId)
    .map(device => device.id);
  
  // Filtramos las alarmas por esos dispositivos
  return alarms
    .filter(alarm => plantDeviceIds.includes(alarm.deviceId))
    .sort((a, b) => 
      new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
    );
};

/**
 * Obtiene una alarma por su ID
 */
export const getAlarmById = async (id: number): Promise<Alarm | undefined> => {
  await simulateLatency();
  return alarms.find(alarm => alarm.id === id);
};

/**
 * Crea una nueva alarma
 */
export const createAlarm = async (alarmData: Omit<Alarm, 'id'>): Promise<Alarm> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID
  const newId = Math.max(...alarms.map(a => a.id)) + 1;
  const newAlarm: Alarm = {
    id: newId,
    ...alarmData
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  
  return newAlarm;
};

/**
 * Actualiza una alarma existente
 */
export const updateAlarm = async (id: number, alarmData: Partial<Alarm>): Promise<Alarm | undefined> => {
  await simulateLatency();
  
  const alarmIndex = alarms.findIndex(alarm => alarm.id === id);
  if (alarmIndex === -1) return undefined;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  const updatedAlarm: Alarm = {
    ...alarms[alarmIndex],
    ...alarmData
  };
  
  return updatedAlarm;
};

/**
 * Marca una alarma como resuelta
 */
export const resolveAlarm = async (id: number): Promise<Alarm | undefined> => {
  await simulateLatency();
  
  const alarmIndex = alarms.findIndex(alarm => alarm.id === id);
  if (alarmIndex === -1) return undefined;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  const updatedAlarm: Alarm = {
    ...alarms[alarmIndex],
    status: 'Resuelta',
    resolutionDate: new Date().toISOString()
  };
  
  return updatedAlarm;
};

/**
 * Obtiene estadísticas de alarmas
 */
export const getAlarmStatistics = async (plantId?: number): Promise<{
  total: number;
  active: number;
  byLevel: Record<AlarmLevel, number>;
  recentAlarms: Alarm[];
}> => {
  await simulateLatency();
  
  // Obtener alarmas filtradas por planta si se proporciona un ID
  const filteredAlarms = plantId 
    ? await getAlarmsByPlantId(plantId)
    : alarms;
  
  // Inicializamos contadores
  const byLevel: Record<AlarmLevel, number> = {
    'Advertencia': 0,
    'Menor': 0,
    'Mayor': 0,
    'Crítica': 0
  };
  
  // Contamos por nivel
  filteredAlarms.forEach(alarm => {
    byLevel[alarm.level]++;
  });
  
  // Contamos alarmas activas
  const activeAlarms = filteredAlarms.filter(alarm => alarm.status === 'Activa');
  
  // Obtenemos las alarmas más recientes
  const recentAlarms = [...filteredAlarms]
    .sort((a, b) => new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime())
    .slice(0, 5);
  
  return {
    total: filteredAlarms.length,
    active: activeAlarms.length,
    byLevel,
    recentAlarms
  };
};