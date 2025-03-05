import React from 'react';
import { CalendarClock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import EnergyGenerationChart from '../charts/EnergyGenerationChart';
import UpcomingMaintenance from '../maintenance/UpcomingMaintenance';

interface OverviewTabProps {
  plantId: number;
  metrics: {
    capacityPercentage: number;
  };
  maintenanceStats: {
    pending: number;
  };
}

export function OverviewTab({ plantId, metrics, maintenanceStats }: OverviewTabProps) {
  return (
    <>
      {/* Generation chart */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Generación Horaria</CardTitle>
          <CardDescription className="text-gray-400">
            Potencia generada a lo largo del día
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <EnergyGenerationChart plantId={plantId} />
          </div>
        </CardContent>
      </Card>

      {/* Performance metrics and upcoming maintenance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance metrics */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Métricas de Rendimiento</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <div className="space-y-4">
              {/* System capacity */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Capacidad del Sistema</span>
                  <span className="text-xs font-medium">{metrics.capacityPercentage}%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ width: `${metrics.capacityPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Energy injected to grid */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Energía Inyectada a Red</span>
                  <span className="text-xs font-medium">93%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
              
              {/* Conversion efficiency */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Eficiencia de Conversión</span>
                  <span className="text-xs font-medium">94.2%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              
              {/* Self-consumption rate */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Tasa de Autoconsumo</span>
                  <span className="text-xs font-medium">7%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
              
              {/* Historical data summary */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <div className="bg-[#111928] p-3 rounded-md text-center">
                  <h5 className="text-xs text-gray-400">Día más productivo</h5>
                  <p className="text-sm font-medium mt-1">12 Feb</p>
                  <p className="text-xs text-blue-400">18.4 MWh</p>
                </div>
                <div className="bg-[#111928] p-3 rounded-md text-center">
                  <h5 className="text-xs text-gray-400">Mejor generación</h5>
                  <p className="text-sm font-medium mt-1">42.1 MWh</p>
                  <p className="text-xs text-green-400">3 Ene</p>
                </div>
                <div className="bg-[#111928] p-3 rounded-md text-center">
                  <h5 className="text-xs text-gray-400">Disponibilidad</h5>
                  <p className="text-sm font-medium mt-1">99.8%</p>
                  <p className="text-xs text-yellow-400">Este mes</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Upcoming maintenance */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Mantenimiento Programado</CardTitle>
            <div className="flex items-center">
              <CalendarClock size={16} className="text-blue-400 mr-1" />
              <span className="text-blue-400 text-sm">{maintenanceStats.pending}</span>
            </div>
          </CardHeader>
          <CardContent className="max-h-64 overflow-auto">
            <UpcomingMaintenance plantId={plantId} />
          </CardContent>
        </Card>
      </div>
    </>
  );
}