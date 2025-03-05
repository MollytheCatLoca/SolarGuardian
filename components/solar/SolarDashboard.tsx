"use client";

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plant } from '@/types/plantTypes';
import { useRouter } from 'next/navigation';

// Importación de subcomponentes
import { DashboardHeader } from './DashboardHeader';
import { MetricCards } from './MetricCards';
import { OverviewTab } from './tabs/OverviewTab';
import { GenerationTab } from './tabs/GenerationTab';
import { AlarmsTab } from './tabs/AlarmsTab';
import { MaintenanceTab } from './tabs/MaintenanceTab';

interface SolarDashboardProps {
  plant: Plant;
  generationMetrics: {
    currentPower: number; // in kW
    dailyEnergy: number; // in kWh
    monthlyEnergy: number; // in kWh
    totalEnergy: number; // in kWh
    dailyTrend: number; // percentage
  };
  alarmStats: {
    total: number;
    active: number;
    byLevel: {
      Crítica: number;
      Mayor: number;
      Menor: number;
      Advertencia: number;
    };
    recentAlarms: any[];
  };
  maintenanceStats: {
    total: number;
    pending: number;
    inProgress: number;
    completed: number;
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
  const [activeTab, setActiveTab] = useState("overview");
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [batteryStatus, setBatteryStatus] = useState({
    chargeLevel: 76,
    isCharging: true,
    health: 98,
    temperature: 28
  });

  // Convert plant capacity from kW to MW for consistent units
  const plantCapacityMW = plant.totalCapacity / 1000;
  
  // Convert current power from kW to MW for display
  const currentPowerMW = generationMetrics.currentPower / 1000;
  
  // Convert energy values from kWh to MWh for display
  const dailyEnergyMWh = generationMetrics.dailyEnergy / 1000;
  const monthlyEnergyMWh = generationMetrics.monthlyEnergy / 1000;
  const totalEnergyMWh = generationMetrics.totalEnergy / 1000;
  
  // Calculate current capacity percentage (using kW values for accuracy)
  const capacityPercentage = Math.round((generationMetrics.currentPower / plant.totalCapacity) * 100);
  
  // Function to refresh data
  const handleRefreshData = async () => {
    setIsRefreshing(true);
    
    try {
      // Simulated refresh
      setTimeout(() => {
        setBatteryStatus(prev => ({
          ...prev,
          chargeLevel: Math.min(prev.chargeLevel + 2, 100),
          isCharging: prev.chargeLevel < 95
        }));
        
        setLastUpdate(new Date());
        router.refresh(); // Force Next.js to refresh server data
      }, 1000);
    } catch (err) {
      console.error("Error refreshing data:", err);
      setError("Error al actualizar los datos. Intente nuevamente.");
    } finally {
      setIsRefreshing(false);
    }
  };

  // Processed metrics to pass to sub-components
  const processedMetrics = {
    currentPowerMW,
    dailyEnergyMWh,
    monthlyEnergyMWh,
    totalEnergyMWh,
    capacityPercentage,
    plantCapacityMW,
    dailyTrend: generationMetrics.dailyTrend
  };
  
  return (
    <div className="space-y-6 p-6">
      {/* Dashboard Header */}
      <DashboardHeader 
        plant={plant}
        plantCapacityMW={plantCapacityMW}
        lastUpdate={lastUpdate}
        isRefreshing={isRefreshing}
        onRefresh={handleRefreshData}
        error={error}
        onClearError={() => setError(null)}
      />
      
      {/* Main Metric Cards */}
      <MetricCards 
        metrics={processedMetrics}
        alarmStats={alarmStats}
        batteryStatus={batteryStatus}
        plantId={plant.id}
      />
      
      {/* Content tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151]">
          <TabsTrigger 
            value="overview"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Resumen
          </TabsTrigger>
          <TabsTrigger 
            value="generation"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Generación
          </TabsTrigger>
          <TabsTrigger 
            value="alarms"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Alertas
          </TabsTrigger>
          <TabsTrigger 
            value="maintenance"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Mantenimiento
          </TabsTrigger>
        </TabsList>
        
        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewTab 
            plantId={plant.id} 
            metrics={processedMetrics}
            maintenanceStats={maintenanceStats}
          />
        </TabsContent>
        
        {/* Generation Tab */}
        <TabsContent value="generation" className="space-y-6">
          <GenerationTab 
            plantId={plant.id} 
            metrics={processedMetrics}
            router={router}
          />
        </TabsContent>
        
        {/* Alarms Tab */}
        <TabsContent value="alarms" className="space-y-6">
          <AlarmsTab 
            plantId={plant.id} 
            alarmStats={alarmStats}
          />
        </TabsContent>
        
        {/* Maintenance Tab */}
        <TabsContent value="maintenance" className="space-y-6">
          <MaintenanceTab 
            plantId={plant.id} 
            maintenanceStats={maintenanceStats}
            router={router}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}