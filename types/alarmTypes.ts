// src/types/alarmTypes.ts

export type AlarmLevel = 'Crítica' | 'Mayor' | 'Menor' | 'Advertencia';
export type AlarmStatus = 'Activa' | 'Reconocida' | 'Resuelta';

export interface Alarm {
  id: number;
  plantId: number;             // ID de la planta a la que pertenece el dispositivo
  deviceId: number;            // ID del dispositivo que genera la alarma
  deviceName?: string;         // Nombre del dispositivo (opcional)
  deviceType?: string;         // Tipo de dispositivo (opcional)
  alarmDate: string;           // Fecha y hora de la alarma (ISO format)
  level: AlarmLevel;           // Nivel de severidad
  description: string;         // Descripción de la alarma
  status: AlarmStatus;         // Estado actual de la alarma
  
  // Campos opcionales para alarmas reconocidas
  acknowledgedBy?: string;     // Usuario que reconoció la alarma
  acknowledgedAt?: string;     // Fecha de reconocimiento (ISO format)
  
  // Campos opcionales para alarmas resueltas
  resolutionDate?: string;     // Fecha de resolución (ISO format)
  resolvedBy?: string;         // Usuario que resolvió la alarma
  resolution?: string;         // Descripción de la resolución
}