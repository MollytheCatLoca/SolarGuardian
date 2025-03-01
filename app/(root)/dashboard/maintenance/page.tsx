"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { dummyMaintenanceTasks } from '@/lib/solar/dummyData';
import { MaintenanceTask } from '@/types/solarTypes';
import { CalendarClock, CheckSquare, ClipboardList, Clock, AlertCircle } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export default function MaintenancePage() {
  // Filtrar tareas según su estado
  const pendingTasks = dummyMaintenanceTasks.filter(task => task.status === 'pending');
  const inProgressTasks = dummyMaintenanceTasks.filter(task => task.status === 'in-progress');
  const completedTasks = dummyMaintenanceTasks.filter(task => task.status === 'completed');
  
  // Estado para la tarea seleccionada
  const [selectedTask, setSelectedTask] = useState<MaintenanceTask | null>(null);
  
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción */}
      <div>
      
        <p className="text-sm text-gray-400">Planificación y seguimiento de tareas de mantenimiento preventivo y correctivo</p>
      </div>
      
      {/* Pestañas para diferentes vistas */}
      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151]">
          <TabsTrigger 
            value="pending"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Pendientes ({pendingTasks.length})
          </TabsTrigger>
          <TabsTrigger 
            value="in-progress"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            En Progreso ({inProgressTasks.length})
          </TabsTrigger>
          <TabsTrigger 
            value="completed"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Completadas ({completedTasks.length})
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
                    <h2 className="text-2xl font-bold">{pendingTasks.length}</h2>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <ClipboardList size={24} className="text-blue-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Próxima tarea */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Próxima tarea</p>
                    <h2 className="text-lg font-bold truncate">
                      {pendingTasks.length > 0 ? pendingTasks[0].title : 'No hay tareas'}
                    </h2>
                    <p className="text-xs text-yellow-400 mt-1">
                      {pendingTasks.length > 0 
                        ? format(parseISO(pendingTasks[0].scheduledDate), "dd/MM/yyyy HH:mm", { locale: es })
                        : ''}
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
                          {pendingTasks.filter(t => t.priority === 'high').length}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-yellow-400">Media</p>
                        <p className="text-xs font-medium">
                          {pendingTasks.filter(t => t.priority === 'medium').length}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-green-400">Baja</p>
                        <p className="text-xs font-medium">
                          {pendingTasks.filter(t => t.priority === 'low').length}
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
              <div className="space-y-4">
                {pendingTasks.length === 0 ? (
                  <div className="text-center py-8 text-gray-400">
                    No hay tareas pendientes programadas
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
                          ${task.priority === 'high' ? 'bg-red-500/20 text-red-400' : 
                            task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' : 
                            'bg-green-500/20 text-green-400'}
                        `}>
                          {task.priority === 'high' ? 'Alta' : 
                           task.priority === 'medium' ? 'Media' : 'Baja'}
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
              <div className="text-center py-8 text-gray-400">
                No hay tareas en progreso actualmente
              </div>
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
              <div className="text-center py-8 text-gray-400">
                No hay tareas completadas
              </div>
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
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedTask(null)}
                >
                  ✕
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
                      ${selectedTask.priority === 'high' ? 'text-red-400' : 
                        selectedTask.priority === 'medium' ? 'text-yellow-400' : 
                        'text-green-400'}
                    `}>
                      {selectedTask.priority === 'high' ? 'Alta' : 
                       selectedTask.priority === 'medium' ? 'Media' : 'Baja'}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Estado</h3>
                    <p className="text-blue-400">Pendiente</p>
                  </div>
                </div>
                
                {/* Checklist */}
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
                
                {/* Dispositivos involucrados */}
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
                
                {/* Botones de acción */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#374151]">
                  <button 
                    className="px-4 py-2 rounded-lg border border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
                    onClick={() => setSelectedTask(null)}
                  >
                    Cerrar
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-[#4a4ae2] text-white">
                    Iniciar tarea
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}