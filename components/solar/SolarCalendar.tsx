"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { es } from 'date-fns/locale';
import { MaintenanceTask } from '@/types/solarTypes';
import { 
  CalendarClock, 
  CheckSquare, 
  ClipboardList, 
  Clock, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight,
  RefreshCw,
  Wrench,
  X
} from 'lucide-react';
import { format, parseISO, isSameDay, addMonths, subMonths, isToday, isFuture } from 'date-fns';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

// Importar los servicios de mantenimiento
import { 
  getAllMaintenanceTasks, 
  getMaintenanceTasksByStatus
} from '@/lib/services/maintenanceService';

interface SolarCalendarProps {
  plantId?: number;
}

export default function SolarCalendar({ plantId }: SolarCalendarProps) {
  const params = useParams();
  const resolvedPlantId = plantId || (params.plantId ? parseInt(params.plantId as string) : null);
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'agenda'>('month');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Estado para las tareas de mantenimiento
  const [maintenanceTasks, setMaintenanceTasks] = useState<MaintenanceTask[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  
  // Función para cargar todas las tareas de mantenimiento
  const loadAllTasks = useCallback(async () => {
    if (!resolvedPlantId) return;
    
    try {
      setIsLoading(true);
      setError(null);
      
      // Obtener todas las tareas para la planta
      const tasks = await getAllMaintenanceTasks(resolvedPlantId);
      setMaintenanceTasks(tasks);
      setLastUpdate(new Date());
    } catch (err) {
      console.error("Error cargando tareas de mantenimiento:", err);
      setError("Error al cargar tareas de mantenimiento. Intente nuevamente.");
    } finally {
      setIsLoading(false);
    }
  }, [resolvedPlantId]);
  
  // Cargar datos cuando cambia la planta
  useEffect(() => {
    if (resolvedPlantId) {
      loadAllTasks();
    } else {
      console.error("No se encontró un ID de planta válido");
      setError("No se encontró un ID de planta válido");
    }
  }, [resolvedPlantId, loadAllTasks]);
  
  // Procesar las fechas de mantenimiento para el calendario
  const events = maintenanceTasks.map(task => ({
    ...task,
    date: parseISO(task.scheduledDate),
    type: 'maintenance'
  }));
  
  // Función para obtener eventos del día seleccionado
  const getEventsForSelectedDate = () => {
    if (!selectedDate) return [];
    return events.filter(event => isSameDay(event.date, selectedDate));
  };
  
  // Función para verificar si un día tiene eventos
  const hasDayEvent = (day: Date) => {
    return events.some(event => isSameDay(event.date, day));
  };
  
  // Función para obtener la clase de prioridad de un día
  const getDayClass = (day: Date) => {
    const dayEvents = events.filter(event => isSameDay(event.date, day));
    
    // Priorizar los eventos por importancia
    if (dayEvents.some(event => event.priority === 'high')) {
      return 'bg-red-500/20 text-red-400';
    } else if (dayEvents.some(event => event.priority === 'medium')) {
      return 'bg-yellow-500/20 text-yellow-400';
    } else if (dayEvents.length > 0) {
      return 'bg-blue-500/20 text-blue-400';
    }
    
    return '';
  };
  
  const selectedDateEvents = getEventsForSelectedDate();
  
  // Función para obtener ícono por tipo de tarea
  const getTaskIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <CalendarClock size={16} className="text-blue-400" />;
      case 'in-progress':
        return <ClipboardList size={16} className="text-yellow-400" />;
      case 'completed':
        return <CheckSquare size={16} className="text-green-400" />;
      default:
        return <CalendarClock size={16} className="text-gray-400" />;
    }
  };
  
  // Función para obtener clase de prioridad
  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400 border-red-400';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-400';
      case 'low':
        return 'bg-green-500/20 text-green-400 border-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-400';
    }
  };
  
  // Función para obtener etiqueta de prioridad
  const getPriorityText = (priority: string) => {
    switch (priority) {
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
  
  // Función para generar el calendario manualmente
  const renderCalendar = () => {
    const monthStart = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
    const startDay = monthStart.getDay(); // 0 = domingo, 1 = lunes, etc.
    
    // Ajuste para que la semana comience en lunes (0 = lunes, 6 = domingo)
    const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;
    
    // Nombres de los días de la semana
    const weekDays = ['lu', 'ma', 'mi', 'ju', 'vi', 'sá', 'do'];
    
    // Obtener días del mes anterior para llenar la primera semana
    const daysFromPrevMonth = adjustedStartDay;
    const prevMonthDays = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
    
    // Obtener días del mes siguiente para completar la última semana
    const totalDaysDisplayed = Math.ceil((daysInMonth + adjustedStartDay) / 7) * 7;
    const daysFromNextMonth = totalDaysDisplayed - daysInMonth - daysFromPrevMonth;
    
    // Crear array con todos los días a mostrar
    const calendarDays = [];
    
    // Días del mes anterior
    for (let i = prevMonthDays - daysFromPrevMonth + 1; i <= prevMonthDays; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, i);
      calendarDays.push({
        date,
        day: i,
        isCurrentMonth: false,
        isToday: isSameDay(date, new Date()),
        hasEvent: hasDayEvent(date),
        isSelected: selectedDate && isSameDay(date, selectedDate),
        className: getDayClass(date)
      });
    }
    
    // Días del mes actual
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i);
      calendarDays.push({
        date,
        day: i,
        isCurrentMonth: true,
        isToday: isSameDay(date, new Date()),
        hasEvent: hasDayEvent(date),
        isSelected: selectedDate && isSameDay(date, selectedDate),
        className: getDayClass(date)
      });
    }
    
    // Días del mes siguiente
    for (let i = 1; i <= daysFromNextMonth; i++) {
      const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, i);
      calendarDays.push({
        date,
        day: i,
        isCurrentMonth: false,
        isToday: isSameDay(date, new Date()),
        hasEvent: hasDayEvent(date),
        isSelected: selectedDate && isSameDay(date, selectedDate),
        className: getDayClass(date)
      });
    }
    
    // Agrupar los días en semanas
    const weeks = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
    }
    
    return (
      <div className="calendar-container">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            className="p-2 rounded-full hover:bg-[#111928]"
          >
            <ChevronLeft size={20} />
          </button>
          
          <h3 className="text-lg font-medium">
            {format(currentMonth, "MMMM yyyy", { locale: es })}
          </h3>
          
          <button 
            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            className="p-2 rounded-full hover:bg-[#111928]"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {weekDays.map((day, i) => (
            <div key={i} className="text-gray-400 font-medium text-sm py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {weeks.flat().map((day, i) => (
            <button
              key={i}
              onClick={() => setSelectedDate(day.date)}
              className={`
                p-2 rounded-md text-center relative min-h-[40px]
                ${!day.isCurrentMonth ? 'text-gray-600' : ''}
                ${day.isToday ? 'bg-[#4a4ae2]/20 text-white' : ''}
                ${day.isSelected ? 'bg-[#4a4ae2] text-white' : ''}
                ${day.hasEvent && !day.isSelected ? day.className : ''}
                hover:bg-[#111928]
              `}
            >
              <span className="block">{day.day}</span>
              {day.hasEvent && (
                <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-current"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Calendario</h2>
          <p className="text-sm text-gray-400">Programación de mantenimiento y eventos del parque solar</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={loadAllTasks}
            disabled={isLoading}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Mostrar mensaje de error si existe */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
          <AlertTriangle className="mr-2" size={16} />
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendario */}
        <Card className="bg-[#1f2937] border-[#374151] text-white lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Calendario de Eventos</CardTitle>
            <div className="flex space-x-2">
              <button 
                onClick={() => setViewMode('month')} 
                className={`px-3 py-1 text-sm rounded-md ${viewMode === 'month' ? 'bg-[#4a4ae2] text-white' : 'bg-[#111928] text-gray-400'}`}
              >
                Mes
              </button>
              <button 
                onClick={() => setViewMode('agenda')} 
                className={`px-3 py-1 text-sm rounded-md ${viewMode === 'agenda' ? 'bg-[#4a4ae2] text-white' : 'bg-[#111928] text-gray-400'}`}
              >
                Agenda
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : viewMode === 'month' ? (
              <div className="p-1">
                {renderCalendar()}
              </div>
            ) : (
              <div className="h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                <div className="space-y-4">
                  {events.length > 0 ? (
                    events
                      .sort((a, b) => a.date.getTime() - b.date.getTime())
                      .map((event, index) => (
                        <div 
                          key={index} 
                          className={`p-3 border-l-4 rounded-r-md ${
                            event.priority === 'high' ? 'border-red-500 bg-[#111928]' : 
                            event.priority === 'medium' ? 'border-yellow-500 bg-[#111928]' : 
                            'border-blue-500 bg-[#111928]'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex items-start">
                              <div className="mr-3">
                                {getTaskIcon(event.status)}
                              </div>
                              <div>
                                <p className="font-medium text-sm">{event.title}</p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {format(event.date, "dd 'de' MMMM, HH:mm", { locale: es })}
                                </p>
                              </div>
                            </div>
                            <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityClass(event.priority)}`}>
                              {getPriorityText(event.priority)}
                            </span>
                          </div>
                          
                          <div className="flex justify-between items-center mt-3">
                            <div className="flex items-center text-xs text-gray-400">
                              <span className="mr-2">Duración:</span>
                              <span>{Math.floor(event.estimatedDuration / 60)}h {event.estimatedDuration % 60}min</span>
                            </div>
                            <Link 
                              href={`/dashboard/${resolvedPlantId}/maintenance?id=${event.id}`}
                              className="text-xs text-[#4a4ae2] hover:text-[#6b6bf5] flex items-center"
                            >
                              Ver detalles
                            </Link>
                          </div>
                        </div>
                      ))
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 py-12">
                      No hay eventos programados
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Detalles del día seleccionado */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>
              {selectedDate 
                ? format(selectedDate, "d 'de' MMMM, yyyy", { locale: es })
                : "Detalles del día"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 custom-scrollbar">
                {selectedDateEvents.map((event, index) => (
                  <div key={index} className="border-b border-[#374151] pb-4 last:border-b-0 last:pb-0">
                    <div className="flex items-start">
                      <div className="mr-3">
                        {getTaskIcon(event.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <p className="text-sm font-medium">{event.title}</p>
                          <span className={`text-xs px-2 py-0.5 rounded-full border ${getPriorityClass(event.priority)}`}>
                            {getPriorityText(event.priority)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 mt-1">{format(event.date, "HH:mm", { locale: es })}</p>
                        <p className="text-xs text-gray-300 mt-2">{event.description}</p>
                        
                        {/* Detalles adicionales */}
                        <div className="mt-3 bg-[#111928] p-3 rounded-md">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Duración estimada:</span>
                            <span className="text-white">
                              {Math.floor(event.estimatedDuration / 60)}h {event.estimatedDuration % 60}min
                            </span>
                          </div>
                          
                          <div className="flex justify-between text-xs mt-2">
                            <span className="text-gray-400">Asignado a:</span>
                            <span className="text-white">{event.assignedTo || 'Sin asignar'}</span>
                          </div>
                          
                          <div className="flex justify-between text-xs mt-2">
                            <span className="text-gray-400">Dispositivos:</span>
                            <span className="text-white">{event.devices.length} dispositivo(s)</span>
                          </div>
                        </div>
                        
                        {/* Checklist */}
                        {event.checklist && event.checklist.length > 0 && (
                          <div className="mt-3">
                            <p className="text-xs font-medium text-gray-400 mb-2">Lista de verificación:</p>
                            <div className="space-y-1">
                              {event.checklist.map((item, i) => (
                                <div key={i} className="flex items-center text-xs">
                                  <div className={`w-3 h-3 rounded-sm border ${item.completed ? 'bg-green-500 border-green-500' : 'border-gray-500'} mr-2`}></div>
                                  <span className={item.completed ? 'text-green-400 line-through' : 'text-gray-300'}>
                                    {item.task}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="mt-3 flex justify-end">
                          <Link 
                            href={`/dashboard/${resolvedPlantId}/maintenance?id=${event.id}`}
                            className="text-xs text-[#4a4ae2] hover:text-[#6b6bf5] flex items-center"
                          >
                            Ver detalles completos
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <CalendarClock size={32} className="mb-2 text-gray-500" />
                <p>No hay eventos programados para este día</p>
                <Link href={`/dashboard/${resolvedPlantId}/maintenance`}>
                  <Button className="mt-4 bg-[#4a4ae2] text-white px-3 py-1 rounded-md text-sm hover:bg-[#3b3be0]">
                    <Wrench size={14} className="mr-2" />
                    Gestionar mantenimiento
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Resumen de actividades próximas */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Próximas Actividades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#111928] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">Mantenimiento</h3>
                <CalendarClock size={16} className="text-blue-400" />
              </div>
              <p className="text-2xl font-bold">
                {maintenanceTasks.filter(t => t.status === 'pending').length}
              </p>
              <p className="text-xs text-gray-400 mt-1">Tareas pendientes</p>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">Tareas Prioritarias</h3>
                <AlertTriangle size={16} className="text-red-400" />
              </div>
              <p className="text-2xl font-bold">
                {maintenanceTasks.filter(t => t.priority === 'high' && t.status === 'pending').length}
              </p>
              <p className="text-xs text-gray-400 mt-1">Alta prioridad</p>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium">Próximo Mantenimiento</h3>
                <Clock size={16} className="text-yellow-400" />
              </div>
              {
                maintenanceTasks
                  .filter(t => t.status === 'pending' && isFuture(parseISO(t.scheduledDate)))
                  .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())
                  .length > 0 ? (
                <>
                  <p className="text-sm font-medium truncate">
                    {maintenanceTasks
                      .filter(t => t.status === 'pending' && isFuture(parseISO(t.scheduledDate)))
                      .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())[0]?.title}
                  </p>
                  <p className="text-xs text-yellow-400 mt-1">
                    {maintenanceTasks
                      .filter(t => t.status === 'pending' && isFuture(parseISO(t.scheduledDate)))
                      .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())[0]?.scheduledDate
                      ? format(
                          parseISO(maintenanceTasks
                            .filter(t => t.status === 'pending' && isFuture(parseISO(t.scheduledDate)))
                            .sort((a, b) => new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime())[0]?.scheduledDate),
                          "dd/MM/yyyy", { locale: es }
                        )
                      : 'Fecha no disponible'
                    }
                  </p>
                </>
              ) : (
                <>
                  <p className="text-sm font-medium">Sin tareas</p>
                  <p className="text-xs text-gray-400 mt-1">Programadas</p>
                </>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}