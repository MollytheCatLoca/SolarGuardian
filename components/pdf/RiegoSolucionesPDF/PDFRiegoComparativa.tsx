"use client"

import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaChartLine, FaClipboardCheck, FaExclamationTriangle } from 'react-icons/fa';

// Variables ajustables
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

const PDFRiegoComparativa = () => {
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
        {/* Header - reducido */}
        <div style={{
          marginBottom: SPACING * 0.5,
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
              ANÁLISIS ECONÓMICO COMPARATIVO
            </p>
          </div>
          
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: '6px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Comparativa de <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Soluciones</span>
          </h2>
        </div>
        
        {/* Tabla comparativa */}
        <div style={{
          background: 'rgba(3, 105, 161, 0.2)',
          borderRadius: '12px',
          padding: CARD_PADDING,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          marginBottom: SPACING * 0.7,
          flex: '1 0 auto',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#38bdf8',
            marginTop: 0,
            marginBottom: SPACING * 0.2,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <FaChartLine size={14} /> Comparativa económica
          </h3>
          
          <div style={{
            overflow: 'auto',
            maxHeight: '240px', // Limitamos la altura para que quepa en la pantalla
            borderRadius: '8px',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '10px',
            }}>
              <thead>
                <tr style={{
                  background: 'rgba(14, 165, 233, 0.3)',
                  position: 'sticky',
                  top: 0,
                  zIndex: 10,
                }}>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'left',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>Solución</th>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>CAPEX (USD)</th>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>OPEX (USD/año)</th>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'right',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>$/kWh</th>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>Ahorro</th>
                  <th style={{
                    padding: '6px 8px',
                    textAlign: 'center',
                    fontWeight: '600',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
                    whiteSpace: 'nowrap',
                  }}>Autonomía</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>Solar 160 kW</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$144,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$4,320</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#4ade80',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,051</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>35%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>No</td>
                </tr>
                <tr style={{
                  background: 'rgba(14, 165, 233, 0.05)',
                }}>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>Solar 320 kW</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$288,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$8,640</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#4ade80',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,051</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>70%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>No</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>Solar 450 kW</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$405,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$12,150</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#4ade80',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,051</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>100%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>No</td>
                </tr>
                <tr style={{
                  background: 'rgba(14, 165, 233, 0.05)',
                }}>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>450 kW + BESS 6h</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$595,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$35,700</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#f59e0b',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,092</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>100%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>6h</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>450 kW + BESS 10h</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$689,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$41,340</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#f59e0b',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,107</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>100%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>10h</td>
                </tr>
                <tr style={{
                  background: 'rgba(14, 165, 233, 0.05)',
                }}>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}>500 kW + BESS 18h</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$927,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$55,620</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#f59e0b',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,129</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>100%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    borderBottom: '1px solid rgba(14, 165, 233, 0.1)',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>18h</td>
                </tr>
                <tr>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    whiteSpace: 'nowrap',
                    fontWeight: '600',
                  }}>160 kW + BESS 6h + Gen</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$504,000</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>$141,240</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#f59e0b',
                    fontWeight: '600',
                    textAlign: 'right',
                    whiteSpace: 'nowrap',
                  }}>0,167</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>100%</td>
                  <td style={{
                    padding: '5px 8px',
                    color: '#e0f2fe',
                    textAlign: 'center',
                    whiteSpace: 'nowrap',
                  }}>24h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Criterios y Recomendaciones en grid de 2 columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: SPACING * 0.7,
          flex: '0 0 auto',
        }}>
          {/* Criterios de selección */}
          <div style={{
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '12px',
            padding: '10px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#38bdf8',
              marginTop: 0,
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <FaClipboardCheck size={12} /> Criterios de selección
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
              }}>
                <div style={{
                  color: '#38bdf8',
                  marginTop: '3px',
                  flexShrink: 0,
                }}>
                  <FaCheckCircle size={10} />
                </div>
                <div>
                  <p style={{
                    fontSize: '10px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 1px 0',
                  }}>Confiabilidad de la red</p>
                 
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
              }}>
                <div style={{
                  color: '#38bdf8',
                  marginTop: '3px',
                  flexShrink: 0,
                }}>
                  <FaCheckCircle size={10} />
                </div>
                <div>
                  <p style={{
                    fontSize: '10px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 1px 0',
                  }}>Precio de la energía</p>
                  
                </div>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '6px',
              }}>
                <div style={{
                  color: '#38bdf8',
                  marginTop: '3px',
                  flexShrink: 0,
                }}>
                  <FaCheckCircle size={10} />
                </div>
                <div>
                  <p style={{
                    fontSize: '10px',
                    color: '#7dd3fc',
                    fontWeight: '600',
                    margin: '0 0 1px 0',
                  }}>Disponibilidad de conexión</p>
                  
                </div>
              </div>
            </div>
          </div>
          
          {/* Recomendación general */}
          <div style={{
            background: 'rgba(34, 197, 94, 0.1)',
            borderRadius: '12px',
            padding: '10px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: '700',
              color: '#4ade80',
              marginTop: 0,
              marginBottom: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <FaInfoCircle size={12} /> Recomendación general
            </h3>
            
            <p style={{
              fontSize: '9px',
              color: 'rgba(224, 242, 254, 0.9)',
              margin: '0 0 4px 0',
              lineHeight: 1.3,
            }}>
              Para zonas con red aceptable, el escenario híbrido (450 kW + BESS de 6 a 10 horas) 
              ofrece un equilibrio entre costos e independencia.
            </p>
            <p style={{
              fontSize: '9px',
              color: 'rgba(224, 242, 254, 0.9)',
              margin: 0,
              lineHeight: 1.3,
            }}>
              En áreas con red deficiente o inexistente, soluciones off-grid con baterías 
              y/o generador son la alternativa para garantizar un riego continuo, aunque 
              con un costo más elevado por kWh.
            </p>
          </div>
        </div>
        
        {/* Consideraciones adicionales */}
        <div style={{
          background: 'rgba(250, 204, 21, 0.1)',
          borderRadius: '12px',
          padding: '10px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(250, 204, 21, 0.2)',
          marginTop: SPACING * 0.7,
          flex: '0 0 auto',
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#fbbf24',
            marginTop: 0,
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <FaExclamationTriangle size={12} /> Consideraciones adicionales
          </h3>
          
          <p style={{
            fontSize: '9px',
            color: 'rgba(224, 242, 254, 0.9)',
            margin: '0 0 4px 0',
            lineHeight: 1.3,
          }}>
            El valor del cultivo es un factor determinante en la elección. Cultivos de alto valor 
            justifican inversiones mayores en seguridad energética, ya que una interrupción del riego 
            podría ocasionar pérdidas que superarían el costo adicional de los sistemas más robustos.
          </p>
          <p style={{
            fontSize: '9px',
            color: 'rgba(224, 242, 254, 0.9)',
            margin: 0,
            lineHeight: 1.3,
          }}>
            Para cada caso específico, recomendamos un análisis de costo-beneficio 
            considerando el valor de la producción y el riesgo asociado a interrupciones del riego.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFRiegoComparativa;