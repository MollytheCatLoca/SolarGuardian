// components/pdf/PDFHero.tsx
import React from 'react';
import { FaSolarPanel } from "react-icons/fa";

const PDFHero: React.FC = () => {
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
    }}>
      {/* Background design element */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '80%',
        height: '80%',
        background: 'radial-gradient(circle, rgba(74, 74, 226, 0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        zIndex: 5,
        padding: '20px',
        marginTop: '30px', // Añadido margen superior
      }}>
        <div style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'rgba(138, 58, 180, 0.3)',
          borderRadius: '50px',
          marginBottom: '20px',
        }}>
          <p style={{
            color: '#e0e0ff',
            fontWeight: 'bold',
            fontSize: '14px',
          }}>
            PLATAFORMA DE GESTIÓN INTEGRAL PARA PARQUES SOLARES
          </p>
        </div>
        
        <h1 style={{
          fontSize: '48px', // Reducido tamaño
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '15px', // Reducido margen
        }}>
          Solar <span style={{ color: '#8a3ab4' }}>Guardian</span> Pro
        </h1>
        
        <p style={{
          fontSize: '16px', // Reducido tamaño
          color: '#e0e0ff',
          maxWidth: '700px',
          margin: '0 auto 20px', // Reducido margen
          lineHeight: 1.4,
        }}>
          Sistema integral para el monitoreo, mantenimiento y optimización de parques 
          solares con tecnología predictiva, tokenización de energía y análisis avanzado.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '20px', // Añadido margen inferior
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(138, 58, 180, 0.6)',
            padding: '10px 15px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
          }}>
            <FaSolarPanel size={18} />
            <span>DEMOSTRACIÓN DISPONIBLE</span>
          </div>
        </div>
      </div>
      
      {/* Imagen con posición más ajustada */}
      <div style={{
        width: '85%',
        height: '40%', // Menor altura
        margin: '10px auto 0', // Posición más arriba
        backgroundImage: 'url(/dashboard-main.jpg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        borderRadius: '8px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
        zIndex: 2,
        position: 'relative', // Cambiado de absolute a relative
      }}>
        <div style={{
          position: 'absolute',
          top: '-16px',
          right: '10px',
          backgroundColor: '#8a3ab4',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
        }}>
          V 4.0
        </div>
      </div>
    </div>
  );
};

export default PDFHero;