"use client"

import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaListOl, FaEnvelope, FaPhone, FaGlobe, FaLightbulb } from 'react-icons/fa';

// Variables ajustables
const SPACING = 12; // Espaciado estándar entre elementos (más reducido)
const CARD_PADDING = 10; // Padding interno de tarjetas (más reducido)

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.2;
const FADE_RIGHT_INTENSITY = 0.2;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFRiegoConclusiones = () => {
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
        {/* Header - aún más reducido */}
        <div style={{
          marginBottom: SPACING * 0.5,
          borderBottom: '1px solid rgba(14, 165, 233, 0.2)',
          paddingBottom: SPACING * 0.3,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 8px',
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.2,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
          }}>
            <p style={{
              color: '#7dd3fc',
              fontWeight: '500',
              fontSize: '10px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              RESUMEN Y RECOMENDACIONES
            </p>
          </div>
          
          <h2 style={{
            fontSize: '21px',
            fontWeight: '700',
            color: 'white',
            margin: '4px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Conclusiones <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Finales</span>
          </h2>
        </div>
        
        {/* Resumen de soluciones */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: SPACING * 0.5,
          marginBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          {/* Soluciones Solares Puras */}
          <div style={{
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '12px',
            padding: '8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#38bdf8',
              margin: '0 0 4px 0',
              textAlign: 'center',
            }}>
              Soluciones Solares Puras
            </h3>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '4px',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(14, 165, 233, 0.7)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '50px',
                fontSize: '9px',
                fontWeight: '600',
              }}>
                0,051 USD/kWh
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}>
              {[
                ['Ideal:', 'Zonas con red estable'],
                ['Objetivo:', 'Menor costo'],
                ['Beneficio:', 'Menor inversión'],
                ['Limitación:', 'Sin autonomía']
              ].map(([label, text], index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3px',
                  fontSize: '8px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  lineHeight: 1.2,
                }}>
                  <span style={{
                    fontWeight: '600',
                    color: '#7dd3fc',
                    whiteSpace: 'nowrap',
                  }}>{label}</span> {text}
                </div>
              ))}
            </div>
          </div>

          {/* Soluciones Híbridas */}
          <div style={{
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '12px',
            padding: '8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#38bdf8',
              margin: '0 0 4px 0',
              textAlign: 'center',
            }}>
              Soluciones Híbridas
            </h3>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '4px',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(14, 165, 233, 0.7)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '50px',
                fontSize: '9px',
                fontWeight: '600',
              }}>
                0,092 - 0,129 USD/kWh
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}>
              {[
                ['Ideal:', 'Red con problemas'],
                ['Objetivo:', 'Balance costo/confiabilidad'],
                ['Beneficio:', 'Autonomía parcial'],
                ['Limitación:', 'Mayor inversión']
              ].map(([label, text], index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3px',
                  fontSize: '8px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  lineHeight: 1.2,
                }}>
                  <span style={{
                    fontWeight: '600',
                    color: '#7dd3fc',
                    whiteSpace: 'nowrap',
                  }}>{label}</span> {text}
                </div>
              ))}
            </div>
          </div>

          {/* Soluciones Off-Grid */}
          <div style={{
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '12px',
            padding: '8px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.2)',
          }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: '700',
              color: '#38bdf8',
              margin: '0 0 4px 0',
              textAlign: 'center',
            }}>
              Soluciones Off-Grid
            </h3>
            
            <div style={{
              textAlign: 'center',
              marginBottom: '4px',
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(14, 165, 233, 0.7)',
                color: 'white',
                padding: '2px 6px',
                borderRadius: '50px',
                fontSize: '9px',
                fontWeight: '600',
              }}>
                0,129 - 0,167 USD/kWh
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3px',
            }}>
              {[
                ['Ideal:', 'Zonas sin/con mala red'],
                ['Objetivo:', 'Independencia total'],
                ['Beneficio:', 'Autonomía 24/7'],
                ['Limitación:', 'Mayor costo']
              ].map(([label, text], index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3px',
                  fontSize: '8px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  lineHeight: 1.2,
                }}>
                  <span style={{
                    fontWeight: '600',
                    color: '#7dd3fc',
                    whiteSpace: 'nowrap',
                  }}>{label}</span> {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Recomendación final */}
        <div style={{
          background: 'rgba(3, 105, 161, 0.2)',
          borderRadius: '12px',
          padding: '8px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          marginBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#38bdf8',
            margin: '0 0 5px 0',
            textAlign: 'center',
          }}>
            Recomendación Final
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: SPACING * 0.4,
          }}>
            {/* Con red aceptable */}
            <div style={{
              background: 'rgba(14, 165, 233, 0.15)',
              borderRadius: '8px',
              padding: '6px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
            }}>
              <div style={{
                fontSize: '9px',
                fontWeight: '600',
                color: '#7dd3fc',
                marginBottom: '3px',
              }}>
                Con red aceptable:
              </div>
              <p style={{
                fontSize: '8px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 3px 0',
                lineHeight: 1.2,
              }}>
                Sistema híbrido (450 kW + BESS 6-10h)
              </p>
              <ul style={{
                margin: '0',
                paddingLeft: '12px',
                fontSize: '8px',
                color: 'rgba(224, 242, 254, 0.8)',
                lineHeight: 1.2,
              }}>
                <li>Estabiliza la red</li>
                <li>Protege de fluctuaciones</li>
                <li>Opera en cortes breves</li>
              </ul>
            </div>
            
            {/* Con red deficiente/inexistente */}
            <div style={{
              background: 'rgba(14, 165, 233, 0.15)',
              borderRadius: '8px',
              padding: '6px',
              border: '1px solid rgba(14, 165, 233, 0.2)',
            }}>
              <div style={{
                fontSize: '9px',
                fontWeight: '600',
                color: '#7dd3fc',
                marginBottom: '3px',
              }}>
                Con red deficiente/sin red:
              </div>
              <p style={{
                fontSize: '8px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 3px 0',
                lineHeight: 1.2,
              }}>
                Sistema off-grid completo
              </p>
              <ul style={{
                margin: '0',
                paddingLeft: '12px',
                fontSize: '8px',
                color: 'rgba(224, 242, 254, 0.8)',
                lineHeight: 1.2,
              }}>
                <li>Solar + baterías grandes</li>
                <li>Generador de respaldo</li>
                <li>Garantiza operación 24/7</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Datos clave */}
        <div style={{
          background: 'rgba(3, 105, 161, 0.15)',
          borderRadius: '12px',
          padding: '8px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(14, 165, 233, 0.15)',
          marginBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#38bdf8',
            margin: '0 0 5px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <FaInfoCircle size={9} /> Datos clave
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '6px',
          }}>
            {[
              ['Potencia Bomba', '200 HP (~149-160 kW)'],
              ['Horas Riego', '24h o según calendario'],
              ['Prod. Solar', '~2200 kWh/kW-año'],
              ['Combustible', 'Según región'],
              ['Costo Energía', 'Tarifa local + recargos'],
              ['Vida útil', '25 años paneles, 7-10 baterías']
            ].map(([title, content], index) => (
              <div key={index} style={{
                background: 'rgba(14, 165, 233, 0.1)',
                padding: '5px',
                borderRadius: '6px',
              }}>
                <div style={{
                  fontSize: '8px',
                  fontWeight: '600',
                  color: '#7dd3fc',
                  marginBottom: '2px',
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: '8px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  lineHeight: 1.2,
                }}>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Próximos pasos - Compactado */}
        <div style={{
          background: 'rgba(34, 197, 94, 0.1)',
          borderRadius: '12px',
          padding: '14px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(34, 197, 94, 0.2)',
          marginBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <h3 style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#4ade80',
            margin: '5 5 4px 0',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            <FaListOl size={9} /> Próximos pasos
          </h3>
          
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
          }}>
            {[
              ['1. Análisis', 'Evaluación de terreno y radiación'],
              ['2. Dimensionar', 'Según requerimientos del cultivo'],
              ['3. Propuesta', 'Presupuesto y cronograma'],
              ['4. Instalación', 'Implementación profesional'],
              ['5. Monitoreo', 'Optimización continua']
            ].map(([title, content], index) => (
              <div key={index} style={{
                flex: '1 0 44%',
                display: 'flex',
                flexDirection: 'column',
                minWidth: '100px',
              }}>
                <div style={{
                  fontSize: '10px',
                  fontWeight: '600',
                  color: '#4ade80',
                }}>
                  {title}
                </div>
                <div style={{
                  fontSize: '8px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  lineHeight: 1.2,
                }}>
                  {content}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default PDFRiegoConclusiones;