"use client";

import React, { useState, useEffect } from 'react';
import { 
  AlertTriangle, 
  ArrowUpDown, 
  CheckCircle2, 
  Search, 
  X,
  Info
} from 'lucide-react';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { Button } from '@/components/ui/button';

// Importar servicios y tipos
import { getAllDevices, getDeviceById } from '@/lib/services/deviceService';
import { UnifiedDevice } from '@/types/unifiedDeviceTypes';

interface DeviceTableProps {
  plantId: number;
}

export default function DeviceTable({ plantId }: DeviceTableProps) {
  // Estados para dispositivos y filtrado
  const [devices, setDevices] = useState<UnifiedDevice[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<UnifiedDevice[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<UnifiedDevice | null>(null);
  
  // Estados para filtrado y ordenación
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('type');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Estados para gestionar carga y errores
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Cargar dispositivos al montar el componente
  useEffect(() => {
    const loadDevices = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const deviceData = await getAllDevices(plantId);
        setDevices(deviceData);
        setFilteredDevices(deviceData);
      } catch (err) {
        console.error("Error cargando dispositivos:", err);
        setError("Error al cargar dispositivos. Intente nuevamente.");
      } finally {
        setLoading(false);
      }
    };
    
    loadDevices();
  }, [plantId]);
  
  // Aplicar filtros cuando cambian los criterios
  useEffect(() => {
    let result = [...devices];
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(device => 
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filtrar por tipo
    if (filterType.length > 0) {
      result = result.filter(device => filterType.includes(device.type));
    }
    
    // Filtrar por estado
    if (filterStatus.length > 0) {
      result = result.filter(device => filterStatus.includes(device.status));
    }
    
    // Ordenar resultados
    result.sort((a, b) => {
      const aValue = sortBy === 'lastMaintenanceDate' 
        ? new Date(a.lastMaintenanceDate || a.installationDate).getTime() 
        : a[sortBy as keyof UnifiedDevice];
      
      const bValue = sortBy === 'lastMaintenanceDate' 
        ? new Date(b.lastMaintenanceDate || b.installationDate).getTime() 
        : b[sortBy as keyof UnifiedDevice];
      
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc' 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      }
      
      // Para valores numéricos o fechas
      return sortOrder === 'asc' 
        ? (aValue as number) - (bValue as number) 
        : (bValue as number) - (aValue as number);
    });
    
    setFilteredDevices(result);
  }, [devices, searchTerm, filterType, filterStatus, sortBy, sortOrder]);
  
  // Función para cambiar el orden
  const toggleSortOrder = (field: string) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  
  // Función para alternar filtros de tipo
  const toggleTypeFilter = (type: string) => {
    setFilterType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
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
  
  // Función para obtener color según estado
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'activo':
      case 'online':
        return 'bg-green-500/20 text-green-400';
      case 'advertencia':
      case 'warning':
        return 'bg-yellow-500/20 text-yellow-400';
      case 'falla':
      case 'error':
        return 'bg-red-500/20 text-red-400';
      case 'mantenimiento':
      case 'maintenance':
        return 'bg-blue-500/20 text-blue-400';
      case 'inactivo':
      case 'offline':
        return 'bg-gray-500/20 text-gray-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };
  
  // Si está cargando, mostrar un indicador de carga
  if (loading) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }
  
  // Si hay un error, mostrar mensaje
  if (error) {
    return (
      <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center">
        <AlertTriangle className="mr-2" size={16} />
        <span>{error}</span>
      </div>
    );
  }
  
  return (
    <div>
      {/* Filtros */}
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
            placeholder="Buscar dispositivos..."
          />
        </div>
        
        {/* Botón de filtro por tipo */}
        <div className="relative">
          <button
            className="flex items-center gap-2 bg-[#111928] text-white text-sm rounded-lg px-4 py-2.5 border border-[#374151]"
            onClick={() => {
              const dropdown = document.getElementById('type-dropdown');
              if (dropdown) {
                dropdown.classList.toggle('hidden');
              }
            }}
          >
            Tipo
            {filterType.length > 0 && (
              <span className="bg-[#4a4ae2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filterType.length}
              </span>
            )}
          </button>
          
          <div id="type-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#111928] rounded-lg shadow-lg border border-[#374151]">
            <ul className="py-2">
              {['SmartLogger', 'Inversor', 'Batería', 'Medidor', 'Panel', 'Otro'].map((type) => (
                <li key={type}>
                  <button
                    type="button"
                    className={`flex items-center px-4 py-2 w-full text-sm ${
                      filterType.includes(type) ? 'bg-[#374151] text-white' : 'text-gray-300'
                    }`}
                    onClick={() => toggleTypeFilter(type)}
                  >
                    <span className="ml-2">{type}</span>
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
            Estado
            {filterStatus.length > 0 && (
              <span className="bg-[#4a4ae2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filterStatus.length}
              </span>
            )}
          </button>
          
          <div id="status-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#111928] rounded-lg shadow-lg border border-[#374151]">
            <ul className="py-2">
              {['Activo', 'Advertencia', 'Falla', 'Mantenimiento', 'Inactivo'].map((status) => (
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
      
      {/* Tabla de dispositivos */}
      <div className="overflow-x-auto rounded-lg border border-[#374151]">
        <table className="w-full text-sm text-left text-white">
          <thead className="text-xs uppercase bg-[#111928] text-gray-300">
            <tr>
              <th 
                scope="col" 
                className="px-6 py-3 cursor-pointer" 
                onClick={() => toggleSortOrder('name')}
              >
                <div className="flex items-center">
                  Nombre
                  <ArrowUpDown size={14} className="ml-1" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 cursor-pointer" 
                onClick={() => toggleSortOrder('type')}
              >
                <div className="flex items-center">
                  Tipo
                  <ArrowUpDown size={14} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Modelo</th>
              <th 
                scope="col" 
                className="px-6 py-3 cursor-pointer" 
                onClick={() => toggleSortOrder('status')}
              >
                <div className="flex items-center">
                  Estado
                  <ArrowUpDown size={14} className="ml-1" />
                </div>
              </th>
              <th 
                scope="col" 
                className="px-6 py-3 cursor-pointer" 
                onClick={() => toggleSortOrder('lastMaintenanceDate')}
              >
                <div className="flex items-center">
                  Último Mantenimiento
                  <ArrowUpDown size={14} className="ml-1" />
                </div>
              </th>
              <th scope="col" className="px-6 py-3">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.length === 0 ? (
              <tr className="bg-[#1f2937] border-b border-[#374151]">
                <td colSpan={6} className="px-6 py-4 text-center text-gray-400">
                  No se encontraron dispositivos con los criterios de búsqueda.
                </td>
              </tr>
            ) : (
              filteredDevices.map((device) => (
                <tr 
                  key={device.id} 
                  className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151] cursor-pointer"
                  onClick={() => setSelectedDevice(device)}
                >
                  <td className="px-6 py-4 font-medium">{device.name}</td>
                  <td className="px-6 py-4">{device.type}</td>
                  <td className="px-6 py-4">{device.model}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(device.status)}`}>
                      {device.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    {device.lastMaintenanceDate ? 
                      format(parseISO(device.lastMaintenanceDate), "dd/MM/yyyy") : 
                      'No disponible'}
                  </td>
                  <td className="px-6 py-4">
                    <button 
                      className="text-blue-400 hover:text-blue-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedDevice(device);
                      }}
                    >
                      Detalles
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Modal de detalles de dispositivo */}
      {selectedDevice && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1f2937] rounded-lg border border-[#374151] w-full max-w-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-white">{selectedDevice.name}</h2>
                <button 
                  className="text-gray-400 hover:text-white p-1"
                  onClick={() => setSelectedDevice(null)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Tipo</h3>
                    <p className="text-white">{selectedDevice.type}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Modelo</h3>
                    <p className="text-white">{selectedDevice.model}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Número de Serie</h3>
                    <p className="text-white">{selectedDevice.serialNumber}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Estado</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedDevice.status)}`}>
                      {selectedDevice.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Fecha de Instalación</h3>
                    <p className="text-white">{format(parseISO(selectedDevice.installationDate), "dd/MM/yyyy")}</p>
                  </div>
                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">Último Mantenimiento</h3>
                    <p className="text-white">
                      {selectedDevice.lastMaintenanceDate ? 
                        format(parseISO(selectedDevice.lastMaintenanceDate), "dd/MM/yyyy") : 
                        'No disponible'}
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-sm text-gray-400 mb-1">Ubicación Física</h3>
                  <p className="text-white">{selectedDevice.physicalLocation}</p>
                </div>
                
                {/* Mostrar información específica según el tipo de dispositivo */}
                {selectedDevice.type === 'Inversor' && selectedDevice.inverterDetails && (
                  <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
                    <h3 className="text-sm font-medium text-white mb-2">Detalles del Inversor</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-400">Potencia Máxima</p>
                        <p className="text-sm">{selectedDevice.inverterDetails.maxPower} kW</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Eficiencia</p>
                        <p className="text-sm">{selectedDevice.inverterDetails.efficiency}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Tensión de Entrada</p>
                        <p className="text-sm">{selectedDevice.inverterDetails.inputVoltage} V</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Tensión de Salida</p>
                        <p className="text-sm">{selectedDevice.inverterDetails.outputVoltage} V</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {selectedDevice.type === 'Batería' && selectedDevice.batteryDetails && (
                  <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
                    <h3 className="text-sm font-medium text-white mb-2">Detalles de la Batería</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-400">Estado de Carga</p>
                        <p className="text-sm">{selectedDevice.batteryDetails.stateOfCharge}%</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Capacidad</p>
                        <p className="text-sm">{selectedDevice.batteryDetails.capacity} kWh</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Ciclos</p>
                        <p className="text-sm">{selectedDevice.batteryDetails.cycles}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mostrar la última lectura si existe */}
                {selectedDevice.readings && selectedDevice.readings.length > 0 && (
                  <div className="bg-[#111928] p-4 rounded-lg border border-[#374151]">
                    <h3 className="text-sm font-medium text-white mb-2">Última Lectura</h3>
                    <div className="text-xs text-gray-400 mb-2">
                      {format(parseISO(selectedDevice.readings[0].timestamp), "dd/MM/yyyy HH:mm:ss")}
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(selectedDevice.readings[0].metrics).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-xs text-gray-400">{key}</p>
                          <p className="text-sm">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Botones de acción */}
                <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-[#374151]">
                  <Button 
                    variant="outline" 
                    className="border-[#374151] text-gray-300 hover:bg-[#374151] hover:text-white"
                    onClick={() => setSelectedDevice(null)}
                  >
                    Cerrar
                  </Button>
                  
                  <Button 
                    className="bg-[#4a4ae2] text-white hover:bg-[#3b3be0]"
                    onClick={() => {
                      // Aquí se podría implementar la navegación a la página de detalles completos
                      // o incluir lógica para actualizar el dispositivo
                      alert(`Ver detalles completos del dispositivo ${selectedDevice.id}`);
                    }}
                  >
                    <Info size={16} className="mr-2" />
                    Ver Detalles Completos
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}