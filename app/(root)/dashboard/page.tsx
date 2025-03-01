"use client";

import React, { useState } from 'react';

import SolarDashboard from '@/components/solar/SolarDashboard';

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState('dashboard');
  
  return (
    <div className="flex h-screen bg-[#0a0b14] text-white overflow-hidden">
     
      
      
        
        <main className="flex-1 overflow-auto p-6">
          <SolarDashboard />
        </main>
      </div>
  
  );
}