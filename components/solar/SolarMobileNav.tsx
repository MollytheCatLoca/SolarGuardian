"use client"

import React, { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logoutAccount } from '@/lib/actions/user.actions';
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
    icon: <LayoutDashboard size={20} />,
    path: '/dashboard'
  },
  {
    id: 'monitor',
    label: 'Monitoreo',
    icon: <SunMedium size={20} />,
    path: '/dashboard/monitor'
  },
  {
    id: 'maintenance',
    label: 'Mantenimiento',
    icon: <Wrench size={20} />,
    path: '/dashboard/maintenance'
  },
  {
    id: 'calendar',
    label: 'Calendario',
    icon: <Calendar size={20} />,
    path: '/dashboard/calendar'
  },
  {
    id: 'alerts',
    label: 'Alertas',
    icon: <Bell size={20} />,
    path: '/dashboard/alerts'
  },
  {
    id: 'reports',
    label: 'Reportes',
    icon: <BarChart3 size={20} />,
    path: '/dashboard/reports'
  },
  {
    id: 'settings',
    label: 'Configuración',
    icon: <Settings size={20} />,
    path: '/dashboard/settings'
  }
];

export default function SolarMobileNav({ user }: { user: any }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if(loggedOut) router.push('/sign-in');
  };
  
  return (
    <div>
      <button 
        onClick={toggleMenu}
        className="text-white focus:outline-none"
        aria-label="Abrir menú"
      >
        <Menu size={24} />
      </button>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute top-0 left-0 h-full w-64 bg-[#111928] p-4 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Image 
                  src="/BISLogo.svg" 
                  alt="Logo" 
                  width={32} 
                  height={32} 
                  className="mr-2"
                />
                <h1 className="text-white font-bold">SolarGuardian</h1>
              </div>
              <button 
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white"
                aria-label="Cerrar menú"
              >
                <X size={24} />
              </button>
            </div>
            
            <nav>
              <ul className="space-y-2">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.path || pathname.startsWith(`${item.path}/`);
                  
                  return (
                    <li key={item.id}>
                      <Link
                        href={item.path}
                        className={cn(
                          "flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                          isActive
                            ? "bg-[#4a4ae2] text-white"
                            : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
                        )}
                        onClick={toggleMenu}
                      >
                        <span className="mr-3">{item.icon}</span>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            
            {/* Perfil de usuario en móvil */}
            <div className="absolute bottom-0 left-0 w-full p-4 border-t border-[#1f2937]">
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
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar sesión"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}