"use client";

import React from 'react';

export default function ReportsPage() {
  const ReportsPageComponent = React.lazy(() => import('@/components/solar/ReportsPage'));

  return (
    <React.Suspense fallback={<div className="p-6">Cargando la página de informes...</div>}>
      <ReportsPageComponent />
    </React.Suspense>
  );
}