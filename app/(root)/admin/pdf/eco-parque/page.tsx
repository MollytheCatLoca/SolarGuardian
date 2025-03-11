"use client"

import React from 'react';
import PDFLayout from '@/components/pdf/PDFLayout';
import EcoParqueAllInOnePDF from '@/components/pdf/EcoParqueAllInOnePDF';

const EcoParquePage = () => {
  return (
    <PDFLayout>
      <EcoParqueAllInOnePDF />
    </PDFLayout>
  );
};

export default EcoParquePage;