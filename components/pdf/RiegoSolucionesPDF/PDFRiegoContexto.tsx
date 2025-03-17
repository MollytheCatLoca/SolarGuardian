"use client"

import React from 'react';
import { FaBolt, FaMoneyBillWave, FaMapMarkerAlt, FaExclamationTriangle, FaCheck } from 'react-icons/fa';

// Variables ajustables - puedes modificar estas variables según tus necesidades
const CONTAINER_HEIGHT = '100%'; // Cambia esto para ajustar la altura total
const SPACING = 18; // Espaciado estándar entre elementos - reducido
const CARD_PADDING = 18; // Padding interno de tarjetas - reducido

// Configuración del efumado
const FADE_ENABLED = true; // Activa o desactiva el efecto de efumado
const FADE_TOP_INTENSITY = 0.9; // Intensidad del efumado superior (0-1)
const FADE_BOTTOM_INTENSITY = 0.8; // Intensidad del efumado inferior (0-1)
const FADE_LEFT_INTENSITY = 0.85; // Intensidad del efumado izquierdo (0-1)
const FADE_RIGHT_INTENSITY = 0.85; // Intensidad del efumado derecho (0-1)
const FADE_HEIGHT = 10; // Altura del efecto de efumado superior e inferior (px)
const FADE_WIDTH = 20; // Ancho del efecto de efumado izquierdo y derecho (px)
const FADE_TRANSPARENCY = true; // Controla si el efumado también afecta la transparencia

const PDFRiegoContexto = () => {
  // Definimos los tipos para los parámetros
  const getGradientStyle = (direction: string, intensity: number): string => {
    if (FADE_TRANSPARENCY) {
      // Con transparencia - el componente se mezcla con el fondo
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), rgba(7, 34, 53, 0))`;
    } else {
      // Sin transparencia - sólo oscurece los bordes
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), transparent)`;
    }
  };

  return (
    <div style={{
      width: '100%',
      height: CONTAINER_HEIGHT,
      background: 'linear-gradient(135deg, #072235 0%, #051c2c 70%, #03111c 100%)',
      color: '#e0f2fe',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: SPACING,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', // Distribuye el espacio verticalmente
      alignItems: 'stretch',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
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
      
      {/* Efectos de efumado en los extremos con transparencia */}
      {FADE_ENABLED && (
        <>
          {/* Efumado superior */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: FADE_HEIGHT,
            background: getGradientStyle('to bottom', FADE_TOP_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }}/>
          
          {/* Efumado inferior */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: FADE_HEIGHT,
            background: getGradientStyle('to top', FADE_BOTTOM_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }}/>
          
          {/* Efumado izquierdo */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: FADE_WIDTH,
            height: '100%',
            background: getGradientStyle('to right', FADE_LEFT_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }}/>
          
          {/* Efumado derecho */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: FADE_WIDTH,
            height: '100%',
            background: getGradientStyle('to left', FADE_RIGHT_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }}/>
        </>
      )}
      
      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        {/* Header - reducido */}
        <div style={{
          marginBottom: SPACING * 0.8,
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
          paddingBottom: SPACING * 0.6,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '5px 12px',
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.5,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
          }}>
            <p style={{
              color: '#7dd3fc',
              fontWeight: '500',
              fontSize: '12px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              CONTEXTO Y DESAFÍOS DEL RIEGO AGRÍCOLA
            </p>
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            marginBottom: SPACING * 0.5,
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            margin: '8px 0',
          }}>
            Problemática en <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Sistemas de Riego</span>
          </h2>
          
          <p style={{
            fontSize: '14px',
            lineHeight: '1.4',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            En muchas regiones agrícolas, la disponibilidad y calidad del suministro eléctrico
            presentan limitaciones críticas para la operación de sistemas de riego por pivote, especialmente
            cuando se emplean bombas de gran potencia (200 HP, ~149-160 kW).
          </p>
        </div>
        
        {/* Main content - flex para ocupar todo el espacio disponible */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: SPACING,
          flex: '1 1 auto', // Ocupa todo el espacio disponible
        }}>
          {/* Problems Section */}
          <div style={{
            background: 'rgba(3, 105, 161, 0.2)',
            borderRadius: '16px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%', // Ocupa toda la altura disponible
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#38bdf8',
              marginTop: 0,
              marginBottom: SPACING * 0.7,
            }}>
              Problemáticas comunes
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: SPACING * 0.7,
              flex: '1 1 auto', // Ocupa el espacio restante
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <FaBolt size={14} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#7dd3fc',
                    marginTop: 0,
                    marginBottom: '4px',
                  }}>Baja confiabilidad de la red</h4>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.7)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>Fluctuaciones de frecuencia y tensión que afectan el funcionamiento de los equipos.</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <FaMoneyBillWave size={14} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#7dd3fc',
                    marginTop: 0,
                    marginBottom: '4px',
                  }}>Costos energéticos elevados</h4>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.7)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>Tarifas variables que impactan la rentabilidad del cultivo.</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <FaMapMarkerAlt size={14} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#7dd3fc',
                    marginTop: 0,
                    marginBottom: '4px',
                  }}>Falta de cobertura</h4>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.7)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>Zonas alejadas de líneas de media/alta tensión.</p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  background: 'rgba(14, 165, 233, 0.2)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexShrink: 0,
                }}>
                  <FaExclamationTriangle size={14} color="#38bdf8" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: '#7dd3fc',
                    marginTop: 0,
                    marginBottom: '4px',
                  }}>Riesgo de pérdidas</h4>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.7)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>Interrupción de riego en momentos críticos del cultivo.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Objectives Section */}
          <div style={{
            background: 'linear-gradient(to right, rgba(14, 165, 233, 0.1), rgba(34, 197, 94, 0.1))',
            borderRadius: '16px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(34, 197, 94, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%', // Ocupa toda la altura disponible
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#4ade80',
              marginTop: 0,
              marginBottom: SPACING * 0.7,
            }}>
              Objetivos del proyecto
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: SPACING * 0.55,
              flex: '1 1 auto',
              justifyContent: 'space-between', // Distribuye el espacio entre los elementos
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING * 0.6,
                background: 'rgba(34, 197, 94, 0.15)',
                borderRadius: '8px',
                padding: '8px 12px',
              }}>
                <FaCheck size={14} color="#4ade80" />
                <div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(224, 242, 254, 0.9)',
                  }}>Garantizar el riego continuo (24 horas) para cultivos de alto valor.</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING * 0.6,
                background: 'rgba(34, 197, 94, 0.15)',
                borderRadius: '8px',
                padding: '8px 12px',
              }}>
                <FaCheck size={14} color="#4ade80" />
                <div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(224, 242, 254, 0.9)',
                  }}>Optimizar los costos de operación (OPEX), reduciendo el consumo.</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING * 0.6,
                background: 'rgba(34, 197, 94, 0.15)',
                borderRadius: '8px',
                padding: '8px 12px',
              }}>
                <FaCheck size={14} color="#4ade80" />
                <div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(224, 242, 254, 0.9)',
                  }}>Aprovechar los recursos solares, integrando energía renovable.</span>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: SPACING * 0.6,
                background: 'rgba(34, 197, 94, 0.15)',
                borderRadius: '8px',
                padding: '8px 12px',
              }}>
                <FaCheck size={14} color="#4ade80" />
                <div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'rgba(224, 242, 254, 0.9)',
                  }}>Mejorar la estabilidad mediante sistemas híbridos.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFRiegoContexto;