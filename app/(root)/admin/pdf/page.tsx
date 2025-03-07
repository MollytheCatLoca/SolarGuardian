"use client"

import React from 'react';
import PDFLayout from '@/components/pdf/PDFLayout';
import SolarGuardianPDF from '@/components/pdf/SolarGuardianPDF';

export default function PDFPage() {
  return (
    <PDFLayout>
      <SolarGuardianPDF />
    </PDFLayout>
  );
}