// src/types/maintenanceTypes.ts

export type MaintenanceType = 'Preventivo' | 'Correctivo';
export type MaintenanceStatus = 'Pendiente' | 'En Proceso' | 'Completado' | 'Cancelado';
export type PlantElement = 'Transformador' | 'Cableado AC MT' | 'Cableado AC BT' | 
                         'Cableado CC' | 'Inversores' | 'Estructuras' | 'Paneles' | 'Otro';
export type TaskStatus = 'Pendiente' | 'Realizada' | 'No Realizada';

export interface Maintenance {
  id: number;
  plantId: number;
  scheduledDate: string; // ISO format date
  completionDate?: string; // ISO format date
  type: MaintenanceType;
  status: MaintenanceStatus;
  description: string;
  responsibleUserId: number;
}

export interface MaintenanceTask {
  id: number;
  maintenanceId: number;
  element: PlantElement;
  description: string;
  status: TaskStatus;
  taskDate: string; // ISO format date
  observations?: string;
}