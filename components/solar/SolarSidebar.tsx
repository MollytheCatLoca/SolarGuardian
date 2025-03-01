"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { logoutAccount } from '@/lib/actions/user.actions';
import { LogOut } from 'lucide-react';

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

interface SolarSidebarProps {
  activeModule: string;
  setActiveModule: (module: string) => void;
}

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

export default function SolarSidebar({ activeModule, setActiveModule }: SolarSidebarProps) {
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
          />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">SolarGuardian</h1>
          <p className="text-xs text-gray-400">Gestión de parques solares</p>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-4 mt-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <Link 
                href={`/dashboard${item.id === 'dashboard' ? '' : `/${item.id}`}`}
                onClick={() => setActiveModule(item.id)}
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
      
      {/* User Profile */}
      <div className="p-4 mt-auto border-t border-[#1f2937]">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-[#4a4ae2] flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-gray-400">admin@solarguardian.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}