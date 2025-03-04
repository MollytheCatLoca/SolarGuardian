"use client";

import React, { useState, useEffect } from 'react';
import { getAlarmsByStatus } from '@/lib/services/alarmService';
import { Alarm } from '@/types/alarmTypes';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export default function ActiveAlerts({ plantId }: { plantId: number }) {
  const [activeAlerts, setActiveAlerts] = useState<Alarm[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadAlerts = async () => {
      try {
        setIsLoading(true);
        const alerts = await getAlarmsByStatus('Activa', plantId);
        setActiveAlerts(alerts);
      } catch (error) {
        console.error('Error loading alerts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadAlerts();
  }, [plantId]);
  
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
      case 'critical':
      case 'Crítica':
        return 'border-red-600 text-red-500';
      case 'high':
      case 'Mayor':
        return 'border-red-500 text-red-500';
      case 'medium':
      case 'Menor':
        return 'border-yellow-500 text-yellow-500';
      case 'low':
      case 'Advertencia':
        return 'border-orange-500 text-orange-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };
  
  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  if (activeAlerts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full py-8">
        <div className="bg-green-500/20 text-green-400 p-2 rounded-full mb-2">
          <AlertTriangle size={24} />
        </div>
        <p className="text-sm text-gray-400">No hay alertas activas</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3 max-h-[300px] overflow-auto pr-1">
      {activeAlerts.map((alert) => (
        <div 
          key={alert.id} 
          className={`bg-[#111928] p-3 rounded-md border-l-4 ${getSeverityColor(alert.level)}`}
        >
          <div className="flex justify-between items-start mb-1">
            <div className="flex-1">
              <h4 className="font-medium text-sm">{alert.description}</h4>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full bg-opacity-20 ${getSeverityColor(alert.level).replace('border-', 'bg-').replace('text-', 'text-')}`}>
              {alert.level}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xs text-gray-400">Detectado {formatTimeAgo(alert.alarmDate)}</p>
            <button className="text-xs text-[#4a4ae2] flex items-center">
              Detalles <ChevronRight size={12} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}