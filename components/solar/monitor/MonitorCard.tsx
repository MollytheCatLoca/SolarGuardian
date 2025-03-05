import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  SunDim, 
  Battery, 
  Server, 
  Activity,
  AlertTriangle,
  Wrench
} from 'lucide-react';

interface MonitorCardProps { 
  title: string;
  value: string;
  subText: string;
  icon: 'power' | 'energy' | 'battery' | 'devices' | 'warning' | 'error' | 'maintenance' | 'other';
  trendUp?: boolean;
  trendColor?: boolean;
}

/**
 * Componente de tarjeta para mostrar métricas en la página de monitoreo
 */
export function MonitorCard({ 
  title, 
  value, 
  subText, 
  icon,
  trendUp,
  trendColor = true
}: MonitorCardProps) {
  // Función para obtener el ícono según el tipo
  const getIcon = () => {
    const iconSize = 24;
    
    switch (icon) {
      case 'power':
        return <Zap size={iconSize} className="text-yellow-400" />;
      case 'energy':
        return <SunDim size={iconSize} className="text-yellow-400" />;
      case 'battery':
        return <Battery size={iconSize} className="text-blue-400" />;
      case 'devices':
        return <Server size={iconSize} className="text-gray-400" />;
      case 'warning':
        return <AlertTriangle size={iconSize} className="text-yellow-500" />;
      case 'error':
        return <AlertTriangle size={iconSize} className="text-red-500" />;
      case 'maintenance':
        return <Wrench size={iconSize} className="text-blue-500" />;
      default:
        return <Activity size={iconSize} className="text-blue-400" />;
    }
  };
  
  // Determinar clase de color para el texto de tendencia
  const trendClass = trendColor 
    ? (trendUp === undefined 
        ? 'text-gray-400' 
        : (trendUp ? 'text-green-400' : 'text-red-400'))
    : 'text-gray-400';
  
  return (
    <Card className="bg-[#1f2937] border-[#374151] text-white">
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-400">{title}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
            <p className={`text-xs ${trendClass} mt-1`}>
              {subText}
            </p>
          </div>
          <div className="p-3 rounded-full bg-[#111928]">
            {getIcon()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}