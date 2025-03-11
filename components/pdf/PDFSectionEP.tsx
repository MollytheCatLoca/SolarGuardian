"use client"

import React from 'react';

interface PDFSectionProps {
  children: React.ReactNode;
  sectionTitle: string;
}

const PDFSection: React.FC<PDFSectionProps> = ({ children, sectionTitle }) => {
  return (
    <section className="pdf-section">
    
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default PDFSection;