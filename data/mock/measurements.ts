// src/data/mock/measurements.ts
import { SmartLoggerMeasurement } from '@/types/measurementTypes';

// Función para generar fecha/hora actual menos minutos específicos
const getTimeAgo = (minutesAgo: number): string => {
  const date = new Date();
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
};

export const measurements: SmartLoggerMeasurement[] = [
  // Mediciones para SmartLogger de Parque San Juan (ID: 1)
  {
    id: 1,
    deviceId: 1, // SmartLogger ID 1
    measurementDate: getTimeAgo(5), // 5 minutos atrás
    
    // Campos generales
    activePower: 4250.5, // kW
    energyYieldToday: 28.7, // kWh
    totalEnergyYield: 5621.4, // kWh
    reducedCO2Emission: 2808.5, // kg
    revenue: 842.5, // USD
    
    // Configuración con power meter
    reactivePower: 210.3, // kVAr
    loadPower: 3980.2, // kW
    gridTiedActivePower: 270.3, // kW
    gridTiedReactivePower: 35.6, // kVAr
    dailyConsumption: 25.4, // kWh
    dailyFeedInToGrid: 3.3, // kWh
    dailySupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 85, // % de señal
    systemTime: getTimeAgo(5), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 42.5, // °C
  },
  {
    id: 2,
    deviceId: 1, // SmartLogger ID 1
    measurementDate: getTimeAgo(10), // 10 minutos atrás
    
    // Campos generales
    activePower: 4210.2, // kW
    energyYieldToday: 28.2, // kWh
    totalEnergyYield: 5620.9, // kWh
    reducedCO2Emission: 2808.2, // kg
    revenue: 842.1, // USD
    
    // Configuración con power meter
    reactivePower: 208.4, // kVAr
    loadPower: 3950.8, // kW
    gridTiedActivePower: 259.4, // kW
    gridTiedReactivePower: 32.8, // kVAr
    dailyConsumption: 25.0, // kWh
    dailyFeedInToGrid: 3.2, // kWh
    dailySupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 83, // % de señal
    systemTime: getTimeAgo(10), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 42.2, // °C
  },
  
  // Mediciones para SmartLogger de Parque La Rioja (ID: 5)
  {
    id: 3,
    deviceId: 5, // SmartLogger ID 5
    measurementDate: getTimeAgo(3), // 3 minutos atrás
    
    // Campos generales
    activePower: 2980.3, // kW
    energyYieldToday: 18.5, // kWh
    totalEnergyYield: 3210.7, // kWh
    reducedCO2Emission: 1605.3, // kg
    revenue: 481.6, // USD
    
    // Configuración con power meter
    reactivePower: 145.6, // kVAr
    loadPower: 2870.1, // kW
    gridTiedActivePower: 110.2, // kW
    gridTiedReactivePower: 22.3, // kVAr
    dailyConsumption: 16.8, // kWh
    dailyFeedInToGrid: 1.7, // kWh
    dailySupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 92, // % de señal
    systemTime: getTimeAgo(3), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 41.3, // °C
  },
  
  // Mediciones para SmartLogger de Parque Mendoza Norte (ID: 8)
  {
    id: 4,
    deviceId: 8, // SmartLogger ID 8
    measurementDate: getTimeAgo(7), // 7 minutos atrás
    
    // Campos generales
    activePower: 2350.8, // kW
    energyYieldToday: 14.2, // kWh
    totalEnergyYield: 2805.6, // kWh
    reducedCO2Emission: 1402.8, // kg
    revenue: 420.8, // USD
    
    // Configuración con batería (sin power meter)
    batteryActivePower: 120.5, // kW
    batteryReactivePower: 25.3, // kVAr
    todaysPowerSupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 78, // % de señal
    systemTime: getTimeAgo(7), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 39.8, // °C
  },
  
  // Mediciones para SmartLogger de Parque Mendoza Sur (ID: 11)
  {
    id: 5,
    deviceId: 11, // SmartLogger ID 11
    measurementDate: getTimeAgo(8), // 8 minutos atrás
    
    // Campos generales
    activePower: 1280.2, // kW
    energyYieldToday: 7.8, // kWh
    totalEnergyYield: 420.5, // kWh
    reducedCO2Emission: 210.3, // kg
    revenue: 63.1, // USD
    
    // Configuración con power meter
    reactivePower: 65.4, // kVAr
    loadPower: 1220.5, // kW
    gridTiedActivePower: 59.7, // kW
    gridTiedReactivePower: 12.1, // kVAr
    dailyConsumption: 6.9, // kWh
    dailyFeedInToGrid: 0.9, // kWh
    dailySupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 89, // % de señal
    systemTime: getTimeAgo(8), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 38.2, // °C
  },
  
  // Mediciones para SmartLogger de Parque Neuquén (ID: 13)
  {
    id: 6,
    deviceId: 13, // SmartLogger ID 13
    measurementDate: getTimeAgo(4), // 4 minutos atrás
    
    // Campos generales
    activePower: 3680.7, // kW
    energyYieldToday: 22.3, // kWh
    totalEnergyYield: 4210.8, // kWh
    reducedCO2Emission: 2105.4, // kg
    revenue: 631.6, // USD
    
    // Configuración con power meter
    reactivePower: 182.4, // kVAr
    loadPower: 3520.3, // kW
    gridTiedActivePower: 160.4, // kW
    gridTiedReactivePower: 32.2, // kVAr
    dailyConsumption: 20.1, // kWh
    dailyFeedInToGrid: 2.2, // kWh
    dailySupplyFromGrid: 0.0, // kWh
    
    // Campos adicionales de diagnóstico
    simSignalStrength: 94, // % de señal
    systemTime: getTimeAgo(4), // Misma que fecha de medición
    communicationStatus: 'Normal',
    gridSchedulingMode: 'Automático',
    gridSchedulingValue: 100.0, // %
    deviceTemperature: 40.7, // °C
  }
];