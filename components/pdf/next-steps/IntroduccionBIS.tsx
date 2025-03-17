import React from 'react';
import { Sun, Leaf, LightbulbOff, Zap, Globe, ShieldCheck } from 'lucide-react';

const IntroduccionBISMejorado = () => {
  // Variables ajustables - consistentes con el template original
  const SPACING = 24; // Espaciado estándar entre elementos
  const CARD_PADDING = 24; // Padding interno de tarjetas

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
      width: '120%', // Aumentado un 30%
      height: '100%', // Reducido un 30%
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
        background: 'radial-gradient(circle, rgba(3, 105, 161, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        background: 'radial-gradient(circle, rgba(3, 105, 161, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
          borderBottom: '1px solid rgba(3, 105, 161, 0.2)',
          paddingBottom: SPACING * 0.4,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '3px 8px',
            backgroundColor: 'rgba(3, 105, 161, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.3,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(3, 105, 161, 0.15)',
          }}>
            <p style={{
              color: '#38bdf8',
              fontWeight: '500',
              fontSize: '9px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              SOLUCIONES ENERGÉTICAS SOSTENIBLES
            </p>
          </div>
          <h2 style={{
            fontSize: '26px',
            fontWeight: '700',
            color: 'white',
            margin: '4px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Liderando el Camino hacia la <span style={{
              color: '#0284c7',
              background: 'linear-gradient(90deg, #0284c7, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Soberanía Energética</span>
          </h2>
          <p style={{
            fontSize: '14px',
            lineHeight: '1.2',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 2px 0',
          }}>
            BIS Integraciones - Soluciones Sostenibles para un Futuro Energético Independiente
          </p>
        </div>

        {/* Main content - Tres columnas para aprovechar el ancho adicional */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: SPACING,
          flex: '1 0 auto',
        }}>
          {/* Columna 1: Visión y Plataforma */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Visión */}
            <div style={{
              background: 'rgba(3, 105, 161, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(3, 105, 161, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: 0,
                marginBottom: SPACING * 0.4,
              }}>
                Nuestra Visión
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.6,
              }}>
                En <strong>BIS Integraciones</strong>, entendemos que el futuro energético de Argentina depende de nuestra capacidad para desarrollar e implementar soluciones sostenibles que promuevan la independencia energética.
              </p>
            </div>

            {/* Plataforma SolarGuardian */}
            <div style={{
              background: 'rgba(3, 105, 161, 0.1)',
              borderRadius: '14px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(3, 105, 161, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: 0,
                marginBottom: SPACING * 0.8,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <Sun size={14} /> SolarGuardian.pro
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 6px 0',
                lineHeight: 1.6,
              }}>
                A través de nuestra plataforma de monitoreo y mantenimiento <strong>SolarGuardian.pro</strong>, ofrecemos una experiencia integral que no termina con la instalación.
              </p>
              <div style={{
                background: 'rgba(3, 105, 161, 0.2)',
                borderRadius: '8px',
                marginTop: '6px',
                padding: '8px',
                border: '1px solid rgba(3, 105, 161, 0.3)',
              }}>
                <p style={{
                  fontSize: '12px',
                  color: 'white',
                  marginBottom: '5px',
                  margin: 0,
                  fontWeight: '500',
                  textAlign: 'center',
                }}>
                  Monitoreo inteligente con alertas automáticas
                </p>
              </div>
            </div>
          </div>

          {/* Columna 2: Tres Pilares */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Tres Pilares */}
            <div style={{
              background: 'rgba(3, 105, 161, 0.1)',
              borderRadius: '16px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(3, 105, 161, 0.2)',
              height: '100%',
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: '40px',
                marginBottom: SPACING * 0.4,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <ShieldCheck size={12} /> Nuestros Pilares
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.6,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#38bdf8', marginTop: '2px', flexShrink: 0 }}>
                    <Zap size={12} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#38bdf8', margin: '0 0 2px 0' }}>
                      Soberanía Energética
                    </h4>
                    <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Impulsamos la capacidad de nuestros clientes para generar su propia energía, reduciendo la dependencia de infraestructuras centralizadas.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#22c55e', marginTop: '2px', flexShrink: 0 }}>
                    <Leaf size={12} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#22c55e', margin: '0 0 2px 0' }}>
                      Sustentabilidad
                    </h4>
                    <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Nuestras soluciones contribuyen directamente a la reducción de la huella de carbono y al cumplimiento de objetivos ambientales.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#eab308', marginTop: '2px', flexShrink: 0 }}>
                    <LightbulbOff size={12} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#eab308', margin: '0 0 2px 0' }}>
                      Eficiencia Energética
                    </h4>
                    <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Optimizamos cada sistema para maximizar la generación y aprovechamiento de la energía con la mejor relación costo-beneficio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3: Imagen, Soluciones y Compromiso */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Imagen */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '220px', // Altura reducida para el layout más compacto
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                background: 'url(/EN_BAT_PAN.JPG)', // Placeholder para imagen de paneles solares
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                backgroundRepeat: 'no-repeat',
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(5, 28, 44, 0.4) 0%, rgba(5, 28, 44, 0) 50%)',
                borderRadius: '12px',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '6px',
                left: '6px',
                background: 'rgba(5, 28, 44, 0.7)',
                backdropFilter: 'blur(8px)',
                padding: '3px 8px',
                borderRadius: '4px',
                zIndex: 2,
              }}>
                <p style={{
                  fontSize: '10px',
                  color: 'white',
                  margin: 0,
                  fontWeight: '500',
                }}>
                  Sistemas Energéticos Sostenibles
                </p>
              </div>
            </div>

            {/* Soluciones y Compromiso combinados */}
            <div style={{
              background: 'rgba(3, 105, 161, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(3, 105, 161, 0.2)',
              flex: 1,
            }}>
              <div style={{ marginBottom: '8px' }}>
                <h3 style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#38bdf8',
                  marginTop: 0,
                  marginBottom: SPACING * 0.4,
                }}>
                  Nuestras Soluciones
                </h3>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '6px 10px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                    <Sun size={10} style={{ color: '#eab308', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '10px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Sistemas fotovoltaicos de última generación.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                    <Globe size={10} style={{ color: '#3b82f6', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '10px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Cada MW evita 400 ton. de CO₂ anuales.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                    <Zap size={10} style={{ color: '#a855f7', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '10px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Monitoreo en tiempo real.
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '4px' }}>
                    <ShieldCheck size={10} style={{ color: '#38bdf8', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '10px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.2 }}>
                      Servicio post-venta garantizado.
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 style={{
                fontSize: '14px',
                fontWeight: '700',
                color: '#38bdf8',
                marginTop: '10px',
                marginBottom: SPACING * 0.4,
              }}>
                Nuestro Compromiso
              </h3>
              <ul style={{
                paddingLeft: '0',
                margin: 0,
                listStyle: 'none',
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '4px 10px',
              }}>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    marginTop: '5px',
                    flexShrink: 0,
                  }}></div>
                  <p style={{
                    fontSize: '10px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Soluciones robustas y adaptadas
                  </p>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    marginTop: '5px',
                    flexShrink: 0,
                  }}></div>
                  <p style={{
                    fontSize: '10px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Opciones con financiamiento
                  </p>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    marginTop: '5px',
                    flexShrink: 0,
                  }}></div>
                  <p style={{
                    fontSize: '10px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Ambientalmente responsables
                  </p>
                </li>
                <li style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '4px',
                }}>
                  <div style={{
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    backgroundColor: '#38bdf8',
                    marginTop: '5px',
                    flexShrink: 0,
                  }}></div>
                  <p style={{
                    fontSize: '10px',
                    color: 'rgba(224, 242, 254, 0.9)',
                    margin: 0,
                    lineHeight: 1.2,
                  }}>
                    Servicio técnico garantizado
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pie de página / Llamada a la acción */}
        <div style={{
          background: 'rgba(3, 105, 161, 0.1)',
          borderRadius: '12px',
          padding: '8px 10px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(3, 105, 161, 0.2)',
          marginTop: SPACING * 0.6,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <Sun size={10} style={{ color: '#eab308' }} />
            <p style={{
              fontSize: '10px',
              color: 'rgba(224, 242, 254, 0.8)',
              margin: 0,
            }}>
              Transformando el futuro energético un proyecto a la vez
            </p>
          </div>
          <p style={{
            fontSize: '10px',
            fontWeight: '600',
            color: '#38bdf8',
            margin: 0,
          }}>
            www.bisintegraciones.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default IntroduccionBISMejorado;