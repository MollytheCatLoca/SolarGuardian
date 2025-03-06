"use client";

import React from 'react';
import SolarTokenDashboard from '@/components/solar/token/SolarTokenDashboard';
import { useParams } from 'next/navigation';

// Page component for the SolarToken dashboard
export default function TokensPage() {
  const params = useParams();
  const plantId = parseInt(params.plantId);
  
  return (
    <div className="p-6">
      <SolarTokenDashboard plantId={plantId} />
    </div>
  );
}