import React from 'react';
import { FolderUp, ClipboardList, Shield, BarChart, FileCheck, Users } from 'lucide-react';

const AsistenciaDocumentacionMejorado = () => {
  // Variables ajustables - consistentes con el template original
  const SPACING = 16; // Espaciado estándar entre elementos
  const CARD_PADDING = 16; // Padding interno de tarjetas

  // Configuración del efumado
  const FADE_ENABLED = true;
  const FADE_TOP_INTENSITY = 0.2;
  const FADE_BOTTOM_INTENSITY = 0.2;
  const FADE_LEFT_INTENSITY = 0.2;
  const FADE_RIGHT_INTENSITY = 0.2;
  const FADE_HEIGHT = 80;
  const FADE_WIDTH = 80;
  const FADE_TRANSPARENCY = true;

  // Función para generar gradientes de efumado
  const getGradientStyle = (direction, intensity) => {
    if (FADE_TRANSPARENCY) {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), rgba(7, 34, 53, 0))`;
    } else {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), transparent)`;
    }
  };

  return (
    <div style={{
      width: '125%', // Aumentado un 25%
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
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }} />
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
      }} />
      {/* Efectos de efumado en los extremos */}
      {FADE_ENABLED && (
        <>
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
          }} />
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
          }} />
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
          }} />
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
          }} />
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
          marginBottom: SPACING * 0.5,
          borderBottom: '1px solid rgba(22, 163, 74, 0.2)',
          paddingBottom: SPACING * 0.4,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 8px',
            backgroundColor: 'rgba(22, 163, 74, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.3,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.15)',
          }}>
            <p style={{
              color: '#86efac',
              fontWeight: '500',
              fontSize: '9px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              DOCUMENTACIÓN PARA FINANCIAMIENTO
            </p>
          </div>
          <h2 style={{
            fontSize: '26px',
            fontWeight: '700',
            color: 'white',
            margin: '4px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <FolderUp size={22} />
            Asistencia en <span style={{
              color: '#4ade80',
              background: 'linear-gradient(90deg, #16a34a, #4ade80)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Documentación y Carpeta Crediticia</span>
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.2',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 2px 0',
          }}>
            Acompañamiento especializado para agilizar su aprobación
          </p>
        </div>

        {/* Main content - introducción */}
        <div style={{
          background: 'rgba(22, 163, 74, 0.1)',
          borderRadius: '14px',
          padding: CARD_PADDING,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(22, 163, 74, 0.2)',
          marginBottom: SPACING,
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(224, 242, 254, 0.9)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            Una vez seleccionada la opción de financiamiento, BIS Integraciones le brinda asistencia personalizada para preparar toda la documentación necesaria y maximizar las posibilidades de aprobación rápida de su leasing.
          </p>
        </div>

        {/* Cuatro categorías de documentación */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: SPACING,
          marginBottom: SPACING,
        }}>
          {/* Documentación Societaria */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ClipboardList size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Documentación Societaria</h3>
            </div>

            <ul style={{
              paddingLeft: '0',
              margin: 0,
              listStyle: 'none',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Estatuto Social / Contrato Social
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Acta de Directorio / Gerencia vigente
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Acta de Asamblea con designación de autoridades
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Inscripción en Registro Público de Comercio
                </p>
              </li>
            </ul>
          </div>

          {/* Documentación Impositiva */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ClipboardList size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Documentación Impositiva</h3>
            </div>

            <ul style={{
              paddingLeft: '0',
              margin: 0,
              listStyle: 'none',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Constancia de inscripción en AFIP
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Últimas 3 DDJJ de IVA
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Última DDJJ de Ganancias
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Constancia de inscripción en Ingresos Brutos
                </p>
              </li>
            </ul>
          </div>
          
          {/* Documentación Contable */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <ClipboardList size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Documentación Contable</h3>
            </div>

            <ul style={{
              paddingLeft: '0',
              margin: 0,
              listStyle: 'none',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Estados contables de los últimos 2 ejercicios
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Estado de situación patrimonial actualizado
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Flujo de fondos proyectado (en algunos casos)
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Manifestación de bienes de socios garantes
                </p>
              </li>
            </ul>
          </div>
          
          {/* Documentación del Proyecto */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <BarChart size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Documentación del Proyecto</h3>
            </div>

            <ul style={{
              paddingLeft: '0',
              margin: 0,
              listStyle: 'none',
            }}>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Proyecto técnico detallado y cotización
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Análisis de ahorro energético proyectado
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '10px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Factura proforma del equipamiento
                </p>
              </li>
              <li style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#4ade80',
                  marginTop: '6px',
                  flexShrink: 0,
                }}></div>
                <p style={{
                  fontSize: '13px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Certificaciones y garantías de los equipos
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Servicios de Asistencia y Equipo Especializado */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: SPACING,
          marginBottom: SPACING,
        }}>
          {/* Servicios de Asistencia */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Shield size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Nuestros Servicios de Asistencia</h3>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                backgroundColor: 'rgba(22, 163, 74, 0.15)',
                borderRadius: '10px',
                padding: '12px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.2)',
                  borderRadius: '100%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                  }}></div>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                    Plantillas y formatos
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                    Proporcionamos todos los modelos necesarios
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                backgroundColor: 'rgba(22, 163, 74, 0.15)',
                borderRadius: '10px',
                padding: '12px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.2)',
                  borderRadius: '100%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                  }}></div>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                    Gestión con la entidad
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                    Acompañamiento en la presentación
                  </p>
                </div>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                backgroundColor: 'rgba(22, 163, 74, 0.15)',
                borderRadius: '10px',
                padding: '12px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(74, 222, 128, 0.2)',
                  borderRadius: '100%',
                  width: '28px',
                  height: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: '#4ade80',
                  }}></div>
                </div>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                    Seguimiento de expediente
                  </h4>
                  <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                    Monitoreo continuo hasta la aprobación
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Equipo Especializado */}
          <div style={{
            background: 'rgba(22, 163, 74, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(22, 163, 74, 0.2)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.3)',
                borderRadius: '100%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Users size={16} color="#4ade80" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#4ade80',
                margin: 0,
              }}>Equipo Especializado de Soporte</h3>
            </div>
            
            <p style={{
              fontSize: '14px',
              color: 'rgba(224, 242, 254, 0.9)',
              margin: '0 0 16px 0',
              lineHeight: 1.5,
            }}>
              Contamos con un equipo dedicado a la gestión documental y relaciones bancarias que trabaja en estrecha colaboración con:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
            }}>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '10px',
                padding: '12px',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#e0f2fe',
                  fontWeight: '600',
                  margin: 0,
                }}>
                  Departamento Contable
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '10px',
                padding: '12px',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#e0f2fe',
                  fontWeight: '600',
                  margin: 0,
                }}>
                  Asesores Legales
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '10px',
                padding: '12px',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#e0f2fe',
                  fontWeight: '600',
                  margin: 0,
                }}>
                  Ejecutivos Bancarios
                </p>
              </div>
              <div style={{
                backgroundColor: 'rgba(22, 163, 74, 0.2)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(22, 163, 74, 0.3)',
                borderRadius: '10px',
                padding: '12px',
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  color: '#e0f2fe',
                  fontWeight: '600',
                  margin: 0,
                }}>
                  Ingenieros de Proyecto
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página / Llamada a la acción */}
        <div style={{
          background: 'rgba(22, 163, 74, 0.1)',
          borderRadius: '12px',
          padding: '10px 12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(22, 163, 74, 0.2)',
          marginTop: SPACING * 0.4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Shield size={14} style={{ color: '#4ade80' }} />
            <p style={{
              fontSize: '14px',
              color: 'rgba(224, 242, 254, 0.8)',
              margin: 0,
            }}>
              La preparación adecuada de la documentación puede reducir el tiempo de aprobación hasta en un 40%
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#4ade80',
              margin: 0,
            }}>
              BIS Integraciones - SolarGuardian.pro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsistenciaDocumentacionMejorado;