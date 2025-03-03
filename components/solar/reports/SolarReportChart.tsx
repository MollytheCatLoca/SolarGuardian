"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { Download, Printer, Share2 } from 'lucide-react';

interface SolarReportChartProps {
  title: string;
  description: string;
  type: 'line' | 'bar' | 'multiType';
  data: any[];
  series: {
    key: string;
    name: string;
    color: string;
    type?: 'line' | 'bar';
  }[];
  yAxisUnit?: string;
  height?: number;
}

const SolarReportChart: React.FC<SolarReportChartProps> = ({
  title,
  description,
  type,
  data,
  series,
  yAxisUnit = '',
  height = 400
}) => {
  return (
    <Card className="bg-[#1f2937] border-[#374151] text-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-gray-400">
            {description}
          </CardDescription>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
            <Download className="mr-2 h-4 w-4" />
            Descargar
          </Button>
          <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
            <Share2 className="mr-2 h-4 w-4" />
            Compartir
          </Button>
          <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
            <Printer className="mr-2 h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div style={{ height: `${height}px` }}>
          <ResponsiveContainer width="100%" height="100%">
            {type === 'line' ? (
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" label={yAxisUnit ? { value: yAxisUnit, angle: -90, position: 'insideLeft', fill: '#718096' } : undefined} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111928', 
                    border: '1px solid #374151',
                    color: 'white'
                  }}
                  labelStyle={{ color: '#a0aec0' }}
                />
                <Legend />
                {series.map((s) => (
                  <Line 
                    key={s.key} 
                    type="monotone" 
                    dataKey={s.key} 
                    name={s.name} 
                    stroke={s.color} 
                    strokeWidth={2}
                    dot={false}
                  />
                ))}
              </LineChart>
            ) : type === 'bar' ? (
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" label={yAxisUnit ? { value: yAxisUnit, angle: -90, position: 'insideLeft', fill: '#718096' } : undefined} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111928', 
                    border: '1px solid #374151',
                    color: 'white'
                  }}
                  labelStyle={{ color: '#a0aec0' }}
                />
                <Legend />
                {series.map((s) => (
                  <Bar 
                    key={s.key} 
                    dataKey={s.key} 
                    name={s.name} 
                    fill={s.color} 
                  />
                ))}
              </BarChart>
            ) : (
              // multiType chart (combination of bar and line)
              <LineChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#718096" />
                <YAxis stroke="#718096" label={yAxisUnit ? { value: yAxisUnit, angle: -90, position: 'insideLeft', fill: '#718096' } : undefined} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111928', 
                    border: '1px solid #374151',
                    color: 'white'
                  }}
                  labelStyle={{ color: '#a0aec0' }}
                />
                <Legend />
                {series.map((s) => (
                  s.type === 'line' ? (
                    <Line 
                      key={s.key} 
                      type="monotone" 
                      dataKey={s.key} 
                      name={s.name} 
                      stroke={s.color} 
                      strokeWidth={2}
                      dot={false}
                    />
                  ) : (
                    <Bar 
                      key={s.key} 
                      dataKey={s.key} 
                      name={s.name} 
                      fill={s.color} 
                    />
                  )
                ))}
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolarReportChart;