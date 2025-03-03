// src/data/mock/notifications.ts
import { Notification } from '@/types/notificationTypes';

// Función para generar fecha/hora
const getDate = (daysAgo: number, hoursAgo: number = 0, minutesAgo: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(date.getHours() - hoursAgo);
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
};

export const notifications: Notification[] = [
  // Notificaciones para alarmas
  {
    id: 1,
    userId: 4, // Laura González (Técnico Energía Solar)
    alarmId: 1, // Temperatura elevada
    message: 'ALERTA MENOR: Temperatura del módulo elevada en inversor INV-20230415-001',
    channel: 'Email',
    sendDate: getDate(1, 4, 23), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 2,
    userId: 4, // Laura González (Técnico Energía Solar)
    alarmId: 1, // Temperatura elevada
    message: 'ALERTA MENOR: Temperatura del módulo elevada en inversor INV-20230415-001',
    channel: 'WhatsApp',
    sendDate: getDate(1, 4, 23), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 3,
    userId: 5, // Carlos Pérez (Técnico Energía Solar)
    alarmId: 2, // Rendimiento bajo
    message: 'ADVERTENCIA: Rendimiento por debajo del umbral esperado en inversor INV-20230415-002',
    channel: 'Email',
    sendDate: getDate(0, 6, 45), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 4,
    userId: 3, // Jorge Martínez (Administrador Energía Solar)
    alarmId: 2, // Rendimiento bajo
    message: 'ADVERTENCIA: Rendimiento por debajo del umbral esperado en inversor INV-20230415-002',
    channel: 'Email',
    sendDate: getDate(0, 6, 45), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  
  // Notificaciones para EcoSolar Mendoza
  {
    id: 5,
    userId: 7, // Pablo Silva (Técnico EcoSolar)
    alarmId: 5, // Fluctuación en tensión
    message: 'ALERTA MENOR: Fluctuación en tensión de entrada en inversor INV-20230610-001',
    channel: 'Email',
    sendDate: getDate(0, 8, 15), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 6,
    userId: 7, // Pablo Silva (Técnico EcoSolar)
    alarmId: 5, // Fluctuación en tensión
    message: 'ALERTA MENOR: Fluctuación en tensión de entrada en inversor INV-20230610-001',
    channel: 'WhatsApp',
    sendDate: getDate(0, 8, 15), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 7,
    userId: 7, // Pablo Silva (Técnico EcoSolar)
    alarmId: 7, // Fallo en módulo de comunicación
    message: 'ALERTA MAYOR: Fallo en módulo de comunicación en inversor INV-20240122-001',
    channel: 'Email',
    sendDate: getDate(1, 14, 25), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 8,
    userId: 7, // Pablo Silva (Técnico EcoSolar)
    alarmId: 7, // Fallo en módulo de comunicación
    message: 'ALERTA MAYOR: Fallo en módulo de comunicación en inversor INV-20240122-001',
    channel: 'WhatsApp',
    sendDate: getDate(1, 14, 25), // Mismo tiempo que la alarma
    status: 'Fallido'
  },
  {
    id: 9,
    userId: 6, // María Rodríguez (Administrador EcoSolar)
    alarmId: 7, // Fallo en módulo de comunicación
    message: 'ALERTA MAYOR: Fallo en módulo de comunicación en inversor INV-20240122-001',
    channel: 'Email',
    sendDate: getDate(1, 14, 25), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  
  // Notificaciones para SunPower Patagonia
  {
    id: 10,
    userId: 9, // Diego Fernández (Técnico SunPower)
    alarmId: 9, // Eficiencia por debajo del umbral
    message: 'ADVERTENCIA: Eficiencia por debajo del umbral en inversor INV-20231105-002',
    channel: 'Email',
    sendDate: getDate(0, 3, 10), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  {
    id: 11,
    userId: 9, // Diego Fernández (Técnico SunPower)
    alarmId: 9, // Eficiencia por debajo del umbral
    message: 'ADVERTENCIA: Eficiencia por debajo del umbral en inversor INV-20231105-002',
    channel: 'WhatsApp',
    sendDate: getDate(0, 3, 10), // Mismo tiempo que la alarma
    status: 'Enviado'
  },
  
  // Notificaciones de mantenimiento programado
  {
    id: 12,
    userId: 4, // Laura González (Técnico Energía Solar)
    message: 'RECORDATORIO: Mantenimiento preventivo programado para mañana en Parque Solar San Juan',
    channel: 'Email',
    sendDate: getDate(0, 23, 0), // 23 horas atrás
    status: 'Enviado'
  },
  {
    id: 13,
    userId: 7, // Pablo Silva (Técnico EcoSolar)
    message: 'RECORDATORIO: Continuar con mantenimiento de cableado CC en Parque Solar Mendoza Norte',
    channel: 'WhatsApp',
    sendDate: getDate(0, 4, 0), // 4 horas atrás
    status: 'Enviado'
  }
];