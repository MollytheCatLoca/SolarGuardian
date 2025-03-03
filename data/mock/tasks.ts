// src/data/mock/tasks.ts
import { MaintenanceTask } from '@/types/maintenanceTypes';

export const maintenanceTasks: MaintenanceTask[] = [
  // Mantenimiento ID 1 (Preventivo Completado - San Juan)
  {
    id: 1,
    maintenanceId: 1,
    element: 'Paneles',
    description: 'Limpieza de paneles solares',
    status: 'Realizada',
    taskDate: '2024-03-15',
    observations: 'Se encontró acumulación de polvo moderada. Limpieza completa realizada.'
  },
  {
    id: 2,
    maintenanceId: 1,
    element: 'Inversores',
    description: 'Revisión de conexiones y temperaturas',
    status: 'Realizada',
    taskDate: '2024-03-15',
    observations: 'Todas las conexiones en buen estado. Temperaturas normales.'
  },
  {
    id: 3,
    maintenanceId: 1,
    element: 'Cableado CC',
    description: 'Inspección visual de cableado',
    status: 'Realizada',
    taskDate: '2024-03-15',
    observations: 'Sin anomalías detectadas.'
  },
  
  // Mantenimiento ID 2 (Preventivo Pendiente - San Juan)
  {
    id: 4,
    maintenanceId: 2,
    element: 'Paneles',
    description: 'Limpieza general programada',
    status: 'Pendiente',
    taskDate: '2024-04-20'
  },
  {
    id: 5,
    maintenanceId: 2,
    element: 'Estructuras',
    description: 'Verificación de estructuras y anclajes',
    status: 'Pendiente',
    taskDate: '2024-04-20'
  },
  
  // Mantenimiento ID 3 (Correctivo Completado - San Juan)
  {
    id: 6,
    maintenanceId: 3,
    element: 'Inversores',
    description: 'Reparación de conexiones en inversor',
    status: 'Realizada',
    taskDate: '2024-02-28',
    observations: 'Se reemplazaron conectores deteriorados en inversor ID 2. Rendimiento normalizado.'
  },
  
  // Mantenimiento ID 4 (Correctivo Completado - La Rioja)
  {
    id: 7,
    maintenanceId: 4,
    element: 'Inversores',
    description: 'Reparación de inversor con falla',
    status: 'Realizada',
    taskDate: '2024-03-03',
    observations: 'Se reemplazó tarjeta de control. Pruebas ok.'
  },
  {
    id: 8,
    maintenanceId: 4,
    element: 'Cableado AC BT',
    description: 'Revisión de conexiones de salida',
    status: 'Realizada',
    taskDate: '2024-03-03',
    observations: 'Se encontraron conexiones flojas. Ajustadas.'
  },
  
  // Mantenimiento ID 5 (Preventivo Pendiente - La Rioja)
  {
    id: 9,
    maintenanceId: 5,
    element: 'Paneles',
    description: 'Limpieza e inspección',
    status: 'Pendiente',
    taskDate: '2024-04-05'
  },
  {
    id: 10,
    maintenanceId: 5,
    element: 'Inversores',
    description: 'Mantenimiento preventivo',
    status: 'Pendiente',
    taskDate: '2024-04-05'
  },
  {
    id: 11,
    maintenanceId: 5,
    element: 'Transformador',
    description: 'Inspección de transformador',
    status: 'Pendiente',
    taskDate: '2024-04-05'
  },
  
  // Mantenimiento ID 6 (Preventivo Completado - Mendoza Norte)
  {
    id: 12,
    maintenanceId: 6,
    element: 'Batería',
    description: 'Revisión del sistema de baterías',
    status: 'Realizada',
    taskDate: '2024-03-18',
    observations: 'Sistema funcionando correctamente. Limpieza de terminales.'
  },
  
  // Mantenimiento ID 7 (Preventivo En Proceso - Mendoza Norte)
  {
    id: 13,
    maintenanceId: 7,
    element: 'Estructuras',
    description: 'Revisión de estructuras',
    status: 'Realizada',
    taskDate: '2024-03-25',
    observations: 'Se ajustaron tornillos flojos en varias estructuras.'
  },
  {
    id: 14,
    maintenanceId: 7,
    element: 'Cableado CC',
    description: 'Revisión de cableado CC',
    status: 'En Proceso',
    taskDate: '2024-03-25'
  },
  
  // Mantenimiento ID 8 (Correctivo En Proceso - Mendoza Sur)
  {
    id: 15,
    maintenanceId: 8,
    element: 'Inversores',
    description: 'Diagnóstico de inversor inactivo',
    status: 'Realizada',
    taskDate: '2024-03-10',
    observations: 'Se detectó fallo en módulo de comunicación.'
  },
  {
    id: 16,
    maintenanceId: 8,
    element: 'Inversores',
    description: 'Reemplazo de módulo de comunicación',
    status: 'En Proceso',
    taskDate: '2024-03-10'
  },
  
  // Mantenimiento ID 9 (Preventivo Pendiente - Neuquén)
  {
    id: 17,
    maintenanceId: 9,
    element: 'Paneles',
    description: 'Limpieza general de paneles',
    status: 'Pendiente',
    taskDate: '2024-04-15'
  },
  {
    id: 18,
    maintenanceId: 9,
    element: 'Inversores',
    description: 'Mantenimiento preventivo inversores',
    status: 'Pendiente',
    taskDate: '2024-04-15'
  },
  {
    id: 19,
    maintenanceId: 9,
    element: 'Cableado AC MT',
    description: 'Inspección de cableado de media tensión',
    status: 'Pendiente',
    taskDate: '2024-04-15'
  },
  
  // Mantenimiento ID 10 (Correctivo Completado - Neuquén)
  {
    id: 20,
    maintenanceId: 10,
    element: 'Cableado CC',
    description: 'Reemplazo de conectores dañados',
    status: 'Realizada',
    taskDate: '2024-02-21',
    observations: 'Se reemplazaron 15 conectores con daños por exposición a la intemperie.'
  }
];