import React from 'react';
import { AlertTriangle, Info, Zap, Battery, SunDim } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import ActiveAlerts from '../alerts/ActiveAlerts';

interface AlarmsTabProps {
  plantId: number;
  alarmStats: {
    total: number;
    active: number;
    byLevel: {
      Crítica: number;
      Mayor: number;
      Menor: number;
      Advertencia: number;
    };
  };
}

export function AlarmsTab({ plantId, alarmStats }: AlarmsTabProps) {
  return (
    <>
      {/* Alarms summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Total Alertas</p>
                <h2 className="text-2xl font-bold">{alarmStats.total}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {alarmStats.active} activas
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <AlertTriangle size={24} className="text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Críticas</p>
                <h2 className="text-2xl font-bold">{alarmStats.byLevel.Crítica}</h2>
                <p className="text-xs text-red-400 mt-1">
                  Atención inmediata
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <AlertTriangle size={24} className="text-red-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Mayores</p>
                <h2 className="text-2xl font-bold">{alarmStats.byLevel.Mayor}</h2>
                <p className="text-xs text-orange-400 mt-1">
                  Atención prioritaria
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <AlertTriangle size={24} className="text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Menores/Advertencias</p>
                <h2 className="text-2xl font-bold">{alarmStats.byLevel.Menor + alarmStats.byLevel.Advertencia}</h2>
                <p className="text-xs text-yellow-400 mt-1">
                  Monitoreo regular
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <Info size={24} className="text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Active alerts */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Alertas Activas</CardTitle>
          <CardDescription className="text-gray-400">
            Incidencias detectadas que requieren atención
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-80 overflow-auto">
          <ActiveAlerts plantId={plantId} />
        </CardContent>
      </Card>
      
      {/* Distribution by device */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Distribución por Dispositivo</CardTitle>
          <CardDescription className="text-gray-400">
            Alertas activas por tipo de dispositivo
          </CardDescription>
        </CardHeader>
        <CardContent className="h-60">
          <div className="flex h-full items-center justify-center">
            <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-full max-w-3xl">
              <div className="flex items-center gap-3">
                <div className="bg-[#111928] p-2 rounded-lg">
                  <Zap size={20} className="text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm">Inversores</p>
                  <p className="text-2xl font-semibold">4</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#111928] p-2 rounded-lg">
                  <Battery size={20} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-sm">Baterías</p>
                  <p className="text-2xl font-semibold">1</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#111928] p-2 rounded-lg">
                  <SunDim size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm">Paneles</p>
                  <p className="text-2xl font-semibold">2</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#111928] p-2 rounded-lg">
                  <AlertTriangle size={20} className="text-red-400" />
                </div>
                <div>
                  <p className="text-sm">Otros</p>
                  <p className="text-2xl font-semibold">1</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}