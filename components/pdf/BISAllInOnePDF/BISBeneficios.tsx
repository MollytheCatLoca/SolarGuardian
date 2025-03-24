"use client";

import React from 'react';
import { Sun, MapPin } from 'lucide-react';
import SolarInfoCard from './SolarInfoCard';
import LeasingBenefitsCard from './LeasingBenefitsCard';

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#8B5CF6', // Púrpura
};

const BISBeneficios = () => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#051c2c', // Fondo oscuro coherente
      color: 'white',
      padding: `${LAYOUT.padding}px`,
      borderRadius: '12px',
    }}>
      {/* Elementos de diseño del fondo (estáticos) */}
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '25%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.2,
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '30%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.1,
        zIndex: 1,
      }}/>
      
      {/* Patrón de cuadrícula sutil con bordes difusos */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
        opacity: 0.4,
        filter: 'blur(0.5px)',
      }}/>

      {/* Título flotante */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '0',
        zIndex: 10,
        background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.3))',
        paddingLeft: '15px',
        paddingRight: '25px',
        marginBottom: '10px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid rgba(59, 130, 246, 0.9)',
      }}>
        <h2 style={{
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <Sun className="h-4 w-4 text-yellow-300 mr-2" />
          ENERGÍA SOLAR • LEASING OPERATIVO
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '35px', // Espacio para el título
        maxWidth: '1000px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}>
        {/* Header */}
        <div style={{
          marginBottom: '15px',
          marginLeft: '2px',
        }}>
          <div style={{
            marginTop: '2px',
            transform: 'scale(1)',
          }}>
            <SolarInfoCard />
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          marginLeft: '2px',
          flex: 1,
        }}>
          {/* Imagen */}
          <div style={{
            position: 'relative',
            height: '300px',
            overflow: 'hidden',
            borderRadius: '10px',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("/solar-allinone.png")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(7,34,53,0.8), rgba(7,34,53,0.4), transparent)',
            }}></div>
            <div style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              padding: '12px',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '2px 8px',
                backgroundColor: 'rgba(52,211,153,0.2)',
                backdropFilter: 'blur(8px)',
                borderRadius: '20px',
                border: '1px solid rgba(52,211,153,0.3)',
                marginBottom: '8px',
                width: 'max-content',
              }}>
                <Sun size={12} color="#6ee7b7" style={{ marginRight: '4px' }} />
                <span style={{
                  fontSize: '10px',
                  fontWeight: '500',
                  color: '#6ee7b7',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}>
                  Tecnología Avanzada
                </span>
              </div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '4px',
              }}>
                15 años de experiencia en <span style={{ color: '#6ee7b7' }}>energía solar</span>
              </h3>
              <div style={{
                width: '64px',
                height: '4px',
                background: 'linear-gradient(to right, #34d399, #3b82f6)',
                borderRadius: '4px',
              }}></div>
            </div>
            <div style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              backgroundColor: 'rgba(7,34,53,0.7)',
              padding: '4px 8px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '600',
              color: '#6ee7b7',
              border: '1px solid rgba(52,211,153,0.3)',
            }}>
              BIS Integraciones
            </div>
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
            }}>
              <div style={{
                backgroundColor: 'rgba(59,130,246,0.2)',
                padding: '2px 8px',
                borderRadius: '20px',
                fontSize: '11px',
                color: '#93c5fd',
                border: '1px solid rgba(59,130,246,0.2)',
                display: 'flex',
                alignItems: 'center',
              }}>
                <MapPin size={12} style={{ marginRight: '4px' }} />
                <span>Córdoba</span>
              </div>
            </div>
          </div>

          {/* Beneficios del Leasing Operativo */}
          <LeasingBenefitsCard />
        </div>
      </div>
    </div>
  );
};

export default BISBeneficios;