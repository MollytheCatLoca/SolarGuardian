// types/unifiedMaintenanceTypes.ts

/**
 * Unifica los tipos de mantenimiento de maintenanceTypes.ts y solarTypes.ts
 */

// Tipos enumerados para garantizar consistencia
export type MaintenanceType = 'Preventivo' | 'Correctivo';
export type MaintenanceStatus = 'Pendiente' | 'En Proceso' | 'Completado' | 'Cancelado';
export type TaskStatus = 'Pendiente' | 'Realizada' | 'No Realizada';

// Usando snake_case para las constantes de mapeo
export const STATUS_MAPPING = {
  // Mapea distintas representaciones del estatus a una forma estandarizada
  'pending': 'Pendiente',
  'in-progress': 'En Proceso',
  'completed': 'Completado',
  'cancelled': 'Cancelado',
  
  // Para mapeo inverso
  'Pendiente': 'pending',
  'En Proceso': 'in-progress',
  'Completado': 'completed',
  'Cancelado': 'cancelled',
} as const;

export const PRIORITY_MAPPING = {
  'high': 'Alta',
  'medium': 'Media', 
  'low': 'Baja',
  
  // Para mapeo inverso
  'Alta': 'high',
  'Media': 'medium',
  'Baja': 'low',
} as const;

// Definición básica de mantenimiento que aplica a ambos sistemas
export interface BaseMaintenanceTask {
  id: number;
  title: string;
  description: string;
  status: MaintenanceStatus | string; // Permitir ambos formatos temporalmente para migración
  scheduledDate: string; // ISO format date
  completionDate?: string; // ISO format date
}

// Modelo completo para tareas de mantenimiento (compatible con ambos sistemas)
export interface UnifiedMaintenanceTask extends BaseMaintenanceTask {
  plantId: number;             // ID de la planta
  type: MaintenanceType;       // Tipo de mantenimiento
  priority: string;            // Prioridad (usando PRIORITY_MAPPING)
  estimatedDuration: number;   // en minutos
  assignedTo?: string;         // Usuario asignado
  progress?: number;           // Porcentaje de progreso (0-100)
  
  // Campos específicos para listas de verificación
  checklist?: {
    id: string;
    task: string;
    completed: boolean;
  }[];
  
  // Dispositivos involucrados
  devices?: string[];
  
  // Campo para notas adicionales
  notes?: string;
  
  // Fechas adicionales para seguimiento
  updatedAt?: string;         // Última actualización
  updatedBy?: string;         // Usuario que actualizó
}

/**
 * Funciones para convertir entre los diferentes formatos
 */

// Convierte desde el formato de maintenanceTypes.ts al formato unificado
export function convertFromLegacyFormat(
  legacyTask: any, 
  includeDetails: boolean = false
): UnifiedMaintenanceTask {
  // Implementación básica, debe expandirse según necesidades
  return {
    id: legacyTask.id,
    plantId: legacyTask.plantId,
    title: legacyTask.description?.split('.')[0] || `Tarea #${legacyTask.id}`,
    description: legacyTask.description,
    status: legacyTask.status,
    type: legacyTask.type,
    priority: determinePriority(legacyTask),
    scheduledDate: legacyTask.scheduledDate,
    completionDate: legacyTask.completionDate,
    estimatedDuration: 120, // Valor predeterminado, ajustar según datos reales
    assignedTo: `user-${legacyTask.responsibleUserId}`,
    // Incluir detalles adicionales solo si se solicitan
    ...(includeDetails ? {
      checklist: generateMockChecklist(legacyTask.id, legacyTask.type),
      devices: generateMockDevices(legacyTask.plantId),
      progress: legacyTask.status === 'En Proceso' ? Math.floor(Math.random() * 70) + 20 : undefined
    } : {})
  };
}

// Convierte desde el formato de solarTypes.ts al formato unificado
export function convertFromSolarFormat(solarTask: any): UnifiedMaintenanceTask {
  return {
    id: solarTask.id,
    plantId: solarTask.plantId || 0,
    title: solarTask.title,
    description: solarTask.description,
    status: mapStatus(solarTask.status),
    type: solarTask.type === 'corrective' ? 'Correctivo' : 'Preventivo',
    priority: mapPriority(solarTask.priority),
    scheduledDate: solarTask.scheduledDate,
    completionDate: solarTask.completionDate,
    estimatedDuration: solarTask.estimatedDuration || 120,
    assignedTo: solarTask.assignedTo,
    checklist: solarTask.checklist,
    devices: solarTask.devices,
    notes: solarTask.notes,
    progress: solarTask.progress
  };
}

// Funciones auxiliares
function determinePriority(task: any): string {
  // Determina la prioridad basada en el tipo de mantenimiento y otros factores
  if (task.type.toLowerCase() === 'correctivo') {
    return 'Alta';
  } else {
    return 'Media';
  }
}

function mapStatus(status: string): MaintenanceStatus {
  return STATUS_MAPPING[status as keyof typeof STATUS_MAPPING] as MaintenanceStatus || 'Pendiente';
}

function mapPriority(priority: string): string {
  return PRIORITY_MAPPING[priority as keyof typeof PRIORITY_MAPPING] || 'Media';
}

// Funciones para generar datos de ejemplo para migración
function generateMockChecklist(taskId: number, type: string) {
  const items = [];
  const count = type.toLowerCase() === 'preventivo' ? 4 : 3;
  
  for (let i = 0; i < count; i++) {
    items.push({
      id: `check-${taskId}-${i}`,
      task: `Tarea de verificación ${i + 1}`,
      completed: Math.random() > 0.7
    });
  }
  
  return items;
}

function generateMockDevices(plantId: number) {
  const count = Math.floor(Math.random() * 3) + 1;
  const devices = [];
  
  for (let i = 0; i < count; i++) {
    devices.push(`device-${plantId}-${Math.floor(Math.random() * 10)}`);
  }
  
  return devices;
}