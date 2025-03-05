"use client";

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { redirect } from "next/navigation";
import { useRouter } from 'next/navigation';

// Importar servicios
import { getPlantById } from "@/lib/services/plantService";
import { getGenerationMetricsByPlantId } from "@/lib/services/measurementService";
import { getAlarmStatistics } from "@/lib/services/alarmService";
import { getMaintenanceStatistics } from "@/lib/services/maintenanceService";
import { getDeviceStatsByPlantId } from '@/lib/services/deviceService';

// Importar componentes

import { DashboardHeader } from '@/components/solar/DashboardHeader';
import { OverviewTab} from '@/components/solar/monitor/OverviewTab';
import { DevicesTab } from '@/components/solar/monitor/DevicesTab';
import { AdvancedTab } from '@/components/solar/monitor/AdvancedTab';


interface MonitorPageProps {
  params: { plantId: string };
}

export default function MonitorPage({ params }: MonitorPageProps) {
  const plantId = parseInt(params.plantId);
  const router = useRouter();
  
  // Estados para almacenar datos
  const [plant, setPlant] = useState<any>(null);
  const [deviceStats, setDeviceStats] = useState({
    total: 0,
    online: 0,
    warning: 0,
    error: 0,
    maintenance: 0
  });
  const [generationMetrics, setGenerationMetrics] = useState({
    currentPower: 0,
    dailyEnergy: 0,
    monthlyEnergy: 0,
    totalEnergy: 0,
    dailyTrend: 0
  });
  const [batteryStatus, setBatteryStatus] = useState({
    chargeLevel: 76,
    isCharging: true,
    health: 98
  });
  const [alarmStats, setAlarmStats] = useState({
    total: 0,
    active: 0,
    byLevel: {
      Crítica: 0,
      Mayor: 0,
      Menor: 0,
      Advertencia: 0
    },
    recentAlarms: []
  });
  const [maintenanceStats, setMaintenanceStats] = useState({
    total: 0,
    pending: 0,
    inProgress: 0,
    completed: 0,
    upcomingTasks: []
  });
  
  // Estados para gestionar UI
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState("overview");
  
  // Cargar datos al montar el componente
  useEffect(() => {
    loadAllData();
    // En Next.js 14, useEffect sin dependencias podría ejecutarse
    // múltiples veces durante el desarrollo debido a React Strict Mode,
    // pero eso está bien para cargar datos iniciales
  }, []);
  
  // Función para cargar todos los datos
  const loadAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      setIsRefreshing(true);
      
      // Verificar que la planta existe
      const plantData = await getPlantById(plantId);
      if (!plantData) {
        redirect('/dashboard');
        return; // Añadimos return para evitar ejecuciones posteriores
      }
      
      // Cargar datos en paralelo para mejorar rendimiento
      const [metricsData, deviceStatsData, alarmStatsData, maintenanceStatsData] = await Promise.all([
        getGenerationMetricsByPlantId(plantId),
        getDeviceStatsByPlantId(plantId),
        getAlarmStatistics(plantId),
        getMaintenanceStatistics(plantId)
      ]);
      
      // Actualizar estados
      setPlant(plantData);
      setGenerationMetrics(metricsData);
      setDeviceStats(deviceStatsData);
      setAlarmStats(alarmStatsData);
      setMaintenanceStats(maintenanceStatsData);
      
      // Actualizar última actualización
      setLastUpdate(new Date());
    } catch (err) {
      console.error("Error al cargar datos:", err);
      setError("Error al cargar datos. Por favor, intente nuevamente.");
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };
  
  // Función para refrescar datos (optimizada para Next.js 14)
  const handleRefreshData = () => {
    setIsRefreshing(true);
    
    // En Next.js 14, router.refresh() es más eficiente y está mejorado
    router.refresh();
    
    // También cargamos los datos del cliente para mantener consistencia
    loadAllData();
  };
  
  // Cálculos para usar unidades consistentes
  const plantCapacityMW = plant ? (plant.totalCapacity / 1000) : 0;
  const currentPowerMW = generationMetrics.currentPower / 1000;
  const dailyEnergyMWh = generationMetrics.dailyEnergy / 1000;
  const capacityPercentage = plant ? Math.round((generationMetrics.currentPower / plant.totalCapacity) * 100) : 0;
  
  // Procesar los datos para los componentes
  const overviewMetrics = {
    currentPowerMW,
    dailyEnergyMWh,
    capacityPercentage,
    dailyTrend: generationMetrics.dailyTrend
  };
  
  // Si está cargando, mostrar un indicador de carga
  if (loading && !isRefreshing) {
    return (
      <div className="p-6 flex flex-col items-center justify-center h-[70vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
        <p className="text-gray-400">Cargando datos del parque solar...</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Dashboard Header */}
      {plant && (
        <DashboardHeader 
          plant={plant}
          plantCapacityMW={plantCapacityMW}
          lastUpdate={lastUpdate}
          isRefreshing={isRefreshing}
          onRefresh={handleRefreshData}
          error={error}
          onClearError={() => setError(null)}
        />
      )}
      
      {/* Mostrar mensaje de error si existe */}
      {error && !plant && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
          <AlertTriangle className="mr-2" size={16} />
          <span>{error}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-auto text-red-400" 
            onClick={() => loadAllData()}
          >
            Reintentar
          </Button>
        </div>
      )}
      
      {/* Pestañas principales */}
      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
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
            value="advanced"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
          >
            Monitoreo Avanzado
          </TabsTrigger>
        </TabsList>
        
        {/* Contenido de Resumen General */}
        <TabsContent value="overview" className="space-y-6">
          <OverviewTab 
            plantId={plantId}
            metrics={overviewMetrics}
            batteryStatus={batteryStatus}
          />
        </TabsContent>
        
        {/* Contenido de Dispositivos */}
        <TabsContent value="devices" className="space-y-6">
          <DevicesTab 
            plantId={plantId}
            deviceStats={deviceStats}
          />
        </TabsContent>
        
        {/* Contenido de Monitoreo Avanzado */}
        <TabsContent value="advanced" className="space-y-6">
          <AdvancedTab plantId={plantId} />
        </TabsContent>
      </Tabs>
    </div>
  );
}