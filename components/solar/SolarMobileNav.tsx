'use client';

import React from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { logoutAccount } from '@/lib/actions/user.actions';
import { useRouter } from 'next/navigation';

// Icons 
import { 
  LayoutDashboard, 
  SunMedium, 
  Calendar, 
  Bell, 
  BarChart3, 
  Settings, 
  Wrench 
} from 'lucide-react';

const sidebarItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard size={20} />
  },
  {
    id: 'monitor',
    label: 'Monitoreo',
    icon: <SunMedium size={20} />
  },
  {
    id: 'maintenance',
    label: 'Mantenimiento',
    icon: <Wrench size={20} />
  },
  {
    id: 'calendar',
    label: 'Calendario',
    icon: <Calendar size={20} />
  },
  {
    id: 'alerts',
    label: 'Alertas',
    icon: <Bell size={20} />
  },
  {
    id: 'reports',
    label: 'Reportes',
    icon: <BarChart3 size={20} />
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: <Settings size={20} />
  }
];

interface SolarMobileNavProps {
  user: any;
}

export default function SolarMobileNav({ user }: SolarMobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if(loggedOut) router.push('/sign-in');
  };
  
  // Obtener el módulo activo del pathname
  const getActiveModule = () => {
    const path = pathname.split('/');
    return path.length > 2 ? path[2] : 'dashboard';
  };
  
  const activeModule = getActiveModule();
  
  return (
    <div>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md text-gray-300 hover:text-white"
      >
        <Menu size={24} />
      </button>
      
      {/* Overlay para el menú móvil */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70">
          <div className="fixed top-0 right-0 h-full w-64 bg-[#111928] border-l border-[#1f2937] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-[#1f2937]">
              <div className="flex items-center gap-2">
                <Image 
                  src="/BISLogo.svg" 
                  alt="SolarGuardian Logo" 
                  width={24} 
                  height={24} 
                />
                <span className="text-white font-bold">SolarGuardian</span>
              </div>
              <button 
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-300 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-2">
                {sidebarItems.map((item) => (
                  <li key={item.id}>
                    <Link 
                      href={`/dashboard${item.id === 'dashboard' ? '' : `/${item.id}`}`}
                      onClick={toggleMenu}
                      className={cn(
                        "flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                        activeModule === item.id 
                          ? "bg-[#4a4ae2] text-white" 
                          : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
                      )}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            
            {/* Información del usuario */}
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-[#1f2937]">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 rounded-full bg-[#4a4ae2] flex items-center justify-center text-white font-bold">
                  {user?.firstName?.[0] || 'U'}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">{user?.firstName || 'Usuario'}</p>
                  <p className="text-xs text-gray-400">{user?.email || 'usuario@ejemplo.com'}</p>
                </div>
              </div>
              
              <button 
                onClick={handleLogOut}
                className="flex items-center w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors text-gray-300 hover:bg-[#1f2937] hover:text-white"
              >
                <LogOut size={16} className="mr-2" />
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}