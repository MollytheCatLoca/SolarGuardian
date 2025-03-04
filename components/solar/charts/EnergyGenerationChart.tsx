'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getEnergyHistoryByPlantId } from '@/lib/services/measurementService';

type TimeFrame = 'hourly' | 'daily' | 'monthly';

interface EnergyGenerationChartProps {
  plantId: number;
}

export default function EnergyGenerationChart({ plantId }: EnergyGenerationChartProps) {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('hourly');
  const [chartData, setChartData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Valores para las etiquetas según el tipo de datos
  const getChartSettings = (type: TimeFrame) => {
    switch(type) {
      case 'hourly':
        return { dataKey: 'time', valueKey: 'power', label: 'Potencia (MW)' };
      case 'daily':
        return { dataKey: 'date', valueKey: 'energy', label: 'Energía (MWh)' };
      case 'monthly':
        return { dataKey: 'month', valueKey: 'energy', label: 'Energía (MWh)' };
    }
  };
  
  // Función para cargar datos con useCallback
  const loadChartData = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      console.log(`Cargando datos de generación para plantId: ${plantId}, timeFrame: ${timeFrame}`);
      const data = await getEnergyHistoryByPlantId(plantId, timeFrame);
      setChartData(data);
    } catch (error) {
      console.error('Error cargando datos del gráfico:', error);
      setError('No se pudieron cargar los datos de generación. Intente nuevamente.');
    } finally {
      setIsLoading(false);
    }
  }, [plantId, timeFrame]);
  
  // Cargar datos cuando cambia la planta o el período de tiempo
  useEffect(() => {
    loadChartData();
  }, [loadChartData]);
  
  // Obtener configuración actual del gráfico
  const { dataKey, valueKey, label } = getChartSettings(timeFrame);
  
  // Renderizar estado de carga
  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  // Renderizar estado de error
  if (error) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="bg-red-500/20 text-red-400 p-2 rounded-full mb-2">
          <AlertCircle size={24} />
        </div>
        <p className="text-sm text-gray-400 mb-4">{error}</p>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={loadChartData}
          className="bg-[#1f2937] border-[#374151] text-white"
        >
          <RefreshCw size={16} className="mr-2" />
          Reintentar
        </Button>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setTimeFrame('hourly')}
          className={`px-3 py-1 text-xs rounded-md ${
            timeFrame === 'hourly'
              ? 'bg-[#4a4ae2] text-white'
              : 'bg-[#1f2937] text-gray-300'
          }`}
        >
          Diario (24h)
        </button>
        <button
          onClick={() => setTimeFrame('daily')}
          className={`px-3 py-1 text-xs rounded-md ${
            timeFrame === 'daily'
              ? 'bg-[#4a4ae2] text-white'
              : 'bg-[#1f2937] text-gray-300'
          }`}
        >
          Semanal
        </button>
        <button
          onClick={() => setTimeFrame('monthly')}
          className={`px-3 py-1 text-xs rounded-md ${
            timeFrame === 'monthly'
              ? 'bg-[#4a4ae2] text-white'
              : 'bg-[#1f2937] text-gray-300'
          }`}
        >
          Mensual
        </button>
      </div>
      
      <div className="w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4a4ae2" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#4a4ae2" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8a3ab4" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8a3ab4" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis 
              dataKey={dataKey} 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: '#4B5563' }}
            />
            <YAxis 
              tick={{ fill: '#9CA3AF' }} 
              axisLine={{ stroke: '#4B5563' }}
              label={{ 
                value: label, 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: '#9CA3AF' } 
              }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                borderColor: '#374151',
                color: '#F9FAFB' 
              }}
              labelStyle={{ color: '#F3F4F6' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend 
              wrapperStyle={{ color: '#D1D5DB' }}
            />
            {timeFrame === 'hourly' ? (
              <Area 
                type="monotone" 
                dataKey={valueKey} 
                name="Potencia Generada" 
                stroke="#4a4ae2" 
                fillOpacity={1} 
                fill="url(#colorPower)" 
                isAnimationActive={false} // Desactivar animación para mejora de rendimiento
              />
            ) : (
              <Area 
                type="monotone" 
                dataKey={valueKey} 
                name="Energía Generada" 
                stroke="#8a3ab4" 
                fillOpacity={1} 
                fill="url(#colorEnergy)" 
                isAnimationActive={false} // Desactivar animación para mejora de rendimiento
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}