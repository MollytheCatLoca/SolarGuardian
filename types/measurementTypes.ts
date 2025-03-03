// src/types/measurementTypes.ts

export type CommunicationStatus = 'Normal' | 'Interrumpida';

export interface SmartLoggerMeasurement {
  id: number;
  deviceId: number;
  measurementDate: string; // ISO format date-time
  
  // Campos generales (todas las configuraciones)
  activePower: number;
  energyYieldToday: number;
  totalEnergyYield: number;
  reducedCO2Emission: number;
  revenue: number;
  
  // Configuración con power meter (sin batería)
  reactivePower?: number;
  loadPower?: number;
  gridTiedActivePower?: number;
  gridTiedReactivePower?: number;
  dailyConsumption?: number;
  dailyFeedInToGrid?: number;
  dailySupplyFromGrid?: number;
  
  // Configuración con batería (sin power meter)
  batteryActivePower?: number;
  batteryReactivePower?: number;
  todaysPowerSupplyFromGrid?: number;
  
  // Campos adicionales y de diagnóstico
  simSignalStrength?: number;
  systemTime?: string; // ISO format date-time
  communicationStatus?: CommunicationStatus;
  gridSchedulingMode?: string;
  gridSchedulingValue?: number;
  deviceTemperature?: number;
}