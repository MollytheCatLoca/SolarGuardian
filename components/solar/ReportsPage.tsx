"use client";

import React, { useState } from 'react';

import { CardTitle, CardDescription, CardContent, CardHeader, Card } from '@/components/ui/card';
import { TabsContent, Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { dummyAlerts, dummySolarPark, dummyEnergyGeneration, dummyMaintenanceTasks } from '@/lib/solar/dummyData';
import { formatDate, subDays, startOfMonth, endOfMonth } from 'date-fns';
import { es } from 'date-fns/locale';
import { FileText, Download, Printer, ChevronDown, Calendar as CalendarIcon, BarChart3, AlertTriangle, Zap, Wrench, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';



// Datos de ejemplo para los gráficos
const generateMonthlyData = () => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return months.map((month, index) => {
    const factor = Math.abs(Math.sin(index / 2)) + 0.3;
    return {
      month,
      generacion: Math.round(430 * factor),
      consumo: Math.round(250 * (Math.random() * 0.3 + 0.7)),
      inyeccion: Math.round(180 * factor),
      curtailment: Math.round(45 * factor * Math.random()),
      ahorro: Math.round(330 * factor)
    };
  });
};

const generateMaintenanceData = () => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return months.map((month) => {
    return {
      month,
      preventivas: Math.floor(Math.random() * 12) + 2,
      correctivas: Math.floor(Math.random() * 6),
      tiempoInactividad: Math.floor(Math.random() * 24),
    };
  });
};

const generateAlertData = () => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return months.map((month) => {
    return {
      month,
      criticas: Math.floor(Math.random() * 5),
      altas: Math.floor(Math.random() * 8) + 2,
      medias: Math.floor(Math.random() * 15) + 5,
      bajas: Math.floor(Math.random() * 20) + 10,
    };
  });
};

const monthlyData = generateMonthlyData();
const maintenanceData = generateMaintenanceData();
const alertData = generateAlertData();

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState('generacion');
  const [dateRange, setDateRange] = useState<{from: Date, to: Date}>({
    from: startOfMonth(new Date()),
    to: endOfMonth(new Date())
  });
  const [selectedFormat, setSelectedFormat] = useState('pdf');
  
  const generateReport = () => {
    // Esta función simulará la generación de un informe
    alert(`Generando informe de ${selectedReport} en formato ${selectedFormat} para el período ${formatDate(dateRange.from, 'dd/MM/yyyy')} al ${formatDate(dateRange.to, 'dd/MM/yyyy')}`);
  };
  
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción */}
      <div>
   
        <p className="text-sm text-gray-400">Generación de informes detallados sobre el rendimiento y mantenimiento del parque solar</p>
      </div>
      
      {/* Tarjeta de selección de informes */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Generar Informes</CardTitle>
          <CardDescription className="text-gray-400">
            Seleccione los parámetros para generar el informe deseado
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Tipo de informe */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Tipo de Informe</label>
              <Select 
                defaultValue="generacion" 
                value={selectedReport}
                onValueChange={(value) => setSelectedReport(value)}
              >
                <SelectTrigger className="bg-[#111928] text-white border-[#374151]">
                  <SelectValue placeholder="Seleccione el tipo de informe" />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] text-white border-[#374151]">
                  <SelectItem value="generacion">Generación de Energía</SelectItem>
                  <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                  <SelectItem value="alertas">Alertas e Incidencias</SelectItem>
                  <SelectItem value="financiero">Análisis Financiero</SelectItem>
                  <SelectItem value="ambiental">Impacto Ambiental</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Rango de fechas */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Período</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full justify-start text-left font-normal bg-[#111928] text-white border-[#374151]"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {formatDate(dateRange.from, "dd/MM/yyyy")} -{" "}
                          {formatDate(dateRange.to, "dd/MM/yyyy")}
                        </>
                      ) : (
                        formatDate(dateRange.from, "dd/MM/yyyy")
                      )
                    ) : (
                      <span>Seleccione un período</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-[#111928] text-white border-[#374151]" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange.from}
                    selected={dateRange}
                    onSelect={(range) => {
                      if (range?.from && range?.to) {
                        setDateRange(range);
                      }
                    }}
                    numberOfMonths={2}
                    className="bg-[#111928]"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            {/* Formato de salida */}
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Formato</label>
              <Select 
                defaultValue="pdf"
                value={selectedFormat}
                onValueChange={(value) => setSelectedFormat(value)}
              >
                <SelectTrigger className="bg-[#111928] text-white border-[#374151]">
                  <SelectValue placeholder="Seleccione el formato" />
                </SelectTrigger>
                <SelectContent className="bg-[#111928] text-white border-[#374151]">
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="csv">CSV</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Botón de generación */}
            <div className="flex items-end">
              <Button 
                className="w-full bg-[#4a4ae2] hover:bg-[#3b3be0] text-white"
                onClick={generateReport}
              >
                <FileText className="mr-2 h-4 w-4" />
                Generar Informe
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Pestañas de previsualización de informes */}
      <Tabs defaultValue="generacion" value={selectedReport} className="w-full">
        <TabsList className="bg-[#1f2937] border border-[#374151] mb-4">
          <TabsTrigger 
            value="generacion"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
            onClick={() => setSelectedReport('generacion')}
          >
            <Zap className="mr-2 h-4 w-4" />
            Generación
          </TabsTrigger>
          <TabsTrigger 
            value="mantenimiento"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
            onClick={() => setSelectedReport('mantenimiento')}
          >
            <Wrench className="mr-2 h-4 w-4" />
            Mantenimiento
          </TabsTrigger>
          <TabsTrigger 
            value="alertas"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
            onClick={() => setSelectedReport('alertas')}
          >
            <AlertTriangle className="mr-2 h-4 w-4" />
            Alertas
          </TabsTrigger>
          <TabsTrigger 
            value="financiero"
            className="data-[state=active]:bg-[#4a4ae2] data-[state=active]:text-white text-gray-300"
            onClick={() => setSelectedReport('financiero')}
          >
            <BarChart3 className="mr-2 h-4 w-4" />
            Financiero
          </TabsTrigger>
        </TabsList>
        
        {/* Contenido de las pestañas */}
        <TabsContent value="generacion" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Informe de Generación de Energía</CardTitle>
                <CardDescription className="text-gray-400">
                  Análisis de la generación, consumo e inyección a la red
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
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="generacion" name="Generación (kWh)" stroke="#4a4ae2" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="consumo" name="Consumo (kWh)" stroke="#10b981" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="inyeccion" name="Inyección a Red (kWh)" stroke="#f59e0b" dot={false} strokeWidth={2} />
                    <Line type="monotone" dataKey="curtailment" name="Curtailment (kWh)" stroke="#ef4444" dot={false} strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Generación Total</p>
                  <p className="text-2xl font-bold">4,254 MWh</p>
                  <p className="text-xs text-green-400">+12.3% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Autoconsumo</p>
                  <p className="text-2xl font-bold">2,310 MWh</p>
                  <p className="text-xs text-green-400">54.3% del total generado</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Inyección a Red</p>
                  <p className="text-2xl font-bold">1,834 MWh</p>
                  <p className="text-xs text-green-400">43.1% del total generado</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Curtailment</p>
                  <p className="text-2xl font-bold">110 MWh</p>
                  <p className="text-xs text-red-400">2.6% del total generado</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mantenimiento" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Informe de Mantenimiento</CardTitle>
                <CardDescription className="text-gray-400">
                  Registro de actividades preventivas y correctivas
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
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={maintenanceData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Legend />
                    <Bar dataKey="preventivas" name="Tareas Preventivas" fill="#4a4ae2" />
                    <Bar dataKey="correctivas" name="Tareas Correctivas" fill="#ef4444" />
                    <Line type="monotone" dataKey="tiempoInactividad" name="Tiempo de Inactividad (h)" stroke="#f59e0b" strokeWidth={2} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Mantenimientos</p>
                  <p className="text-2xl font-bold">124</p>
                  <p className="text-xs text-blue-400">78 preventivos | 46 correctivos</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Tiempo Inactividad</p>
                  <p className="text-2xl font-bold">98 horas</p>
                  <p className="text-xs text-red-400">1.1% del tiempo total</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">MTBF</p>
                  <p className="text-2xl font-bold">215 horas</p>
                  <p className="text-xs text-green-400">+15% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">MTTR</p>
                  <p className="text-2xl font-bold">2.1 horas</p>
                  <p className="text-xs text-green-400">-8% vs período anterior</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="alertas" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Informe de Alertas e Incidencias</CardTitle>
                <CardDescription className="text-gray-400">
                  Análisis de alertas detectadas por severidad
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
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={alertData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Legend />
                    <Bar dataKey="criticas" name="Alertas Críticas" stackId="a" fill="#ef4444" />
                    <Bar dataKey="altas" name="Alertas Altas" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="medias" name="Alertas Medias" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="bajas" name="Alertas Bajas" stackId="a" fill="#10b981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Total Alertas</p>
                  <p className="text-2xl font-bold">458</p>
                  <p className="text-xs text-green-400">-8% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Tiempo de Respuesta</p>
                  <p className="text-2xl font-bold">1.8 horas</p>
                  <p className="text-xs text-green-400">-15% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Tasa de Resolución</p>
                  <p className="text-2xl font-bold">94.2%</p>
                  <p className="text-xs text-green-400">+2.1% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Alertas Recurrentes</p>
                  <p className="text-2xl font-bold">12%</p>
                  <p className="text-xs text-red-400">+3% vs período anterior</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="financiero" className="mt-4">
          <Card className="bg-[#1f2937] border-[#374151] text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Informe Financiero</CardTitle>
                <CardDescription className="text-gray-400">
                  Análisis económico y ahorro generado
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
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#718096" />
                    <YAxis stroke="#718096" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#111928', 
                        border: '1px solid #374151',
                        color: 'white'
                      }}
                      labelStyle={{ color: '#a0aec0' }}
                    />
                    <Legend />
                    <Bar dataKey="ahorro" name="Ahorro (USD)" fill="#10b981" />
                    <Line type="monotone" dataKey="generacion" name="Generación (kWh)" stroke="#4a4ae2" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Ahorro Total</p>
                  <p className="text-2xl font-bold">$89,425</p>
                  <p className="text-xs text-green-400">+15.3% vs período anterior</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Ingresos por Inyección</p>
                  <p className="text-2xl font-bold">$32,180</p>
                  <p className="text-xs text-green-400">35.9% del ahorro total</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Costo de Mantenimiento</p>
                  <p className="text-2xl font-bold">$12,450</p>
                  <p className="text-xs text-red-400">13.9% del ahorro total</p>
                </div>
                <div className="bg-[#111928] p-4 rounded-lg">
                  <p className="text-sm text-gray-400">ROI Proyectado</p>
                  <p className="text-2xl font-bold">4.8 años</p>
                  <p className="text-xs text-green-400">-0.3 años vs estimación inicial</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      {/* Informes recientes */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Informes Recientes</CardTitle>
          <CardDescription className="text-gray-400">
            Últimos informes generados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs uppercase bg-[#111928] text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Nombre</th>
                  <th scope="col" className="px-6 py-3">Tipo</th>
                  <th scope="col" className="px-6 py-3">Período</th>
                  <th scope="col" className="px-6 py-3">Generado por</th>
                  <th scope="col" className="px-6 py-3">Fecha</th>
                  <th scope="col" className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                  <td className="px-6 py-4">Informe Mensual de Generación</td>
                  <td className="px-6 py-4">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">
                      Generación
                    </span>
                  </td>
                  <td className="px-6 py-4">01/02/2025 - 28/02/2025</td>
                  <td className="px-6 py-4">Admin</td>
                  <td className="px-6 py-4">01/03/2025</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                  <td className="px-6 py-4">Reporte Trimestral de Mantenimiento</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">
                      Mantenimiento
                    </span>
                  </td>
                  <td className="px-6 py-4">01/12/2024 - 28/02/2025</td>
                  <td className="px-6 py-4">Técnico</td>
                  <td className="px-6 py-4">02/03/2025</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                  <td className="px-6 py-4">Análisis Financiero Anual</td>
                  <td className="px-6 py-4">
                    <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs">
                      Financiero
                    </span>
                  </td>
                  <td className="px-6 py-4">01/01/2024 - 31/12/2024</td>
                  <td className="px-6 py-4">Director</td>
                  <td className="px-6 py-4">15/01/2025</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                  <td className="px-6 py-4">Registro de Alertas e Incidencias</td>
                  <td className="px-6 py-4">
                    <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">
                      Alertas
                    </span>
                  </td>
                  <td className="px-6 py-4">01/02/2025 - 28/02/2025</td>
                  <td className="px-6 py-4">Operador</td>
                  <td className="px-6 py-4">01/03/2025</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#1f2937] hover:bg-[#374151]">
                  <td className="px-6 py-4">Reporte de Impacto Ambiental</td>
                  <td className="px-6 py-4">
                    <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">
                      Ambiental
                    </span>
                  </td>
                  <td className="px-6 py-4">01/01/2025 - 28/02/2025</td>
                  <td className="px-6 py-4">Admin</td>
                  <td className="px-6 py-4">03/03/2025</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Download size={16} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300">
                        <Share2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      {/* Informes programados */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Informes Programados</CardTitle>
            <CardDescription className="text-gray-400">
              Informes configurados para generación automática
            </CardDescription>
          </div>
          <Button className="bg-[#4a4ae2] hover:bg-[#3b3be0] text-white">
            Nuevo Informe Programado
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Reporte Diario de Generación</h3>
                  <p className="text-sm text-gray-400">Generación automática al finalizar cada día</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white hover:text-red-300">
                    Eliminar
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <span className="text-gray-400">Tipo:</span>
                  <span className="ml-2 bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs">Generación</span>
                </div>
                <div>
                  <span className="text-gray-400">Formato:</span>
                  <span className="ml-2">PDF</span>
                </div>
                <div>
                  <span className="text-gray-400">Destinatarios:</span>
                  <span className="ml-2">3 usuarios</span>
                </div>
                <div>
                  <span className="text-gray-400">Próxima ejecución:</span>
                  <span className="ml-2">03/03/2025</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Reporte Semanal de Alertas</h3>
                  <p className="text-sm text-gray-400">Generación automática cada lunes</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white hover:text-red-300">
                    Eliminar
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <span className="text-gray-400">Tipo:</span>
                  <span className="ml-2 bg-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs">Alertas</span>
                </div>
                <div>
                  <span className="text-gray-400">Formato:</span>
                  <span className="ml-2">PDF, Excel</span>
                </div>
                <div>
                  <span className="text-gray-400">Destinatarios:</span>
                  <span className="ml-2">5 usuarios</span>
                </div>
                <div>
                  <span className="text-gray-400">Próxima ejecución:</span>
                  <span className="ml-2">04/03/2025</span>
                </div>
              </div>
            </div>
            
            <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Reporte Mensual de Mantenimiento</h3>
                  <p className="text-sm text-gray-400">Generación automática el primer día de cada mes</p>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white">
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="bg-[#111928] border-[#374151] text-white hover:text-red-300">
                    Eliminar
                  </Button>
                </div>
              </div>
              <div className="mt-4 flex justify-between text-sm">
                <div>
                  <span className="text-gray-400">Tipo:</span>
                  <span className="ml-2 bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs">Mantenimiento</span>
                </div>
                <div>
                  <span className="text-gray-400">Formato:</span>
                  <span className="ml-2">PDF</span>
                </div>
                <div>
                  <span className="text-gray-400">Destinatarios:</span>
                  <span className="ml-2">4 usuarios</span>
                </div>
                <div>
                  <span className="text-gray-400">Próxima ejecución:</span>
                  <span className="ml-2">01/04/2025</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}