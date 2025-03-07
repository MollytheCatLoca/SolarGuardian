"use client"

import React from 'react';

import PDFPage from './PDFPage';
import PDFSection from './PDFSection';
import PDFHero from './PDFHero';
import PDFFeatures from './PDFFeatures';
import PDFModules from './PDFModules';
import PDFCaseStudy from './PDFCaseStudy';
import PDFStats from './PDFStats';
import PDFTestimonials from './PDFTestimonials';
import PDFIntegrations from './PDFIntegrations';
import PDFSummary from './PDFSummary';
import PDFTechnicalSpecs from './PDFTechnicalSpecs';
import PDFContactPage from './PDFContactPage';
const SolarGuardianPDF = () => {
  const totalPages = 9;

  return (
    <div id="solar-guardian-pdf">
      {/* Página 1: Portada */}
      <PDFPage pageNumber={1} totalPages={totalPages} title="Presentación">
        <PDFHero />
      </PDFPage>

      {/* Página 2: Características Principales */}
      <PDFPage pageNumber={2} totalPages={totalPages} title="Características">
        <PDFSection sectionTitle="Características Principales">
        <div style={{
          marginTop: '50px',
          scale: '0.90',
        }}>
          <PDFFeatures />
        </div>
        </PDFSection>
      </PDFPage>

      {/* Página 3-4: Módulos Funcionales */}
      <PDFPage pageNumber={3} totalPages={totalPages} title="Módulos">
        <PDFSection sectionTitle="Módulos Funcionales">
        <div style={{
          marginTop: '50px',
          scale: '0.90',
        }}>
          <PDFModules />
        </div>
        </PDFSection>
      </PDFPage>

      {/* Página 5: Estadísticas y Métricas */}
      <PDFPage pageNumber={4} totalPages={totalPages} title="Resultados">
        <PDFSection sectionTitle="Resultados en Cifras">
          <div style={{ marginBottom: '30px' , scale: '0.90'}}>
            <PDFStats />
          </div>
          <div style={{
            marginTop: '-10px',
            scale: '0.90',
          }}>
            <PDFCaseStudy />
          </div>
        </PDFSection>
      </PDFPage>

      {/* Página 6: Testimonios de Clientes */}
      <PDFPage pageNumber={5} totalPages={totalPages} title="Testimonios">
        <PDFSection sectionTitle="Opiniones de Nuestros Clientes">
          <div style={{
            marginTop: '0px',
            scale: '0.90',
          }}>
            <PDFTestimonials />
          </div>
        </PDFSection>
      </PDFPage>

      {/* Página 7: Integraciones */}
      <PDFPage pageNumber={6} totalPages={totalPages} title="Integraciones">
        <PDFSection sectionTitle="Integraciones Empresariales">
          <div style={{
            marginTop: '50px',
            scale: '0.90',
          }}>
            <PDFIntegrations />
          </div>
        </PDFSection>
      </PDFPage>

      {/* Página 8-9: Placeholder para información adicional o personalización */}
      <PDFPage pageNumber={7} totalPages={totalPages} title="Detalles Técnicos">
      <PDFSection sectionTitle="Especificaciones Técnicas">
      <div style={{
        scale: '0.88',
        marginTop: '35px',
        marginLeft: '50px',
        borderRadius: '30px',
      }}>
        <PDFTechnicalSpecs />
      </div>
      </PDFSection>
    </PDFPage>
  

      {/* Página 10: Contáctenos */}
      <PDFPage pageNumber={8} totalPages={totalPages} title="Detalles Técnicos">
      <PDFSection sectionTitle="Especificaciones Técnicas">
      <div style={{
        scale: '0.85',
        marginTop: '-15px',
        marginLeft: '65px',
        borderRadius: '30px',
      }}>
        <PDFContactPage />
      </div>
      </PDFSection>
    </PDFPage>
  


      {/* Página 10: Conclusión */}
      <PDFPage pageNumber={9} totalPages={totalPages} title="Conclusión">
      <div style={{
        scale: '0.85',
        marginTop: '5px',
        marginLeft: '35px',
        borderRadius: '30px',
      }}>
        <PDFSummary />
      </div>
      </PDFPage>
    </div>
  );
};

export default SolarGuardianPDF;