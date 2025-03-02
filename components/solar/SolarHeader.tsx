"use client"

import React from 'react';
import { Bell, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function SolarHeader() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="h-16 px-6 flex items-center justify-between bg-[#111928] border-b border-[#1f2937]">
      {/* Título de la página */}
      <h1 className="text-xl font-bold text-white">Dashboard</h1>
      
      {/* Búsqueda */}
      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="search"
            className="bg-[#1f2937] w-full pl-10 pr-4 py-2 text-sm text-white rounded-lg border border-[#374151] focus:outline-none focus:ring-1 focus:ring-[#4a4ae2] focus:border-[#4a4ae2]"
            placeholder="Buscar..."
          />
        </div>
      </div>
      
      {/* Acciones */}
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1f2937]"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-[#1f2937] relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full">
            3
          </span>
        </button>
      </div>
    </header>
  );
}