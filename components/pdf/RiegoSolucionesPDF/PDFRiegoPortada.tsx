"use client"

import React from 'react';
import { FaWater, FaSolarPanel } from "react-icons/fa";

const PDFRiegoPortada: React.FC = () => {
  return (
    <div className="pdf-riego-portada" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #072235 0%, #051c2c 70%, #03111c 100%)', // Degradado elegante
      color: 'white'
    }}>
      {/* Spotlight effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '250px',
        height: '250px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }}/>
      
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '60%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(30px)',
      }}/>
      
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 1,
      }}/>
      
      <div style={{
        zIndex: 5,
        padding: '30px 20px',
        marginTop: '10px',
        width: '100%',
        maxWidth: '85%',
      }}>
        <div style={{
          display: 'inline-block',
          padding: '8px 16px',
          backgroundColor: 'rgba(14, 165, 233, 0.2)',
          borderRadius: '50px',
          marginBottom: '16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(14, 165, 233, 0.15)',
        }}>
          <p style={{
            color: '#e0f2fe',
            fontWeight: '500',
            fontSize: '13px',
            letterSpacing: '0.05em',
            margin: 0,
          }}>
            SOLUCIONES ENERGÉTICAS PARA SISTEMAS DE RIEGO
          </p>
        </div>
        
        <h1 style={{
          fontSize: '44px',
          fontWeight: '700',
          color: 'white',
          marginBottom: '12px',
          letterSpacing: '-0.02em',
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
        }}>
          Riego <span style={{ 
            color: '#0ea5e9',
            background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>Solar</span> Integrado
        </h1>
        
        <p style={{
          fontSize: '15px',
          color: 'rgba(224, 242, 254, 0.8)',
          maxWidth: '700px',
          margin: '0 auto 20px',
          lineHeight: 1.5,
          fontWeight: '300',
        }}>
          Sistemas inteligentes que optimizan el suministro energético para riego,
          combinando tecnologías fotovoltaicas, almacenamiento y respaldo para garantizar
          la operación continua y proteger la inversión en cultivos de alto valor.
        </p>
      </div>
      
      {/* Imagen principal - más pequeña */}
      <div style={{
        width: '85%', // Reducida del 92% al 85%
        height: '45%', // Reducida del 52% al 45%
        margin: '0 auto 20px', // Agregado margen inferior para dar espacio a los botones
        backgroundImage: 'url(/riego-solar-main.png)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '16px', // Ligeramente más redondeada
        border: '1px solid rgba(255, 255, 255, 0.08)',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(14, 165, 233, 0.1)',
        zIndex: 2,
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '-12px',
          right: '12px',
          background: 'linear-gradient(90deg, #0ea5e9 0%, #22c55e 100%)',
          color: 'white',
          padding: '6px 12px',
          borderRadius: '6px',
          fontSize: '11px',
          fontWeight: '600',
          letterSpacing: '0.03em',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
        }}>
          NUEVA GENERACIÓN
        </div>
      </div>
      
      {/* Características en una disposición más compacta para asegurar que entren */}
      <div style={{
        display: 'flex',
        flexDirection: 'row', // Aseguramos que estén en fila
        flexWrap: 'wrap', // Permitimos que se envuelvan si es necesario
        justifyContent: 'center',
        alignItems: 'center',
        gap: '14px',
        marginTop: '8px',
        padding: '0 15px',
        zIndex: 5,
        width: '100%',
        maxWidth: '100%',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(14, 165, 233, 0.15)',
          padding: '10px 16px',
          borderRadius: '50px',
          color: 'white',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          margin: '5px 0',
        }}>
          <FaWater size={16} style={{ color: '#38bdf8' }} />
          <span style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>RIEGO CONTINUO 24/7</span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: 'rgba(34, 197, 94, 0.15)',
          padding: '10px 16px',
          borderRadius: '50px',
          color: 'white',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          backdropFilter: 'blur(8px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          margin: '5px 0',
        }}>
          <FaSolarPanel size={16} style={{ color: '#4ade80'}} />
          <span style={{ fontSize: '13px', fontWeight: '500', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>100% ENERGÍA RENOVABLE</span>
        </div>
      </div>
      
      {/* Elemento decorativo adicional */}
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '10%',
        width: '80%',
        height: '1px',
        background: 'linear-gradient(90deg, rgba(14, 165, 233, 0) 0%, rgba(14, 165, 233, 0.3) 50%, rgba(14, 165, 233, 0) 100%)',
        zIndex: 2,
      }}/>
     
    </div>
  );
};

export default PDFRiegoPortada;