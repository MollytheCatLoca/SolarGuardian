import React from 'react';
import { Zap, SunDim, AlertTriangle, Battery, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

interface MetricCardsProps {
  metrics: {
    currentPowerMW: number;
    dailyEnergyMWh: number;
    capacityPercentage: number;
    dailyTrend: number;
  };
  alarmStats: {
    active: number;
    byLevel: {
      Crítica: number;
      Mayor: number;
    };
  };
  batteryStatus: {
    chargeLevel: number;
    isCharging: boolean;
    health: number;
  };
  plantId: number;
}

export function MetricCards({ 
  metrics, 
  alarmStats, 
  batteryStatus,
  plantId
}: MetricCardsProps) {
  // Format number with unit
  const formatNumber = (value: number, unit: string, decimals: number = 1) => {
    return `${value.toFixed(decimals)} ${unit}`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Current power */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Potencia Actual</p>
              <h2 className="text-2xl font-bold">{formatNumber(metrics.currentPowerMW, 'MW')}</h2>
              <p className="text-xs text-gray-400 mt-1">
                {metrics.capacityPercentage}% de capacidad
              </p>
            </div>
            <div className="p-3 rounded-full bg-[#111928]">
              <Zap size={24} className="text-yellow-400" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Daily energy */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Energía Generada Hoy</p>
              <h2 className="text-2xl font-bold">{formatNumber(metrics.dailyEnergyMWh, 'MWh')}</h2>
              <p className={`text-xs ${metrics.dailyTrend >= 0 ? 'text-green-400' : 'text-red-400'} mt-1`}>
                {metrics.dailyTrend > 0 ? '+' : ''}{metrics.dailyTrend.toFixed(1)}% vs ayer
              </p>
            </div>
            <div className="p-3 rounded-full bg-[#111928]">
              <SunDim size={24} className="text-yellow-400" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Active alarms */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Alertas Activas</p>
              <h2 className="text-2xl font-bold">{alarmStats.active}</h2>
              <p className="text-xs text-red-400 mt-1">
                {alarmStats.byLevel.Crítica + alarmStats.byLevel.Mayor} críticas/mayores
              </p>
            </div>
            <div className="p-3 rounded-full bg-[#111928]">
              <AlertTriangle size={24} className="text-red-400" />
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#374151]">
            <Link 
              href={`/dashboard/${plantId}/alerts`}
              className="text-xs text-blue-400 flex items-center hover:underline"
            >
              Ver todas las alertas
              <ArrowRight size={12} className="ml-1" />
            </Link>
          </div>
        </CardContent>
      </Card>
      
      {/* Storage status */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-gray-400">Almacenamiento</p>
              <h2 className="text-2xl font-bold">{batteryStatus.chargeLevel}%</h2>
              <p className="text-xs text-gray-400 mt-1">
                {batteryStatus.isCharging ? 'Cargando' : 'En uso'} | Salud: {batteryStatus.health}%
              </p>
            </div>
            <div className="p-3 rounded-full bg-[#111928]">
              <Battery size={24} className="text-blue-400" />
            </div>
          </div>
          <div className="mt-4 pt-2">
            <div className="w-full bg-[#111928] rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${
                  batteryStatus.chargeLevel > 70 ? 'bg-green-500' : 
                  batteryStatus.chargeLevel > 30 ? 'bg-yellow-500' : 
                  'bg-red-500'
                }`} 
                style={{ width: `${batteryStatus.chargeLevel}%` }}
              ></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}