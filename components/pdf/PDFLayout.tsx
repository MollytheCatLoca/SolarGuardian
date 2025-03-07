// components/pdf/Layout.tsx
import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const PDFLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="pdf-layout">
      <style jsx global>{`
        @page {
          size: landscape;
          margin: 0;
        }
        
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          
          .print-controls {
            display: none;
          }
        }
        
        html, body {
          background-color: #111;
          margin: 0;
          padding: 0;
        }
      `}</style>
      
      
      
      {children}
    </div>
  );
};

export default PDFLayout;