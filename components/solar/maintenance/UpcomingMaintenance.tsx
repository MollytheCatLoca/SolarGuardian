"use client";

import React, { useState, useEffect } from 'react';
import { MaintenanceTask } from '@/types/maintenanceTypes';
import { CalendarClock, ChevronRight } from 'lucide-react';
import { format, isToday, isTomorrow, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

// Import the maintenance service
import { getMaintenanceTasksByStatus } from '@/lib/services/maintenanceService';

export default function UpcomingMaintenance({ plantId }: { plantId: number }) {
  const [upcomingTasks, setUpcomingTasks] = useState<MaintenanceTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadTasks = async () => {
      try {
        setIsLoading(true);
        // Fetch pending maintenance tasks for the specified plant
        const tasks = await getMaintenanceTasksByStatus('Pendiente', plantId);
        // Sort them by scheduled date
        const sortedTasks = tasks.sort((a, b) => 
          new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
        );
        setUpcomingTasks(sortedTasks);
      } catch (error) {
        console.error('Error loading maintenance tasks:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadTasks();
  }, [plantId]);
  
  // Función para formatear la fecha
  const formatScheduledDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, 'dd/MM/yyyy HH:mm', { locale: es });
  };
  
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
    switch (priority) {
      case 'high':
      case 'Alta':
        return 'bg-purple-500';
      case 'medium':
      case 'Media':
        return 'bg-blue-500';
      case 'low':
      case 'Baja':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  // Función para obtener estilo de badge según fecha
  const getTimeBadgeStyles = (dateString: string) => {
    const now = new Date();
    const taskDate = new Date(dateString);
    
    if (isToday(taskDate)) {
      return 'bg-red-500/20 text-red-400';
    } else if (isTomorrow(taskDate)) {
      return 'bg-blue-500/20 text-blue-400';
    } else {
      return 'bg-purple-500/20 text-purple-400';
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (upcomingTasks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8">
        <div className="bg-green-500/20 text-green-400 p-2 rounded-full mb-2">
          <CalendarClock size={24} />
        </div>
        <p className="text-sm text-gray-400">No hay tareas programadas</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3 max-h-[300px] overflow-auto pr-1">
      {upcomingTasks.map((task) => (
        <div 
          key={task.id} 
          className="bg-[#111928] p-3 rounded-md flex items-center"
        >
          <div className={`w-2 h-10 ${getPriorityColor(task.priority)} rounded-full mr-3`}></div>
          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-medium text-sm">{task.description}</h4>
              <span className={`text-xs px-2 py-1 rounded-full ${getTimeBadgeStyles(task.scheduledDate)}`}>
                {getRelativeTime(task.scheduledDate)}
              </span>
            </div>
            <p className="text-xs text-gray-400 mt-1">
              Programado para {format(new Date(task.scheduledDate), 'HH:mm', { locale: es })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}