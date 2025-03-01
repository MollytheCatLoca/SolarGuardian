'use client';

import React, { useState } from 'react';
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
import { dummyEnergyHistory } from '@/lib/solar/dummyData';

type TimeFrame = 'hourly' | 'daily' | 'monthly';

export default function EnergyGenerationChart() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>('hourly');
  
  let data;
  let dataKey: string;
  let label: string;
  
  switch(timeFrame) {
    case 'hourly':
      data = dummyEnergyHistory.hourly;
      dataKey = 'time';
      label = 'Potencia (MW)';
      break;
    case 'daily':
      data = dummyEnergyHistory.daily;
      dataKey = 'date';
      label = 'Energía (MWh)';
      break;
    case 'monthly':
      data = dummyEnergyHistory.monthly;
      dataKey = 'month';
      label = 'Energía (MWh)';
      break;
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
            data={data}
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
                dataKey="power" 
                name="Potencia Generada" 
                stroke="#4a4ae2" 
                fillOpacity={1} 
                fill="url(#colorPower)" 
              />
            ) : (
              <Area 
                type="monotone" 
                dataKey="energy" 
                name="Energía Generada" 
                stroke="#8a3ab4" 
                fillOpacity={1} 
                fill="url(#colorEnergy)" 
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}