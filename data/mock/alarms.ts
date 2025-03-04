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
  // Alarmas para dispositivos del Parque Solar San Juan (plantId: 1)
  {
    id: 1,
    plantId: 1, // Añadido plantId para filtrado
    deviceId: 2,
    deviceName: "Inversor 1", // Añadido nombre de dispositivo para mejor visualización
    deviceType: "Inversor",
    alarmDate: getDate(1, 4, 23),
    level: 'Menor',
    description: 'Temperatura del módulo elevada',
    status: 'Resuelta',
    resolutionDate: getDate(1, 2, 15),
    resolvedBy: "user-101",
    resolution: "Se ajustó ventilación y se limpió disipador de calor"
  },
  {
    id: 2,
    plantId: 1,
    deviceId: 3,
    deviceName: "Inversor 2",
    deviceType: "Inversor",
    alarmDate: getDate(0, 6, 45),
    level: 'Advertencia',
    description: 'Rendimiento por debajo del umbral esperado',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar La Rioja (plantId: 2)
  {
    id: 3,
    plantId: 2,
    deviceId: 6,
    deviceName: "Inversor Principal",
    deviceType: "Inversor",
    alarmDate: getDate(2, 12, 10),
    level: 'Crítica',
    description: 'Fallo crítico en tarjeta de control',
    status: 'Resuelta',
    resolutionDate: getDate(0, 18, 22),
    resolvedBy: "user-102",
    resolution: "Reemplazo de tarjeta de control"
  },
  {
    id: 4,
    plantId: 2,
    deviceId: 5,
    deviceName: "SmartLogger Central",
    deviceType: "SmartLogger",
    alarmDate: getDate(0, 1, 35),
    level: 'Advertencia',
    description: 'Intensidad de señal reducida',
    status: 'Activa'
  },
  {
    id: 10,
    plantId: 2,
    deviceId: 7,
    deviceName: "Inversor Secundario",
    deviceType: "Inversor",
    alarmDate: getDate(0, 2, 15),
    level: 'Mayor',
    description: 'Fallo en ventilador de refrigeración',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar Mendoza Norte (plantId: 3)
  {
    id: 5,
    plantId: 3,
    deviceId: 9,
    deviceName: "Inversor Zona Este",
    deviceType: "Inversor",
    alarmDate: getDate(0, 8, 15),
    level: 'Menor',
    description: 'Fluctuación en tensión de entrada',
    status: 'Activa'
  },
  {
    id: 6,
    plantId: 3,
    deviceId: 10,
    deviceName: "Banco de Baterías",
    deviceType: "Batería",
    alarmDate: getDate(3, 9, 30),
    level: 'Mayor',
    description: 'Temperatura elevada en batería',
    status: 'Resuelta',
    resolutionDate: getDate(3, 5, 45),
    resolvedBy: "user-103",
    resolution: "Ajuste del sistema de refrigeración de baterías"
  },
  
  // Alarmas para dispositivos del Parque Solar Mendoza Sur (plantId: 4)
  {
    id: 7,
    plantId: 4,
    deviceId: 12,
    deviceName: "Inversor Central",
    deviceType: "Inversor",
    alarmDate: getDate(1, 14, 25),
    level: 'Mayor',
    description: 'Fallo en módulo de comunicación',
    status: 'Activa'
  },
  {
    id: 11,
    plantId: 4,
    deviceId: 13,
    deviceName: "SmartLogger Principal",
    deviceType: "SmartLogger",
    alarmDate: getDate(0, 5, 40),
    level: 'Menor',
    description: 'Error de sincronización de tiempo',
    status: 'Activa'
  },
  
  // Alarmas para dispositivos del Parque Solar Neuquén (plantId: 5)
  {
    id: 8,
    plantId: 5,
    deviceId: 14,
    deviceName: "Inversor Sección A",
    deviceType: "Inversor",
    alarmDate: getDate(5, 11, 40),
    level: 'Crítica',
    description: 'Desconexión de red eléctrica',
    status: 'Resuelta',
    resolutionDate: getDate(5, 8, 15),
    resolvedBy: "user-104",
    resolution: "Restauración de conexión a red tras reparación de línea"
  },
  {
    id: 9,
    plantId: 5,
    deviceId: 15,
    deviceName: "Inversor Sección B",
    deviceType: "Inversor",
    alarmDate: getDate(0, 3, 10),
    level: 'Advertencia',
    description: 'Eficiencia por debajo del umbral',
    status: 'Activa'
  },
  {
    id: 12,
    plantId: 5,
    deviceId: 16,
    deviceName: "Medidor de Energía",
    deviceType: "Medidor",
    alarmDate: getDate(0, 9, 25),
    level: 'Menor',
    description: 'Precisión de medida fuera de rango nominal',
    status: 'Activa'
  }
];