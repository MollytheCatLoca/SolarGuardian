"use client"

import React from 'react';
import PDFPage from './PDFPage';
import PDFSection from './PDFSectionEP';
import PDFHero from './eco-parque/PDFHero';
import PDFExecutiveSummary from './eco-parque/PDFExecutiveSummary';
import PDFMiniParque from './eco-parque/PDFMiniParque';
import PDFNanoParque from './eco-parque/PDFNanoParque';
import PDFValorAnadido from './eco-parque/PDFValorAnadido';
import PDFBeneficios from './eco-parque/PDFBeneficios';
import PDFParqueComparison from './eco-parque/PDFParqueComparison';
import PDFImplementacion from './eco-parque/PDFImplementacion';
import PDFContacto from './eco-parque/PDFContacto';

const EcoParqueAllInOnePDF = () => {
  const totalPages = 8;

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
          title="Mini Parque"
        >
          <PDFSection sectionTitle="Mini Parque All-in-One (100kW)">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFMiniParque />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 4: Nano Parque All-in-One */}
        <PDFPage 
          pageNumber={4} 
          totalPages={totalPages} 
          title="Nano Parque"
        >
          <PDFSection sectionTitle="Nano Parque All-in-One (50kW)">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFNanoParque />
          </div>
          </PDFSection>
        </PDFPage>

        {/* Página 5: Comparación de costos */}
        <PDFPage 
          pageNumber={5} 
          totalPages={totalPages} 
          title="Comparación de costos"
        >
          <PDFSection sectionTitle="Comparación de costos">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFParqueComparison />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 6: Soluciones de Valor Añadido */}
        <PDFPage 
          pageNumber={6} 
          totalPages={totalPages} 
          title="Valor Añadido"
        >
          <PDFSection sectionTitle="Soluciones de Valor Añadido">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFValorAnadido />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 7: Beneficios para Municipios */}
        <PDFPage 
          pageNumber={7} 
          totalPages={totalPages} 
          title="Beneficios"
        >
          <PDFSection sectionTitle="Beneficios para Municipios">
          <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
            <PDFBeneficios />
          </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 8: Implementación y Contacto */}
        <PDFPage 
          pageNumber={8} 
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

export default EcoParqueAllInOnePDF;