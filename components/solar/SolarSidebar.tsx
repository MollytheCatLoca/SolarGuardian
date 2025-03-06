"use client"

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { logoutAccount } from '@/lib/actions/user.actions';
import { 
  LayoutDashboard,
  SunMedium,
  Calendar,
  Bell,
  BarChart3,
  Settings,
  Wrench,
  LogOut,
  Key
} from 'lucide-react';

// Función para crear elementos de la barra lateral con rutas dinámicas
const createSidebarItems = (plantId) => {
  // Determinar la ruta base según si tenemos un plantId o no
  const basePath = plantId ? `/dashboard/${plantId}` : '/dashboard';
  
  return [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: basePath
    },
    {
      id: 'monitor',
      label: 'Monitoreo',
      icon: <SunMedium size={20} />,
      path: `${basePath}/monitor`
    },
    {
      id: 'maintenance',
      label: 'Mantenimiento',
      icon: <Wrench size={20} />,
      path: `${basePath}/maintenance`
    },
    {
      id: 'calendar',
      label: 'Calendario',
      icon: <Calendar size={20} />,
      path: `${basePath}/calendar`
    },
    {
      id: 'alerts',
      label: 'Alertas',
      icon: <Bell size={20} />,
      path: `${basePath}/alerts`
    },
    {
      id: 'reports',
      label: 'Reportes',
      icon: <BarChart3 size={20} />,
      path: `${basePath}/reports`
    },
    {
      id: 'settings',
      label: 'Configuración',
      icon: <Settings size={20} />,
      path: `${basePath}/settings`
    },
    {
      id: 'tokens',
      label: 'Tokens',
      icon: <Key size={20} />,
      path: `${basePath}/tokens`
    }
  ];
};

// Componente principal
export default function SolarSidebar({ user }) {
  const pathname = usePathname();
  const router = useRouter();
  const [plantId, setPlantId] = useState(null);
  const [sidebarItems, setSidebarItems] = useState([]);
  
  // Extraer el ID de la planta de la URL - usando useCallback para evitar recreaciones
  const extractPlantId = useCallback(() => {
    // Buscamos un patrón en la URL como /dashboard/1/...
    const match = pathname?.match(/\/dashboard\/(\d+)/);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }, [pathname]);
  
  // Actualizar plantId y elementos del sidebar cuando cambia la URL
  useEffect(() => {
    if (pathname) {
      const newPlantId = extractPlantId();
      
      // Solo actualizar si realmente cambió para evitar re-renderizados innecesarios
      if (newPlantId !== plantId) {
        setPlantId(newPlantId);
      }
    }
  }, [pathname, extractPlantId, plantId]);
  
  // Actualizar elementos del sidebar cuando cambia plantId
  useEffect(() => {
    // Usar esto en lugar de calcular los elementos en cada render
    setSidebarItems(createSidebarItems(plantId));
  }, [plantId]);
  
  // Función mejorada para cerrar sesión
  const handleLogOut = async () => {
    try {
      const loggedOut = await logoutAccount();
      if (loggedOut) {
        // Usar replace en lugar de push para evitar problemas de historial
        router.replace('/sign-in');
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };
  
  // Función para determinar si una ruta está activa
  const isRouteActive = useCallback((itemPath) => {
    if (!pathname) return false;
    
    // Evitar coincidencias parciales problemáticas
    if (itemPath === '/dashboard' && plantId) {
      return pathname === `/dashboard/${plantId}`;
    }
    
    return pathname === itemPath || 
           (itemPath !== '/dashboard' && pathname.startsWith(`${itemPath}/`));
  }, [pathname, plantId]);
  
  return (
    <div className="w-64 h-full bg-[#111928] border-r border-[#1f2937] flex flex-col">
      {/* Logo */}
      <div className="flex items-center p-6">
        <div className="mr-2">
          <Image
            src="/BISLogo.svg"
            alt="SolarGuardian Logo"
            width={40}
            height={40}
            priority={true}
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">SolarGuardian</h1>
          <p className="text-xs text-gray-400">Gestión de parques solares</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 mt-6 overflow-y-auto">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = isRouteActive(item.path);
            
            return (
              <li key={item.id}>
                <Link
                  href={item.path}
                  prefetch={false} // Evitar prefetching agresivo que puede causar problemas
                  className={cn(
                    "flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                    isActive
                      ? "bg-[#4a4ae2] text-white"
                      : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
                  )}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* User Profile */}
      <div className="p-4 mt-auto border-t border-[#1f2937]">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-[#4a4ae2] flex items-center justify-center text-white font-bold">
              {user?.firstName ? user.firstName[0] : 'U'}
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white truncate max-w-[150px]">
                {user?.firstName ? `${user.firstName} ${user.lastName || ''}` : 'Usuario'}
              </p>
              <p className="text-xs text-gray-400 truncate max-w-[150px]">
                {user?.email || 'usuario@ejemplo.com'}
              </p>
            </div>
          </div>
          <button 
            onClick={handleLogOut}
            className="text-gray-400 hover:text-white p-2 rounded-full"
            aria-label="Cerrar sesión"
            type="button"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}