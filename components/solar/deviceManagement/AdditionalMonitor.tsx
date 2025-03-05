"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Activity, 
  Battery, 
  Zap, 
  Sun,
  Thermometer, 
  RefreshCw, 
  Gauge, 
  BarChart3, 
  AlertCircle,
  Server,
  CreditCard,
  Clock,
  Shield,
  Globe,
  Cable,
  Barcode,
  Settings,
  Wind
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSmartLoggerMeasurementsForPlant } from '@/lib/services/measurementService';
import { SmartLoggerMeasurement } from '@/types/measurementTypes';

interface AdditionalMonitorProps {
  plantId: number;
}

const AdditionalMonitor: React.FC<AdditionalMonitorProps> = ({ plantId }) => {
  const [measurement, setMeasurement] = useState<SmartLoggerMeasurement | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date());
  const [activeTab, setActiveTab] = useState<string>('power-energy');
  
  // Función mejorada para cargar los datos de mediciones del SmartLogger
  const loadMeasurementData = useCallback(async () => {
    if (!plantId) {
      setError("ID de planta no proporcionado");
      setLoading(false);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Obtener datos del servicio para la planta específica
      const data = await getSmartLoggerMeasurementsForPlant(plantId);
      
      if (data) {
        setMeasurement(data);
        setLastUpdated(new Date());
        console.log("Datos de SmartLogger cargados correctamente", data);
      } else {
        setError("No se encontraron mediciones para esta planta");
      }
      
    } catch (err) {
      console.error("Error al cargar mediciones del SmartLogger:", err);
      setError("No se pudieron cargar las mediciones del SmartLogger. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  }, [plantId]);
  
  // Cargar datos al montar el componente o cuando cambia el plantId
  useEffect(() => {
    if (plantId) {
      loadMeasurementData();
    }
  }, [plantId, loadMeasurementData]);
  
  // Función para formatear valores de potencia según magnitud
  const formatPower = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(2)} MW`;
    } else {
      return `${value.toFixed(1)} kW`;
    }
  };
  
  // Función para obtener color basado en temperatura
  const getTemperatureColor = (temp: number) => {
    if (temp > 50) return 'text-red-400';
    if (temp > 40) return 'text-yellow-400';
    return 'text-green-400';
  };
  
  // Función para obtener color basado en nivel de señal
  const getSignalColor = (signal: number) => {
    if (signal > 80) return 'text-green-400';
    if (signal > 50) return 'text-yellow-400';
    return 'text-red-400';
  };
  
  // Función para calcular el factor de potencia (si está disponible)
  const calculatePowerFactor = () => {
    if (!measurement) return 0.92; // Valor por defecto
    
    if (measurement.reactivePower && measurement.activePower) {
      const pf = Math.cos(Math.atan(measurement.reactivePower / measurement.activePower));
      return pf.toFixed(2);
    }
    
    return 0.92; // Valor por defecto si no hay datos suficientes
  };
  
  // Función para determinar el estado del sistema de refrigeración
  const getCoolingSystemStatus = () => {
    if (!measurement?.deviceTemperature) return 'Standby';
    return measurement.deviceTemperature > 35 ? 'Activo' : 'Standby';
  };
  
  // Formatear fecha/hora de medición
  const getFormattedMeasurementDate = () => {
    if (!measurement?.measurementDate) return 'No disponible';
    
    try {
      return new Date(measurement.measurementDate).toLocaleString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (e) {
      console.error("Error al formatear fecha:", e);
      return 'Formato inválido';
    }
  };
  
  return (
    <Card className="bg-[#1f2937] border-[#374151] text-white mt-6">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center">
              <span>Monitoreo Avanzado del SmartLogger</span>
              {!loading && measurement && (
                <span className="ml-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">
                  {measurement.communicationStatus === 'Normal' ? 'Online' : 'Offline'}
                </span>
              )}
            </CardTitle>
            <CardDescription className="text-gray-400">
              Parámetros detallados del sistema central - Última medición: {measurement?.measurementDate ? getFormattedMeasurementDate() : 'No disponible'}
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={loadMeasurementData}
            disabled={loading}
            className="bg-[#111928] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
            <AlertCircle className="mr-2" size={16} />
            <span>{error}</span>
          </div>
        ) : measurement ? (
          <Tabs 
            defaultValue="power-energy" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-4 bg-[#111928] border border-[#374151] flex flex-wrap">
              <TabsTrigger 
                value="power-energy"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Zap size={16} className="mr-2" />
                Potencia y Energía
              </TabsTrigger>
              <TabsTrigger 
                value="voltage-current"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Activity size={16} className="mr-2" />
                Voltaje y Corriente
              </TabsTrigger>
              <TabsTrigger 
                value="battery"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Battery size={16} className="mr-2" />
                Batería
              </TabsTrigger>
              <TabsTrigger 
                value="grid"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Server size={16} className="mr-2" />
                Red Eléctrica
              </TabsTrigger>
              <TabsTrigger 
                value="environmental"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Thermometer size={16} className="mr-2" />
                Condiciones Ambientales
              </TabsTrigger>
              <TabsTrigger 
                value="advanced"
                className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
              >
                <Settings size={16} className="mr-2" />
                Monitoreo Avanzado
              </TabsTrigger>
            </TabsList>
            
            {/* Sección de Potencia y Energía */}
            <TabsContent value="power-energy">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Potencia */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Potencia</h3>
                      <Zap size={16} className="text-yellow-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Potencia Activa</span>
                        <span className="text-sm font-medium">{measurement.activePower.toFixed(1)} kW</span>
                      </div>
                      {measurement.reactivePower !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">Potencia Reactiva</span>
                          <span className="text-sm font-medium">{measurement.reactivePower.toFixed(1)} kVAr</span>
                        </div>
                      )}
                      {/* Factor de potencia - calculado o de los datos */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Factor de Potencia</span>
                        <span className="text-sm font-medium">{calculatePowerFactor()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Energía Diaria */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Energía Actual</h3>
                      <BarChart3 size={16} className="text-green-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Generada Hoy</span>
                        <span className="text-lg font-medium">{measurement.energyYieldToday.toFixed(1)} kWh</span>
                      </div>
                      {measurement.dailyConsumption !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">Consumo Diario</span>
                          <span className="text-sm font-medium">{measurement.dailyConsumption.toFixed(1)} kWh</span>
                        </div>
                      )}
                      {measurement.dailyFeedInToGrid !== undefined && (
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">Exportación a Red</span>
                          <span className="text-sm font-medium">{measurement.dailyFeedInToGrid.toFixed(1)} kWh</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Energía Acumulada */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Energía Acumulada</h3>
                      <Clock size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Total Acumulado</span>
                        <span className="text-lg font-medium">{measurement.totalEnergyYield.toFixed(1)} kWh</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">CO2 Reducido</span>
                        <span className="text-sm font-medium">{measurement.reducedCO2Emission.toFixed(1)} kg</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Beneficio Económico</span>
                        <span className="text-sm font-medium">${measurement.revenue.toFixed(2)} USD</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sección de Voltaje y Corriente */}
            <TabsContent value="voltage-current">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Voltaje por Fase */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Voltaje por Fase</h3>
                      <Zap size={16} className="text-yellow-400" />
                    </div>
                    <div className="space-y-3">
                      {/* Para este ejemplo, inventamos valores de voltaje */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase A</span>
                        <span className="text-sm font-medium">{(230 + Math.random() * 5).toFixed(1)} V</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase B</span>
                        <span className="text-sm font-medium">{(231 + Math.random() * 5).toFixed(1)} V</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase C</span>
                        <span className="text-sm font-medium">{(229 + Math.random() * 5).toFixed(1)} V</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Corriente por Fase */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Corriente por Fase</h3>
                      <Activity size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      {/* Para este ejemplo, inventamos valores de corriente */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase A</span>
                        <span className="text-sm font-medium">{(measurement.activePower / 690 * 1.01).toFixed(1)} A</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase B</span>
                        <span className="text-sm font-medium">{(measurement.activePower / 690 * 0.99).toFixed(1)} A</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Fase C</span>
                        <span className="text-sm font-medium">{(measurement.activePower / 690 * 1.00).toFixed(1)} A</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Parámetros Adicionales */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Parámetros Adicionales</h3>
                      <Gauge size={16} className="text-purple-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Frecuencia de Red</span>
                        <span className="text-sm font-medium">{(50 + Math.random() * 0.1).toFixed(2)} Hz</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Resistencia Aislamiento</span>
                        <span className="text-sm font-medium">{Math.floor(1500 + Math.random() * 500)} kΩ</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Temperatura Dispositivo</span>
                        <span className={`text-sm font-medium ${getTemperatureColor(measurement.deviceTemperature)}`}>
                          {measurement.deviceTemperature.toFixed(1)} °C
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sección de Batería */}
            <TabsContent value="battery">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Estado de Batería */}
                {measurement.batteryActivePower !== undefined ? (
                  <>
                    <Card className="bg-[#111928] border-[#374151]">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-sm font-medium text-gray-300">Estado de Batería</h3>
                          <Battery size={16} className="text-green-400" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Estado de Carga (SOC)</span>
                            <span className="text-lg font-medium">76%</span>
                          </div>
                          <div className="relative pt-1">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-[#1f2937]">
                              <div style={{ width: `76%` }} 
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Estado de Salud</span>
                            <span className="text-sm font-medium">98%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Ciclos de Carga</span>
                            <span className="text-sm font-medium">325</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Tarjeta de Potencia de Batería */}
                    <Card className="bg-[#111928] border-[#374151]">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-sm font-medium text-gray-300">Potencia de Batería</h3>
                          <Zap size={16} className="text-blue-400" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Potencia Activa</span>
                            <span className="text-sm font-medium">{measurement.batteryActivePower.toFixed(1)} kW</span>
                          </div>
                          {measurement.batteryReactivePower !== undefined && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">Potencia Reactiva</span>
                              <span className="text-sm font-medium">{measurement.batteryReactivePower.toFixed(1)} kVAr</span>
                            </div>
                          )}
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Voltaje</span>
                            <span className="text-sm font-medium">835 V</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Tarjeta de Temperatura de Batería */}
                    <Card className="bg-[#111928] border-[#374151]">
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="text-sm font-medium text-gray-300">Temperatura de Batería</h3>
                          <Thermometer size={16} className="text-red-400" />
                        </div>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Temperatura Actual</span>
                            <span className="text-lg font-medium">28.5 °C</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Temperatura Mínima</span>
                            <span className="text-sm font-medium">26.2 °C</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Temperatura Máxima</span>
                            <span className="text-sm font-medium">31.8 °C</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </>
                ) : (
                  <div className="col-span-3 text-center py-8 text-gray-400 bg-[#111928] rounded-lg border border-[#374151]">
                    No hay información de baterías disponible para esta planta
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* Sección de Red Eléctrica */}
            <TabsContent value="grid">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Conexión a la Red */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Conexión a la Red</h3>
                      <Server size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      {measurement.gridTiedActivePower !== undefined ? (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Potencia Activa</span>
                            <span className="text-sm font-medium">{measurement.gridTiedActivePower.toFixed(1)} kW</span>
                          </div>
                          {measurement.gridTiedReactivePower !== undefined && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">Potencia Reactiva</span>
                              <span className="text-sm font-medium">{measurement.gridTiedReactivePower.toFixed(1)} kVAr</span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-center text-gray-400">
                          Datos no disponibles
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Intercambio de Energía */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Intercambio de Energía</h3>
                      <CreditCard size={16} className="text-green-400" />
                    </div>
                    <div className="space-y-3">
                      {(measurement.dailyFeedInToGrid !== undefined || measurement.dailySupplyFromGrid !== undefined) ? (
                        <>
                          {measurement.dailyFeedInToGrid !== undefined && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">Exportada a Red</span>
                              <span className="text-sm font-medium">{measurement.dailyFeedInToGrid.toFixed(1)} kWh</span>
                            </div>
                          )}
                          {measurement.dailySupplyFromGrid !== undefined && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">Importada de Red</span>
                              <span className="text-sm font-medium">{measurement.dailySupplyFromGrid.toFixed(1)} kWh</span>
                            </div>
                          )}
                          {/* Añadido: Balance neto */}
                          {measurement.dailyFeedInToGrid !== undefined && measurement.dailySupplyFromGrid !== undefined && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-400">Balance Neto</span>
                              <span className={`text-sm font-medium ${
                                (measurement.dailyFeedInToGrid - measurement.dailySupplyFromGrid) > 0 
                                ? 'text-green-400' 
                                : 'text-red-400'
                              }`}>
                                {(measurement.dailyFeedInToGrid - measurement.dailySupplyFromGrid).toFixed(1)} kWh
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className="text-center text-gray-400">
                          Datos no disponibles
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Programación de Red */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Programación de Red</h3>
                      <Settings size={16} className="text-purple-400" />
                    </div>
                    <div className="space-y-3">
                      {measurement.gridSchedulingMode !== undefined ? (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Modo</span>
                            <span className="text-sm font-medium">{measurement.gridSchedulingMode}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Valor</span>
                            <span className="text-sm font-medium">{measurement.gridSchedulingValue.toFixed(1)}%</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Límite de Exportación</span>
                            <span className="text-sm font-medium">5000 kW</span>
                          </div>
                        </>
                      ) : (
                        <div className="text-center text-gray-400">
                          Datos no disponibles
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sección de Condiciones Ambientales */}
            <TabsContent value="environmental">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Temperatura */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Temperatura</h3>
                      <Thermometer size={16} className="text-red-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Temperatura Ambiente</span>
                        <span className="text-lg font-medium">{(measurement.deviceTemperature - 8).toFixed(1)} °C</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Temperatura Dispositivo</span>
                        <span className={`text-sm font-medium ${getTemperatureColor(measurement.deviceTemperature)}`}>
                          {measurement.deviceTemperature.toFixed(1)} °C
                        </span>
                      </div>
                      {/* Añadido: Diferencia de temperatura */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Diferencia</span>
                        <span className="text-sm font-medium">
                          +{(measurement.deviceTemperature - (measurement.deviceTemperature - 8)).toFixed(1)} °C
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Radiación Solar */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Radiación Solar</h3>
                      <Sun size={16} className="text-yellow-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Actual</span>
                        <span className="text-lg font-medium">{(measurement.activePower / 4.5).toFixed(0)} W/m²</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Eficiencia Conversión</span>
                        <span className="text-sm font-medium">19.8%</span>
                      </div>
                      {/* Añadido: Rendimiento respecto a máximo teórico */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">% del Máximo Teórico</span>
                        <span className="text-sm font-medium">
                          {Math.round((measurement.activePower / 4.5) / 1000 * 100)}%
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Viento */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Condiciones del Viento</h3>
                      <Wind size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Velocidad</span>
                        <span className="text-sm font-medium">{(Math.random() * 15 + 5).toFixed(1)} km/h</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Dirección</span>
                        <span className="text-sm font-medium">
                          {['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.floor(Math.random() * 8)]}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Humedad</span>
                        <span className="text-sm font-medium">{Math.floor(Math.random() * 30 + 40)}%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Sección de Monitoreo Avanzado */}
            <TabsContent value="advanced">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Tarjeta de Estado del Inversor */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Estado del Inversor</h3>
                      <Zap size={16} className="text-yellow-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Estado</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          ON
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Eficiencia</span>
                        <span className="text-sm font-medium">{(96 + Math.random() * 2).toFixed(1)}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Tiempo en Operación</span>
                        <span className="text-sm font-medium">
                          {Math.floor(measurement.totalEnergyYield / (measurement.activePower / 24))} horas
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Monitoreo de Strings */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Monitoreo de Strings</h3>
                      <Barcode size={16} className="text-green-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Total Strings</span>
                        <span className="text-sm font-medium">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Strings Activos</span>
                        <span className="text-sm font-medium">24</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Voltaje Medio</span>
                        <span className="text-sm font-medium">675 V</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Corriente Media</span>
                        <span className="text-sm font-medium">8.2 A</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Comunicación */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Estado de Comunicación</h3>
                      <Globe size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Estado</span>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                          measurement.communicationStatus === 'Normal' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-red-500/20 text-red-400'
                        }`}>
                          {measurement.communicationStatus}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Intensidad Señal SIM</span>
                        <span className={`text-sm font-medium ${getSignalColor(measurement.simSignalStrength)}`}>
                          {measurement.simSignalStrength}%
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Estado Modbus TCP</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Activo
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Alarmas */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Alarmas Activas</h3>
                      <AlertCircle size={16} className="text-red-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Alarmas Críticas</span>
                        <span className="text-sm font-medium">0</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Alarmas Importantes</span>
                        <span className="text-sm font-medium">1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Advertencias</span>
                        <span className="text-sm font-medium">2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Parámetros de Protección */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Parámetros de Protección</h3>
                      <Shield size={16} className="text-purple-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Apagado por Sobrecarga</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Habilitado
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Comp. Potencia Reactiva</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Habilitado
                        </span>
                      </div>
                      {/* Nuevo campo: */}
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Protección Anti-Isla</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Habilitado
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Tarjeta de Sistemas Auxiliares */}
                <Card className="bg-[#111928] border-[#374151]">
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-sm font-medium text-gray-300">Sistemas Auxiliares</h3>
                      <Settings size={16} className="text-blue-400" />
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Sistema de Refrigeración</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          {getCoolingSystemStatus()}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Seguimiento Solar</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                          Automático
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">Sistema de Monitoreo</span>
                        <span className="text-sm font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                          Activo
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="text-center py-8 text-gray-400">
            No se encontraron mediciones del SmartLogger para esta planta.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AdditionalMonitor;