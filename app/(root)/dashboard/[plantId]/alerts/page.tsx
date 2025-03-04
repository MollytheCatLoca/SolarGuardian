"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alarm } from '@/types/alarmTypes';
import { 
  AlertTriangle, 
  Bell, 
  Check, 
  CheckCircle, 
  Filter,
  ArrowUpDown,
  InfoIcon,
  Search,
  RefreshCw,
  X
} from 'lucide-react';
import { format, parseISO, formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { useParams, useRouter } from 'next/navigation';

// Importar los servicios de alarmas
import { 
  getAlarmStatistics, 
  getAllAlarms,
  getAlarmsByStatus, 
  getAlarmsByLevel,
  acknowledgeAlarm,
  resolveAlarm
} from '@/lib/services/alarmService';

export default function AlertsPage() {
  const params = useParams();
  const router = useRouter();
  const plantId = params.plantId ? parseInt(params.plantId as string) : null;
  
  // Estados para filtrado y ordenación
  const [filterSeverity, setFilterSeverity] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('alarmDate');
  const [sortOrder, setSortOrder] = useState('desc');
  
  // Estados para datos y UI
  const [alerts, setAlerts] = useState<Alarm[]>([]);
  const [filteredAlerts, setFilteredAlerts] = useState<Alarm[]>([]);
  const [selectedAlert, setSelectedAlert] = useState<Alarm | null>(null);
  const [statistics, setStatistics] = useState({
    total: 0,
    active: 0,
    byLevel: {
      'Crítica': 0,
      'Mayor': 0,
      'Menor': 0,
      'Advertencia': 0
    }
  });
  
  // Estados para gestionar carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  
  // Cargar estadísticas de alertas
  const loadStatistics = useCallback(async () => {
    if (!plantId) return;
    
    try {
      const stats = await getAlarmStatistics(plantId);
      setStatistics(stats);
    } catch (err) {
      console.error("Error cargando estadísticas de alertas:", err);
      setError("Error al cargar estadísticas. Intente nuevamente.");
    }
  }, [plantId]);
  
  // Cargar todas las alertas
  const loadAlerts = useCallback(async () => {
    if (!plantId) return;
    
    try {
      setLoading(true);
      setError(null);
      
      const data = await getAllAlarms(plantId);
      setAlerts(data);
      
      // Cargar estadísticas
      await loadStatistics();
      
      setLastUpdate(new Date());
    } catch (err) {
      console.error("Error cargando alertas:", err);
      setError("Error al cargar alertas. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  }, [plantId, loadStatistics]);
  
  // Aplicar filtros a las alertas
  const applyFilters = useCallback((data: Alarm[]) => {
    let result = [...data];
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(alert => 
        alert.description.toLowerCase().includes(searchTerm.toLowerCase()) || 
        (alert.deviceName && alert.deviceName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filtrar por severidad
    if (filterSeverity.length > 0) {
      result = result.filter(alert => filterSeverity.includes(alert.level));
    }
    
    // Filtrar por estado
    if (filterStatus.length > 0) {
      result = result.filter(alert => filterStatus.includes(alert.status));
    }
    
    // Ordenar resultados
    result.sort((a, b) => {
      if (sortBy === 'alarmDate') {
        return sortOrder === 'desc'
          ? new Date(b.alarmDate).getTime() - new Date(a.alarmDate).getTime()
          : new Date(a.alarmDate).getTime() - new Date(b.alarmDate).getTime();
      } else if (sortBy === 'level') {
        const severityOrder: Record<string, number> = { 
          'Crítica': 4, 
          'Mayor': 3, 
          'Menor': 2, 
          'Advertencia': 1 
        };
        
        return sortOrder === 'desc'
          ? (severityOrder[b.level] || 0) - (severityOrder[a.level] || 0)
          : (severityOrder[a.level] || 0) - (severityOrder[b.level] || 0);
      }
      return 0;
    });
    
    setFilteredAlerts(result);
  }, [searchTerm, filterSeverity, filterStatus, sortBy, sortOrder]);
  
  // Efecto para actualizar filtros cuando cambian los criterios
  useEffect(() => {
    applyFilters(alerts);
  }, [alerts, searchTerm, filterSeverity, filterStatus, sortBy, sortOrder, applyFilters]);
  
  // Cargar datos cuando cambia la planta
  useEffect(() => {
    if (plantId) {
      loadAlerts();
    } else {
      // Si no hay plantId, redirigir a página principal o mostrar error
      console.error("No se encontró un ID de planta válido");
      setError("No se encontró un ID de planta válido");
    }
  }, [plantId, loadAlerts]);
  
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
  
  // Función para reconocer una alerta
  const handleAcknowledgeAlert = async (alert: Alarm) => {
    try {
      setIsUpdating(true);
      // En un sistema real, necesitaríamos el ID de usuario actual
      const mockUserId = 'user-123';
      
      await acknowledgeAlarm(alert.id, mockUserId, plantId || undefined);
      
      // Actualizar la lista de alertas
      await loadAlerts();
      
      // Cerrar modal
      setSelectedAlert(null);
      
    } catch (err) {
      console.error("Error al reconocer la alerta:", err);
      setError("Error al reconocer la alerta. Intente nuevamente.");
    } finally {
      setIsUpdating(false);
    }
  };
  
  // Función para marcar una alerta como resuelta
  const handleResolveAlert = async (alert: Alarm) => {
    try {
      setIsUpdating(true);
      // En un sistema real, necesitaríamos el ID de usuario actual
      const mockUserId = 'user-123';
      
      await resolveAlarm(alert.id, mockUserId, "Problema resuelto por el operador", plantId || undefined);
      
      // Actualizar la lista de alertas
      await loadAlerts();
      
      // Cerrar modal
      setSelectedAlert(null);
      
    } catch (err) {
      console.error("Error al resolver la alerta:", err);
      setError("Error al resolver la alerta. Intente nuevamente.");
    } finally {
      setIsUpdating(false);
    }
  };
  
  // Función para obtener icono según severidad
  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case 'Crítica':
        return <AlertTriangle size={16} className="text-red-600" />;
      case 'Mayor':
        return <AlertTriangle size={16} className="text-red-500" />;
      case 'Menor':
        return <AlertTriangle size={16} className="text-yellow-500" />;
      case 'Advertencia':
        return <InfoIcon size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };
  
  // Función para obtener color según severidad
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítica':
        return 'border-red-600 text-red-600';
      case 'Mayor':
        return 'border-red-500 text-red-500';
      case 'Menor':
        return 'border-yellow-500 text-yellow-500';
      case 'Advertencia':
        return 'border-blue-500 text-blue-500';
      default:
        return 'border-gray-500 text-gray-500';
    }
  };
  
  // Función para obtener color de badge según estado
  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Activa':
        return 'bg-red-500/20 text-red-400';
      case 'Reconocida':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'Resuelta':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  // Función para formatear tiempo transcurrido
  const formatTimeAgo = (timestamp: string) => {
    return formatDistanceToNow(new Date(timestamp), { 
      addSuffix: true,
      locale: es
    });
  };
  
  return (
    <div className="p-6 space-y-6">
      {/* Título y descripción con botón de actualización */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Alertas</h1>
          <p className="text-sm text-gray-400">Gestión de alertas e incidencias del parque solar</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-xs text-gray-400">
            Última actualización: {lastUpdate.toLocaleTimeString()}
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={loadAlerts}
            disabled={loading || isUpdating}
            className="bg-[#1f2937] border-[#374151] text-white hover:bg-[#374151]"
          >
            <RefreshCw size={16} className={`mr-2 ${loading || isUpdating ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </div>
      
      {/* Mostrar mensaje de error si existe */}
      {error ? (
        <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
          <AlertTriangle className="mr-2" size={16} />
          <span>{error}</span>
          <Button 
            variant="ghost" 
            size="sm" 
            className="ml-auto text-red-400" 
            onClick={() => setError(null)}
          >
            <X size={16} />
          </Button>
        </div>
      ) : null}
      
      {/* Resumen de alertas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total de alertas */}
        <Card className="bg-[#1f2937] border-[#374151] text-white">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-400">Total Alertas</p>
                <h2 className="text-2xl font-bold">{statistics.total}</h2>
                <p className="text-xs text-gray-400 mt-1">
                  {statistics.active} activas
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
                <h2 className="text-2xl font-bold">{statistics.byLevel.Crítica + statistics.byLevel.Mayor}</h2>
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
                <h2 className="text-2xl font-bold">{statistics.byLevel.Menor}</h2>
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
                <h2 className="text-2xl font-bold">{statistics.byLevel.Advertencia}</h2>
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
                  {['Crítica', 'Mayor', 'Menor', 'Advertencia'].map((severity) => (
                    <li key={severity}>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 w-full text-sm ${
                          filterSeverity.includes(severity) ? 'bg-[#374151] text-white' : 'text-gray-300'
                        }`}
                        onClick={() => toggleSeverityFilter(severity)}
                      >
                        {getSeverityIcon(severity)}
                        <span className="ml-2">{severity}</span>
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
                  {['Activa', 'Reconocida', 'Resuelta'].map((status) => (
                    <li key={status}>
                      <button
                        type="button"
                        className={`flex items-center px-4 py-2 w-full text-sm ${
                          filterStatus.includes(status) ? 'bg-[#374151] text-white' : 'text-gray-300'
                        }`}
                        onClick={() => toggleStatusFilter(status)}
                      >
                        <span className="ml-2">{status}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tabla de alertas */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto rounded-lg border border-[#374151]">
                <table className="w-full text-sm text-left text-white">
                  <thead className="text-xs uppercase bg-[#111928] text-gray-300">
                    <tr>
                      <th scope="col" className="px-6 py-3">Dispositivo</th>
                      <th scope="col" className="px-6 py-3">Mensaje</th>
                      <th 
                        scope="col" 
                        className="px-6 py-3 cursor-pointer" 
                        onClick={() => toggleSortOrder('level')}
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
                        onClick={() => toggleSortOrder('alarmDate')}
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
                        <td className="px-6 py-4 font-medium">{alert.deviceName || `Dispositivo ${alert.deviceId}`}</td>
                        <td className="px-6 py-4">{alert.description}</td>
                        <td className="px-6 py-4">
                          <div className={`flex items-center ${getSeverityColor(alert.level)}`}>
                            {getSeverityIcon(alert.level)}
                            <span className="ml-2">{alert.level}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(alert.status)}`}>
                            {alert.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          {formatTimeAgo(alert.alarmDate)}
                        </td>
                        <td className="px-6 py-4">
                          <button 
                            className="text-blue-400 hover:text-blue-300 mr-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedAlert(alert);
                            }}
                          >
                            Ver
                          </button>
                          {alert.status === 'Activa' && (
                            <button 
                              className="text-green-400 hover:text-green-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAcknowledgeAlert(alert);
                              }}
                              disabled={isUpdating}
                            >
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
              {filteredAlerts.length === 0 && !loading && (
                <div className="flex justify-center items-center p-8 bg-[#1f2937] rounded-lg border border-[#374151] mt-4">
                  <p className="text-gray-400">No se encontraron alertas que coincidan con los criterios de búsqueda.</p>
                </div>
              )}
            </>
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
                  className="text-gray-400 hover:text-white p-1"
                  onClick={() => setSelectedAlert(null)}
                  disabled={isUpdating}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                {/* Detalles de la alerta */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Dispositivo</h3>
                    <p className="text-white">{selectedAlert.deviceName || `Dispositivo ${selectedAlert.deviceId}`}</p>
                  </div>
                  {selectedAlert.deviceType && (
                    <div>
                      <h3 className="text-sm text-gray-400 mb-1">Tipo</h3>
                      <p className="text-white">{selectedAlert.deviceType}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Mensaje</h3>
                  <p className="text-white">{selectedAlert.description}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Severidad</h3>
                    <div className={`flex items-center ${getSeverityColor(selectedAlert.level)}`}>
                      {getSeverityIcon(selectedAlert.level)}
                      <span className="ml-2">{selectedAlert.level}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Estado</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeColor(selectedAlert.status)}`}>
                      {selectedAlert.status}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Fecha y hora</h3>
                  <p className="text-white">
                    {format(parseISO(selectedAlert.alarmDate), "dd/MM/yyyy HH:mm:ss", { locale: es })}
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
                      {format(parseISO(selectedAlert.resolutionDate!), "dd/MM/yyyy HH:mm:ss", { locale: es })}
                    </p>
                  </div>
                )}
                
                {selectedAlert.resolution && (
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Resolución</h3>
                    <p className="text-white">{selectedAlert.resolution}</p>
                  </div>
                )}
                
                {/* Botones de acción */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#374151]">
                  <Button 
                    variant="outline" 
                    className="border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
                    onClick={() => setSelectedAlert(null)}
                    disabled={isUpdating}
                  >
                    Cerrar
                  </Button>
                  
                  {selectedAlert.status === 'Activa' && (
                    <Button 
                      className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
                      onClick={() => handleAcknowledgeAlert(selectedAlert)}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <>
                          <RefreshCw size={16} className="mr-2 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <Check size={16} className="mr-2" />
                          Reconocer Alerta
                        </>
                      )}
                    </Button>
                  )}
                  
                  {selectedAlert.status === 'Reconocida' && (
                    <Button 
                      className="bg-green-600 text-white hover:bg-green-700"
                      onClick={() => handleResolveAlert(selectedAlert)}
                      disabled={isUpdating}
                    >
                      {isUpdating ? (
                        <>
                          <RefreshCw size={16} className="mr-2 animate-spin" />
                          Procesando...
                        </>
                      ) : (
                        <>
                          <CheckCircle size={16} className="mr-2" />
                          Marcar como Resuelta
                        </>
                      )}
                    </Button>
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