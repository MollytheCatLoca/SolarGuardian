"use client"

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaSun, FaMoon, FaCloud } from 'react-icons/fa';

// Variables ajustables - reducidas para comprimir el componente
const SPACING = 14; // Espaciado estándar entre elementos (reducido)
const CARD_PADDING = 14; // Padding interno de tarjetas (reducido)

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.3;
const FADE_RIGHT_INTENSITY = 0.3;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFRiegoOffGrid = () => {
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
              SISTEMA OFF-GRID AUTÓNOMO
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
              background: 'linear-gradient(90deg, #0ea5e9, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Independiente</span>
          </h2>
          
          <p style={{
            fontSize: '13px', // Reducido de 14px
            lineHeight: '1.3',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            Solución completamente independiente de la red, que combina generación solar, 
            baterías y opcionalmente un generador a gas. Garantiza suministro continuo 24/7,
            ideal para zonas sin infraestructura eléctrica o con servicio muy deficiente.
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
            gap: SPACING * 1.6, // Reducido espacio entre cards
            height: '100%',
          }}>
            {/* Ventajas */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              borderRadius: '12px',
              padding: '12px', // Reducido padding
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(34, 197, 94, 0.2)',
              flex: '0 1 auto', // Cambiado a 0 para que no crezca más de lo necesario
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#4ade80',
                marginTop: 0,
                marginBottom: SPACING , // Reducido margen
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaCheckCircle size={14} /> Ventajas
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.4, // Reducido espacio entre items
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
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Autonomía total, sin dependencia de red eléctrica
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
                    Control absoluto de la calidad de la energía
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
                    Operación en zonas sin infraestructura eléctrica
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
                    Independencia de tarifas eléctricas y variaciones
                  </p>
                </div>
              </div>
            </div>
            
            {/* Limitaciones */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.1)',
              borderRadius: '12px',
              padding: '15px', // Reducido padding
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              flex: '0 1 auto', // Cambiado a 0 para que no crezca más de lo necesario
            }}>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#f87171',
                marginTop: 0,
                marginBottom: SPACING , // Reducido margen
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaTimesCircle size={14} /> Limitaciones
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.2, // Reducido espacio entre items
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
                    Alta inversión inicial en baterías y/o generador
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
                    Costo de combustible y mantenimiento del generador
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
                    Mayor complejidad operativa y técnica
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
                    Costo nivelado más elevado que otras soluciones
                  </p>
                </div>
              </div>
            </div>
            
            {/* Aplicación recomendada - Movida a la primera columna */}
            <div style={{
              background: 'rgba(250, 204, 21, 0.1)',
              borderRadius: '12px',
              padding: '18px 14px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(250, 204, 21, 0.2)',
              flex: '0 0 auto',
            }}>
              <p style={{
                fontSize: '11px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                <span style={{ color: '#fbbf24', fontWeight: '600' }}>Recomendado para: </span>
                Zonas sin infraestructura eléctrica donde el riego ininterrumpido es crítico. 
                El costo adicional se justifica por la confiabilidad total y eliminación de riesgos. Los sistemas de riego off-grid se diseñan específicamente para operar de forma autónoma, sin depender de la infraestructura eléctrica convencional.  Su implementación suele resultar determinante en zonas donde el riego ininterrumpido es absolutamente crucial para la viabilidad de la actividad agrícola.
              </p>
            </div>
          </div>
          
          {/* Imagen y Configuraciones */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING * 0.7, // Reducido espacio entre cards
            height: '100%',
          }}>
            {/* Imagen - ajustable en posición y zoom */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '150px', // Reducida para dejat más espacio
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              flex: '0 0 auto',
              overflow: 'hidden', // Importante para contener la imagen ampliada
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url(/off-grid.jpg)',
                backgroundSize: `${100}%`, // Zoom ajustable
                backgroundPosition: `${40}% ${60}%`, // Posición ajustable
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
                pointerEvents: 'none',
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
                  Sistema Off-Grid Completo
                </p>
              </div>
            </div>
            
            {/* Configuraciones */}
            <div style={{
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              flex: '0 0 auto',
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
                <FaInfoCircle size={14} /> Configuraciones disponibles
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                }}>
                  <p style={{
                    fontSize: '12px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 2px 0',
                  }}>Híbrido solar + baterías + generador:</p>
                  <p style={{
                    fontSize: '8px',
                    color: 'rgba(224, 242, 254, 0.8)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    160kW solares con baterías para 6h y generador de respaldo. Mayor costo operativo pero menor inversión inicial.
                  </p>
                </div>
                <div style={{
                  padding: '8px 10px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                }}>
                  <p style={{
                    fontSize: '12px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 2px 0',
                  }}>Solar + baterías extendidas:</p>
                  <p style={{
                    fontSize: '8px',
                    color: 'rgba(224, 242, 254, 0.8)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Sistema de 500kW con baterías para 18h de autonomía. Mayor inversión inicial pero menor costo operativo a largo plazo.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Funcionamiento - Compacto */}
            <div style={{
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(14, 165, 233, 0.2)',
              flex: '1 1 auto',
            }}>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: 0,
                marginBottom: SPACING * 0.2,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaInfoCircle size={14} /> Funcionamiento
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '8px',
              }}>
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <FaSun size={16} color="#38bdf8" style={{ marginBottom: '4px' }} />
                  <p style={{
                    fontSize: '11px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 3px 0',
                  }}>Durante el día</p>
                  <p style={{
                    fontSize: '8px',
                    color: 'rgba(224, 242, 254, 0.8)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Energía solar alimenta la bomba y carga baterías
                  </p>
                </div>
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <FaMoon size={16} color="#38bdf8" style={{ marginBottom: '4px' }} />
                  <p style={{
                    fontSize: '11px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 3px 0',
                  }}>Durante la noche</p>
                  <p style={{
                    fontSize: '8px',
                    color: 'rgba(224, 242, 254, 0.8)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Baterías mantienen el riego sin interrupciones
                  </p>
                </div>
                <div style={{
                  padding: '8px',
                  borderRadius: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}>
                  <FaCloud size={16} color="#38bdf8" style={{ marginBottom: '4px' }} />
                  <p style={{
                    fontSize: '11px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 3px 0',
                  }}>Días nublados</p>
                  <p style={{
                    fontSize: '8px',
                    color: 'rgba(224, 242, 254, 0.8)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Generador entra automáticamente cuando es necesario
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default PDFRiegoOffGrid;