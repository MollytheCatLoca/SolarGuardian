// lib/services/measurementService.ts
import { dummyEnergyGeneration, dummyEnergyHistory, dummyDevices } from '@/lib/solar/dummyData';
import { plants } from '@/data/mock/plants';
import { SmartLoggerMeasurement } from '@/types/measurementTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene métricas de generación para un parque solar específico
 */
export const getGenerationMetricsByPlantId = async (plantId: number) => {
  await simulateLatency();
  
  // Buscar la planta por ID
  const plant = plants.find(p => p.id === plantId);
  if (!plant) {
    throw new Error(`No se encontró la planta con ID ${plantId}`);
  }
  
  // Calcular métricas basadas en la capacidad instalada
  // En un sistema real, estos datos vendrían de sensores y mediciones
  const plantCapacity = plant.totalCapacity; // MW
  
  // Factor aleatorio para simular diferentes condiciones
  const efficiencyFactor = 0.75 + Math.random() * 0.2; // Entre 75% y 95%
  const currentPower = plantCapacity * efficiencyFactor;
  
  // Simular la generación diaria (aprox. 8-10 horas a potencia media)
  const hoursOfGeneration = 9;
  const dailyEnergy = Math.round(currentPower * hoursOfGeneration * 0.8); // MWh
  
  // Simular generación mensual (aprox. 30 días)
  const daysInMonth = 30;
  const variationFactor = 0.9 + Math.random() * 0.2; // Entre 90% y 110%
  const monthlyEnergy = Math.round(dailyEnergy * daysInMonth * variationFactor);
  
  // Simular generación total acumulada (aprox. desde instalación)
  // Asumimos instalación hace aproximadamente 1-2 años
  const monthsSinceInstallation = Math.floor(12 + Math.random() * 12);
  const totalEnergyVariation = 0.85 + Math.random() * 0.3; // Entre 85% y 115%
  const totalEnergy = Math.round(monthlyEnergy * monthsSinceInstallation * totalEnergyVariation);
  
  // Simular tendencia diaria (comparación con día anterior)
  const dailyTrend = Math.round((Math.random() * 10) - 5); // Entre -5% y +5%
  
  return {
    currentPower,
    dailyEnergy,
    monthlyEnergy,
    totalEnergy,
    dailyTrend
  };
};

/**
 * Obtiene datos históricos de generación para un parque solar
 */
export const getEnergyHistoryByPlantId = async (plantId: number, timeFrame: 'hourly' | 'daily' | 'monthly' = 'hourly') => {
  await simulateLatency();
  
  // En un sistema real, aquí se consultaría la base de datos para obtener 
  // los datos históricos filtrados por la planta específica
  
  // Por ahora, usamos los datos dummy pero simulamos una variación según el ID
  const variationFactor = (plantId % 5) * 0.1 + 0.8; // Entre 0.8 y 1.2
  
  // Aplicar el factor de variación a los datos históricos
  if (timeFrame === 'hourly') {
    return dummyEnergyHistory.hourly.map(item => ({
      ...item,
      power: Number((item.power * variationFactor).toFixed(1))
    }));
  } else if (timeFrame === 'daily') {
    return dummyEnergyHistory.daily.map(item => ({
      ...item,
      energy: Number((item.energy * variationFactor).toFixed(1))
    }));
  } else {
    return dummyEnergyHistory.monthly.map(item => ({
      ...item,
      energy: Number((item.energy * variationFactor).toFixed(1))
    }));
  }
};

/**
 * Obtiene la última medición para todos los dispositivos de un parque solar
 */
export const getLatestMeasurementsByPlantId = async (plantId: number) => {
  await simulateLatency();
  
  // Obtener los dispositivos de la planta
  const plantDevices = dummyDevices.filter(device => device.plantId === plantId);
  
  // En un sistema real, aquí consultaríamos las últimas mediciones
  // Por ahora, generamos datos simulados para cada dispositivo
  const deviceMeasurements = plantDevices.map(device => {
    // Crear una medición simulada según el tipo de dispositivo
    if (device.type === 'inverter') {
      return {
        deviceId: device.id,
        deviceName: device.name,
        deviceType: device.type,
        timestamp: new Date().toISOString(),
        metrics: {
          activePower: Math.round(10 + Math.random() * 95), // kW
          outputVoltage: Math.round(380 + Math.random() * 40), // V
          temperature: Math.round(35 + Math.random() * 30), // °C
          efficiency: Math.round(95 + Math.random() * 3 * 10) / 10, // %
          status: device.status
        }
      };
    } else if (device.type === 'battery') {
      return {
        deviceId: device.id,
        deviceName: device.name,
        deviceType: device.type,
        timestamp: new Date().toISOString(),
        metrics: {
          stateOfCharge: Math.round(50 + Math.random() * 50), // %
          temperature: Math.round(25 + Math.random() * 15), // °C
          power: Math.round(Math.random() * 40), // kW
          status: device.status
        }
      };
    } else {
      return {
        deviceId: device.id,
        deviceName: device.name,
        deviceType: device.type,
        timestamp: new Date().toISOString(),
        metrics: {
          status: device.status
        }
      };
    }
  });
  
  return deviceMeasurements;
};