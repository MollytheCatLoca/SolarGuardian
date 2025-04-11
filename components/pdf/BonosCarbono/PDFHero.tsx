"use client"

import React from 'react';
import { FaLeaf, FaSolarPanel, FaChartLine } from "react-icons/fa";

const CarbonBondHero: React.FC = () => {
  return (
    <div className="pdf-hero" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827', // Dark background
      color: 'white'
    }}>
      {/* Background design elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        zIndex: 5,
        padding: '20px',
        marginTop: '30px',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'rgba(16, 185, 129, 0.3)',
          borderRadius: '50px',
          marginBottom: '20px',
        }}>
          <p style={{
            color: '#e0ffe0',
            fontWeight: 'bold',
            fontSize: '14px',
          }}>
            SOLUCIÓN INTEGRAL DE ENERGÍA RENOVABLE Y FINANCIAMIENTO
          </p>
        </div>
        
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '15px',
        }}>
          Parques <span style={{ color: '#10B981' }}>All-in-One</span> + <span style={{ color: '#3B82F6' }}>Bonos</span> de Carbono
        </h1>
        
        <p style={{
          fontSize: '16px',
          color: '#e0ffe0',
          maxWidth: '700px',
          margin: '0 auto 20px',
          lineHeight: 1.4,
        }}>
          Potenciamos la inversión en energía solar mediante la integración de generación de bonos de carbono, 
          creando proyectos financieramente viables con impacto ambiental certificado.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(16, 185, 129, 0.8)',
            padding: '10px 15px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
          }}>
            <FaSolarPanel size={18} />
            <span>GENERACIÓN SOLAR</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(59, 130, 246, 0.6)',
            padding: '10px 15px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
          }}>
            <FaChartLine size={18} />
            <span>EMISIÓN DE BONOS</span>
          </div>
        </div>
      </div>
      
      {/* Imagen principal con efecto de diseño */}
      <div style={{
        width: '85%',
        height: '40%',
        margin: '10px auto 0',
        backgroundImage: 'url(/carbon-bonds-solar.png)', // Esta imagen deberá ser reemplazada
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        zIndex: 2,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '-16px',
          right: '10px',
          background: 'linear-gradient(90deg, #10B981 0%, #3B82F6 100%)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}>
          2025
        </div>
      </div>
      
      {/* Espacio para posible footer */}
      
    </div>
  );
};

export default CarbonBondHero;