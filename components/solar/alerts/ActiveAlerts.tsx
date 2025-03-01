'use client';

import React from 'react';
import { AlertTriangle, ChevronRight } from 'lucide-react';
import { dummyAlerts } from '@/lib/solar/dummyData';
import { Alert } from '@/types/solarTypes';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export default function ActiveAlerts() {
  // Filtramos solo las alertas activas
  const activeAlerts = dummyAlerts.filter(alert => alert.status === 'active');
  
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
        return 'border-red-600 text-red-500';
      case 'high':
        return 'border-red-500 text-red-500';
      case 'medium':
        return 'border-yellow-500 text-yellow-500';
      case 'low':
        return 'border-orange-500 text-orange-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };
  
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
        <AlertCard key={alert.id} alert={alert} formatTimeAgo={formatTimeAgo} getSeverityColor={getSeverityColor} />
      ))}
    </div>
  );
}

interface AlertCardProps {
  alert: Alert;
  formatTimeAgo: (timestamp: string) => string;
  getSeverityColor: (severity: string) => string;
}

function AlertCard({ alert, formatTimeAgo, getSeverityColor }: AlertCardProps) {
  return (
    <div className={`bg-[#111928] p-3 rounded-md border-l-4 ${getSeverityColor(alert.severity)}`}>
      <div className="flex justify-between items-start mb-1">
        <div className="flex-1">
          <h4 className="font-medium text-sm">{alert.deviceName} - {alert.message}</h4>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full bg-opacity-20 ${getSeverityColor(alert.severity).replace('border-', 'bg-').replace('text-', 'text-')}`}>
          {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">Detectado {formatTimeAgo(alert.timestamp)}</p>
        <button className="text-xs text-[#4a4ae2] flex items-center">
          Detalles <ChevronRight size={12} />
        </button>
      </div>
    </div>
  );
}