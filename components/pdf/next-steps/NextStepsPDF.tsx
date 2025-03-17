"use client"

import React from 'react';
import PDFPage from '../PDFPage';
import PDFSection from '../PDFSectionEP';

import IntroduccionBIS from '@/components/pdf/next-steps/IntroduccionBIS';
import ProcesoFinanciamiento from '@/components/pdf/next-steps/ProcesoFinanciamiento';
import AsistenciaDocumentacion from '@/components/pdf/next-steps/AsistenciaDocumentacion';
import ContactoInfo from '@/components/pdf/next-steps/ContactoInfo';
import HeroCierreImplementacion from '@/components/pdf/next-steps/HeroCierreImplementacion';
const NextStepsPDF = () => {
  const totalPages = 5;

  return (
    <div id="next-steps-pdf" className="pdf-document">
      {/* Todas las páginas renderizadas una tras otra sin espacios */}
      <div className="pdf-pages">



      {/* Página 1: Hero */}
      <PDFPage 
      pageNumber={1} 
      totalPages={totalPages} 
      title="Hero"
    >
      <PDFSection sectionTitle="Liderando el Camino hacia la Soberanía Energética">
        <div style={{width: '100%', height: '100%', marginLeft: '-1px', marginTop: '-20px', scale: '0.93', borderRadius: '50px'}}>
          <HeroCierreImplementacion />
        </div>
      </PDFSection>
    </PDFPage>
        {/* Página 2: Introducción BIS Integraciones */}
        <PDFPage 
          pageNumber={2} 
          totalPages={totalPages} 
          title="Introducción"
        >
          <PDFSection sectionTitle="Liderando el Camino hacia la Soberanía Energética">
            <div style={{width: '100%', height: '100%', marginLeft: '-80px', marginTop: '-30px', scale: '0.8', borderRadius: '20px'}}>
              <IntroduccionBIS />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 3: Proceso de Financiamiento */}
        <PDFPage 
          pageNumber={3} 
          totalPages={totalPages} 
          title="Financiamiento"
        >
          <PDFSection sectionTitle="Proceso de Financiamiento y Leasing">
            <div style={{width: '100%', height: '100%', marginLeft: '-90px', marginTop: '-120px', scale: '0.73', borderRadius: '30px'}}>
              <ProcesoFinanciamiento />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 4: Asistencia en Documentación */}
        <PDFPage 
          pageNumber={4} 
          totalPages={totalPages} 
          title="Documentación"
        >
          <PDFSection sectionTitle="Asistencia en Documentación y Carpeta Crediticia">
            <div style={{width: '100%', height: '100%', marginLeft: '-90px', marginTop: '-100px', scale: '0.7', borderRadius: '20px'}}>
              <AsistenciaDocumentacion />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 5: Contacto y Próximos Pasos */}
        <PDFPage 
            pageNumber={5} 
          totalPages={totalPages} 
          title="Contacto"
        >
          <PDFSection sectionTitle="Contacto y Próximos Pasos">
            <div style={{width: '100%', height: '100%', marginLeft: '-90px', marginTop: '-70px', scale: '0.70', borderRadius: '20px'}}>
              <ContactoInfo />
            </div>
          </PDFSection>
        </PDFPage>
      </div>
    </div>
  );
};

export default NextStepsPDF;