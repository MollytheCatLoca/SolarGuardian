"use client";

import React, { useState } from 'react';
import SolarSidebar from '@/components/solar/SolarSidebar';
import SolarHeader from '@/components/solar/SolarHeader';
import SolarDashboard from '@/components/solar/SolarDashboard';

export default function DashboardPage() {
  const [activeModule, setActiveModule] = useState('dashboard');
  
  return (
    <div className="flex h-screen bg-[#0a0b14] text-white overflow-hidden">
      {/* Sidebar */}
      <SolarSidebar 
        activeModule={activeModule} 
        setActiveModule={setActiveModule} 
      />
      
      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <SolarHeader />
        
        <main className="flex-1 overflow-auto p-6">
          <SolarDashboard />
        </main>
      </div>
    </div>
  );
}