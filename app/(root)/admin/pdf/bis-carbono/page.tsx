"use client"

import React from 'react';
import PDFLayout from '@/components/pdf/PDFLayout';
import BonosCarbonoPDF from '@/components/pdf/BonosCarbono/BonosCarbonoPDF';


const BonosCarbono = () => {
  return (
    <PDFLayout>
      <BonosCarbonoPDF />
    </PDFLayout>
  );
};

export default BonosCarbono;