"use client"

import React from 'react';

interface PDFLayoutProps {
  children: React.ReactNode;
}

const PDFLayout: React.FC<PDFLayoutProps> = ({ children }) => {
  return (
    <div className="pdf-layout min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        {children}
      </div>
    </div>
  );
};

export default PDFLayout;