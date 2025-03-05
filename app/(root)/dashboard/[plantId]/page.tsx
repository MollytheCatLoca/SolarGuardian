// app/(root)/dashboard/[plantId]/page.tsx
import { getPlantById } from "@/lib/services/plantService";
import { getGenerationMetricsByPlantId } from "@/lib/services/measurementService";
import { getAlarmStatistics } from "@/lib/services/alarmService";
import { getMaintenanceStatistics } from "@/lib/services/maintenanceService";

import SolarDashboard from "@/components/solar/SolarDashboard";
import { redirect } from "next/navigation";

// Esta página es server-side, así que puede cargar los datos necesarios
export default async function PlantDashboardPage({ params }: { params: { plantId: string } }) {
  const plantId = parseInt(params.plantId);
  
  // Verificar que la planta existe
  const plant = await getPlantById(plantId);
  if (!plant) {
    redirect('/dashboard');
  }
  
  // Cargar datos para el dashboard
  const generationMetrics = await getGenerationMetricsByPlantId(plantId);
  const alarmStats = await getAlarmStatistics(plantId);
  const maintenanceStats = await getMaintenanceStatistics(plantId);
  
  // Pasar los datos al componente cliente
  return (
    <SolarDashboard 
      plant={plant}
      generationMetrics={generationMetrics}
      alarmStats={alarmStats}
      maintenanceStats={maintenanceStats}
    />
  );
}