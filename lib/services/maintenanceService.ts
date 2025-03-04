// lib/services/maintenanceService.ts
import { dummyMaintenanceTasks } from '@/lib/solar/dummyData';
import { MaintenanceTask } from '@/types/solarTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todas las tareas de mantenimiento
 */
export const getAllMaintenanceTasks = async (plantId?: number): Promise<MaintenanceTask[]> => {
  await simulateLatency();
  let tasks = [...dummyMaintenanceTasks];
  
  // Si se proporciona un ID de planta, filtrar las tareas de esa planta
  if (plantId) {
    tasks = tasks.filter(task => task.plantId === plantId);
  }
  
  return tasks;
};

/**
 * Obtiene tareas de mantenimiento por estado
 */
export const getMaintenanceTasksByStatus = async (
  status: string,
  plantId?: number
): Promise<MaintenanceTask[]> => {
  await simulateLatency();
  let tasks = dummyMaintenanceTasks.filter(task => task.status === status);
  
  // Si se proporciona un ID de planta, filtrar las tareas de esa planta
  if (plantId) {
    tasks = tasks.filter(task => task.plantId === plantId);
  }
  
  return tasks;
};

/**
 * Obtiene una tarea de mantenimiento por su ID
 */
export const getMaintenanceTaskById = async (
  taskId: number
): Promise<MaintenanceTask | undefined> => {
  await simulateLatency();
  return dummyMaintenanceTasks.find(task => task.id === taskId);
};

/**
 * Obtiene estadísticas de mantenimiento para un parque solar
 */
export const getMaintenanceStatistics = async (plantId?: number) => {
  await simulateLatency();
  
  // Filtrar tareas por planta si se proporciona un ID
  let tasks = [...dummyMaintenanceTasks];
  if (plantId) {
    tasks = tasks.filter(task => task.plantId === plantId);
  }
  
  // Contar tareas por estado
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');
  
  // Obtener próximas tareas programadas
  const upcomingTasks = pendingTasks
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
    .slice(0, 5);
  
  return {
    total: tasks.length,
    pending: pendingTasks.length,
    inProgress: inProgressTasks.length,
    completed: completedTasks.length,
    upcomingTasks
  };
};

/**
 * Versión alternativa para compatibilidad - devuelve mismo resultado que getMaintenanceStatistics
 */
export const getMaintenanceStatsByPlantId = async (plantId: number) => {
  return getMaintenanceStatistics(plantId);
};

/**
 * Actualiza el estado de una tarea de mantenimiento
 */
export const updateMaintenanceTaskStatus = async (
  taskId: number,
  status: string,
  updatedBy: string
): Promise<MaintenanceTask | undefined> => {
  await simulateLatency();
  const taskIndex = dummyMaintenanceTasks.findIndex(task => task.id === taskId);
  if (taskIndex === -1) return undefined;
  
  // En una implementación real, aquí actualizarías la tarea en la base de datos
  const updatedTask: MaintenanceTask = {
    ...dummyMaintenanceTasks[taskIndex],
    status: status,
    updatedBy: updatedBy,
    updatedAt: new Date().toISOString()
  };
  
  return updatedTask;
};