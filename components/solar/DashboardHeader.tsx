import React from 'react';
import { RefreshCw, AlertTriangle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Plant } from '@/types/plantTypes';

interface DashboardHeaderProps {
  plant: Plant;
  plantCapacityMW: number;
  lastUpdate: Date;
  isRefreshing: boolean;
  onRefresh: () => void;
  error: string | null;
  onClearError: () => void;
}

export function DashboardHeader({
  plant,
  plantCapacityMW,
  lastUpdate,
  isRefreshing,
  onRefresh,
  error,
  onClearError
}: DashboardHeaderProps) {
  // Format number with unit
  const formatNumber = (value: number, unit: string, decimals: number = 1) => {
    return `${value.toFixed(decimals)} ${unit}`;
  };

  return (
    <>
      {/* Title and description with refresh button */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-white">{plant.name}</h1>
          <p className="text-sm text-gray-400">
            {plant.location} | {formatNumber(plantCapacityMW, 'MWp')} | Instalado: {new Date(plant.installationDate).toLocaleDateString()}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Show error message if exists */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center mt-4">
          <AlertTriangle className="mr-2" size={16} />
          <span>{error}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-auto text-red-400" 
            onClick={onClearError}
          >
            <X size={16} />
          </Button>
        </div>
      )}
    </>
  );
}