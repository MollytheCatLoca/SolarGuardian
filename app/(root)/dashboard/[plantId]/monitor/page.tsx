"use client";

import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { dummySolarPark, dummyDevices, dummyEnergyGeneration, dummyEnergyHistory } from '@/lib/solar/dummyData';
import { Battery, Zap, SunDim, Activity, Server } from 'lucide-react';
import DeviceTable from '@/components/solar/deviceManagement/DeviceTable';
import AdditionalMonitor from '@/components/solar/deviceManagement/AdditionalMonitor';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MonitorPage({ params }: { params: { plantId: string } }) {
  const plantId = parseInt(params.plantId);
  
  // Conteo de dispositivos por estado
  const deviceStatusCounts = {
    total: dummyDevices.length,
    online: dummyDevices.filter(device => device.status === 'online').length,
    warning: dummyDevices.filter(device => device.status === 'warning').length,
    error: dummyDevices.filter(device => device.status === 'error').length,
    maintenance: dummyDevices.filter(device => device.status === 'maintenance').length
  };

  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción */}
      <div>
        <p className="text-sm text-gray-400">Visualización detallada del estado del parque solar y sus dispositivos</p>
      </div>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151] mb-4">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Resumen General
          </TabsTrigger>
          <TabsTrigger 
            value="devices"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Dispositivos
          </TabsTrigger>
          <TabsTrigger 
            value="generation"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Generación
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          {/* Resumen de métricas principales */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Potencia actual */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Potencia Actual</p>
                    <h2 className="text-2xl font-bold">{dummyEnergyGeneration.currentPower} MW</h2>
                    <p className="text-xs text-gray-400 mt-1">
                      {Math.round((dummyEnergyGeneration.currentPower / dummySolarPark.capacity.installed) * 100)}% de capacidad
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Zap size={24} className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#374151]">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">Máximo hoy</p>
                    <p className="text-xs text-green-400">4.9 MW</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Energía diaria */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Energía Generada Hoy</p>
                    <h2 className="text-2xl font-bold">{dummyEnergyGeneration.dailyEnergy} MWh</h2>
                    <p className="text-xs text-green-400 mt-1">
                      +4.3% respecto a ayer
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <SunDim size={24} className="text-yellow-400" />
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#374151]">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">Promedio diario mensual</p>
                    <p className="text-xs text-blue-400">{(dummyEnergyGeneration.monthlyEnergy / 30).toFixed(1)} MWh</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Estado de almacenamiento */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Almacenamiento</p>
                    <h2 className="text-2xl font-bold">76%</h2>
                    <p className="text-xs text-blue-400 mt-1">
                      Cargando a 120 kW
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Battery size={24} className="text-blue-400" />
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-[#374151]">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-gray-400">Tiempo estimado hasta 100%</p>
                    <p className="text-xs text-purple-400">2h 10m</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dummyEnergyHistory.hourly}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Line type="monotone" dataKey="power" stroke="#4a4ae2" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Componente de Mediciones Adicionales */}
          <AdditionalMonitor plantId={plantId} />
        </TabsContent>
        
        <TabsContent value="devices" className="space-y-6">
          {/* Resumen de dispositivos */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Total de dispositivos */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Total Dispositivos</p>
                    <h2 className="text-2xl font-bold">{deviceStatusCounts.total}</h2>
                    <p className="text-xs text-gray-400 mt-1">
                      {deviceStatusCounts.online} en línea
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Server size={24} className="text-gray-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dispositivos con advertencia */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Con Advertencia</p>
                    <h2 className="text-2xl font-bold">{deviceStatusCounts.warning}</h2>
                    <p className="text-xs text-yellow-500 mt-1">
                      Requieren monitoreo
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Activity size={24} className="text-yellow-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dispositivos con error */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">Con Error</p>
                    <h2 className="text-2xl font-bold">{deviceStatusCounts.error}</h2>
                    <p className="text-xs text-red-500 mt-1">
                      Requieren atención
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Activity size={24} className="text-red-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Dispositivos en mantenimiento */}
            <Card className="bg-[#1f2937] border-[#374151] text-white">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-400">En Mantenimiento</p>
                    <h2 className="text-2xl font-bold">{deviceStatusCounts.maintenance}</h2>
                    <p className="text-xs text-blue-500 mt-1">
                      Fuera de servicio
                    </p>
                  </div>
                  <div className="p-3 rounded-full bg-[#111928]">
                    <Activity size={24} className="text-blue-500" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Tabla de dispositivos */}
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle className="flex items-center">
                <span>Dispositivos</span>
                <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                  {deviceStatusCounts.total} total
                </span>
              </CardTitle>
              <CardDescription className="text-gray-400">
                Listado detallado de dispositivos del parque solar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DeviceTable />
            </CardContent>
          </Card>
          
          {/* Componente de Mediciones Adicionales */}
          <AdditionalMonitor plantId={plantId} />
        </TabsContent>
        
        <TabsContent value="generation" className="space-y-6">
          {/* Gráfico de generación mensual */}
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader>
              <CardTitle>Generación Mensual</CardTitle>
              <CardDescription className="text-gray-400">
                Energía generada por mes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={dummyEnergyHistory.monthly}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Line type="monotone" dataKey="energy" stroke="#4a4ae2" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Componente de Mediciones Adicionales */}
          <AdditionalMonitor plantId={plantId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}