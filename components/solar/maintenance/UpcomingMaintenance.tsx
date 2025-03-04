"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { MaintenanceTask } from '@/types/solarTypes'; // Importar desde el mismo archivo que usa maintenance/page.tsx
import { CalendarClock, ChevronRight, RefreshCw, ExternalLink, Wrench, ClipboardCheck, AlertTriangle } from 'lucide-react';
import { format, isToday, isTomorrow, formatDistanceToNow, addDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

// Import the maintenance service
import { getMaintenanceTasksByStatus } from '@/lib/services/maintenanceService';

interface UpcomingMaintenanceProps {
  plantId: number;
}

export default function UpcomingMaintenance({ plantId }: UpcomingMaintenanceProps) {
  const [upcomingTasks, setUpcomingTasks] = useState<MaintenanceTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  
  // Usar useCallback para memoizar la función y evitar recreaciones innecesarias
  const loadTasks = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(`Cargando tareas de mantenimiento para la planta ID: ${plantId}`);
      
      // Obtener tareas pendientes para los próximos días
      const tasks = await getMaintenanceTasksByStatus('pending', plantId);
      
      // Filtrar solo tareas para los próximos 7 días
      const nextWeek = addDays(new Date(), 7);
      const filteredTasks = tasks.filter(task => {
        const taskDate = new Date(task.scheduledDate);
        return taskDate <= nextWeek;
      });
      
      // Ordenar por fecha programada (más próximas primero)
      const sortedTasks = filteredTasks.sort((a, b) => 
        new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
      );
      
      setUpcomingTasks(sortedTasks);
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error loading maintenance tasks:', error);
      setError('No se pudieron cargar las tareas de mantenimiento. Intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, [plantId]);
  
  // Efecto para cargar tareas cuando cambia la planta
  useEffect(() => {
    loadTasks();
    
    // Opcional: Actualizar cada 5 minutos
    const intervalId = setInterval(() => {
      loadTasks();
    }, 5 * 60 * 1000);
    
    return () => clearInterval(intervalId);
  }, [loadTasks, plantId]);
  
  // Función para obtener texto relativo (mañana, en 3 días, etc.)
  const getRelativeTime = (dateString: string) => {
    const now = new Date();
    const taskDate = new Date(dateString);
    
    if (isToday(taskDate)) {
      return 'Hoy';
    } else if (isTomorrow(taskDate)) {
      return 'Mañana';
    } else {
      // Calcular diferencia en días
      const diffTime = taskDate.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 7) {
        return `En ${diffDays} días`;
      } else {
        return format(taskDate, 'dd/MM/yyyy', { locale: es });
      }
    }
  };
  
  // Función para obtener color según prioridad
  const getPriorityColor = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'alta':
      case 'high':
        return 'bg-red-500';
      case 'media':
      case 'medium':
        return 'bg-yellow-500';
      case 'baja':
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  // Función para obtener etiqueta de prioridad
  const getPriorityLabel = (priority: string) => {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'Alta';
      case 'medium':
        return 'Media';
      case 'low':
        return 'Baja';
      default:
        return priority;
    }
  };
  
  // Función para obtener estilo de badge según fecha
  const getTimeBadgeStyles = (dateString: string) => {
    const now = new Date();
    const taskDate = new Date(dateString);
    const threeDaysFromNow = addDays(now, 3);
    
    if (isToday(taskDate)) {
      return 'bg-red-500/20 text-red-400';
    } else if (isTomorrow(taskDate)) {
      return 'bg-orange-500/20 text-orange-400';
    } else if (taskDate <= threeDaysFromNow) {
      return 'bg-yellow-500/20 text-yellow-400';
    } else {
      return 'bg-blue-500/20 text-blue-400';
    }
  };
  
  // Renderizado para contenedor principal
  return (
    <Card className="bg-[#1f2937] border-[#374151] shadow-md">
      <CardHeader className="py-4 px-5 flex flex-row items-center justify-between">
        <CardTitle className="text-md text-white">Próximos Mantenimientos</CardTitle>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={loadTasks}
          disabled={isLoading}
          className="h-8 bg-[#111928] border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
        >
          <RefreshCw size={14} className={`mr-1 ${isLoading ? 'animate-spin' : ''}`} />
          Actualizar
        </Button>
      </CardHeader>
      <CardContent className="px-5 pb-4 pt-0">
        {/* Estado de carga */}
        {isLoading && upcomingTasks.length === 0 && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}
        
        {/* Estado de error */}
        {error && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-red-500/20 text-red-400 p-2 rounded-full mb-2">
              <AlertTriangle size={24} />
            </div>
            <p className="text-sm text-gray-400 mb-4 text-center">{error}</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={loadTasks}
              className="bg-[#111928] border-[#374151] text-white hover:bg-[#374151]"
            >
              Reintentar
            </Button>
          </div>
        )}
        
        {/* Sin tareas */}
        {!isLoading && !error && upcomingTasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="bg-green-500/20 text-green-400 p-2 rounded-full mb-2">
              <ClipboardCheck size={24} />
            </div>
            <p className="text-sm text-gray-400 text-center">No hay tareas de mantenimiento programadas para los próximos 7 días</p>
          </div>
        )}
        
        {/* Lista de tareas */}
        {!isLoading && !error && upcomingTasks.length > 0 && (
          <div className="space-y-3 max-h-[330px] overflow-auto pr-1 custom-scrollbar">
            {upcomingTasks.map((task) => (
              <div 
                key={task.id} 
                className="bg-[#111928] p-3 rounded-md flex items-start hover:bg-[#1a2434] transition-colors"
              >
                <div className={`w-2 h-full min-h-[40px] ${getPriorityColor(task.priority)} rounded-full mr-3 self-stretch`}></div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-start">
                      <div className="mr-2 mt-0.5">
                        <Wrench size={16} className="text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{task.title || task.description}</h4>
                        <div className="flex flex-col text-xs text-gray-400">
                          <span>Tipo: {task.type?.toLowerCase() === 'preventivo' || task.type?.toLowerCase() === 'preventive' 
                            ? <span className="text-green-400">Preventivo</span> 
                            : <span className="text-yellow-400">Correctivo</span>}
                          </span>
                          <span>ID: {task.id}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className={`text-xs px-2 py-1 rounded-full ${getTimeBadgeStyles(task.scheduledDate)}`}>
                        {getRelativeTime(task.scheduledDate)}
                      </span>
                      <span className="text-xs mt-1 text-gray-400">
                        Prioridad: <span className={`${
                          task.priority.toLowerCase() === 'high' || task.priority.toLowerCase() === 'alta' ? 'text-red-400' :
                          task.priority.toLowerCase() === 'medium' || task.priority.toLowerCase() === 'media' ? 'text-yellow-400' :
                          'text-green-400'
                        }`}>{getPriorityLabel(task.priority)}</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center text-xs text-gray-400">
                      <CalendarClock size={14} className="mr-1" />
                      <p>{format(new Date(task.scheduledDate), 'dd/MM HH:mm', { locale: es })}</p>
                    </div>
                    <Link 
                      href={`/dashboard/${plantId}/maintenance?id=${task.id}`}
                      className="text-xs text-[#4a4ae2] p-0 h-auto hover:text-[#6b6bf5] flex items-center"
                    >
                      Detalles <ExternalLink size={10} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}