// lib/services/maintenanceService.ts
import { maintenances } from '@/data/mock/maintenance';
import { MaintenanceTask } from '@/types/solarTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 1000));

/**
 * Obtiene todas las tareas de mantenimiento
 */
export const getAllMaintenanceTasks = async (plantId?: number): Promise<MaintenanceTask[]> => {
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
  
  // Convertir datos de maintenances.ts al formato que espera la aplicación (MaintenanceTask)
  const formattedTasks: MaintenanceTask[] = tasks.map(maintenance => {
    return {
      id: maintenance.id,
      title: `Tarea #${maintenance.id} - Planta: ${maintenance.plantId}`,
      description: `${maintenance.description} (Planta ID: ${maintenance.plantId})`,
      plantId: maintenance.plantId,
      status: convertStatus(maintenance.status),
      priority: determinePriority(maintenance.type),
      scheduledDate: maintenance.scheduledDate,
      completionDate: maintenance.completionDate,
      estimatedDuration: 120 + Math.floor(Math.random() * 180), // Entre 2h y 5h en minutos
      assignedTo: `user-${maintenance.responsibleUserId}`,
      devices: generateDeviceIds(maintenance.plantId),
      checklist: generateChecklist(maintenance.id, maintenance.type),
      notes: maintenance.description.includes('inversor') 
        ? `Nota: Verificar estado de conectores y nivel de voltaje. ID de Planta: ${maintenance.plantId}` 
        : undefined,
      type: maintenance.type.toLowerCase() === 'preventivo' ? 'preventive' : 'corrective',
      progress: maintenance.status === 'En Proceso' ? Math.floor(Math.random() * 80) + 10 : undefined, // Entre 10% y 90%
    };
  });
  
  return formattedTasks;
};

/**
 * Convierte el estado del formato del mock data al formato usado en la aplicación
 */
function convertStatus(status: string): 'pending' | 'in-progress' | 'completed' {
  switch (status.toLowerCase()) {
    case 'pendiente':
      return 'pending';
    case 'en proceso':
      return 'in-progress';
    case 'completado':
      return 'completed';
    default:
      return 'pending';
  }
}

/**
 * Determina la prioridad basada en el tipo de mantenimiento
 */
function determinePriority(type: string): 'high' | 'medium' | 'low' {
  if (type.toLowerCase() === 'correctivo') {
    return 'high';
  } else {
    // Para mantenimiento preventivo, asignar aleatoriamente entre medio y bajo
    return Math.random() > 0.5 ? 'medium' : 'low';
  }
}

/**
 * Genera IDs de dispositivos aleatorios para la tarea
 */
function generateDeviceIds(plantId: number): string[] {
  const deviceCount = Math.floor(Math.random() * 3) + 1; // Entre 1 y 3 dispositivos
  const devices = [];
  
  for (let i = 0; i < deviceCount; i++) {
    const deviceNumber = Math.floor(Math.random() * 20) + 1;
    devices.push(`device-${plantId}-${deviceNumber}`);
  }
  
  return devices;
}

/**
 * Genera una lista de verificación para la tarea
 */
function generateChecklist(taskId: number, type: string): { id: string, task: string, completed: boolean }[] {
  const checklistItems = [];
  const itemCount = type.toLowerCase() === 'preventivo' ? 4 : 3;
  
  const preventiveItems = [
    'Inspección visual de componentes',
    'Limpieza de superficies',
    'Verificación de conexiones',
    'Medición de parámetros eléctricos',
    'Lubricación de partes móviles',
    'Actualización de firmware',
    'Verificación de estructuras',
    'Ajuste de tornillería'
  ];
  
  const correctiveItems = [
    'Diagnóstico de fallo',
    'Reemplazo de componente',
    'Prueba de funcionamiento',
    'Verificación de solución',
    'Medición post-reparación'
  ];
  
  const items = type.toLowerCase() === 'preventivo' ? preventiveItems : correctiveItems;
  
  for (let i = 0; i < itemCount; i++) {
    const itemIndex = Math.floor(Math.random() * items.length);
    const completed = Math.random() > 0.7; // 30% de probabilidad de estar completado
    
    checklistItems.push({
      id: `checklist-${taskId}-${i}`,
      task: items[itemIndex],
      completed
    });
    
    // Remover el item usado para evitar duplicados
    items.splice(itemIndex, 1);
  }
  
  return checklistItems;
}

/**
 * Obtiene tareas de mantenimiento por estado
 */
export const getMaintenanceTasksByStatus = async (
  status: string,
  plantId?: number
): Promise<MaintenanceTask[]> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Obteniendo tareas con estado ${status} para plantId: ${plantId || 'todas'}`);
  
  // Normalizar estado para comparación
  const normalizedStatus = status.toLowerCase();
  
  // Primero obtenemos todas las tareas para la planta especificada
  const allPlantTasks = await getAllMaintenanceTasks(plantId);
  
  // Luego filtramos por estado
  const filteredTasks = allPlantTasks.filter(
    task => task.status.toLowerCase() === normalizedStatus
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
): Promise<MaintenanceTask[]> => {
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
): Promise<MaintenanceTask | undefined> => {
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
  const pendingTasks = allTasks.filter(task => task.status === 'pending');
  const inProgressTasks = allTasks.filter(task => task.status === 'in-progress');
  const completedTasks = allTasks.filter(task => task.status === 'completed');
  
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
): Promise<MaintenanceTask | undefined> => {
  await simulateLatency();
  console.log(`[MaintenanceService] Actualizando tarea ${taskId} a estado "${status}" (Actualizado por: ${updatedBy})`);
  
  // Buscar la tarea primero para ver si existe y si pertenece a la planta correcta
  const task = await getMaintenanceTaskById(taskId, plantId);
  if (!task) {
    console.log(`[MaintenanceService] ERROR: No se encontró la tarea ${taskId} para actualizar`);
    return undefined;
  }
  
  // En una implementación real, aquí actualizarías la tarea en la base de datos
  const updatedTask: MaintenanceTask = {
    ...task,
    status: status as 'pending' | 'in-progress' | 'completed',
    updatedBy: updatedBy,
    updatedAt: new Date().toISOString(),
    // Si el estado es 'completed', agregar la fecha de finalización
    ...(status === 'completed' && { completionDate: new Date().toISOString() })
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
): Promise<MaintenanceTask[]> => {
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