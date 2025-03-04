"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { getAlarmsByStatus } from '@/lib/services/alarmService';
import { Alarm } from '@/types/alarmTypes';
import { AlertTriangle, ChevronRight, AlertCircle, ExternalLink } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';

interface ActiveAlertsProps {
  plantId: number;
}

export default function ActiveAlerts({ plantId }: ActiveAlertsProps) {
  const [activeAlerts, setActiveAlerts] = useState<Alarm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Usar useCallback para memoizar la función y evitar recreaciones innecesarias
  const loadAlerts = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      console.log(`Cargando alertas para la planta ID: ${plantId}`);
      const alerts = await getAlarmsByStatus('Activa', plantId);
      setActiveAlerts(alerts);
    } catch (error) {
      console.error('Error loading alerts:', error);
      setError('No se pudieron cargar las alertas. Intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, [plantId]);
  
  // Efecto para cargar alertas cuando cambia la planta
  useEffect(() => {
    loadAlerts();
  }, [loadAlerts, plantId]);
  
  // Función para formatear el tiempo transcurrido
  const formatTimeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { 
      addSuffix: true,
      locale: es
    });
  };
  
  // Función para obtener colores según la severidad
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítica':
        return 'border-red-600 text-red-600';
      case 'Mayor':
        return 'border-red-500 text-red-500';
      case 'Menor':
        return 'border-yellow-500 text-yellow-500';
      case 'Advertencia':
        return 'border-blue-500 text-blue-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };
  
  // Función para obtener icono según severidad
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Crítica':
      case 'Mayor':
        return <AlertCircle size={16} className="text-red-500" />;
      case 'Menor':
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case 'Advertencia':
        return <AlertTriangle size={16} className="text-blue-500" />;
      default:
        return <AlertTriangle size={16} className="text-gray-500" />;
    }
  };
  
  // Renderizado para estado de carga
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  // Renderizado para estado de error
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8">
        <div className="bg-red-500/20 text-red-400 p-2 rounded-full mb-2">
          <AlertCircle size={24} />
        </div>
        <p className="text-sm text-gray-400 mb-4">{error}</p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={loadAlerts}
          className="bg-[#1f2937] border-[#374151] text-white"
        >
          Reintentar
        </Button>
      </div>
    );
  }
  
  // Renderizado para cuando no hay alertas
  if (activeAlerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8">
        <div className="bg-green-500/20 text-green-400 p-2 rounded-full mb-2">
          <AlertTriangle size={24} />
        </div>
        <p className="text-sm text-gray-400">No hay alertas activas para esta planta</p>
      </div>
    );
  }
  
  // Renderizado normal con alertas
  return (
    <div className="space-y-3 max-h-[300px] overflow-auto pr-1">
      {activeAlerts.map((alert) => (
        <div 
          key={alert.id} 
          className={`bg-[#111928] p-3 rounded-md border-l-4 ${getSeverityColor(alert.level)}`}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="flex items-start">
              <div className="mr-2 mt-0.5">
                {getSeverityIcon(alert.level)}
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{alert.description}</h4>
                <p className="text-xs text-gray-400">Dispositivo: {alert.deviceId}</p>
              </div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full bg-opacity-20 ${getSeverityColor(alert.level).replace('border-', 'bg-').replace('text-', 'text-')}`}>
              {alert.level}
            </span>
          </div>
          <div className="flex justify-between items-center mt-2">
            <p className="text-xs text-gray-400">Detectado {formatTimeAgo(alert.alarmDate)}</p>
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-xs text-[#4a4ae2] p-0 h-auto hover:bg-transparent hover:text-[#6b6bf5]"
              onClick={() => window.location.href = `/dashboard/${plantId}/alerts?id=${alert.id}`}
            >
              Detalles <ExternalLink size={10} className="ml-1" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}