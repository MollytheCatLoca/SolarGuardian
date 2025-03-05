import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MonitorCard } from './MonitorCard';
import EnergyGenerationChart from '../charts/EnergyGenerationChart';

interface OverviewTabProps {
  plantId: number;
  metrics: {
    currentPowerMW: number;
    dailyEnergyMWh: number;
    capacityPercentage: number;
    dailyTrend: number;
  };
  batteryStatus: {
    chargeLevel: number;
    isCharging: boolean;
    health: number;
  };
}

/**
 * Pestaña de resumen general para la página de monitoreo
 */
export function OverviewTab({ plantId, metrics, batteryStatus }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Resumen de métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Potencia actual */}
        <MonitorCard 
          title="Potencia Actual"
          value={`${metrics.currentPowerMW.toFixed(2)} MW`}
          subText={`${metrics.capacityPercentage}% de capacidad`}
          icon="power"
        />
        
        {/* Energía diaria */}
        <MonitorCard 
          title="Energía Generada Hoy"
          value={`${metrics.dailyEnergyMWh.toFixed(1)} MWh`}
          subText={`${metrics.dailyTrend > 0 ? '+' : ''}${metrics.dailyTrend.toFixed(1)}% respecto a ayer`}
          icon="energy"
          trendUp={metrics.dailyTrend > 0}
        />
        
        {/* Estado de batería */}
        <MonitorCard 
          title="Almacenamiento"
          value={`${batteryStatus.chargeLevel}%`}
          subText={`${batteryStatus.isCharging ? 'Cargando' : 'En uso'} | Salud: ${batteryStatus.health}%`}
          icon="battery"
        />
      </div>

      {/* Gráfico de generación horaria */}
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
      
      {/* Métricas complementarias */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Eficiencia del Sistema</CardTitle>
            <CardDescription className="text-gray-400">
              Rendimiento actual del parque solar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Sistema de Capacidad */}
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
              
              {/* Energía inyectada a red (simulada) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Energía Inyectada a Red</span>
                  <span className="text-xs font-medium">93%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
              
              {/* Eficiencia de conversión (simulada) */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Eficiencia de Conversión</span>
                  <span className="text-xs font-medium">94.2%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Condiciones Ambientales</CardTitle>
            <CardDescription className="text-gray-400">
              Parámetros climáticos actuales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#111928] p-3 rounded-lg">
                <h5 className="text-xs text-gray-400">Temperatura Ambiente</h5>
                <p className="text-lg font-medium mt-1">24.5 °C</p>
              </div>
              <div className="bg-[#111928] p-3 rounded-lg">
                <h5 className="text-xs text-gray-400">Radiación Solar</h5>
                <p className="text-lg font-medium mt-1">782 W/m²</p>
              </div>
              <div className="bg-[#111928] p-3 rounded-lg">
                <h5 className="text-xs text-gray-400">Velocidad del Viento</h5>
                <p className="text-lg font-medium mt-1">12.4 km/h</p>
              </div>
              <div className="bg-[#111928] p-3 rounded-lg">
                <h5 className="text-xs text-gray-400">Humedad</h5>
                <p className="text-lg font-medium mt-1">45%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}