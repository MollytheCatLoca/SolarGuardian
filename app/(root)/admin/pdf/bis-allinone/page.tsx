"use client"

import React from 'react';
import PDFLayout from '@/components/pdf/PDFLayout';
import BISAllInOnePDF from '@/components/pdf/BISAllInOnePDF/BISAllInOnePDF';

const BISAllInOnePage = () => {
  return (
    <PDFLayout>
      <BISAllInOnePDF />
    </PDFLayout>
  );
};

export default BISAllInOnePage;