import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MonitorCard } from './MonitorCard';
import DeviceTable from '../deviceManagement/DeviceTable';

interface DevicesTabProps {
  plantId: number;
  deviceStats: {
    total: number;
    online: number;
    warning: number;
    error: number;
    maintenance: number;
  };
}

/**
 * Pestaña de dispositivos para la página de monitoreo
 */
export function DevicesTab({ plantId, deviceStats }: DevicesTabProps) {
  return (
    <div className="space-y-6">
      {/* Resumen de dispositivos */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total de dispositivos */}
        <MonitorCard 
          title="Total Dispositivos"
          value={deviceStats.total.toString()}
          subText={`${deviceStats.online} en línea`}
          icon="devices"
          trendColor={false}
        />
        
        {/* Dispositivos con advertencia */}
        <MonitorCard 
          title="Con Advertencia"
          value={deviceStats.warning.toString()}
          subText="Requieren monitoreo"
          icon="warning"
          trendColor={false}
        />
        
        {/* Dispositivos con error */}
        <MonitorCard 
          title="Con Error"
          value={deviceStats.error.toString()}
          subText="Requieren atención"
          icon="error"
          trendColor={false}
        />
        
        {/* Dispositivos en mantenimiento */}
        <MonitorCard 
          title="En Mantenimiento"
          value={deviceStats.maintenance.toString()}
          subText="Fuera de servicio"
          icon="maintenance"
          trendColor={false}
        />
      </div>
      
      {/* Tabla de dispositivos */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle className="flex items-center">
            <span>Dispositivos</span>
            <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
              {deviceStats.total} total
            </span>
          </CardTitle>
          <CardDescription className="text-gray-400">
            Listado detallado de dispositivos del parque solar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DeviceTable plantId={plantId} />
        </CardContent>
      </Card>
      
      {/* Análisis de dispositivos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Distribución por Tipo</CardTitle>
            <CardDescription className="text-gray-400">
              Dispositivos agrupados por categoría
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span>Inversores</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span>Paneles</span>
                <span className="font-medium">450</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span>Baterías</span>
                <span className="font-medium">8</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span>Controladores</span>
                <span className="font-medium">6</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#111928] rounded-lg">
                <span>Sensores</span>
                <span className="font-medium">24</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardHeader>
            <CardTitle>Estado de Salud</CardTitle>
            <CardDescription className="text-gray-400">
              Diagnóstico general de equipos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Funcionando correctamente</span>
                  <span className="text-xs font-medium">
                    {Math.round((deviceStats.online / deviceStats.total) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${Math.round((deviceStats.online / deviceStats.total) * 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Con advertencias</span>
                  <span className="text-xs font-medium">
                    {Math.round((deviceStats.warning / deviceStats.total) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div 
                    className="bg-yellow-500 h-2 rounded-full" 
                    style={{ width: `${Math.round((deviceStats.warning / deviceStats.total) * 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-400">Con fallos</span>
                  <span className="text-xs font-medium">
                    {Math.round(((deviceStats.error + deviceStats.maintenance) / deviceStats.total) * 100)}%
                  </span>
                </div>
                <div className="w-full bg-[#111928] rounded-full h-2">
                  <div 
                    className="bg-red-500 h-2 rounded-full" 
                    style={{ width: `${Math.round(((deviceStats.error + deviceStats.maintenance) / deviceStats.total) * 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-[#111928] p-3 rounded-lg text-center">
                  <h5 className="text-xs text-gray-400">Tiempo medio entre fallos</h5>
                  <p className="text-sm font-medium mt-1">215 horas</p>
                </div>
                <div className="bg-[#111928] p-3 rounded-lg text-center">
                  <h5 className="text-xs text-gray-400">Tiempo medio de reparación</h5>
                  <p className="text-sm font-medium mt-1">2.1 horas</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}