"use client"

import React from 'react';
import NextStepsPDF from '@/components/pdf/next-steps/NextStepsPDF';

const NextStepsPage = () => {
  return (
    <div className="container mx-auto p-4">
     
    
      
      {/* Vista previa del PDF */}
      <div className="border border-gray-300 rounded-lg overflow-hidden">
        <NextStepsPDF />
      </div>
    </div>
  );
};

export default NextStepsPage;