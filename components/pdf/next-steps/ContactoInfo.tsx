import React from 'react';
import { Phone, Mail, Globe, Check, MapPin, Users, Sun, Calendar } from 'lucide-react';

const ContactoInfoMejorado = () => {
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
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        background: 'radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
          borderBottom: '1px solid rgba(217, 119, 6, 0.2)',
          paddingBottom: SPACING * 0.4,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 8px',
            backgroundColor: 'rgba(217, 119, 6, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.3,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.15)',
          }}>
            <p style={{
              color: '#fbbf24',
              fontWeight: '500',
              fontSize: '9px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              INFORMACIÓN DE CONTACTO
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
            <Phone size={22} />
            Contacto y <span style={{
              color: '#fbbf24',
              background: 'linear-gradient(90deg, #d97706, #fbbf24)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Próximos Pasos</span>
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.2',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 2px 0',
          }}>
            Estamos aquí para acompañarlo en todo el proceso
          </p>
        </div>

        {/* Main content - introducción */}
        <div style={{
          background: 'rgba(217, 119, 6, 0.1)',
          borderRadius: '14px',
          padding: CARD_PADDING,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(217, 119, 6, 0.2)',
          marginBottom: SPACING,
        }}>
          <p style={{
            fontSize: '14px',
            color: 'rgba(224, 242, 254, 0.9)',
            margin: 0,
            lineHeight: 1.6,
          }}>
            Nuestro equipo de BIS Integraciones está a su disposición para resolver cualquier consulta y guiarlo en cada etapa del proceso. No dude en contactarnos para avanzar en su camino hacia la soberanía energética.
          </p>
        </div>

        {/* Cuatro tarjetas de información principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: SPACING,
          marginBottom: SPACING,
        }}>
          {/* Contacto Comercial */}
          <div style={{
            background: 'rgba(217, 119, 6, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '16px',
            }}>
              <div style={{
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                borderRadius: '100%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
              }}>
                <Users size={24} color="#fbbf24" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                margin: 0,
              }}>Contacto Comercial</h3>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '16px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Phone size={16} color="#fbbf24" />
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                }}>
                  +54 9 11 3407 6585
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Mail size={16} color="#fbbf24" />
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                  wordBreak: 'break-all',
                }}>
                  contacto@bisintegraciones.com
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Globe size={16} color="#fbbf24" />
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#60a5fa',
                  margin: 0,
                  cursor: 'pointer',
                  wordBreak: 'break-all',
                }}>
                  www.bisintegraciones.com
                </p>
              </div>
            </div>
            
            <div style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(217, 119, 6, 0.2)',
              paddingTop: '12px',
              textAlign: 'center',
            }}>
              <p style={{
                fontSize: '14px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 4px 0',
              }}>
                Ing. Jorge Keczeli
              </p>
              <p style={{
                fontSize: '13px',
                color: 'rgba(224, 242, 254, 0.7)',
                margin: 0,
              }}>
                Director 
              </p>
            </div>
          </div>
          
          {/* Plataforma SolarGuardian */}
          <div style={{
            background: 'rgba(217, 119, 6, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '16px',
            }}>
              <div style={{
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                borderRadius: '100%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
              }}>
                <Sun size={24} color="#fbbf24" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                margin: 0,
              }}>Plataforma SolarGuardian</h3>
            </div>
            
            <div style={{
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
              <p style={{
                fontSize: '14px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 16px 0',
                lineHeight: 1.5,
              }}>
                Acceda a nuestra plataforma de monitoreo para visualizar ejemplos de proyectos en funcionamiento.
              </p>
              
              <div style={{
                background: 'rgba(217, 119, 6, 0.2)',
                borderRadius: '8px',
                padding: '10px 16px',
                color: '#fbbf24',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                marginBottom: '16px',
                border: '1px solid rgba(217, 119, 6, 0.3)',
              }}>
                solarguardian.pro
              </div>
              
              <p style={{
                fontSize: '13px',
                color: 'rgba(224, 242, 254, 0.7)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                Solicite a su representante comercial un acceso de demostración para conocer todas las funcionalidades.
              </p>
            </div>
          </div>
          
          {/* Próximos Pasos */}
          <div style={{
            background: 'rgba(217, 119, 6, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: '16px',
            }}>
              <div style={{
                backgroundColor: 'rgba(217, 119, 6, 0.2)',
                borderRadius: '100%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '8px',
              }}>
                <Calendar size={24} color="#fbbf24" />
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                margin: 0,
              }}>Próximos Pasos</h3>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              paddingLeft: '8px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  backgroundColor: '#d97706',
                  borderRadius: '100%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '700',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  1
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                }}>
                  Confirmación de interés en avanzar
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  backgroundColor: '#d97706',
                  borderRadius: '100%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '700',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  2
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                }}>
                  Envío de información básica (CUIT)
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  backgroundColor: '#d97706',
                  borderRadius: '100%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '700',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  3
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                }}>
                  Recepción de proforma y opciones
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
              }}>
                <div style={{
                  backgroundColor: '#d97706',
                  borderRadius: '100%',
                  width: '20px',
                  height: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '12px',
                  fontWeight: '700',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  4
                </div>
                <p style={{
                  fontSize: '14px',
                  color: 'rgba(224, 242, 254, 0.9)',
                  margin: 0,
                }}>
                  Selección de financiamiento
                </p>
              </div>
            </div>
          </div>
          
          {/* Oficinas Centrales */}
          <div style={{
            background: 'rgba(217, 119, 6, 0.1)',
            borderRadius: '14px',
            padding: CARD_PADDING,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(217, 119, 6, 0.2)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <MapPin size={16} color="#fbbf24" />
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#fbbf24',
                  margin: 0,
                }}>Oficinas Centrales</h3>
              </div>
              
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* Logo placeholder */}
                <div style={{
                  fontSize: '10px',
                  fontWeight: '700',
                  color: '#072235',
                }}>BIS</div>
              </div>
            </div>
            
            <div style={{
              marginBottom: '16px',
            }}>
              <p style={{
                fontSize: '15px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 8px 0',
                fontWeight: '600',
              }}>
                Buenos Aires, Argentina
              </p>
              <p style={{
                fontSize: '13px',
                color: 'rgba(224, 242, 254, 0.7)',
                margin: 0,
                lineHeight: 1.5,
              }}>
                También atendemos proyectos en todo el país a través de nuestra red de instaladores certificados.
              </p>
            </div>
            
            <div style={{
              marginTop: 'auto',
              borderTop: '1px solid rgba(217, 119, 6, 0.2)',
              paddingTop: '12px',
            }}>
              <h4 style={{
                fontSize: '15px',
                fontWeight: '600',
                color: '#e0f2fe',
                margin: '0 0 10px 0',
              }}>
                Nuestro Compromiso
              </h4>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(74, 222, 128, 0.2)',
                    borderRadius: '100%',
                    width: '22px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Check size={12} color="#4ade80" />
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Transparencia en todo el proceso
                  </p>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(74, 222, 128, 0.2)',
                    borderRadius: '100%',
                    width: '22px',
                    height: '22px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Check size={12} color="#4ade80" />
                  </div>
                  <p style={{
                    fontSize: '13px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Asesoramiento especializado
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pie de página / Llamada a la acción */}
        <div style={{
          background: 'rgba(217, 119, 6, 0.1)',
          borderRadius: '12px',
          padding: '14px 16px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(217, 119, 6, 0.2)',
          marginTop: SPACING * 0.4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            flex: '1',
            paddingRight: '16px',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: '700',
              color: '#e0f2fe',
              margin: '0 0 6px 0',
            }}>
              Su camino hacia la independencia energética comienza hoy
            </h3>
            <p style={{
              fontSize: '14px',
              color: 'rgba(224, 242, 254, 0.8)',
              margin: 0,
              lineHeight: 1.5,
            }}>
              Le invitamos a dar el primer paso hacia un futuro energético sostenible y económicamente eficiente. Nuestro equipo está listo para acompañarle en este proceso transformador.
            </p>
          </div>
          
          <div style={{
            textAlign: 'right',
            flexShrink: 0,
          }}>
            <p style={{
              fontSize: '15px',
              fontWeight: '600',
              color: '#fbbf24',
              margin: '0 0 4px 0',
            }}>
              BIS Integraciones
            </p>
            <p style={{
              fontSize: '13px',
              color: '#fbbf24',
              margin: 0,
            }}>
              SolarGuardian.pro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoInfoMejorado;