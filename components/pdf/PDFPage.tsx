// components/pdf/PDFPage.tsx
import React from 'react';

type PDFPageProps = {
  children: React.ReactNode;
  pageNumber: number;
  totalPages: number;
  title?: string;
};

const PDFPage: React.FC<PDFPageProps> = ({ children, pageNumber, totalPages, title }) => (
  <div className="pdf-page" style={{
    width: '297mm',
    height: '210mm',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#0a0b14',
    pageBreakAfter: 'always',
  }}>
    {/* Gradientes de fondo */}
    <div style={{
      position: 'absolute',
      top: '-20%',
      left: '-10%',
      width: '50%',
      height: '50%',
      background: 'radial-gradient(circle, rgba(64,58,180,0.2) 0%, rgba(0,0,0,0) 70%)',
      zIndex: 1,
    }}/>
    <div style={{
      position: 'absolute',
      bottom: '-20%',
      right: '-10%',
      width: '50%',
      height: '50%',
      background: 'radial-gradient(circle, rgba(138,58,180,0.2) 0%, rgba(0,0,0,0) 70%)',
      zIndex: 1,
    }}/>

    {/* Header Layer */}
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '20mm',
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10mm',
      color: 'white',
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/BISLogo.svg" alt="BIS Logo" style={{ height: '12mm', marginRight: '5mm' }} />
        <span style={{ fontSize: '16px' }}>Solar Guardian <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#8a3ab4' }}>Pro</span></span>
      </div>
      <div style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '14px', color: '#8a3ab4' }}>{title || "Plataforma de Gestión"}</div>
        <div style={{ fontSize: '12px' }}> v4.0</div>
      </div>
    </div>

    {/* Content Layer */}
    <div style={{
      position: 'absolute',
      top: '20mm',
      left: 0,
      right: 0,
      bottom: '15mm',
      zIndex: 5,
      overflow: 'hidden',
      padding: '5mm 10mm',
    }}>
      {children}
    </div>

    {/* Footer Layer */}
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '15mm',
      backgroundColor: 'rgba(17, 25, 40, 0.75)',
      zIndex: 10,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 10mm',
      color: 'white',
      fontSize: '10px',
    }}>
      <span style={{ fontSize: '14px',color: '#8a3ab4' }}>BIS Integraciones</span>
      <div>
        <span style={{ fontSize: '12px' }}>www.bisintegraciones.com/energy</span>
        <span style={{ margin: '0 10px', color: '#8a3ab4', fontWeight: 'bold', fontSize: '14px' , paddingLeft: '10px', paddingRight: '10px'}}>solarguardian.pro</span>
        <span>contacto@bisintegraciones.com</span>
      </div>
      <span style={{ fontSize: '14px', color: '#8a3ab4' }}>Página {pageNumber} de {totalPages}</span>
    </div>
  </div>
);

export default PDFPage;