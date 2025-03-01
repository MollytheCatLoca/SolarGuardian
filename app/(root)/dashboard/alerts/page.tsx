"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { dummyAlerts, dummyDevices } from '@/lib/solar/dummyData';
import { Alert } from '@/types/solarTypes';
import { 
  AlertTriangle, 
  Bell, 
  Check, 
  CheckCircle, 
  Filter,
  ArrowUpDown,
  InfoIcon,
  Search
} from 'lucide-react';
import { format, parseISO, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

export default function AlertsPage() {
  const [filterSeverity, setFilterSeverity] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('timestamp');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(null);
  
  // Función para ordenar alertas
  const sortAlerts = (a: Alert, b: Alert) => {
    if (sortBy === 'timestamp') {
      return sortOrder === 'desc'
        ? new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        : new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
    } else if (sortBy === 'severity') {
      const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
      return sortOrder === 'desc'
        ? severityOrder[b.severity as keyof typeof severityOrder] - severityOrder[a.severity as keyof typeof severityOrder]
        : severityOrder[a.severity as keyof typeof severityOrder] - severityOrder[b.severity as keyof typeof severityOrder];
    } else {
      return 0;
    }
  };
  
  // Filtrar alertas
  const filteredAlerts = dummyAlerts
    .filter(alert => {
      const matchesSearch = 
        alert.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        alert.deviceName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSeverity = filterSeverity.length === 0 || filterSeverity.includes(alert.severity);
      const matchesStatus = filterStatus.length === 0 || filterStatus.includes(alert.status);
      
      return matchesSearch && matchesSeverity && matchesStatus;
    })
    .sort(sortAlerts);
  
  // Función para cambiar el orden
  const toggleSortOrder = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('desc');
    }
  };
  
  // Función para alternar filtros de severidad
  const toggleSeverityFilter = (severity: string) => {
    setFilterSeverity(prev => 
      prev.includes(severity) 
        ? prev.filter(s => s !== severity)
        : [...prev, severity]
    );
  };
  
  // Función para alternar filtros de estado
  const toggleStatusFilter = (status: string) => {
    setFilterStatus(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  // Función para obtener icono según severidad
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'critical':
        return <AlertTriangle size={16} className="text-red-600" />;
      case 'high':
        return <AlertTriangle size={16} className="text-red-500" />;
      case 'medium':
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case 'low':
        return <InfoIcon size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };
  
  // Función para obtener color según severidad
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-red-600 text-red-600';
      case 'high':
        return 'border-red-500 text-red-500';
      case 'medium':
        return 'border-yellow-500 text-yellow-500';
      case 'low':
        return 'border-blue-500 text-blue-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };
  
  // Función para obtener etiqueta de severidad en español
  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'Crítica';
      case 'high':
        return 'Alta';
      case 'medium':
        return 'Media';
      case 'low':
        return 'Baja';
      default:
        return severity;
    }
  };
  
  // Función para obtener etiqueta de estado en español
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'active':
        return 'Activa';
      case 'acknowledged':
        return 'Reconocida';
      case 'resolved':
        return 'Resuelta';
      default:
        return status;
    }
  };
  
  // Función para formatear tiempo transcurrido
  const formatTimeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { 
      addSuffix: true,
      locale: es
    });
  };
  
  // Conteo de alertas por severidad
  const alertCounts = {
    total: dummyAlerts.length,
    active: dummyAlerts.filter(a => a.status === 'active').length,
    critical: dummyAlerts.filter(a => a.severity === 'critical').length,
    high: dummyAlerts.filter(a => a.severity === 'high').length,
    medium: dummyAlerts.filter(a => a.severity === 'medium').length,
    low: dummyAlerts.filter(a => a.severity === 'low').length,
  };
  
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción */}
      <div>
        <h1 className="text-2xl font-bold text-white">Alertas</h1>
        <p className="text-sm text-gray-400">Gestión de alertas e incidencias del parque solar</p>
      </div>
      
      {/* Resumen de alertas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total de alertas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Total Alertas</p>
                <h2 className="text-2xl font-bold">{alertCounts.total}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {alertCounts.active} activas
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <Bell size={24} className="text-gray-400" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Alertas críticas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Críticas/Altas</p>
                <h2 className="text-2xl font-bold">{alertCounts.critical + alertCounts.high}</h2>
                <p className="text-xs text-red-500 mt-1">
                  Requieren atención inmediata
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <AlertTriangle size={24} className="text-red-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Alertas medias */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Alertas Medias</p>
                <h2 className="text-2xl font-bold">{alertCounts.medium}</h2>
                <p className="text-xs text-yellow-500 mt-1">
                  Monitorizar regularmente
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <AlertTriangle size={24} className="text-yellow-500" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Alertas bajas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Alertas Bajas</p>
                <h2 className="text-2xl font-bold">{alertCounts.low}</h2>
                <p className="text-xs text-blue-500 mt-1">
                  Información y advertencias
                </p>
              </div>
              <div className="p-3 rounded-full bg-[#111928]">
                <InfoIcon size={24} className="text-blue-500" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Filtros de alertas */}
      <Card className="bg-[#1f2937] border-[#374151] text-white">
        <CardHeader>
          <CardTitle>Gestión de Alertas</CardTitle>
          <CardDescription className="text-gray-400">
            Monitoreo y resolución de alertas detectadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-[#111928] text-white text-sm rounded-lg block w-full pl-10 p-2.5 border border-[#374151] focus:ring-blue-500 focus:border-blue-500"
                placeholder="Buscar alertas..."
              />
            </div>
            
            {/* Botón de filtro por severidad */}
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-[#111928] text-white text-sm rounded-lg px-4 py-2.5 border border-[#374151]"
                onClick={() => {
                  const dropdown = document.getElementById('severity-dropdown');
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
              >
                <Filter size={16} />
                Severidad
                {filterSeverity.length > 0 && (
                  <span className="bg-[#4a4ae2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {filterSeverity.length}
                  </span>
                )}
              </button>
              
              <div id="severity-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#111928] rounded-lg shadow-lg border border-[#374151]">
                <ul className="py-2">
                  {['critical', 'high', 'medium', 'low'].map((severity) => (
                    <li key={severity}>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 w-full text-sm ${
                          filterSeverity.includes(severity) ? 'bg-[#374151] text-white' : 'text-gray-300'
                        }`}
                        onClick={() => toggleSeverityFilter(severity)}
                      >
                        {getSeverityIcon(severity)}
                        <span className="ml-2">{getSeverityLabel(severity)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Botón de filtro por estado */}
            <div className="relative">
              <button
                className="flex items-center gap-2 bg-[#111928] text-white text-sm rounded-lg px-4 py-2.5 border border-[#374151]"
                onClick={() => {
                  const dropdown = document.getElementById('status-dropdown');
                  if (dropdown) {
                    dropdown.classList.toggle('hidden');
                  }
                }}
              >
                <Filter size={16} />
                Estado
                {filterStatus.length > 0 && (
                  <span className="bg-[#4a4ae2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {filterStatus.length}
                  </span>
                )}
              </button>
              
              <div id="status-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#111928] rounded-lg shadow-lg border border-[#374151]">
                <ul className="py-2">
                  {['active', 'acknowledged', 'resolved'].map((status) => (
                    <li key={status}>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 w-full text-sm ${
                          filterStatus.includes(status) ? 'bg-[#374151] text-white' : 'text-gray-300'
                        }`}
                        onClick={() => toggleStatusFilter(status)}
                      >
                        <span className="ml-2">{getStatusLabel(status)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tabla de alertas */}
          <div className="overflow-x-auto rounded-lg border border-[#374151]">
            <table className="w-full text-sm text-left text-white">
              <thead className="text-xs uppercase bg-[#111928] text-gray-300">
                <tr>
                  <th scope="col" className="px-6 py-3">Dispositivo</th>
                  <th scope="col" className="px-6 py-3">Mensaje</th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 cursor-pointer" 
                    onClick={() => toggleSortOrder('severity')}
                  >
                    <div className="flex items-center">
                      Severidad
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">Estado</th>
                  <th 
                    scope="col" 
                    className="px-6 py-3 cursor-pointer" 
                    onClick={() => toggleSortOrder('timestamp')}
                  >
                    <div className="flex items-center">
                      Fecha
                      <ArrowUpDown size={14} className="ml-1" />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredAlerts.map((alert) => (
                  <tr 
                    key={alert.id} 
                    className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151] cursor-pointer"
                    onClick={() => setSelectedAlert(alert)}
                  >
                    <td className="px-6 py-4 font-medium">{alert.deviceName}</td>
                    <td className="px-6 py-4">{alert.message}</td>
                    <td className="px-6 py-4">
                      <div className={`flex items-center ${getSeverityColor(alert.severity)}`}>
                        {getSeverityIcon(alert.severity)}
                        <span className="ml-2">{getSeverityLabel(alert.severity)}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        alert.status === 'active' 
                          ? 'bg-red-500/20 text-red-400' 
                          : alert.status === 'acknowledged'
                            ? 'bg-yellow-500/20 text-yellow-400'
                            : 'bg-green-500/20 text-green-400'
                      }`}>
                        {getStatusLabel(alert.status)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {formatTimeAgo(alert.timestamp)}
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-blue-400 hover:text-blue-300 mr-2">
                        Ver
                      </button>
                      {alert.status === 'active' && (
                        <button className="text-green-400 hover:text-green-300">
                          Reconocer
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Mensaje si no hay resultados */}
          {filteredAlerts.length === 0 && (
            <div className="flex justify-center items-center p-8 bg-[#1f2937] rounded-lg border border-[#374151] mt-4">
              <p className="text-gray-400">No se encontraron alertas que coincidan con los criterios de búsqueda.</p>
            </div>
          )}
        </CardContent>
      </Card>
      
      {/* Modal para detalles de alerta */}
      {selectedAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f2937] rounded-lg border border-[#374151] w-full max-w-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-white">Detalles de la Alerta</h2>
                <button 
                  className="text-gray-400 hover:text-white"
                  onClick={() => setSelectedAlert(null)}
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Detalles de la alerta */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Dispositivo</h3>
                    <p className="text-white">{selectedAlert.deviceName}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Tipo</h3>
                    <p className="text-white">{selectedAlert.deviceType}</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Mensaje</h3>
                  <p className="text-white">{selectedAlert.message}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Severidad</h3>
                    <div className={`flex items-center ${getSeverityColor(selectedAlert.severity)}`}>
                      {getSeverityIcon(selectedAlert.severity)}
                      <span className="ml-2">{getSeverityLabel(selectedAlert.severity)}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Estado</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      selectedAlert.status === 'active' 
                        ? 'bg-red-500/20 text-red-400' 
                        : selectedAlert.status === 'acknowledged'
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-green-500/20 text-green-400'
                    }`}>
                      {getStatusLabel(selectedAlert.status)}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Fecha y hora</h3>
                  <p className="text-white">
                    {format(parseISO(selectedAlert.timestamp), "dd/MM/yyyy HH:mm:ss", { locale: es })}
                  </p>
                </div>
                
                {selectedAlert.acknowledgedBy && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Reconocida por</h3>
                    <p className="text-white">{selectedAlert.acknowledgedBy}</p>
                    <p className="text-xs text-gray-400">
                      {format(parseISO(selectedAlert.acknowledgedAt!), "dd/MM/yyyy HH:mm:ss", { locale: es })}
                    </p>
                  </div>
                )}
                
                {selectedAlert.resolvedBy && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Resuelta por</h3>
                    <p className="text-white">{selectedAlert.resolvedBy}</p>
                    <p className="text-xs text-gray-400">
                      {format(parseISO(selectedAlert.resolvedAt!), "dd/MM/yyyy HH:mm:ss", { locale: es })}
                    </p>
                  </div>
                )}
                
                {/* Botones de acción */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#374151]">
                  <button 
                    className="px-4 py-2 rounded-lg border border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
                    onClick={() => setSelectedAlert(null)}
                  >
                    Cerrar
                  </button>
                  {selectedAlert.status === 'active' && (
                    <button className="px-4 py-2 rounded-lg bg-[#4a4ae2] text-white flex items-center">
                      <Check size={16} className="mr-2" />
                      Reconocer Alerta
                    </button>
                  )}
                  {selectedAlert.status === 'acknowledged' && (
                    <button className="px-4 py-2 rounded-lg bg-green-500 text-white flex items-center">
                      <CheckCircle size={16} className="mr-2" />
                      Marcar como Resuelta
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}