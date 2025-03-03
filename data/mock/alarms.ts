// src/data/mock/alarms.ts
import { Alarm } from '@/types/alarmTypes';

// Función para generar fecha/hora
const getDate = (daysAgo: number, hoursAgo: number = 0, minutesAgo: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(date.getHours() - hoursAgo);
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
};

export const alarms: Alarm[] = [
  // Alarmas para dispositivos del Parque Solar San Juan
  {
    id: 1,
    deviceId: 2, // Inversor ID 2
    alarmDate: getDate(1, 4, 23), // 1 día, 4 horas, 23 minutos atrás
    level: 'Menor',
    description: 'Temperatura del módulo elevada',
    status: 'Resuelta',
    resolutionDate: getDate(1, 2, 15) // 1 día, 2 horas, 15 minutos atrás
  },
  {
    id: 2,
    deviceId: 3, // Inversor ID 3
    alarmDate: getDate(0, 6, 45), // 6 horas, 45 minutos atrás
    level: 'Advertencia',
    description: 'Rendimiento por debajo del umbral esperado',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar La Rioja
  {
    id: 3,
    deviceId: 6, // Inversor ID 6 (con falla)
    alarmDate: getDate(2, 12, 10), // 2 días, 12 horas, 10 minutos atrás
    level: 'Crítica',
    description: 'Fallo crítico en tarjeta de control',
    status: 'Resuelta',
    resolutionDate: getDate(0, 18, 22) // 18 horas, 22 minutos atrás
  },
  {
    id: 4,
    deviceId: 5, // SmartLogger ID 5
    alarmDate: getDate(0, 1, 35), // 1 hora, 35 minutos atrás
    level: 'Advertencia',
    description: 'Intensidad de señal reducida',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar Mendoza Norte
  {
    id: 5,
    deviceId: 9, // Inversor ID 9
    alarmDate: getDate(0, 8, 15), // 8 horas, 15 minutos atrás
    level: 'Menor',
    description: 'Fluctuación en tensión de entrada',
    status: 'Activa'
  },
  {
    id: 6,
    deviceId: 10, // Batería ID 10
    alarmDate: getDate(3, 9, 30), // 3 días, 9 horas, 30 minutos atrás
    level: 'Mayor',
    description: 'Temperatura elevada en batería',
    status: 'Resuelta',
    resolutionDate: getDate(3, 5, 45) // 3 días, 5 horas, 45 minutos atrás
  },
  
  // Alarmas para dispositivos del Parque Solar Mendoza Sur
  {
    id: 7,
    deviceId: 12, // Inversor ID 12 (inactivo)
    alarmDate: getDate(1, 14, 25), // 1 día, 14 horas, 25 minutos atrás
    level: 'Mayor',
    description: 'Fallo en módulo de comunicación',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar Neuquén
  {
    id: 8,
    deviceId: 14, // Inversor ID 14
    alarmDate: getDate(5, 11, 40), // 5 días, 11 horas, 40 minutos atrás
    level: 'Crítica',
    description: 'Desconexión de red eléctrica',
    status: 'Resuelta',
    resolutionDate: getDate(5, 8, 15) // 5 días, 8 horas, 15 minutos atrás
  },
  {
    id: 9,
    deviceId: 15, // Inversor ID 15
    alarmDate: getDate(0, 3, 10), // 3 horas, 10 minutos atrás
    level: 'Advertencia',
    description: 'Eficiencia por debajo del umbral',
    status: 'Activa'
  }
];