// src/lib/services/measurementService.ts
import { measurements } from '@/data/mock/measurements';
import { SmartLoggerMeasurement } from '@/types/measurementTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todas las mediciones
 */
export const getAllMeasurements = async (limit?: number): Promise<SmartLoggerMeasurement[]> => {
  await simulateLatency();
  const result = [...measurements].sort((a, b) => 
    new Date(b.measurementDate).getTime() - new Date(a.measurementDate).getTime()
  );
  
  return limit ? result.slice(0, limit) : result;
};

/**
 * Obtiene mediciones por dispositivo
 */
export const getMeasurementsByDeviceId = async (
  deviceId: number, 
  limit?: number
): Promise<SmartLoggerMeasurement[]> => {
  await simulateLatency();
  
  const deviceMeasurements = measurements
    .filter(measurement => measurement.deviceId === deviceId)
    .sort((a, b) => 
      new Date(b.measurementDate).getTime() - new Date(a.measurementDate).getTime()
    );
  
  return limit ? deviceMeasurements.slice(0, limit) : deviceMeasurements;
};

/**
 * Obtiene la última medición de un dispositivo
 */
export const getLatestMeasurementByDeviceId = async (deviceId: number): Promise<SmartLoggerMeasurement | undefined> => {
  await simulateLatency();
  
  const deviceMeasurements = measurements
    .filter(measurement => measurement.deviceId === deviceId)
    .sort((a, b) => 
      new Date(b.measurementDate).getTime() - new Date(a.measurementDate).getTime()
    );
  
  return deviceMeasurements.length > 0 ? deviceMeasurements[0] : undefined;
};

/**
 * Obtiene mediciones dentro de un rango de fechas
 */
export const getMeasurementsByDateRange = async (
  deviceId: number,
  startDate: string, 
  endDate: string
): Promise<SmartLoggerMeasurement[]> => {
  await simulateLatency();
  
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  
  return measurements
    .filter(measurement => {
      const measurementTime = new Date(measurement.measurementDate).getTime();
      return (
        measurement.deviceId === deviceId && 
        measurementTime >= start && 
        measurementTime <= end
      );
    })
    .sort((a, b) => 
      new Date(a.measurementDate).getTime() - new Date(b.measurementDate).getTime()
    );
};

/**
 * Registra una nueva medición
 */
export const createMeasurement = async (
  measurementData: Omit<SmartLoggerMeasurement, 'id'>
): Promise<SmartLoggerMeasurement> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID
  const newId = Math.max(...measurements.map(m => m.id)) + 1;
  const newMeasurement: SmartLoggerMeasurement = {
    id: newId,
    ...measurementData
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  
  return newMeasurement;
};

/**
 * Calcula datos de generación agregados para un dispositivo
 */
export const getGenerationMetrics = async (deviceId: number): Promise<{
  currentPower: number;
  dailyEnergy: number;
  monthlyEnergy: number;
  totalEnergy: number;
  dailyTrend: number; // porcentaje de cambio respecto al día anterior
}> => {
  await simulateLatency();
  
  // Obtener última medición
  const latestMeasurement = await getLatestMeasurementByDeviceId(deviceId);
  
  if (!latestMeasurement) {
    return {
      currentPower: 0,
      dailyEnergy: 0,
      monthlyEnergy: 0,
      totalEnergy: 0,
      dailyTrend: 0
    };
  }
  
  // En un sistema real, calcularíamos la tendencia diaria comparando con datos históricos
  // Para el mock, usamos un valor aleatorio entre -5% y +5%
  const dailyTrend = (Math.random() * 10) - 5;
  
  return {
    currentPower: latestMeasurement.activePower,
    dailyEnergy: latestMeasurement.energyYieldToday,
    monthlyEnergy: latestMeasurement.energyYieldToday * 30, // Simulación simple
    totalEnergy: latestMeasurement.totalEnergyYield,
    dailyTrend
  };
};