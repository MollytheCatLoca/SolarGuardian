'use client';

import React, { useState } from 'react';
import { dummyDevices } from '@/lib/solar/dummyData';
import { Search, Filter, ArrowUpDown, CheckCircle, AlertCircle, Wrench, XCircle } from 'lucide-react';

export default function DeviceTable() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState([]);
  const [filterType, setFilterType] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  
  // Función para ordenar los dispositivos
  const sortDevices = (a, b) => {
    if (sortBy === 'name') {
      return sortOrder === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else if (sortBy === 'status') {
      return sortOrder === 'asc'
        ? a.status.localeCompare(b.status)
        : b.status.localeCompare(a.status);
    } else if (sortBy === 'type') {
      return sortOrder === 'asc'
        ? a.type.localeCompare(b.type)
        : b.type.localeCompare(a.type);
    } else {
      return 0;
    }
  };
  
  // Filtrar y ordenar dispositivos
  const filteredDevices = dummyDevices
    .filter(device => {
      // Validar que las propiedades existan antes de usar toLowerCase
      const nameMatch = device.name && searchTerm ? 
        device.name.toLowerCase().includes(searchTerm.toLowerCase()) : 
        !searchTerm;
      
      const serialMatch = device.serialNumber && searchTerm ? 
        device.serialNumber.toLowerCase().includes(searchTerm.toLowerCase()) : 
        !searchTerm;
      
      const matchesSearch = nameMatch || serialMatch;
      
      const matchesStatus = filterStatus.length === 0 || 
        (device.status && filterStatus.includes(device.status));
      
      const matchesType = filterType.length === 0 || 
        (device.type && filterType.includes(device.type));
      
      return matchesSearch && matchesStatus && matchesType;
    })
    .sort(sortDevices);
  
  // Función para cambiar el orden
  const toggleSortOrder = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };
  
  // Función para alternar filtros de estado
  const toggleStatusFilter = (status) => {
    setFilterStatus(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };
  
  // Función para alternar filtros de tipo
  const toggleTypeFilter = (type) => {
    setFilterType(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };
  
  // Función para obtener icono según estado
  const getStatusIcon = (status) => {
    switch (status) {
      case 'online':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'offline':
        return <XCircle size={16} className="text-red-500" />;
      case 'warning':
        return <AlertCircle size={16} className="text-yellow-500" />;
      case 'error':
        return <AlertCircle size={16} className="text-red-500" />;
      case 'maintenance':
        return <Wrench size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };
  
  // Función para obtener etiqueta de estado en español
  const getStatusLabel = (status) => {
    switch (status) {
      case 'online':
        return 'En línea';
      case 'offline':
        return 'Sin conexión';
      case 'warning':
        return 'Advertencia';
      case 'error':
        return 'Error';
      case 'maintenance':
        return 'Mantenimiento';
      default:
        return status;
    }
  };
  
  // Función para obtener etiqueta de tipo en español
  const getTypeLabel = (type) => {
    switch (type) {
      case 'panel':
        return 'Panel';
      case 'inverter':
        return 'Inversor';
      case 'battery':
        return 'Batería';
      case 'meter':
        return 'Medidor';
      case 'smartlogger':
        return 'SmartLogger';
      case 'other':
        return 'Otro';
      default:
        return type;
    }
  };
  
  return (
    <div className="space-y-4">
      {/* Barra de búsqueda y filtros */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#1f2937] text-white text-sm rounded-lg block w-full pl-10 p-2.5 border border-[#374151] focus:ring-blue-500 focus:border-blue-500"
            placeholder="Buscar por nombre o número de serie..."
          />
        </div>
        
        {/* Botón de filtro por estado */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 bg-[#1f2937] text-white text-sm rounded-lg px-4 py-2.5 border border-[#374151]"
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
          
          <div id="status-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#1f2937] rounded-lg shadow-lg border border-[#374151]">
            <ul className="py-2">
              {['online', 'offline', 'warning', 'error', 'maintenance'].map((status) => (
                <li key={status}>
                  <button
                    type="button"
                    className={`flex items-center px-4 py-2 w-full text-sm ${
                      filterStatus.includes(status) ? 'bg-[#374151] text-white' : 'text-gray-300'
                    }`}
                    onClick={() => toggleStatusFilter(status)}
                  >
                    {getStatusIcon(status)}
                    <span className="ml-2">{getStatusLabel(status)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Botón de filtro por tipo */}
        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-2 bg-[#1f2937] text-white text-sm rounded-lg px-4 py-2.5 border border-[#374151]"
            onClick={() => {
              const dropdown = document.getElementById('type-dropdown');
              if (dropdown) {
                dropdown.classList.toggle('hidden');
              }
            }}
          >
            <Filter size={16} />
            Tipo
            {filterType.length > 0 && (
              <span className="bg-[#4a4ae2] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filterType.length}
              </span>
            )}
          </button>
          
          <div id="type-dropdown" className="hidden absolute z-10 mt-2 w-48 bg-[#1f2937] rounded-lg shadow-lg border border-[#374151]">
            <ul className="py-2">
              {['panel', 'inverter', 'battery', 'meter', 'smartlogger', 'other'].map((type) => (
                <li key={type}>
                  <button
                    type="button"
                    className={`flex items-center px-4 py-2 w-full text-sm ${
                      filterType.includes(type) ? 'bg-[#374151] text-white' : 'text-gray-300'
                    }`}
                    onClick={() => toggleTypeFilter(type)}
                  >
                    <span className="ml-2">{getTypeLabel(type)}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Lista de dispositivos */}
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
              <th scope="col" className="px-6 py-3">Modelo</th>
              <th scope="col" className="px-6 py-3">Número de Serie</th>
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
              <th scope="col" className="px-6 py-3">Ubicación</th>
            </tr>
          </thead>
          <tbody>
            {filteredDevices.map((device) => (
              <tr key={device.id} className="bg-[#1f2937] border-b border-[#374151] hover:bg-[#374151]">
                <td className="px-6 py-4 font-medium">{device.name}</td>
                <td className="px-6 py-4">{device.model}</td>
                <td className="px-6 py-4">{device.serialNumber}</td>
                <td className="px-6 py-4">{getTypeLabel(device.type)}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    {getStatusIcon(device.status)}
                    <span className="ml-2">{getStatusLabel(device.status)}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{device.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Mensaje si no hay resultados */}
      {filteredDevices.length === 0 && (
        <div className="flex justify-center items-center p-8 bg-[#1f2937] rounded-lg border border-[#374151]">
          <p className="text-gray-400">No se encontraron dispositivos que coincidan con los criterios de búsqueda.</p>
        </div>
      )}
      
      {/* Resumen de dispositivos */}
      <div className="flex flex-wrap gap-3 mt-4">
        <div className="bg-[#1f2937] px-4 py-2 rounded-lg border border-[#374151]">
          <span className="text-sm text-gray-300">Total: </span>
          <span className="text-sm font-medium text-white">{dummyDevices.length}</span>
        </div>
        <div className="bg-[#1f2937] px-4 py-2 rounded-lg border border-[#374151]">
          <span className="text-sm text-gray-300">En línea: </span>
          <span className="text-sm font-medium text-green-500">
            {dummyDevices.filter(d => d.status === 'online').length}
          </span>
        </div>
        <div className="bg-[#1f2937] px-4 py-2 rounded-lg border border-[#374151]">
          <span className="text-sm text-gray-300">Advertencias: </span>
          <span className="text-sm font-medium text-yellow-500">
            {dummyDevices.filter(d => d.status === 'warning').length}
          </span>
        </div>
        <div className="bg-[#1f2937] px-4 py-2 rounded-lg border border-[#374151]">
          <span className="text-sm text-gray-300">Errores: </span>
          <span className="text-sm font-medium text-red-500">
            {dummyDevices.filter(d => d.status === 'error').length}
          </span>
        </div>
      </div>
    </div>
  );
}