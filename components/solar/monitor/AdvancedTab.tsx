import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AdditionalMonitor from '../deviceManagement/AdditionalMonitor';

interface AdvancedTabProps {
  plantId: number;
}

/**
 * Pestaña de monitoreo avanzado para la página de monitoreo
 */
export function AdvancedTab({ plantId }: AdvancedTabProps) {
  return (
    <div className="space-y-6">
      {/* Componente principal de monitoreo avanzado */}
      <AdditionalMonitor plantId={plantId} />
      
      {/* Información adicional */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Parámetros de Red</CardTitle>
            <CardDescription className="text-gray-400">
              Interconexión con la red eléctrica
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Frecuencia de Red</span>
                <span className="text-sm font-medium">50.02 Hz</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Tensión de Salida</span>
                <span className="text-sm font-medium">230.5 V</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Factor de Potencia</span>
                <span className="text-sm font-medium">0.96</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Límite de Exportación</span>
                <span className="text-sm font-medium">5000 kW</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">THD Corriente</span>
                <span className="text-sm font-medium">2.3%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Estado de Comunicaciones</CardTitle>
            <CardDescription className="text-gray-400">
              Sistemas de telemetría y datos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Estado de Red</span>
                <span className="text-sm font-medium text-green-400">Conectado</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Señal Celular</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Latencia</span>
                <span className="text-sm font-medium">120 ms</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">API SCADA</span>
                <span className="text-sm font-medium text-green-400">Conectado</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span className="text-sm text-gray-400">Última sincronización</span>
                <span className="text-sm font-medium">Hace 2 minutos</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}