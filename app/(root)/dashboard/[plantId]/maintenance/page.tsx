"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  CalendarClock, 
  CheckSquare, 
  ClipboardList, 
  Clock, 
  AlertCircle,
  RefreshCw,
  X,
  Play
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { useParams } from 'next/navigation';

// Importar los servicios actualizados y tipos unificados
import { 
  getAllMaintenanceTasks, 
  getMaintenanceTasksByStatus,
  updateMaintenanceTaskStatus,
  getMaintenanceStatistics
} from '@/lib/services/maintenanceService';
import { UnifiedMaintenanceTask } from '@/types/unifiedMaintenanceTypes';

export default function MaintenancePage() {
  const params = useParams();
  const plantId = params.plantId ? parseInt(params.plantId as string) : null;
  
  // Estados para las tareas usando el tipo unificado
  const [pendingTasks, setPendingTasks] = useState<UnifiedMaintenanceTask[]>([]);
  const [inProgressTasks, setInProgressTasks] = useState<UnifiedMaintenanceTask[]>([]);
  const [completedTasks, setCompletedTasks] = useState<UnifiedMaintenanceTask[]>([]);
  const [selectedTask, setSelectedTask] = useState<UnifiedMaintenanceTask | null>(null);
  const [statistics, setStatistics] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0
  });
  
  // Estado para gestionar carga y errores
  const [loading, setLoading] = useState({
    pending: true,
    inProgress: true,
    completed: true,
    stats: true
  });
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  
  // Función para cargar las estadísticas
  const loadStatistics = useCallback(async () => {
    if (!plantId) return;
    
    try {
      setLoading(prev => ({ ...prev, stats: true }));
      const stats = await getMaintenanceStatistics(plantId);
      setStatistics(stats);
    } catch (err) {
      console.error("Error cargando estadísticas:", err);
      setError("Error al cargar estadísticas. Intente nuevamente.");
    } finally {
      setLoading(prev => ({ ...prev, stats: false }));
    }
  }, [plantId]);
  
  // Función para cargar las tareas pendientes
  const loadPendingTasks = useCallback(async () => {
    if (!plantId) return;
    
    try {
      setLoading(prev => ({ ...prev, pending: true }));
      const tasks = await getMaintenanceTasksByStatus('pending', plantId);
      // Ordenar por fecha programada (más próximas primero)
      const sortedTasks = tasks.sort((a, b) => 
        new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
      );
      setPendingTasks(sortedTasks);
    } catch (err) {
      console.error("Error cargando tareas pendientes:", err);
      setError("Error al cargar tareas pendientes. Intente nuevamente.");
    } finally {
      setLoading(prev => ({ ...prev, pending: false }));
    }
  }, [plantId]);
  
  // Función para cargar las tareas en progreso
  const loadInProgressTasks = useCallback(async () => {
    if (!plantId) return;
    
    try {
      setLoading(prev => ({ ...prev, inProgress: true }));
      const tasks = await getMaintenanceTasksByStatus('in-progress', plantId);
      setInProgressTasks(tasks);
    } catch (err) {
      console.error("Error cargando tareas en progreso:", err);
      setError("Error al cargar tareas en progreso. Intente nuevamente.");
    } finally {
      setLoading(prev => ({ ...prev, inProgress: false }));
    }
  }, [plantId]);
  
  // Función para cargar las tareas completadas
  const loadCompletedTasks = useCallback(async () => {
    if (!plantId) return;
    
    try {
      setLoading(prev => ({ ...prev, completed: true }));
      const tasks = await getMaintenanceTasksByStatus('completed', plantId);
      // Ordenar por fecha de finalización (más recientes primero)
      const sortedTasks = tasks.sort((a, b) => 
        new Date(b.completionDate || b.scheduledDate).getTime() - 
        new Date(a.completionDate || a.scheduledDate).getTime()
      );
      setCompletedTasks(sortedTasks);
    } catch (err) {
      console.error("Error cargando tareas completadas:", err);
      setError("Error al cargar tareas completadas. Intente nuevamente.");
    } finally {
      setLoading(prev => ({ ...prev, completed: false }));
    }
  }, [plantId]);
  
  // Función para cargar todos los datos
  const loadAllData = useCallback(async () => {
    setError(null);
    
    // Cargar en paralelo para mejorar rendimiento
    await Promise.all([
      loadStatistics(),
      loadPendingTasks(),
      loadInProgressTasks(),
      loadCompletedTasks()
    ]);
    
    setLastUpdate(new Date());
  }, [loadStatistics, loadPendingTasks, loadInProgressTasks, loadCompletedTasks]);
  
  // Cargar datos cuando cambia la planta
  useEffect(() => {
    if (plantId) {
      loadAllData();
    } else {
      // Si no hay plantId, mostrar error
      console.error("No se encontró un ID de planta válido");
      setError("No se encontró un ID de planta válido");
    }
  }, [plantId, loadAllData]);
  
  // Función para iniciar una tarea (cambiar estado a "in-progress")
  const handleStartTask = async (task: UnifiedMaintenanceTask) => {
    try {
      setIsUpdating(true);
      // En un sistema real, obtendríamos el ID de usuario actual
      const mockUserId = 'user-123'; 
      
      await updateMaintenanceTaskStatus(task.id, 'in-progress', mockUserId, plantId || undefined);
      
      // Actualizar las listas de tareas
      await loadPendingTasks();
      await loadInProgressTasks();
      await loadStatistics();
      
      // Cerrar modal
      setSelectedTask(null);
      
    } catch (err) {
      console.error("Error al iniciar la tarea:", err);
      setError("Error al iniciar la tarea. Intente nuevamente.");
    } finally {
      setIsUpdating(false);
    }
  };
  
  // Función para completar una tarea (cambiar estado a "completed")
  const handleCompleteTask = async (task: UnifiedMaintenanceTask) => {
    try {
      setIsUpdating(true);
      // En un sistema real, obtendríamos el ID de usuario actual
      const mockUserId = 'user-123'; 
      
      await updateMaintenanceTaskStatus(task.id, 'completed', mockUserId, plantId || undefined);
      
      // Actualizar las listas de tareas
      await loadInProgressTasks();
      await loadCompletedTasks();
      await loadStatistics();
      
      // Cerrar modal
      setSelectedTask(null);
      
    } catch (err) {
      console.error("Error al completar la tarea:", err);
      setError("Error al completar la tarea. Intente nuevamente.");
    } finally {
      setIsUpdating(false);
    }
  };
  
  // Utilidad para obtener texto de prioridad
  const getPriorityText = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
      case 'alta':
        return 'Alta';
      case 'medium':
      case 'media':
        return 'Media';
      case 'low':
      case 'baja':
        return 'Baja';
      default:
        return priority;
    }
  };
  
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción con botón de actualización */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Mantenimiento</h1>
          <p className="text-sm text-gray-400">Planificación y seguimiento de tareas de mantenimiento preventivo y correctivo</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={loadAllData}
            disabled={loading.pending || loading.inProgress || loading.completed || isUpdating}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${(loading.pending || loading.inProgress || loading.completed || isUpdating) ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Mostrar mensaje de error si existe */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
          <AlertCircle className="mr-2" size={16} />
          <span>{error}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-auto text-red-400" 
            onClick={() => setError(null)}
          >
            <X size={16} />
          </Button>
        </div>
      )}
      
      {/* Pestañas para diferentes vistas */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151]">
          <TabsTrigger 
            value="pending"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Pendientes ({statistics.pending})
          </TabsTrigger>
          <TabsTrigger 
            value="in-progress"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            En Progreso ({statistics.inProgress})
          </TabsTrigger>
          <TabsTrigger 
            value="completed"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Completadas ({statistics.completed})
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="pending" className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Resumen de tareas pendientes */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Tareas pendientes</p>
                    <h2 className="text-2xl font-bold">{statistics.pending}</h2>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <ClipboardList size={24} className="text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Próxima tarea */}
           {/* Próxima tarea */}
<Card className="bg-[#1f2937] border-[#374151] text-white">
<CardContent className="pt-6">
  <div className="flex justify-between items-start">
    <div className="max-w-[75%] overflow-hidden">
      <p className="text-sm text-gray-400 flex">Próxima tarea</p>
      <h2 className="text-lg font-bold truncate">
        {loading.pending ? (
          <span className="text-gray-400">Cargando...</span>
        ) : pendingTasks.length > 0 ? (
          pendingTasks[0].title
        ) : (
          'No hay tareas'
        )}
      </h2>
      <p className="text-xs text-yellow-400 mt-1 truncate">
        {!loading.pending && pendingTasks.length > 0 && 
          format(parseISO(pendingTasks[0].scheduledDate), "dd/MM/yyyy HH:mm", { locale: es })}
      </p>
    </div>
    <div className="p-3 rounded-full bg-[#111928]">
      <CalendarClock size={24} className="text-yellow-400" />
    </div>
  </div>
</CardContent>
</Card>
            
            {/* Estadísticas por prioridad */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Por prioridad</p>
                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-red-400">Alta</p>
                        <p className="text-xs font-medium">
                          {loading.pending ? (
                            <span className="text-gray-400">...</span>
                          ) : (
                            pendingTasks.filter(t => t.priority.toLowerCase() === 'alta' || t.priority.toLowerCase() === 'high').length
                          )}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-yellow-400">Media</p>
                        <p className="text-xs font-medium">
                          {loading.pending ? (
                            <span className="text-gray-400">...</span>
                          ) : (
                            pendingTasks.filter(t => t.priority.toLowerCase() === 'media' || t.priority.toLowerCase() === 'medium').length
                          )}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-green-400">Baja</p>
                        <p className="text-xs font-medium">
                          {loading.pending ? (
                            <span className="text-gray-400">...</span>
                          ) : (
                            pendingTasks.filter(t => t.priority.toLowerCase() === 'baja' || t.priority.toLowerCase() === 'low').length
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <AlertCircle size={24} className="text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Lista de tareas pendientes */}
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Tareas Programadas</CardTitle>
              <CardDescription className="text-gray-400">
                Mantenimiento preventivo y correctivo pendiente
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading.pending ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {pendingTasks.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      No hay tareas pendientes programadas para esta planta
                    </div>
                  ) : (
                    pendingTasks.map(task => (
                      <div 
                        key={task.id} 
                        className="bg-[#111928] p-4 rounded-lg border border-[#374151] cursor-pointer hover:border-[#4a4ae2] transition-colors"
                        onClick={() => setSelectedTask(task)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{task.title}</h3>
                          <div className={`
                            px-2 py-1 rounded-full text-xs
                            ${getPriorityText(task.priority).toLowerCase() === 'alta' ? 'bg-red-500/20 text-red-400' : 
                              getPriorityText(task.priority).toLowerCase() === 'media' ? 'bg-yellow-500/20 text-yellow-400' : 
                              'bg-green-500/20 text-green-400'}
                          `}>
                            {getPriorityText(task.priority)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{task.description}</p>
                        <div className="flex justify-between text-xs">
                          <div className="flex items-center text-blue-400">
                            <CalendarClock size={14} className="mr-1" />
                            {format(parseISO(task.scheduledDate), "dd/MM/yyyy HH:mm", { locale: es })}
                          </div>
                          <div className="flex items-center text-purple-400">
                            <Clock size={14} className="mr-1" />
                            {Math.floor(task.estimatedDuration / 60)}h {task.estimatedDuration % 60}min
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="in-progress" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Tareas En Progreso</CardTitle>
              <CardDescription className="text-gray-400">
                Mantenimiento actualmente en ejecución
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading.inProgress ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {inProgressTasks.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      No hay tareas en progreso actualmente para esta planta
                    </div>
                  ) : (
                    inProgressTasks.map(task => (
                      <div 
                        key={task.id} 
                        className="bg-[#111928] p-4 rounded-lg border border-[#374151] cursor-pointer hover:border-[#4a4ae2] transition-colors"
                        onClick={() => setSelectedTask(task)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{task.title}</h3>
                          <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                            En Progreso
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{task.description}</p>
                        <div className="flex justify-between text-xs">
                          <div className="flex items-center text-blue-400">
                            <CalendarClock size={14} className="mr-1" />
                            {format(parseISO(task.scheduledDate), "dd/MM/yyyy HH:mm", { locale: es })}
                          </div>
                          <div className="flex items-center text-green-400">
                            <Clock size={14} className="mr-1" />
                            {task.progress ? `${task.progress}% completado` : 'En ejecución'}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="completed" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Tareas Completadas</CardTitle>
              <CardDescription className="text-gray-400">
                Historial de mantenimiento
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading.completed ? (
                <div className="flex justify-center items-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {completedTasks.length === 0 ? (
                    <div className="text-center py-8 text-gray-400">
                      No hay tareas completadas para esta planta
                    </div>
                  ) : (
                    completedTasks.map(task => (
                      <div 
                        key={task.id} 
                        className="bg-[#111928] p-4 rounded-lg border border-[#374151] cursor-pointer hover:border-[#4a4ae2] transition-colors"
                        onClick={() => setSelectedTask(task)}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-medium">{task.title}</h3>
                          <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                            Completada
                          </div>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{task.description}</p>
                        <div className="flex justify-between text-xs">
                          <div className="flex items-center text-blue-400">
                            <CalendarClock size={14} className="mr-1" />
                            {format(parseISO(task.scheduledDate), "dd/MM/yyyy", { locale: es })}
                          </div>
                          <div className="flex items-center text-green-400">
                            <CheckSquare size={14} className="mr-1" />
                            {task.completionDate ? 
                              format(parseISO(task.completionDate), "dd/MM/yyyy", { locale: es }) : 
                              'Completada'}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Modal para detalles de tarea */}
      {selectedTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f2937] rounded-lg border border-[#374151] w-full max-w-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-white">{selectedTask.title}</h2>
                <button 
                  className="text-gray-400 hover:text-white p-1"
                  onClick={() => setSelectedTask(null)}
                  disabled={isUpdating}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Detalles de la tarea */}
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Descripción</h3>
                  <p className="text-white">{selectedTask.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Fecha programada</h3>
                    <p className="text-white">
                      {format(parseISO(selectedTask.scheduledDate), "dd/MM/yyyy HH:mm", { locale: es })}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Duración estimada</h3>
                    <p className="text-white">
                      {Math.floor(selectedTask.estimatedDuration / 60)}h {selectedTask.estimatedDuration % 60}min
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Prioridad</h3>
                    <p className={`
                      ${getPriorityText(selectedTask.priority).toLowerCase() === 'alta' ? 'text-red-400' : 
                        getPriorityText(selectedTask.priority).toLowerCase() === 'media' ? 'text-yellow-400' : 
                        'text-green-400'}
                    `}>
                      {getPriorityText(selectedTask.priority)}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Estado</h3>
                    <p className={`
                      ${selectedTask.status.includes('Pendiente') || selectedTask.status.includes('pending') ? 'text-blue-400' : 
                       selectedTask.status.includes('Proceso') || selectedTask.status.includes('progress') ? 'text-yellow-400' : 
                       'text-green-400'}
                    `}>
                      {selectedTask.status.includes('Pendiente') || selectedTask.status.includes('pending') ? 'Pendiente' : 
                       selectedTask.status.includes('Proceso') || selectedTask.status.includes('progress') ? 'En Progreso' : 
                       'Completada'}
                    </p>
                  </div>
                </div>
                
                {/* Checklist */}
                {selectedTask.checklist && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Lista de verificación</h3>
                    <div className="space-y-2">
                      {selectedTask.checklist.map(item => (
                        <div key={item.id} className="flex items-center">
                          <div className="border border-[#374151] rounded w-5 h-5 mr-2 flex items-center justify-center">
                            {item.completed && <CheckSquare size={14} className="text-green-400" />}
                          </div>
                          <span className="text-sm">{item.task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Dispositivos involucrados */}
                {selectedTask.devices && selectedTask.devices.length > 0 && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-2">Dispositivos involucrados</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedTask.devices.map(deviceId => (
                        <div key={deviceId} className="bg-[#111928] px-3 py-1 rounded-full text-xs">
                          {deviceId}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Notas adicionales si existen */}
                {selectedTask.notes && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Notas adicionales</h3>
                    <p className="text-white text-sm">{selectedTask.notes}</p>
                  </div>
                )}
                
                {/* Botones de acción */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#374151]">
                  <Button 
                    variant="outline" 
                    className="border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
                    onClick={() => setSelectedTask(null)}
                    disabled={isUpdating}
                  >
                    Cerrar
                  </Button>
                  
                  {/* Mostrar botón según estado */}
                  {(selectedTask.status.includes('Pendiente') || selectedTask.status.includes('pending')) && (
                    <Button 
                      className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
                      onClick={() => handleStartTask(selectedTask)}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <>
                          <RefreshCw size={16} className="mr-2 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Play size={16} className="mr-2" />
                          Iniciar tarea
                        </>
                      )}
                    </Button>
                  )}
                  
                  {(selectedTask.status.includes('Proceso') || selectedTask.status.includes('progress')) && (
                    <Button 
                      className="bg-green-600 text-white hover:bg-green-700"
                      onClick={() => handleCompleteTask(selectedTask)}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <>
                          <RefreshCw size={16} className="mr-2 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <CheckSquare size={16} className="mr-2" />
                          Marcar como completada
                        </>
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}