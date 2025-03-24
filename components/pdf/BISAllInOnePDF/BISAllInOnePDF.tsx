"use client"

import React from 'react';
import PDFPage from '../PDFPage';
import PDFSection from '../PDFSection';
import BISPortada from './BISPortada';
import BISQuienesSomos from './BISQuienesSomos';
import BISProblemaEnergetico from './BISProblemaEnergetico';
import BISGeneracionDistribuida from './BISGeneracionDistribuida';
import BISAllInOneInnovacion from './BISAllInOneInnovacion';
import BISLeasingOportunidad from './BISLeasingOportunidad';
import BISBeneficios from './BISBeneficios';
import BISClusteres from './BISClusteres';
import BISFuturoGD from './BISFuturoGD';
import BISSolarGuardian from './BISSolarGuardian';
import BISVerticales from './BISVerticales';
import BISCierre from './BISCierre';

const BISAllInOnePDF = () => {
  const totalPages = 11;

  return (
    <div id="bis-allinone-pdf" className="pdf-document">
      {/* Todas las páginas renderizadas una tras otra */}
      <div className="pdf-pages">
        {/* Página 1: Portada */}
        <PDFPage 
          pageNumber={1} 
          totalPages={totalPages} 
          title="Portada"
        >
        <div style={{width: '100%', height: '100%', marginLeft: '55px'}}>
          <BISPortada />
        </div>
        </PDFPage>
        
        {/* Página 2: Quiénes Somos */}
        <PDFPage 
          pageNumber={2} 
          totalPages={totalPages} 
          title="Quiénes Somos"
        >
          <PDFSection sectionTitle="Quiénes Somos">
            <div className="w-full h-full ml-1 mt-3 scale-90 rounded-lg">
            <div style={{width: '100%', height: '100%', marginLeft: '40px', marginTop: '10px'}}>
              <BISQuienesSomos />
            </div>
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 3: El Problema Energético en Argentina */}
        <PDFPage 
          pageNumber={3} 
          totalPages={totalPages} 
          title="El Problema Energético"
        >
          <PDFSection sectionTitle="El Problema Energético en Argentina">
            <div className="w-full h-full ml-1 mt-3 scale-85 rounded-lg">
              <BISProblemaEnergetico />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 4: La Generación Distribuida como Solución */}
        <PDFPage 
          pageNumber={4} 
          totalPages={totalPages} 
          title="Generación Distribuida"
        >
          <PDFSection sectionTitle="La Generación Distribuida como Solución">
            <div className="w-full h-full -ml-1 mt-3 scale-85 rounded-lg">
              <BISGeneracionDistribuida />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 5: Nuestra Innovación: Parques Solares All-in-One */}
        <PDFPage 
          pageNumber={5} 
          totalPages={totalPages} 
          title="Parques Solares All-in-One"
        >
          <PDFSection sectionTitle="Nuestra Innovación: Parques Solares All-in-One">
            <div className="w-full h-full ml-1 -mt-8 scale-85 rounded-lg">
              <BISAllInOneInnovacion />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 6: La Oportunidad del Leasing */}
     
        
        <PDFPage 
          pageNumber={6} 
          totalPages={totalPages} 
          title="Beneficios Clave"
        >
          <PDFSection sectionTitle="La Oportunidad del Leasing">
            <div className="w-full h-full ml-1 mt-3 scale-85 rounded-lg">
              <BISBeneficios />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 8: Clústeres Comunitarios y Articulación Público-Privada */}
        <PDFPage 
          pageNumber={7} 
          totalPages={totalPages} 
          title="Clústeres Comunitarios"
        >
          <PDFSection sectionTitle="Clústeres Comunitarios y Articulación Público-Privada">
            <div className="w-full h-full ml-1 -mt-2 scale-85 rounded-lg">
              <BISClusteres />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 9: El Futuro de la Generación Distribuida en Argentina */}
        <PDFPage 
          pageNumber={8} 
          totalPages={totalPages} 
          title="Futuro de la GD"
        >
          <PDFSection sectionTitle="El Futuro de la Generación Distribuida en Argentina">
            <div className="w-full h-full ml-1 -mt-8 scale-85 rounded-lg">
              <BISFuturoGD />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 10: Solar Guardian Pro */}
        <PDFPage 
          pageNumber={9} 
          totalPages={totalPages} 
          title="Solar Guardian Pro"
        >
          <PDFSection sectionTitle="Solar Guardian Pro: Automatización y Optimización">
            <div className="w-full h-full ml-1 mt-3 scale-85 rounded-lg">
              <BISSolarGuardian />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 11: Verticales de BIS Integraciones */}
        <PDFPage 
          pageNumber={10} 
          totalPages={totalPages} 
          title="Verticales de BIS"
        >
          <PDFSection sectionTitle="Verticales de BIS Integraciones">
            <div className="w-full h-full ml-1 mt-3 scale-85 rounded-lg">
              <BISVerticales />
            </div>
          </PDFSection>
        </PDFPage>
        
        {/* Página 12: Cierre y Contacto */}
        <PDFPage 
          pageNumber={11} 
          totalPages={totalPages} 
          title="Cierre"
        >
          <PDFSection sectionTitle="BIS Integraciones: Energía para el futuro">
            <div className="w-full h-full ml-1 mt-3 scale-90 rounded-lg">
              <BISCierre />
            </div>
          </PDFSection>
        </PDFPage>
      </div>
    </div>
  );
};

export default BISAllInOnePDF;