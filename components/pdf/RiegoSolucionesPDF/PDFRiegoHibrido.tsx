"use client"

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaBatteryThreeQuarters } from 'react-icons/fa';

// Variables ajustables - reducidas para comprimir el componente
const SPACING = 14; // Espaciado estándar entre elementos (reducido)
const CARD_PADDING = 10; // Padding interno de tarjetas (reducido)

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.3;
const FADE_RIGHT_INTENSITY = 0.3;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFRiegoHibrido = () => {
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
              SISTEMA HÍBRIDO CON BATERÍAS
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
            }}>con Almacenamiento</span>
          </h2>
          
          <p style={{
            fontSize: '13px', // Reducido de 14px
            lineHeight: '1.3',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            Sistema que dispone de almacenamiento para cubrir variaciones de frecuencia y tensión,
            estabilizando el suministro y aprovechando mejor la producción solar. Provee autonomía
            parcial durante cortes de la red eléctrica.
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
                    Brinda estabilidad, evitando paradas por problemas en la red
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
                    Proporciona autonomía de 6-18 horas según configuración
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
                    Protege equipos de fluctuaciones eléctricas
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
                    Optimiza el uso de energía solar almacenando excedentes
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
                    Mayor inversión inicial por baterías y equipos de control
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
                    Reposición de baterías a largo plazo (7-10 años)
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
                    Mayor complejidad técnica y mantenimiento
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
                    Autonomía limitada a la capacidad de las baterías
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen y Configuraciones */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
            height: '100%',
          }}>
            {/* Imagen - más pequeña */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '160px', // Reducida de 180px
              background: 'url(/hibrido.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              flex: '0 0 auto'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(5, 28, 44, 0.4) 0%, rgba(5, 28, 44, 0) 50%)',
                borderRadius: '12px',
              }}/>
              
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(5, 28, 44, 0.7)',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '6px',
              }}>
                <p style={{
                  fontSize: '11px',
                  color: 'white',
                  margin: 0,
                  fontWeight: '500',
                }}>
                  Sistema Híbrido con Baterías
                </p>
              </div>
            </div>
            
            {/* Configuraciones disponibles */}
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
                <FaBatteryThreeQuarters size={14} /> Configuraciones disponibles
              </h3>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.6,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  padding: '8px 10px',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    color: '#38bdf8',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: '#7dd3fc',
                      margin: '0 0 1px 0',
                      fontWeight: '600',
                      lineHeight: 1.3,
                    }}>
                      Respaldo corto (6h):
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: 'rgba(224, 242, 254, 0.9)',
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      Para estabilización y cortes breves
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  padding: '8px 10px',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    color: '#38bdf8',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: '#7dd3fc',
                      margin: '0 0 1px 0',
                      fontWeight: '600',
                      lineHeight: 1.3,
                    }}>
                      Respaldo medio (10h):
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: 'rgba(224, 242, 254, 0.9)',
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      Para operación nocturna parcial
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                  background: 'rgba(14, 165, 233, 0.15)',
                  padding: '8px 10px',
                  borderRadius: '8px',
                }}>
                  <div style={{
                    color: '#38bdf8',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <div>
                    <p style={{
                      fontSize: '12px',
                      color: '#7dd3fc',
                      margin: '0 0 1px 0',
                      fontWeight: '600',
                      lineHeight: 1.3,
                    }}>
                      Respaldo extenso (18h):
                    </p>
                    <p style={{
                      fontSize: '11px',
                      color: 'rgba(224, 242, 254, 0.9)',
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      Para operación casi autónoma
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Aplicación recomendada - versión compacta */}
            <div style={{
              background: 'rgba(96, 165, 250, 0.1)',
              borderRadius: '12px',
              padding: '10px 12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(96, 165, 250, 0.2)',
              flex: '0 0 auto',
            }}>
              <p style={{
                fontSize: '11px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.4,
              }}>
                <span style={{
                  color: '#93c5fd',
                  fontWeight: '600',
                  marginRight: '6px',
                }}>Ideal para:</span>
                Zonas con problemas moderados de red donde los cortes no son excesivamente prolongados pero sí frecuentes, ofreciendo un equilibrio entre independencia, estabilidad y costo operativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFRiegoHibrido;