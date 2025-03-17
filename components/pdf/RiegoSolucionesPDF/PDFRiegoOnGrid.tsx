"use client"

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

// Variables ajustables - reducidas para comprimir el componente
const SPACING = 14; // Espaciado estándar entre elementos (reducido)
const CARD_PADDING = 14; // Padding interno de tarjetas (reducido)

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.2;
const FADE_RIGHT_INTENSITY = 0.2;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFRiegoOnGrid = () => {
  // Definimos los tipos para los parámetros
  const getGradientStyle = (direction: string, intensity: number): string => {
    if (FADE_TRANSPARENCY) {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), rgba(7, 34, 53, 0))`;
    } else {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), transparent)`;
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #072235 0%, #051c2c 70%, #03111c 100%)',
      color: '#e0f2fe',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: SPACING,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
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
        {/* Header - reducido más */}
        <div style={{
          marginBottom: SPACING * 0.7,
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
          paddingBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 10px',
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.4,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
          }}>
            <p style={{
              color: '#7dd3fc',
              fontWeight: '500',
              fontSize: '11px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              SISTEMA ON-GRID CON INYECCIÓN
            </p>
          </div>
          
          <h2 style={{
            fontSize: '24px', // Reducido de 28px
            fontWeight: '700',
            color: 'white',
            margin: '6px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Solución <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Conectada a Red</span>
          </h2>
          
          <p style={{
            fontSize: '13px', // Reducido de 14px
            lineHeight: '1.3',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            Sistema que permite inyectar a la red la energía sobrante, logrando un balance neto
            o venta de excedentes según normativa local. Maximiza el aprovechamiento solar al usar toda
            la energía producida cuando la bomba no opera a plena capacidad.
          </p>
        </div>
        
        {/* Main content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: SPACING,
          flex: '1 0 auto',
        }}>
          {/* Ventajas y limitaciones - ahora más compactos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
            height: '100%',
          }}>
            {/* Ventajas */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              flex: '1',
            }}>
              <h3 style={{
                fontSize: '16px', // Reducido de 18px
                fontWeight: '700',
                color: '#4ade80',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaCheckCircle size={14} /> Ventajas
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.5,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#4ade80',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px', // Reducido de 13px
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Mayor ahorro: compensación de totalidad de la demanda
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#4ade80',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Aprovechamiento total de la producción solar
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#4ade80',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Posible rentabilidad por venta de excedentes
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#4ade80',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Dimensionamiento para cubrir 100%+ del consumo anual
                  </p>
                </div>
              </div>
            </div>
            
            {/* Limitaciones */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              flex: '1',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#f87171',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaTimesCircle size={14} /> Limitaciones
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.5,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#f87171',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaTimesCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Depende de normativa local de compra de excedentes
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#f87171',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaTimesCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    No garantiza energía durante cortes de red
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#f87171',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaTimesCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Requiere aprobaciones de la empresa distribuidora
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#f87171',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaTimesCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Posible limitación en capacidad de inyección permitida
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen y Funcionamiento */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
            height: '100%',
          }}>
            {/* Imagen - ajustable en posición y zoom */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '140px', // Altura de la imagen
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              flex: '0 0 auto',
              overflow: 'hidden', // Importante para contener la imagen ampliada
            }}>
              <div style={{
                position: 'absolute',
                top: -10,
                left: 0,
                right: 0,
                bottom: 0,
                
                // Variables para ajustar la imagen
                // - imageScale: controla el zoom (1 = tamaño normal, >1 = ampliado)
                // - imagePositionX e imagePositionY: controlan la posición (en porcentaje)
                background: 'url(/on-grid.jpg)',
                backgroundSize: `${160}%`, // Zoom ajustable (valor en porcentaje)
                backgroundPosition: `${40}% ${60}%`, // Posición X e Y ajustable
                backgroundRepeat: 'no-repeat',
              }}/>
              
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(5, 28, 44, 0.4) 0%, rgba(5, 28, 44, 0) 50%)',
                borderRadius: '12px',
                pointerEvents: 'none', // Para que no interfiera con eventos
              }}/>
              
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(5, 28, 44, 0.7)',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '6px',
                zIndex: 2,
              }}>
                <p style={{
                  fontSize: '11px',
                  color: 'white',
                  margin: 0,
                  fontWeight: '500',
                }}>
                  Sistema On-Grid con Inyección
                </p>
              </div>
            </div>
            
            {/* Funcionamiento */}
            <div style={{
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              flex: '1',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaInfoCircle size={14} /> Funcionamiento
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.5,
              }}>
                {[
                  "Generación de energía mediante paneles solares",
                  "Uso prioritario para alimentar la bomba de riego",
                  "Inyección de excedentes a la red eléctrica",
                  "Consumo desde la red durante noche o días nublados",
                  "Compensación final entre inyección y consumo"
                ].map((texto, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                  }}>
                    <div style={{
                      background: 'rgba(14, 165, 233, 0.2)',
                      borderRadius: '50%',
                      width: '18px',
                      height: '18px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      flexShrink: 0,
                      fontSize: '10px',
                      color: '#38bdf8',
                      fontWeight: '600',
                    }}>
                      {index + 1}
                    </div>
                    <p style={{
                      fontSize: '12px',
                      color: 'rgba(224, 242, 254, 0.9)',
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      {texto}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Advertencia - versión compacta */}
            <div style={{
              background: 'rgba(234, 179, 8, 0.1)',
              borderRadius: '12px',
              padding: '10px 12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
            }}>
              <div style={{
                color: '#fbbf24',
                marginTop: '2px',
                flexShrink: 0,
              }}>
                <FaExclamationTriangle size={14} />
              </div>
              <p style={{
                fontSize: '11px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                <span style={{
                  color: '#fbbf24',
                  fontWeight: '600',
                  marginRight: '4px',
                }}>Importante:</span>
                BIS te ayuda con las normativas locales de generación distribuida y requisitos específicos de la empresa distribuidora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFRiegoOnGrid;