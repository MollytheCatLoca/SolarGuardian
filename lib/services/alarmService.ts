// lib/services/alarmService.ts
import { alarms } from '@/data/mock/alarms';
import { devices } from '@/data/mock/devices';
import { Alarm } from '@/types/alarmTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 700));

/**
 * Obtiene todas las alarmas
 */
export const getAllAlarms = async (plantId?: number): Promise<Alarm[]> => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo todas las alarmas para plantId: ${plantId || 'todas'}`);
  
  let allAlarms = [...alarms];
  
  // Si se proporciona un ID de planta, filtrar las alarmas de esa planta
  if (plantId) {
    allAlarms = allAlarms.filter(alarm => alarm.plantId === plantId);
    console.log(`[AlarmService] Encontradas ${allAlarms.length} alarmas para la PLANTA ID: ${plantId}`);
  } else {
    console.log(`[AlarmService] Devolviendo todas las alarmas (${allAlarms.length})`);
  }
  
  return allAlarms;
};

/**
 * Obtiene alarmas filtradas por estado
 */
export const getAlarmsByStatus = async (
  status: string,
  plantId?: number
): Promise<Alarm[]> => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo alarmas con estado ${status} para plantId: ${plantId || 'todas'}`);
  
  // Normalizar estado para comparación
  const normalizedStatus = status.toLowerCase();
  
  // Primero obtenemos todas las alarmas para la planta especificada
  const allPlantAlarms = await getAllAlarms(plantId);
  
  // Luego filtramos por estado
  const filteredAlarms = allPlantAlarms.filter(
    alarm => alarm.status.toLowerCase() === normalizedStatus
  );
  
  console.log(`[AlarmService] Alarmas con estado ${status} para PLANTA ID ${plantId || 'todas'}: ${filteredAlarms.length}`);
  
  return filteredAlarms;
};

/**
 * Obtiene alarmas por nivel de severidad
 */
export const getAlarmsByLevel = async (
  level: string,
  plantId?: number
): Promise<Alarm[]> => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo alarmas con nivel ${level} para plantId: ${plantId || 'todas'}`);
  
  // Normalizar nivel para comparación
  const normalizedLevel = level.toLowerCase();
  
  // Primero obtenemos todas las alarmas para la planta especificada
  const allPlantAlarms = await getAllAlarms(plantId);
  
  // Luego filtramos por nivel
  const filteredAlarms = allPlantAlarms.filter(
    alarm => alarm.level.toLowerCase() === normalizedLevel
  );
  
  console.log(`[AlarmService] Alarmas con nivel ${level} para PLANTA ID ${plantId || 'todas'}: ${filteredAlarms.length}`);
  
  return filteredAlarms;
};

/**
 * Obtiene una alarma por su ID
 */
export const getAlarmById = async (
  alarmId: number,
  plantId?: number
): Promise<Alarm | undefined> => {
  await simulateLatency();
  console.log(`[AlarmService] Buscando alarma con ID ${alarmId} para plantId: ${plantId || 'todas'}`);
  
  // Si se proporciona un plantId, primero obtenemos las alarmas de esa planta
  if (plantId) {
    const plantAlarms = await getAllAlarms(plantId);
    const alarm = plantAlarms.find(alarm => alarm.id === alarmId);
    
    if (alarm) {
      console.log(`[AlarmService] Encontrada alarma ${alarmId} para PLANTA ID ${plantId}`);
    } else {
      console.log(`[AlarmService] No se encontró la alarma ${alarmId} para PLANTA ID ${plantId}`);
    }
    
    return alarm;
  }
  
  // Si no se proporciona un plantId, buscamos en todas las alarmas
  const allAlarms = await getAllAlarms();
  const alarm = allAlarms.find(alarm => alarm.id === alarmId);
  
  if (alarm) {
    console.log(`[AlarmService] Encontrada alarma ${alarmId}`);
  } else {
    console.log(`[AlarmService] No se encontró la alarma ${alarmId}`);
  }
  
  return alarm;
};

/**
 * Reconoce una alarma (cambia su estado a 'acknowledged')
 */
export const acknowledgeAlarm = async (
  alarmId: number,
  userId: string,
  plantId?: number
): Promise<Alarm | undefined> => {
  await simulateLatency();
  console.log(`[AlarmService] Reconociendo alarma ${alarmId} (Usuario: ${userId})`);
  
  // Buscar la alarma primero para ver si existe y si pertenece a la planta correcta
  const alarm = await getAlarmById(alarmId, plantId);
  if (!alarm) {
    console.log(`[AlarmService] ERROR: No se encontró la alarma ${alarmId} para reconocer`);
    return undefined;
  }
  
  // En una implementación real, aquí actualizarías la alarma en la base de datos
  const updatedAlarm: Alarm = {
    ...alarm,
    status: 'Reconocida',
    acknowledgedBy: userId,
    acknowledgedAt: new Date().toISOString()
  };
  
  console.log(`[AlarmService] Alarma ${alarmId} reconocida exitosamente`);
  
  return updatedAlarm;
};

/**
 * Resuelve una alarma (cambia su estado a 'resolved')
 */
export const resolveAlarm = async (
  alarmId: number,
  userId: string,
  resolution?: string,
  plantId?: number
): Promise<Alarm | undefined> => {
  await simulateLatency();
  console.log(`[AlarmService] Resolviendo alarma ${alarmId} (Usuario: ${userId})`);
  
  // Buscar la alarma primero para ver si existe y si pertenece a la planta correcta
  const alarm = await getAlarmById(alarmId, plantId);
  if (!alarm) {
    console.log(`[AlarmService] ERROR: No se encontró la alarma ${alarmId} para resolver`);
    return undefined;
  }
  
  // En una implementación real, aquí actualizarías la alarma en la base de datos
  const updatedAlarm: Alarm = {
    ...alarm,
    status: 'Resuelta',
    resolvedBy: userId,
    resolutionDate: new Date().toISOString(),
    resolution: resolution
  };
  
  console.log(`[AlarmService] Alarma ${alarmId} resuelta exitosamente`);
  
  return updatedAlarm;
};

/**
 * Obtiene estadísticas de alarmas para un parque solar
 */
export const getAlarmStatistics = async (plantId?: number) => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo estadísticas de alarmas para plantId: ${plantId || 'todas'}`);
  
  // Obtener todas las alarmas filtradas por planta si se proporciona plantId
  const allAlarms = await getAllAlarms(plantId);
  
  // Filtrar alarmas activas
  const activeAlarms = allAlarms.filter(alarm => alarm.status === 'Activa');
  
  // Contar alarmas por nivel
  const byLevel: Record<string, number> = {
    Crítica: 0,
    Mayor: 0,
    Menor: 0,
    Advertencia: 0
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
  
  const result = {
    total: allAlarms.length,
    active: activeAlarms.length,
    byLevel,
    recentAlarms
  };
  
  console.log(`[AlarmService] Estadísticas para PLANTA ID ${plantId || 'todas'}:`, {
    total: result.total,
    active: result.active,
    byLevel: result.byLevel
  });
  
  return result;
};

/**
 * Versión alternativa para compatibilidad - devuelve mismo resultado que getAlarmStatistics
 */
export const getAlarmStatsByPlantId = async (plantId: number) => {
  return getAlarmStatistics(plantId);
};

/**
 * Obtiene alarmas recientes en los últimos días
 */
export const getRecentAlarms = async (
  days: number = 3,
  plantId?: number
): Promise<Alarm[]> => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo alarmas recientes (${days} días) para plantId: ${plantId || 'todas'}`);
  
  // Obtener todas las alarmas
  const allAlarms = await getAllAlarms(plantId);
  
  // Calcular la fecha límite
  const limitDate = new Date();
  limitDate.setDate(limitDate.getDate() - days);
  
  // Filtrar alarmas más recientes que la fecha límite
  const recentAlarms = allAlarms.filter(alarm => {
    const alarmDate = new Date(alarm.alarmDate);
    return alarmDate >= limitDate;
  });
  
  // Ordenar por fecha (más recientes primero)
  recentAlarms.sort((a, b) => 
    new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
  );
  
  console.log(`[AlarmService] Alarmas recientes (${days} días) para PLANTA ID ${plantId || 'todas'}: ${recentAlarms.length}`);
  
  return recentAlarms;
};

/**
 * Obtiene el recuento de alarmas por dispositivo
 */
export const getAlarmCountByDevice = async (plantId?: number): Promise<Record<number, number>> => {
  await simulateLatency();
  console.log(`[AlarmService] Obteniendo recuento de alarmas por dispositivo para plantId: ${plantId || 'todas'}`);
  
  // Obtener todas las alarmas
  const allAlarms = await getAllAlarms(plantId);
  
  // Contabilizar alarmas por dispositivo
  const countByDevice: Record<number, number> = {};
  
  allAlarms.forEach(alarm => {
    const deviceId = alarm.deviceId;
    if (countByDevice[deviceId]) {
      countByDevice[deviceId]++;
    } else {
      countByDevice[deviceId] = 1;
    }
  });
  
  console.log(`[AlarmService] Recuento de alarmas por dispositivo para PLANTA ID ${plantId || 'todas'} completado`);
  
  return countByDevice;
};