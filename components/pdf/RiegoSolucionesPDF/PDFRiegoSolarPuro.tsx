"use client"

import React from 'react';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaSolarPanel, FaExclamationTriangle } from 'react-icons/fa';

// Variables ajustables - reducidas para comprimir el componente
const SPACING = 14; // Espaciado estándar entre elementos
const CARD_PADDING = 14; // Padding interno de tarjetas

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.2;
const FADE_RIGHT_INTENSITY = 0.2;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFRiegoSolarPuro = () => {
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
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        {/* Header - compacto */}
        <div style={{
          marginBottom: SPACING * 0.7,
          borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
          paddingBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 10px',
            backgroundColor: 'rgba(234, 88, 12, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.4,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(234, 88, 12, 0.15)',
          }}>
            <p style={{
              color: '#fb923c',
              fontWeight: '500',
              fontSize: '11px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              SISTEMA SOLAR PURO - AUTOCONSUMO
            </p>
          </div>
          
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: '6px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Solución <span style={{ 
              color: '#f97316',
              background: 'linear-gradient(90deg, #f97316, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Solar Directa</span>
          </h2>
          
          <p style={{
            fontSize: '13px',
            lineHeight: '1.3',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            SEl Parque Solar All-in-One es la solución más eficiente y sencilla para reducir costos de energía sin depender de la red. Diseñado para el autoconsumo total, transforma la luz solar en ahorro inmediato, sin necesidad de permisos, sin regulaciones y sin trámites de inyección.
          </p>
        </div>
        
        {/* Main content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: SPACING,
          flex: '1 0 auto',
        }}>
          {/* Ventajas y limitaciones - compactos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
            height: '100%',
          }}>
            {/* Ventajas */}
            <div style={{
              background: 'rgba(234, 88, 12, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 88, 12, 0.2)',
              flex: '1',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fb923c',
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
                    color: '#fb923c',
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
                    Menor inversión que un sistema con baterías
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fb923c',
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
                    Simplicidad de operación y mantenimiento
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fb923c',
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
                    Ahorro significativo en la factura eléctrica
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fb923c',
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
                    Aprovechamiento de energía limpia y renovable
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
                    No brinda autonomía si falla la red eléctrica
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
                    Se desaprovecha excedente solar en baja demanda
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
                    Dependencia de la red durante noche o días nublados
                  </p>
                </div>
              </div>
            </div>
            
            {/* Características */}
            <div style={{
              background: 'rgba(234, 179, 8, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
              flex: '0 0 auto',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaSolarPanel size={14} /> Características principales
              </h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: SPACING * 0.5,
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fbbf24',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Funciona en paralelo con la red eléctrica
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fbbf24',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Diseño optimizado para consumo diurno
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fbbf24',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Potencias: 160 kW, 320 kW y 450 kW
                  </p>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    color: '#fbbf24',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Ahorro: 35-100% según dimensión
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagen y análisis económico */}
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
                background: 'url(/solar-puro.jpg)',
                backgroundSize: `${160}%`, // Zoom ajustable
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
                  Sistema Solar Puro - Autoconsumo
                </p>
              </div>
            </div>
            
            {/* Análisis económico */}
            <div style={{
              background: 'rgba(234, 88, 12, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 88, 12, 0.2)',
              flex: '1',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fb923c',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaInfoCircle size={14} /> Análisis económico
              </h3>
              
              <div style={{
                width: '100%',
                overflowX: 'auto',
              }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'separate',
                  borderSpacing: '0',
                  fontSize: '11px',
                }}>
                  <thead>
                    <tr>
                      <th style={{
                        background: 'rgba(234, 88, 12, 0.2)',
                        color: '#fb923c',
                        padding: '6px 4px',
                        textAlign: 'left',
                        fontWeight: '600',
                        borderTopLeftRadius: '6px',
                        borderLeft: '1px solid rgba(234, 88, 12, 0.2)',
                        borderTop: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>Config.</th>
                      <th style={{
                        background: 'rgba(234, 88, 12, 0.2)',
                        color: '#fb923c',
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderTop: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>CAPEX</th>
                      <th style={{
                        background: 'rgba(234, 88, 12, 0.2)',
                        color: '#fb923c',
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderTop: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>OPEX/año</th>
                      <th style={{
                        background: 'rgba(234, 88, 12, 0.2)',
                        color: '#fb923c',
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderTopRightRadius: '6px',
                        borderRight: '1px solid rgba(234, 88, 12, 0.2)',
                        borderTop: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>USD/kWh</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{
                        padding: '6px 4px',
                        borderLeft: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        fontWeight: '500',
                      }}>160 kW</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                      }}>$144,000</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                      }}>$4,320</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderRight: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        color: '#fb923c',
                      }}>0,051</td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '6px 4px',
                        borderLeft: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        fontWeight: '500',
                        background: 'rgba(234, 88, 12, 0.05)',
                      }}>320 kW</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        background: 'rgba(234, 88, 12, 0.05)',
                      }}>$288,000</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        background: 'rgba(234, 88, 12, 0.05)',
                      }}>$8,640</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderRight: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.1)',
                        color: '#fb923c',
                        background: 'rgba(234, 88, 12, 0.05)',
                      }}>0,051</td>
                    </tr>
                    <tr>
                      <td style={{
                        padding: '6px 4px',
                        borderLeft: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottomLeftRadius: '6px',
                        fontWeight: '500',
                      }}>450 kW</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>$405,000</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
                      }}>$12,150</td>
                      <td style={{
                        padding: '6px 4px',
                        textAlign: 'right',
                        fontWeight: '600',
                        borderRight: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
                        borderBottomRightRadius: '6px',
                        color: '#fb923c',
                      }}>0,051</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Recomendación */}
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
                }}>Aplicación óptima:</span>
                Esta solución es ideal para zonas con red eléctrica estable donde el objetivo principal es reducir los costos operativos del riego. Ofrece el mejor costo nivelado entre todas las opciones (0,051 USD/kWh).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFRiegoSolarPuro;