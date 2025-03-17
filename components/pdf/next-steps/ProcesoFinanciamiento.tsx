import React from 'react';
import { CreditCard, DollarSign, Clock, CalendarClock, CheckCircle, FileText } from 'lucide-react';

const ProcesoFinanciamientoMejorado = () => {
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
      width: '125%', // Aumentado un 20%
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
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
          borderBottom: '1px solid rgba(29, 78, 216, 0.2)',
          paddingBottom: SPACING * 0.4,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 8px',
            backgroundColor: 'rgba(29, 78, 216, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.3,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(29, 78, 216, 0.15)',
          }}>
            <p style={{
              color: '#93c5fd',
              fontWeight: '500',
              fontSize: '9px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              FINANCIACIÓN PARA ENERGÍA RENOVABLE
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
            <CreditCard size={22} />
            Proceso de <span style={{
              color: '#60a5fa',
              background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Financiamiento y Leasing</span>
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.2',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 2px 0',
          }}>
            Opciones personalizadas para su inversión en energía solar
          </p>
        </div>

        {/* Main content - Tres columnas para aprovechar el ancho adicional */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: SPACING,
          flex: '1 0 auto',
        }}>
          {/* Columna 1: Opciones de Leasing y Cronograma */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Introducción */}
            <div style={{
              background: 'rgba(29, 78, 216, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#60a5fa',
                marginTop: 0,
                marginBottom: SPACING * 0.4,
              }}>
                Nuestra Propuesta
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                En BIS Integraciones entendemos que la inversión en energía solar representa un paso estratégico hacia la eficiencia económica y la sustentabilidad. Por eso, hemos diseñado un proceso de financiamiento transparente y flexible.
              </p>
            </div>

            {/* Opciones de Leasing */}
            <div style={{
              background: 'rgba(29, 78, 216, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
              flex: '1',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '64px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(29, 78, 216, 0.3)',
                  borderRadius: '100%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <DollarSign size={16} color="#60a5fa" />
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#60a5fa',
                  margin: 2,
                }}>Opciones de Leasing</h3>
              </div>
              
              <ul style={{
                paddingLeft: '0',
                margin: 0,
                listStyle: 'none',
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                }}>
                  <CheckCircle size={16} style={{ color: '#4ade80', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Moneda
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(224, 242, 254, 0.9)', margin: 4, lineHeight: 1.3 }}>
                      Opciones en Pesos o Dólares según necesidades
                    </p>
                  </div>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  marginBottom: '12px',
                }}>
                  <CheckCircle size={16} style={{ color: '#4ade80', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Tasa
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(224, 242, 254, 0.9)', margin: 4, lineHeight: 1.3 }}>
                      Fija o variable para mayor previsibilidad
                    </p>
                  </div>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                    gap: '10px',
                }}>
                  <CheckCircle size={16} style={{ color: '#4ade80', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Plazos
                    </h4>
                    <p style={{ fontSize: '14px', color: 'rgba(224, 242, 254, 0.9)', margin: 4, lineHeight: 1.3 }}>
                      Flexibilidad con opciones de 36 o 60 meses
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Columna 2: Cronograma y Pasos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Cronograma */}
            <div style={{
              background: 'rgba(29, 78, 216, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(29, 78, 216, 0.3)',
                  borderRadius: '100%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <CalendarClock size={16} color="#60a5fa" />
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#60a5fa',
                  margin: 0,
                }}>Cronograma del Proceso</h3>
              </div>
              
              <div style={{ 
                position: 'relative', 
                paddingLeft: '20px', 
                marginLeft: '10px',
                borderLeft: '2px solid rgba(96, 165, 250, 0.4)',
              }}>
                <div style={{ 
                  marginBottom: '18px', 
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '0px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}></div>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#e0f2fe', 
                    fontWeight: '600', 
                    margin: '0 0 4px 0' 
                  }}>
                    Día 1
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(224, 242, 254, 0.9)', 
                    margin: 0, 
                    lineHeight: 1.3 
                  }}>
                    Recepción de información inicial
                  </p>
                </div>
                
                <div style={{ 
                  marginBottom: '18px', 
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '0px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}></div>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#e0f2fe', 
                    fontWeight: '600', 
                    margin: '0 0 4px 0' 
                  }}>
                    Día 2-3
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(224, 242, 254, 0.9)', 
                    margin: 0, 
                    lineHeight: 1.3 
                  }}>
                    Generación de proforma técnica y financiera
                  </p>
                </div>
                
                <div style={{ 
                  marginBottom: '18px', 
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '0px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}></div>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#e0f2fe', 
                    fontWeight: '600', 
                    margin: '0 0 4px 0' 
                  }}>
                    Día 4-6
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(224, 242, 254, 0.9)', 
                    margin: 0, 
                    lineHeight: 1.3 
                  }}>
                    Contacto con entidades bancarias asociadas
                  </p>
                </div>
                
                <div style={{ 
                  position: 'relative',
                }}>
                  <div style={{
                    position: 'absolute',
                    left: '-31px',
                    top: '0px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#2563eb',
                  }}></div>
                  <p style={{ 
                    fontSize: '15px', 
                    color: '#e0f2fe', 
                    fontWeight: '600', 
                    margin: '0 0 4px 0' 
                  }}>
                    Día 7
                  </p>
                  <p style={{ 
                    fontSize: '14px', 
                    color: 'rgba(224, 242, 254, 0.9)', 
                    margin: 0, 
                    lineHeight: 1.3 
                  }}>
                    Presentación de opciones de financiamiento
                  </p>
                </div>
              </div>
            </div>

            {/* Pasos del Proceso */}
            <div style={{
              background: 'rgba(29, 78, 216, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
              flex: '1',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '44px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(29, 78, 216, 0.3)',
                  borderRadius: '100%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FileText size={16} color="#60a5fa" />
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#60a5fa',
                  margin: 0,
                }}>Pasos del Proceso</h3>
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
                }}>
                  <div style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '100%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>1</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Solicitud de Información
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      CUIT y bancos con los que opera
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  <div style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '100%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>2</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Generación de Proforma
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      Propuesta técnica y financiera
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  <div style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '100%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>3</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Estructuración Financiera
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      Contacto con bancos asociados
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                }}>
                  <div style={{
                    backgroundColor: '#2563eb',
                    color: 'white',
                    borderRadius: '100%',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    flexShrink: 0,
                  }}>4</div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Comparación de Opciones
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      Elección del financiamiento óptimo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Beneficios y documentos */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Imagen */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '200px',
              borderRadius: '14px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url(/EN_FINMundo.jpg)', // Placeholder para imagen
                backgroundSize: '100%',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(5, 28, 44, 0.6) 0%, rgba(5, 28, 44, 0.2) 50%, rgba(5, 28, 44, 0.4) 100%)',
                borderRadius: '14px',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'rgba(5, 28, 44, 0.8)',
                backdropFilter: 'blur(8px)',
                padding: '8px 12px',
                borderRadius: '8px',
                zIndex: 2,
              }}>
                <p style={{
                  fontSize: '14px',
                  color: 'white',
                  margin: 0,
                  fontWeight: '600',
                  textAlign: 'center',
                }}>
                  Financiamiento especialmente diseñado para energía renovable
                </p>
              </div>
            </div>

            {/* Beneficios del modelo */}
            <div style={{
              background: 'rgba(29, 78, 216, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(29, 78, 216, 0.2)',
              flex: '1',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '14px',
              }}>
                <div style={{
                  backgroundColor: 'rgba(29, 78, 216, 0.3)',
                  borderRadius: '100%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Clock size={16} color="#60a5fa" />
                </div>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#60a5fa',
                  margin: 0,
                }}>Beneficios del Modelo de Leasing</h3>
              </div>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(1, 1fr)',
                gap: '12px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(29, 78, 216, 0.15)',
                  borderRadius: '10px',
                  padding: '12px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    borderRadius: '100%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={14} color="#60a5fa" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Mantener líneas de crédito disponibles
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      No afecta a sus líneas de crédito bancarias existentes
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(29, 78, 216, 0.15)',
                  borderRadius: '10px',
                  padding: '12px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    borderRadius: '100%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={14} color="#60a5fa" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Beneficios fiscales
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      Se considera gasto operativo, reduciendo la carga impositiva
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(29, 78, 216, 0.15)',
                  borderRadius: '10px',
                  padding: '12px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    borderRadius: '100%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={14} color="#60a5fa" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                      Ahorro energético inmediato
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      El ahorro en la factura compensa el costo de la cuota mensual
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  backgroundColor: 'rgba(29, 78, 216, 0.15)',
                  borderRadius: '10px',
                  padding: '12px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(96, 165, 250, 0.2)',
                    borderRadius: '100%',
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <CheckCircle size={14} color="#60a5fa" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#e0f2fe', margin: '0 0 4px 0' }}>
                    Financiamiento 100%
                    </h4>
                    <p style={{ fontSize: '13px', color: 'rgba(224, 242, 254, 0.8)', margin: 0, lineHeight: 1.3 }}>
                      Sin necesidad de inversión inicial, facilitando el acceso
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página / Llamada a la acción */}
        <div style={{
          background: 'rgba(29, 78, 216, 0.1)',
          borderRadius: '12px',
          padding: '10px 12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(29, 78, 216, 0.2)',
          marginTop: SPACING * 0.6,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Clock size={14} style={{ color: '#60a5fa' }} />
            <p style={{
              fontSize: '14px',
              color: 'rgba(224, 242, 254, 0.8)',
              margin: 0,
            }}>
              Tiempo estimado total: 2-4 semanas hasta aprobación final
            </p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <CreditCard size={14} style={{ color: '#60a5fa' }} />
            <p style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#60a5fa',
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

export default ProcesoFinanciamientoMejorado;    