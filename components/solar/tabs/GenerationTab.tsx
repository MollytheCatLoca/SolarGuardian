import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NextRouter } from 'next/navigation';
import EnergyGenerationChart from '../charts/EnergyGenerationChart';

interface GenerationTabProps {
  plantId: number;
  metrics: {
    monthlyEnergyMWh: number;
    totalEnergyMWh: number;
    capacityPercentage: number;
  };
  router: NextRouter;
}

export function GenerationTab({ plantId, metrics, router }: GenerationTabProps) {
  // Format number with unit
  const formatNumber = (value: number, unit: string, decimals: number = 1) => {
    return `${value.toFixed(decimals)} ${unit}`;
  };

  return (
    <>
      {/* Energy generation charts */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Generación Diaria</CardTitle>
          <CardDescription className="text-gray-400">
            Energía generada en los últimos días
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px]">
            <EnergyGenerationChart plantId={plantId} />
          </div>
        </CardContent>
      </Card>
      
      {/* Additional generation statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Generación Mensual</CardTitle>
            <CardDescription className="text-gray-400">
              {formatNumber(metrics.monthlyEnergyMWh, 'MWh')}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-400">Energía Total</p>
                <h3 className="text-2xl font-bold">{formatNumber(metrics.totalEnergyMWh, 'MWh')}</h3>
              </div>
              <Button 
                className="text-sm bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
                onClick={() => router.push(`/dashboard/${plantId}/reports`)}
              >
                Ver Detalles
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Eficiencia del Parque</CardTitle>
            <CardDescription className="text-gray-400">
              Rendimiento comparado con el promedio esperado
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="relative h-32 w-32">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl font-bold">
                    {metrics.capacityPercentage}%
                  </span>
                </div>
                <svg className="h-full w-full" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#374151"
                    strokeWidth="10"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke="#4a4ae2"
                    strokeWidth="10"
                    strokeDasharray={`${Math.round(metrics.capacityPercentage * 251 / 100)} 251`}
                    strokeDashoffset="0"
                    transform="rotate(-90 50 50)"
                  />
                </svg>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Basado en la radiación solar actual
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}