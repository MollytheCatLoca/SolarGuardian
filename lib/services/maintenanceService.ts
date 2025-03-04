// lib/services/maintenanceService.ts
import { maintenances } from '@/data/mock/maintenance';
import { UnifiedMaintenanceTask, convertFromLegacyFormat, STATUS_MAPPING } from '@/types/unifiedMaintenanceTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 1000));

/**
 * Obtiene todas las tareas de mantenimiento
 */
export const getAllMaintenanceTasks = async (plantId?: number): Promise<UnifiedMaintenanceTask[]> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo todas las tareas de mantenimiento para plantId: ${plantId || 'todas'}`);
  
  let tasks = [...maintenances];
  
  // Si se proporciona un ID de planta, filtrar las tareas de esa planta
  if (plantId) {
    tasks = tasks.filter(task => task.plantId === plantId);
    console.log(`[MaintenanceService] Encontradas ${tasks.length} tareas para la PLANTA ID: ${plantId}`);
  } else {
    console.log(`[MaintenanceService] Devolviendo todas las tareas de mantenimiento (${tasks.length})`);
  }
  
  // Convertir datos al formato unificado
  const formattedTasks: UnifiedMaintenanceTask[] = tasks.map(maintenance => 
    convertFromLegacyFormat(maintenance, true)
  );
  
  return formattedTasks;
};

/**
 * Obtiene tareas de mantenimiento por estado
 */
export const getMaintenanceTasksByStatus = async (
  status: string,
  plantId?: number
): Promise<UnifiedMaintenanceTask[]> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo tareas con estado ${status} para plantId: ${plantId || 'todas'}`);
  
  // Normalizar estado para comparación
  const normalizedStatus = status.toLowerCase();
  const legacyStatus = STATUS_MAPPING[normalizedStatus] || status;
  
  // Primero obtenemos todas las tareas para la planta especificada
  const allPlantTasks = await getAllMaintenanceTasks(plantId);
  
  // Luego filtramos por estado, considerando ambos formatos de estado
  const filteredTasks = allPlantTasks.filter(task => 
    task.status.toLowerCase() === legacyStatus.toLowerCase() ||
    task.status.toLowerCase() === normalizedStatus
  );
  
  console.log(`[MaintenanceService] Tareas con estado ${status} para PLANTA ID ${plantId || 'todas'}: ${filteredTasks.length}`);
  
  return filteredTasks;
};

/**
 * Obtiene tareas de mantenimiento por prioridad
 */
export const getMaintenanceTasksByPriority = async (
  priority: string,
  plantId?: number
): Promise<UnifiedMaintenanceTask[]> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo tareas con prioridad ${priority} para plantId: ${plantId || 'todas'}`);
  
  // Normalizar prioridad para comparación
  const normalizedPriority = priority.toLowerCase();
  
  // Primero obtenemos todas las tareas para la planta especificada
  const allPlantTasks = await getAllMaintenanceTasks(plantId);
  
  // Luego filtramos por prioridad
  const filteredTasks = allPlantTasks.filter(
    task => task.priority.toLowerCase() === normalizedPriority
  );
  
  console.log(`[MaintenanceService] Tareas con prioridad ${priority} para PLANTA ID ${plantId || 'todas'}: ${filteredTasks.length}`);
  
  return filteredTasks;
};

/**
 * Obtiene una tarea de mantenimiento por su ID
 */
export const getMaintenanceTaskById = async (
  taskId: number,
  plantId?: number
): Promise<UnifiedMaintenanceTask | undefined> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Buscando tarea con ID ${taskId} para plantId: ${plantId || 'todas'}`);
  
  // Si se proporciona un plantId, primero obtenemos las tareas de esa planta
  if (plantId) {
    const plantTasks = await getAllMaintenanceTasks(plantId);
    const task = plantTasks.find(task => task.id === taskId);
    
    if (task) {
      console.log(`[MaintenanceService] Encontrada tarea ${taskId} para PLANTA ID ${plantId}`);
    } else {
      console.log(`[MaintenanceService] No se encontró la tarea ${taskId} para PLANTA ID ${plantId}`);
    }
    
    return task;
  }
  
  // Si no se proporciona un plantId, buscamos en todas las tareas
  const allTasks = await getAllMaintenanceTasks();
  const task = allTasks.find(task => task.id === taskId);
  
  if (task) {
    console.log(`[MaintenanceService] Encontrada tarea ${taskId} (PLANTA ID: ${task.plantId})`);
  } else {
    console.log(`[MaintenanceService] No se encontró la tarea ${taskId}`);
  }
  
  return task;
};

/**
 * Obtiene estadísticas de mantenimiento para un parque solar
 */
export const getMaintenanceStatistics = async (plantId?: number) => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo estadísticas de mantenimiento para plantId: ${plantId || 'todas'}`);
  
  // Obtener todas las tareas filtradas por planta si se proporciona plantId
  const allTasks = await getAllMaintenanceTasks(plantId);
  
  // Contar tareas por estado
  const pendingTasks = allTasks.filter(task => 
    task.status === 'Pendiente' || task.status === 'pending'
  );
  
  const inProgressTasks = allTasks.filter(task => 
    task.status === 'En Proceso' || task.status === 'in-progress'
  );
  
  const completedTasks = allTasks.filter(task => 
    task.status === 'Completado' || task.status === 'completed'
  );
  
  // Obtener próximas tareas programadas
  const upcomingTasks = pendingTasks
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
    .slice(0, 5);
  
  const result = {
    total: allTasks.length,
    pending: pendingTasks.length,
    inProgress: inProgressTasks.length,
    completed: completedTasks.length,
    upcomingTasks
  };
  
  console.log(`[MaintenanceService] Estadísticas para PLANTA ID ${plantId || 'todas'}:`, result);
  
  return result;
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
  updatedBy: string,
  plantId?: number
): Promise<UnifiedMaintenanceTask | undefined> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Actualizando tarea ${taskId} a estado "${status}" (Actualizado por: ${updatedBy})`);
  
  // Buscar la tarea primero para ver si existe y si pertenece a la planta correcta
  const task = await getMaintenanceTaskById(taskId, plantId);
  if (!task) {
    console.log(`[MaintenanceService] ERROR: No se encontró la tarea ${taskId} para actualizar`);
    return undefined;
  }
  
  // Mapear status si es necesario
  const normalizedStatus = STATUS_MAPPING[status as keyof typeof STATUS_MAPPING] || status;
  
  // En una implementación real, aquí actualizarías la tarea en la base de datos
  const updatedTask: UnifiedMaintenanceTask = {
    ...task,
    status: normalizedStatus,
    updatedBy: updatedBy,
    updatedAt: new Date().toISOString(),
    // Si el estado es 'completed' o 'Completado', agregar la fecha de finalización
    ...(normalizedStatus === 'Completado' && { completionDate: new Date().toISOString() })
  };
  
  console.log(`[MaintenanceService] Tarea ${taskId} actualizada exitosamente para PLANTA ID ${task.plantId}`);
  
  return updatedTask;
};

/**
 * Obtiene tareas próximas a vencer (en los próximos días)
 */
export const getUpcomingMaintenanceTasks = async (
  daysAhead: number = 7,
  plantId?: number
): Promise<UnifiedMaintenanceTask[]> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo tareas próximas a vencer (${daysAhead} días) para plantId: ${plantId || 'todas'}`);
  
  // Obtener todas las tareas pendientes
  const pendingTasks = await getMaintenanceTasksByStatus('pending', plantId);
  
  // Calcular la fecha límite
  const now = new Date();
  const futureDate = new Date();
  futureDate.setDate(now.getDate() + daysAhead);
  
  // Filtrar tareas que vencen dentro del período especificado
  const upcomingTasks = pendingTasks.filter(task => {
    const taskDate = new Date(task.scheduledDate);
    return taskDate >= now && taskDate <= futureDate;
  });
  
  // Ordenar por fecha (próximas primero)
  upcomingTasks.sort((a, b) => 
    new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
  );
  
  console.log(`[MaintenanceService] Tareas próximas a vencer (${daysAhead} días) para PLANTA ID ${plantId || 'todas'}: ${upcomingTasks.length}`);
  
  return upcomingTasks;
};