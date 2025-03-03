// src/types/alarmTypes.ts

export type AlarmLevel = 'Advertencia' | 'Menor' | 'Mayor' | 'Crítica';
export type AlarmStatus = 'Activa' | 'Resuelta';

export interface Alarm {
  id: number;
  deviceId: number;
  alarmDate: string; // ISO format date-time
  level: AlarmLevel;
  description: string;
  status: AlarmStatus;
  resolutionDate?: string; // ISO format date-time
}