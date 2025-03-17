"use client"

import React from 'react';
import PDFLayout from '@/components/pdf/PDFLayout';
import RiegoSolucionesPDF from '@/components/pdf/RiegoSolucionesPDF/RiegoSolucionesPDF';


const RiegoSolucionesPage = () => {
  return (
    <PDFLayout>
      <RiegoSolucionesPDF />
    </PDFLayout>
  );
};

export default RiegoSolucionesPage;