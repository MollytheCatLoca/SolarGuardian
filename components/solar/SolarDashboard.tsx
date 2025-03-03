"use client";

import React from 'react';
import { SunDim, Battery, BarChart2, AlertTriangle, CalendarClock, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Importamos los componentes que hemos creado
import EnergyGenerationChart from './charts/EnergyGenerationChart';
import ActiveAlerts from './alerts/ActiveAlerts';
import UpcomingMaintenance from './maintenance/UpcomingMaintenance';

// Datos dummy para mostrar en el dashboard
const dashboardData = {
  currentPower: 2.4, // MW
  dailyGeneration: 16.8, // MWh
  monthlyGeneration: 426.2, // MWh
  batteryLevel: 76, // %
  efficiency: 94.2, // %
  activeAlerts: 3,
  upcomingTasks: 5
};

export default function SolarDashboard() {
  return (
    <div className="space-y-6">
      {/* Título de la sección */}
      <div>
       
        <p className="text-sm text-gray-400">Monitoreo del Parque Solar en tiempo real</p>
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
            <div className="text-2xl font-bold">{dashboardData.currentPower} MW</div>
            <p className="text-xs text-gray-400 mt-1">Funcionando a 87% de capacidad</p>
          </CardContent>
        </Card>
        
        {/* Generación diaria */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Generación Diaria</CardTitle>
            <SunDim size={18} className="text-yellow-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.dailyGeneration} MWh</div>
            <p className="text-xs text-gray-400 mt-1">4.2% más que ayer</p>
          </CardContent>
        </Card>
        
        {/* Eficiencia del sistema */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Eficiencia</CardTitle>
            <BarChart2 size={18} className="text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.efficiency}%</div>
            <p className="text-xs text-gray-400 mt-1">1.2% sobre el promedio histórico</p>
          </CardContent>
        </Card>
        
        {/* Estado del almacenamiento */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Almacenamiento</CardTitle>
            <Battery size={18} className="text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{dashboardData.batteryLevel}%</div>
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
            <EnergyGenerationChart />
          </CardContent>
        </Card>
        
        {/* Alertas activas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Alertas Activas</CardTitle>
            <div className="flex items-center">
              <AlertTriangle size={16} className="text-red-500 mr-1" />
              <span className="text-red-500 text-sm">{dashboardData.activeAlerts}</span>
            </div>
          </CardHeader>
          <CardContent className="max-h-80 overflow-auto">
            <ActiveAlerts />
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
              <span className="text-blue-400 text-sm">{dashboardData.upcomingTasks}</span>
            </div>
          </CardHeader>
          <CardContent className="max-h-64 overflow-auto">
            <UpcomingMaintenance />
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
                  <span className="text-xs font-medium">87%</span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '87%' }}></div>
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