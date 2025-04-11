"use client"
import React from 'react';
import PDFPage from '../PDFPage';
import PDFSection from '../PDFSectionEP';
import PDFHero from './PDFHero';
import PDFExecutiveSummary from './PDFExecutiveSummary';
import CarbonBondProcess from './CarbonBondProcess';
import CarbonBondConditions from './CarbonBondConditions';
import CarbonBondFinancing from './CarbonBondFinancing';
import BISStrategicPartner from './BISStrategicPartner';
import PDFContacto from './PDFContacto';

const BonosCarbonoPDF = () => {
  const totalPages = 7;

  return (
    <div id="eco-parque-all-in-one-pdf" className="pdf-document">
      {/* Todas las páginas renderizadas una tras otra sin espacios */}
      <div className="pdf-pages">
        {/* Página 1: Portada */}
        <PDFPage 
          pageNumber={1} 
          totalPages={totalPages} 
          title="Portada"
        >
          <PDFHero />
        </PDFPage>
        
        {/* Página 2: Resumen Ejecutivo */}
        <PDFPage 
          pageNumber={2} 
          totalPages={totalPages} 
          title="Resumen Ejecutivo"
        >
          <PDFSection sectionTitle="Resumen Ejecutivo">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFExecutiveSummary />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 3: Mini Parque All-in-One */}
        <PDFPage 
          pageNumber={3} 
          totalPages={totalPages} 
          title="Carbon Bond Process"
        >
          <PDFSection sectionTitle="Mini Parque All-in-One (100kW)">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <CarbonBondProcess />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 4: Nano Parque All-in-One */}
        <PDFPage 
          pageNumber={4} 
          totalPages={totalPages} 
          title="Carbon Bond Conditions"
        >
          <PDFSection sectionTitle="Nano Parque All-in-One (50kW)">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <CarbonBondConditions />
          </div>
          </PDFSection>
        </PDFPage>

        {/* Página 5: Comparación de costos */}
        <PDFPage 
          pageNumber={5} 
          totalPages={totalPages} 
          title="Carbon Bond Financing"
        >
          <PDFSection sectionTitle="Comparación de costos">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <CarbonBondFinancing />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 6: Soluciones de Valor Añadido */}
        <PDFPage 
          pageNumber={6} 
          totalPages={totalPages} 
          title="BIS Strategic Partner"
        >
          <PDFSection sectionTitle="Soluciones de Valor Añadido">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <BISStrategicPartner />
          </div>
          </PDFSection>
        </PDFPage>
        
        
        
        {/* Página 7: Implementación y Contacto */}
        <PDFPage 
          pageNumber={7} 
          totalPages={totalPages} 
          title="Contacto"
        >
          <PDFSection sectionTitle="Contáctenos">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFContacto />
          </div>
          </PDFSection>
        </PDFPage>
      </div>
    </div>
  );
};

export default BonosCarbonoPDF;