import React from 'react';
import { CalendarClock, Clock, CheckSquare, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { NextRouter } from 'next/navigation';
import UpcomingMaintenance from '../maintenance/UpcomingMaintenance';

interface MaintenanceTabProps {
  plantId: number;
  maintenanceStats: {
    pending: number;
    inProgress: number;
    completed: number;
  };
  router: NextRouter;
}

export function MaintenanceTab({ plantId, maintenanceStats, router }: MaintenanceTabProps) {
  return (
    <>
      {/* Upcoming maintenance */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Próximas Actividades de Mantenimiento</CardTitle>
          <CardDescription className="text-gray-400">
            Tareas programadas para los próximos días
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UpcomingMaintenance plantId={plantId} />
          <div className="mt-4 text-center">
            <Button
              variant="outline"
              className="border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white mr-4"
              onClick={() => router.push(`/dashboard/${plantId}/calendar`)}
            >
              Ver Calendario
            </Button>
            <Button
              className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
              onClick={() => router.push(`/dashboard/${plantId}/maintenance`)}
            >
              Gestionar Tareas
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Maintenance statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Tareas Pendientes</p>
                <h2 className="text-2xl font-bold">{maintenanceStats.pending}</h2>
                <p className="text-xs text-blue-400 mt-1">
                  Tareas programadas
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <CalendarClock size={20} className="text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">En Progreso</p>
                <h2 className="text-2xl font-bold">{maintenanceStats.inProgress}</h2>
                <p className="text-xs text-yellow-400 mt-1">
                  Tareas en ejecución
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <Clock size={20} className="text-yellow-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Completadas</p>
                <h2 className="text-2xl font-bold">{maintenanceStats.completed}</h2>
                <p className="text-xs text-green-400 mt-1">
                  Finalizadas con éxito
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <CheckSquare size={20} className="text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Device status */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Estado de los Dispositivos</CardTitle>
          <CardDescription className="text-gray-400">
            Resumen del estado del equipamiento
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm text-gray-400 mb-4">Estado General</h3>
              <div className="space-y-4">
                <div className="bg-[#111928] p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/20 p-1.5 rounded">
                      <CheckSquare size={16} className="text-green-400" />
                    </div>
                    <span>Funcionando correctamente</span>
                  </div>
                  <span className="font-semibold">87%</span>
                </div>
                <div className="bg-[#111928] p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500/20 p-1.5 rounded">
                      <AlertTriangle size={16} className="text-yellow-400" />
                    </div>
                    <span>Con advertencias</span>
                  </div>
                  <span className="font-semibold">9%</span>
                </div>
                <div className="bg-[#111928] p-3 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500/20 p-1.5 rounded">
                      <AlertTriangle size={16} className="text-red-400" />
                    </div>
                    <span>Con fallos</span>
                  </div>
                  <span className="font-semibold">4%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm text-gray-400 mb-4">Último Mantenimiento</h3>
              <div className="space-y-4">
                <div className="bg-[#111928] p-3 rounded-lg">
                  <p className="font-medium">Inversores - Sección A</p>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-400">Limpieza y calibración</span>
                    <span className="text-blue-400">Hace 3 días</span>
                  </div>
                </div>
                <div className="bg-[#111928] p-3 rounded-lg">
                  <p className="font-medium">Sistema de monitoreo</p>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-400">Actualización de firmware</span>
                    <span className="text-blue-400">Hace 1 semana</span>
                  </div>
                </div>
                <div className="bg-[#111928] p-3 rounded-lg">
                  <p className="font-medium">Paneles solares - Sección C</p>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-400">Limpieza general</span>
                    <span className="text-blue-400">Hace 2 semanas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}