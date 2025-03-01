"use client";

import React, { useState } from 'react';
import { Search, Bell, Sun, Moon, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function SolarHeader() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  
  // Función para alternar entre modo claro y oscuro
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Aquí implementaríamos la lógica real para cambiar el tema
  };
  
  // Función para obtener el título según el módulo activo
  const getModuleTitle = () => {
    const path = pathname.split('/');
    const activeModule = path.length > 2 ? path[2] : 'dashboard';
    
    switch (activeModule) {
      case 'monitor':
        return 'Monitoreo en Tiempo Real';
      case 'maintenance':
        return 'Mantenimiento';
      case 'calendar':
        return 'Calendario';
      case 'alerts':
        return 'Alertas';
      case 'reports':
        return 'Reportes';
      case 'settings':
        return 'Configuración';
      default:
        return 'Dashboard';
    }
  };
  
  return (
    <header className="h-16 border-b border-[#1f2937] bg-[#111928] flex items-center justify-between px-6">
      {/* Título de la página actual */}
      <h1 className="text-xl font-bold text-white">{getModuleTitle()}</h1>
      
      {/* Barra de búsqueda */}
      <div className="relative mx-4 flex-1 max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="search"
          className="bg-[#1f2937] text-white text-sm rounded-lg block w-full pl-10 p-2.5 border border-[#374151] focus:ring-blue-500 focus:border-blue-500"
          placeholder="Buscar..."
        />
      </div>
      
      {/* Acciones del header */}
      <div className="flex items-center space-x-4">
        {/* Notificaciones */}
        <button className="relative text-gray-300 hover:text-white">
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
            3
          </span>
        </button>
        
        {/* Alternador de tema */}
        <button 
          className="text-gray-300 hover:text-white"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        {/* Separador */}
        <div className="h-6 w-px bg-[#374151]"></div>
        
        {/* Información del parque seleccionado */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#4a4ae2] to-[#8a3ab4] flex items-center justify-center text-white font-bold">
            PS
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Parque Solar Central</p>
            <p className="text-xs text-gray-400">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </header>
  );
}