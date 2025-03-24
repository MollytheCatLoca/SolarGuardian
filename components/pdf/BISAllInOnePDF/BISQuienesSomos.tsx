"use client"

import React from 'react';
import { 
  FaClock, 
  FaLightbulb, 
  FaMicrochip, 
  FaUsers,
  FaCheckCircle,
  FaBolt,
  FaCity
} from "react-icons/fa";

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  titleFontSize: 24,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#8B5CF6', // Púrpura
  
  // Imágenes
  teamImagePath: '/solar-team-sin.jpg',
  mapImagePath: '/BISLogo.svg',
};

const BISQuienesSomos: React.FC = () => {
  return (
    <div className="pdf-bis-quienes-somos" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827', // Fondo oscuro coherente
      color: 'white',
      padding: `${LAYOUT.padding}px`,
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '25%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.2,
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '30%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.1,
        zIndex: 1,
      }}/>
      
      {/* Patrón de cuadrícula sutil con bordes difusos */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
        opacity: 0.4,
        filter: 'blur(0.5px)',
      }}/>

      {/* Título flotante */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '0',
        zIndex: 10,
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.3))',
        paddingLeft: '15px',
        paddingRight: '25px',
        marginBottom: '10px',
        paddingTop: '6px',
        paddingBottom: '8px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid rgba(16, 185, 129, 0.9)',
      }}>
        <h2 style={{
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
        }}>
          QUIÉNES SOMOS
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '35px', // Espacio para el título
      }}>
        <div style={{
          marginBottom: '25px',
        }}>
          <h2 style={{
            fontSize: `${LAYOUT.titleFontSize}px`,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
          }}>
            BIS Integraciones: <span style={{ color: LAYOUT.primaryColor }}>15 años</span> de innovación
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: `linear-gradient(90deg, ${LAYOUT.primaryColor}, ${LAYOUT.secondaryColor})`,
            borderRadius: '2px',
            marginBottom: '10px',
          }}></div>
          <p style={{
            fontSize: '14px',
            color: '#e0e0ff',
            maxWidth: '700px',
            lineHeight: 1.4,
            margin: 0,
          }}>
            Transformando el panorama energético de Argentina con tecnología de vanguardia y soluciones sostenibles.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          flex: 1,
          marginBottom: '15px',
        }}>
          {/* Columna izquierda */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              height: '100%',
              backdropFilter: 'blur(4px)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: LAYOUT.primaryColor,
                marginBottom: '12px',
                borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
                paddingBottom: '5px',
              }}>
                Nuestra Trayectoria
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaClock size={16} color={LAYOUT.primaryColor} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      15 años de experiencia
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      Especialización en infraestructura e ingeniería de grandes parques solares
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaLightbulb size={16} color={LAYOUT.secondaryColor} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      Diseño e implementación
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      Soluciones integrales para el sector público y privado con enfoque en sostenibilidad
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: 'rgba(139, 92, 246, 0.15)',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaMicrochip size={16} color={LAYOUT.accentColor} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      Transformación digital
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1.4,
                    }}>
                      Facilitando la transición hacia la Generación Distribuida con tecnología de punta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna derecha */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
          }}>
            {/* Imagen superior */}
            <div style={{
              position: 'relative',
              height: '100px',
              overflow: 'hidden',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${LAYOUT.teamImagePath})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}></div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(0deg, rgba(17, 24, 39, 0.8) 0%, rgba(17, 24, 39, 0.4) 50%, rgba(17, 24, 39, 0.2) 100%)',
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                backgroundColor: 'rgba(59, 130, 246, 0.3)',
                backdropFilter: 'blur(4px)',
                padding: '4px 10px',
                borderRadius: '20px',
                fontSize: '11px',
                fontWeight: 'bold',
                color: 'white',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}>
               Building
              </div>
            </div>
            
            {/* Mapa de proyectos */}
            <div style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${LAYOUT.mapImagePath})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                opacity: 0.2,
              }}></div>
              <div style={{
                position: 'relative',
                height: '100%',
                padding: '15px',
              }}>
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: LAYOUT.primaryColor,
                  marginBottom: '10px',
                  borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
                  paddingBottom: '5px',
                }}>
                  Presencia Nacional
                </h3>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: 'rgba(59, 130, 246, 0.15)',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <FaUsers size={16} color={LAYOUT.primaryColor} />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      Impacto en el país
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: '0 0 6px 0',
                      lineHeight: 1.4,
                    }}>
                      Proyectos en más de 12 provincias argentinas
                    </p>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                    }}>
                      {['Buenos Aires', 'Córdoba', 'Mendoza', '+9 más'].map((provincia, index) => (
                        <div key={index} style={{
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          padding: '3px 8px',
                          borderRadius: '20px',
                          fontSize: '10px',
                          color: '#93C5FD',
                        }}>
                          {provincia}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas del pie */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '15px',
          marginTop: 'auto',
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}>
              <FaCheckCircle size={14} color={LAYOUT.primaryColor} />
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: LAYOUT.primaryColor,
                margin: 0,
              }}>
                150+
              </p>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#D1D5DB',
              margin: 0,
            }}>
              Proyectos completados
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}>
              <FaBolt size={14} color={LAYOUT.secondaryColor} />
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: LAYOUT.secondaryColor,
                margin: 0,
              }}>
                250 MW
              </p>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#D1D5DB',
              margin: 0,
            }}>
              Potencia instalada
            </p>
          </div>
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '8px',
            padding: '10px',
            textAlign: 'center',
            backdropFilter: 'blur(4px)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginBottom: '5px',
            }}>
              <FaCity size={14} color={LAYOUT.accentColor} />
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: LAYOUT.accentColor,
                margin: 0,
              }}>
                30+
              </p>
            </div>
            <p style={{
              fontSize: '11px',
              color: '#D1D5DB',
              margin: 0,
            }}>
              Municipios beneficiados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISQuienesSomos;