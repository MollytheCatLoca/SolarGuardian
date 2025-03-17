"use client"

import React from 'react';
import PDFPage from '../PDFPage';
import PDFSection from '../PDFSectionEP';
import PDFRiegoPortada from './PDFRiegoPortada';
import PDFRiegoContexto from './PDFRiegoContexto';
import PDFRiegoSolarPuro from './PDFRiegoSolarPuro';
import PDFRiegoOnGrid from './PDFRiegoOnGrid';
import PDFRiegoHibrido from './PDFRiegoHibrido';
import PDFRiegoOffGrid from './PDFRiegoOffGrid';
import PDFRiegoComparativa from './PDFRiegoComparativa';
import PDFRiegoConclusiones from './PDFRiegoConclusiones';
import EnergyFutureComponent from './EnergyFutureComponent';
import PDFParquesAllInOne from './PDFParquesAllInOne';
const RiegoSolucionesPDF = () => {
  const totalPages = 10;

  return (
    <div id="riego-soluciones-pdf" className="pdf-document">
      {/* Todas las páginas renderizadas una tras otra sin espacios */}
      <div className="pdf-pages">
        {/* Página 1: Portada */}
        <PDFPage 
          pageNumber={1} 
          totalPages={totalPages} 
          title="Portada"
        >
          <PDFRiegoPortada />
        </PDFPage>
        
        {/* Página 2: Contexto y Desafíos */}
        <PDFPage 
          pageNumber={2} 
          totalPages={totalPages} 
          title="Contexto y Desafíos"
        
        >
          <PDFSection sectionTitle="Contexto y Desafíos">
            <div style={{width: '100%', height: '100%', marginLeft: '5px', marginTop: '15px', scale: '0.9', borderRadius: '20px'}}>
              <PDFRiegoContexto />
            </div>
          </PDFSection>
        </PDFPage>


        {/* Página 3: ALL IN ONE */}
        <PDFPage 
          pageNumber={3} 
          totalPages={totalPages} 
          title="ALL IN ONE"
        
        >
          <PDFSection sectionTitle="Contexto y Desafíos">
            <div style={{width: '100%', height: '100%', marginLeft: '5px', marginTop: '-55px', scale: '0.95', borderRadius: '20px'}}>
              <PDFParquesAllInOne />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 4: Solar Puro */}
        <PDFPage 
          pageNumber={4} 
          totalPages={totalPages} 
          title="Solar Puro - Autoconsumo"
        >
          <PDFSection sectionTitle="Solar Puro - Autoconsumo">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoSolarPuro />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 5: On-Grid con Inyección */}
        <PDFPage 
          pageNumber={5} 
          totalPages={totalPages} 
          title="On-Grid con Inyección"
        >
          <PDFSection sectionTitle="On-Grid con Inyección">
            <div style={{width: '100%', height: '100%', marginLeft: '10px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoOnGrid />
            </div>
          </PDFSection>
        </PDFPage>

        {/* Página 6: Híbrido (On-Grid + Baterías) */}
        <PDFPage 
          pageNumber={6} 
          totalPages={totalPages} 
          title="Híbrido (On-Grid + Baterías)"
        >
          <PDFSection sectionTitle="Híbrido (On-Grid + Baterías)">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoHibrido />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 7: Off-Grid / Independencia Total */}
        <PDFPage 
          pageNumber={7} 
          totalPages={totalPages} 
          title="Off-Grid / Independencia Total"
        >
          <PDFSection sectionTitle="Off-Grid / Independencia Total">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoOffGrid />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 8: Comparativa de Soluciones */}
        <PDFPage 
          pageNumber={8} 
          totalPages={totalPages} 
          title="Comparativa de Soluciones"
        >
          <PDFSection sectionTitle="Comparativa de Soluciones">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoComparativa />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 9: Conclusiones y Recomendaciones */}
        <PDFPage 
          pageNumber={9} 
          totalPages={totalPages} 
          title="Conclusiones"
        >
          <PDFSection sectionTitle="Conclusiones y Recomendaciones">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px'}}>
              <PDFRiegoConclusiones />
            </div>
          </PDFSection>
        </PDFPage>

        {/* Página 10: Conclusiones y Recomendaciones */}
        <PDFPage 
          pageNumber={10} 
          totalPages={totalPages} 
          title="Conclusiones"
        >
          <PDFSection sectionTitle="Conclusiones y Recomendaciones">
            <div style={{width: '100%', height: '100%', marginLeft: '15px', scale: '0.95', borderRadius: '10px', marginTop: '-20px'}}>
              <EnergyFutureComponent />
            </div>
          </PDFSection>
        </PDFPage>
      </div>
    </div>
  );
};

export default RiegoSolucionesPDF;