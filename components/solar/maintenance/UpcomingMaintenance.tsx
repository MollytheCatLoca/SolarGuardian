'use client';

import React from 'react';
import { CalendarClock, ChevronRight } from 'lucide-react';
import { dummyMaintenanceTasks } from '@/lib/solar/dummyData';
import { MaintenanceTask } from '@/types/solarTypes';
import { formatDistanceToNow, format, isToday, isTomorrow, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

export default function UpcomingMaintenance() {
  // Filtramos tareas pendientes y las ordenamos por fecha
  const upcomingTasks = dummyMaintenanceTasks
    .filter(task => task.status === 'pending')
    .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime());
  
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
        return 'bg-purple-500';
      case 'medium':
        return 'bg-blue-500';
      case 'low':
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
        <MaintenanceTaskCard
          key={task.id}
          task={task}
          formatScheduledDate={formatScheduledDate}
          getRelativeTime={getRelativeTime}
          getPriorityColor={getPriorityColor}
          getTimeBadgeStyles={getTimeBadgeStyles}
        />
      ))}
    </div>
  );
}

interface MaintenanceTaskCardProps {
  task: MaintenanceTask;
  formatScheduledDate: (dateString: string) => string;
  getRelativeTime: (dateString: string) => string;
  getPriorityColor: (priority: string) => string;
  getTimeBadgeStyles: (dateString: string) => string;
}

function MaintenanceTaskCard({
  task,
  formatScheduledDate,
  getRelativeTime,
  getPriorityColor,
  getTimeBadgeStyles
}: MaintenanceTaskCardProps) {
  return (
    <div className="bg-[#111928] p-3 rounded-md flex items-center">
      <div className={`w-2 h-10 ${getPriorityColor(task.priority)} rounded-full mr-3`}></div>
      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-medium text-sm">{task.title}</h4>
          <span className={`text-xs px-2 py-1 rounded-full ${getTimeBadgeStyles(task.scheduledDate)}`}>
            {getRelativeTime(task.scheduledDate)}
          </span>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Programado para {format(new Date(task.scheduledDate), 'HH:mm', { locale: es })}
        </p>
      </div>
    </div>
  );
}