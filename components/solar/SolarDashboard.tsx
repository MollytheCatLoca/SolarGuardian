"use client";

import React, { useState, useEffect } from 'react';
import { SunDim, Battery, BarChart2, AlertTriangle, CalendarClock, Zap, RefreshCw } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plant } from '@/types/plantTypes';
import { useRouter } from 'next/navigation';
import EnergyGenerationChart from './charts/EnergyGenerationChart';
import ActiveAlerts from './alerts/ActiveAlerts';
import UpcomingMaintenance from './maintenance/UpcomingMaintenance';

interface SolarDashboardProps {
  plant: Plant;
  generationMetrics: {
    currentPower: number;
    dailyEnergy: number;
    monthlyEnergy: number;
    totalEnergy: number;
    dailyTrend: number;
  };
  alarmStats: {
    total: number;
    active: number;
    byLevel: Record<string, number>;
    recentAlarms: any[];
  };
  maintenanceStats: {
    pending: number;
    inProgress: number;
    completed: number;
    total: number;
    upcomingTasks: any[];
  };
}

export default function SolarDashboard({
  plant,
  generationMetrics,
  alarmStats,
  maintenanceStats
}: SolarDashboardProps) {
  const router = useRouter();
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Efecto para establecer el título del documento
  useEffect(() => {
    if (plant && plant.name) {
      document.title = `Dashboard - ${plant.name}`;
    }
  }, [plant]);
  
  // Función para refrescar datos
  const refreshData = () => {
    setIsRefreshing(true);
    
    // En una implementación real, aquí realizarías llamadas a la API
    // Por ahora, simplemente simulamos un refresco de datos
    setTimeout(() => {
      router.refresh(); // Esto provoca que Next.js vuelva a cargar los datos del servidor
      setLastUpdate(new Date());
      setIsRefreshing(false);
    }, 1000);
  };
  
  return (
    <div className="space-y-6 p-6">
      {/* Título de la sección con botón de refresco */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">{plant.name}</h1>
          <p className="text-sm text-gray-400">Monitoreo del Parque Solar en tiempo real</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={refreshData}
            disabled={isRefreshing}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Indicadores principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Generación actual */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Generación Actual</CardTitle>
            <Zap size={18} className="text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{generationMetrics.currentPower.toFixed(1)} MW</div>
            <p className="text-xs text-gray-400 mt-1">
              Funcionando a {Math.round((generationMetrics.currentPower / plant.totalCapacity) * 100)}% de capacidad
            </p>
          </CardContent>
        </Card>
        
        {/* Generación diaria */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Generación Diaria</CardTitle>
            <SunDim size={18} className="text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{generationMetrics.dailyEnergy} MWh</div>
            <p className={`text-xs ${generationMetrics.dailyTrend >= 0 ? 'text-green-400' : 'text-red-400'} mt-1`}>
              {generationMetrics.dailyTrend > 0 ? '+' : ''}{generationMetrics.dailyTrend.toFixed(1)}% vs ayer
            </p>
          </CardContent>
        </Card>
        
        {/* Generación mensual */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Generación Mensual</CardTitle>
            <BarChart2 size={18} className="text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{generationMetrics.monthlyEnergy} MWh</div>
            <p className="text-xs text-gray-400 mt-1">Este mes</p>
          </CardContent>
        </Card>
        
        {/* Estado del almacenamiento */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Almacenamiento</CardTitle>
            <Battery size={18} className="text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">76%</div>
            <p className="text-xs text-gray-400 mt-1">Capacidad restante</p>
          </CardContent>
        </Card>
      </div>
      
      {/* Gráficos y secciones principales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Gráfico de generación de energía */}
        <Card className="bg-[#1f2937] border-[#374151] text-white lg:col-span-2">
          <CardHeader>
            <CardTitle>Generación de Energía</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <EnergyGenerationChart plantId={plant.id} />
          </CardContent>
        </Card>
        
        {/* Alertas activas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Alertas Activas</CardTitle>
            <div className="flex items-center">
              <AlertTriangle size={16} className="text-red-500 mr-1" />
              <span className="text-red-500 text-sm">{alarmStats.active}</span>
            </div>
          </CardHeader>
          <CardContent className="max-h-80 overflow-auto">
            <ActiveAlerts plantId={plant.id} />
          </CardContent>
        </Card>
      </div>
      
      {/* Sección inferior */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mantenimiento programado */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Mantenimiento Programado</CardTitle>
            <div className="flex items-center">
              <CalendarClock size={16} className="text-blue-400 mr-1" />
              <span className="text-blue-400 text-sm">{maintenanceStats.pending}</span>
            </div>
          </CardHeader>
          <CardContent className="max-h-64 overflow-auto">
            <UpcomingMaintenance plantId={plant.id} />
          </CardContent>
        </Card>
        
        {/* Métricas de rendimiento */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Métricas de Rendimiento</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <div className="space-y-4">
              {/* Capacidad del sistema */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Capacidad del Sistema</span>
                  <span className="text-xs font-medium">
                    {Math.round((generationMetrics.currentPower / plant.totalCapacity) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div 
                    className="bg-blue-500 h-2 rounded-full" 
                    style={{ 
                      width: `${Math.round((generationMetrics.currentPower / plant.totalCapacity) * 100)}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Uso de energía producida */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Energía Inyectada a Red</span>
                  <span className="text-xs font-medium">93%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '93%' }}></div>
                </div>
              </div>
              
              {/* Eficiencia de conversión */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Eficiencia de Conversión</span>
                  <span className="text-xs font-medium">94.2%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '94.2%' }}></div>
                </div>
              </div>
              
              {/* Tasa de autoconsumo */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Tasa de Autoconsumo</span>
                  <span className="text-xs font-medium">7%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '7%' }}></div>
                </div>
              </div>
              
              {/* Datos históricos resumidos */}
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
      </div>
    </div>
  );
}