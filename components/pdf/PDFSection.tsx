// components/pdf/PDFSection.tsx
import React from 'react';

type PDFSectionProps = {
  children?: React.ReactNode;
  sectionTitle: string;
};

const PDFSection: React.FC<PDFSectionProps> = ({ children, sectionTitle }) => (
  <div className="pdf-section">
    <h2 className="section-title" style={{
      fontSize: '24px',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '15px',
      borderBottom: '2px solid rgba(138, 58, 180, 0.5)',
      paddingBottom: '5px',
      display: 'flex',
      alignItems: 'center',
    }}>
      <div style={{
        width: '8px',
        height: '24px',
        backgroundColor: '#8a3ab4',
        marginRight: '10px',
        borderRadius: '4px',
      }}></div>
      {sectionTitle}
    </h2>
    {children}
  </div>
);

export default PDFSection;