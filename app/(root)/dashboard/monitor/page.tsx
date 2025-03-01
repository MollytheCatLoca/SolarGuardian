"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DeviceList from '@/components/solar/devices/DeviceList';
import { dummySolarPark, dummyEnergyGeneration } from '@/lib/solar/dummyData';
import { Battery, Zap, ArrowUpRight, BarChart2, SunDim } from 'lucide-react';

export default function MonitorPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción */}
      <div>
        <h1 className="text-2xl font-bold text-white">Monitoreo en Tiempo Real</h1>
        <p className="text-sm text-gray-400">Visualización detallada del parque solar y sus dispositivos</p>
      </div>
      
      {/* Resumen del parque solar */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle className="text-lg">Información del Parque Solar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="bg-[#111928] p-4 rounded-lg">
              <h3 className="text-sm text-gray-400 mb-1">Nombre</h3>
              <p className="text-lg font-medium">{dummySolarPark.name}</p>
              <p className="text-xs text-gray-400 mt-1">
                {dummySolarPark.location.city}, {dummySolarPark.location.province}, {dummySolarPark.location.country}
              </p>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg">
              <h3 className="text-sm text-gray-400 mb-1">Capacidad</h3>
              <div className="flex items-center">
                <p className="text-lg font-medium">{dummySolarPark.capacity.current} MW</p>
                <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded-full ml-2">
                  {Math.round((dummySolarPark.capacity.current / dummySolarPark.capacity.installed) * 100)}% activo
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Capacidad instalada: {dummySolarPark.capacity.installed} MW
              </p>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg">
              <h3 className="text-sm text-gray-400 mb-1">Especificaciones</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-400">Paneles</p>
                  <p className="text-sm font-medium">{dummySolarPark.details.panels.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Inversores</p>
                  <p className="text-sm font-medium">{dummySolarPark.details.inverters}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Superficie</p>
                  <p className="text-sm font-medium">{dummySolarPark.details.area.toLocaleString()} m²</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Inicio operación</p>
                  <p className="text-sm font-medium">{new Date(dummySolarPark.details.commissionDate).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg">
              <h3 className="text-sm text-gray-400 mb-1">Generación Total</h3>
              <p className="text-lg font-medium">{dummyEnergyGeneration.totalEnergy.toLocaleString()} MWh</p>
              <div className="flex items-center mt-1">
                <p className="text-xs text-gray-400">Este año:</p>
                <p className="text-xs text-green-400 ml-1 flex items-center">
                  {dummyEnergyGeneration.yearlyEnergy.toLocaleString()} MWh
                  <ArrowUpRight size={12} className="ml-0.5" />
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Métricas en tiempo real */}
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
      
      {/* Lista de dispositivos */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span>Dispositivos</span>
            <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
              {dummySolarPark.details.panels + dummySolarPark.details.inverters + 3} total
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <DeviceList />
        </CardContent>
      </Card>
    </div>
  );
}