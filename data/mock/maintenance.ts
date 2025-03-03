// src/data/mock/maintenance.ts
import { Maintenance } from '@/types/maintenanceTypes';

export const maintenances: Maintenance[] = [
  // Parque Solar San Juan (ID: 1)
  {
    id: 1,
    plantId: 1,
    scheduledDate: '2024-03-15',
    completionDate: '2024-03-15',
    type: 'Preventivo',
    status: 'Completado',
    description: 'Mantenimiento trimestral preventivo de paneles e inversores',
    responsibleUserId: 4
  },
  {
    id: 2,
    plantId: 1,
    scheduledDate: '2024-04-20',
    type: 'Preventivo',
    status: 'Pendiente',
    description: 'Inspección y limpieza de paneles',
    responsibleUserId: 4
  },
  {
    id: 3,
    plantId: 1,
    scheduledDate: '2024-02-28',
    completionDate: '2024-02-28',
    type: 'Correctivo',
    status: 'Completado',
    description: 'Reparación de conexiones en inversor con pérdida de rendimiento',
    responsibleUserId: 4
  },
  
  // Parque Solar La Rioja (ID: 2)
  {
    id: 4,
    plantId: 2,
    scheduledDate: '2024-03-01',
    completionDate: '2024-03-03',
    type: 'Correctivo',
    status: 'Completado',
    description: 'Reparación urgente inversor fallado',
    responsibleUserId: 5
  },
  {
    id: 5,
    plantId: 2,
    scheduledDate: '2024-04-05',
    type: 'Preventivo',
    status: 'Pendiente',
    description: 'Mantenimiento trimestral programado',
    responsibleUserId: 5
  },
  
  // Parque Solar Mendoza Norte (ID: 3)
  {
    id: 6,
    plantId: 3,
    scheduledDate: '2024-03-18',
    completionDate: '2024-03-18',
    type: 'Preventivo',
    status: 'Completado',
    description: 'Revisión y limpieza de baterías',
    responsibleUserId: 6
  },
  {
    id: 7,
    plantId: 3,
    scheduledDate: '2024-03-25',
    type: 'Preventivo',
    status: 'En Proceso',
    description: 'Mantenimiento de estructuras y cableado',
    responsibleUserId: 6
  },
  
  // Parque Solar Mendoza Sur (ID: 4)
  {
    id: 8,
    plantId: 4,
    scheduledDate: '2024-03-10',
    type: 'Correctivo',
    status: 'En Proceso',
    description: 'Revisión de inversor inactivo',
    responsibleUserId: 7
  },
  
  // Parque Solar Neuquén (ID: 5)
  {
    id: 9,
    plantId: 5,
    scheduledDate: '2024-04-15',
    type: 'Preventivo',
    status: 'Pendiente',
    description: 'Mantenimiento general programado',
    responsibleUserId: 8
  },
  {
    id: 10,
    plantId: 5,
    scheduledDate: '2024-02-20',
    completionDate: '2024-02-21',
    type: 'Correctivo',
    status: 'Completado',
    description: 'Reemplazo de conectores dañados',
    responsibleUserId: 8
  }
];