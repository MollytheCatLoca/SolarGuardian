"use client"

import React from 'react';
import { 
  FaClock, 
  FaLightbulb, 
  FaMicrochip, 
  FaDollarSign,
  FaUsers,
  FaCheckCircle,
  FaBolt,
  FaCity,
  FaGlobeAmericas
} from "react-icons/fa";

// Constants for easy layout adjustment
const LAYOUT = {
  // Dimensions and spacing
  padding: 16,
  titleFontSize: 24,
  
  // Colors and styles
  primaryColor: '#3B82F6', // Blue
  secondaryColor: '#10B981', // Green
  accentColor: '#8B5CF6', // Purple
  
  // Images
  teamImagePath: '/solar-team-sin.jpg',
  mapImagePath: '/BISLogo.svg',
};

// Trayectoria items for easy editing
const TRAYECTORIA_ITEMS = [
  {
    icon: <FaClock size={16} color={LAYOUT.primaryColor} />,
    bgColor: 'rgba(59, 130, 246, 0.15)',
    title: '15 años de experiencia',
    description: 'Referentes en ingeniería e infraestructura energética.'
  },
  {
    icon: <FaLightbulb size={16} color={LAYOUT.secondaryColor} />,
    bgColor: 'rgba(16, 185, 129, 0.15)',
    title: 'Soluciones llave en mano',
    description: 'Diseño e implementación de proyectos para el sector público y privado con impacto sostenible.'
  },
  {
    icon: <FaDollarSign size={16} color={LAYOUT.accentColor} />,
    bgColor: 'rgba(234, 179, 8, 0.15)',
    title: 'Innovación financiera',
    description: 'Pioneros en leasing energético y modelos de inversión para generación distribuida.'
  },
  {
    icon: <FaMicrochip size={16} color={LAYOUT.accentColor} />,
    bgColor: 'rgba(139, 92, 246, 0.15)',
    title: 'Tecnología aplicada',
    description: 'Digitalización del sistema energético con plataformas de monitoreo y control inteligente.'
  }
];


// Geographic coverage data
const GEOGRAPHIC_COVERAGE = {
  argentina: {
    icon: <FaUsers size={16} color={LAYOUT.primaryColor} />,
    bgColor: 'rgba(59, 130, 246, 0.15)',
    title: 'Proyectos en más de 12 provincias argentinas',
    provinces: ['Buenos Aires', 'Córdoba', 'Mendoza', 'Santa Fe', 'Neuquén', '+7 más'],
    tagColor: 'rgba(59, 130, 246, 0.15)',
    textColor: '#93C5FD'
  },
  latam: {
    icon: <FaGlobeAmericas size={16} color={LAYOUT.secondaryColor} />,
    bgColor: 'rgba(16, 185, 129, 0.15)',
    title: 'Expansión a países de Latinoamérica',
    countries: ['Paraguay', 'Colombia', 'Uruguay', 'Perú', 'Ecuador'],
    tagColor: 'rgba(16, 185, 129, 0.15)',
    textColor: '#6EE7B7'
  }
};

// Stats for footer section
const STATS_ITEMS = [
  {
    icon: <FaCheckCircle size={14} color={LAYOUT.primaryColor} />,
    value: '150+',
    label: 'Proyectos completados',
    color: LAYOUT.primaryColor,
    borderColor: 'rgba(59, 130, 246, 0.2)'
  },
  {
    icon: <FaBolt size={14} color={LAYOUT.secondaryColor} />,
    value: '250 MW',
    label: 'Potencia instalada',
    color: LAYOUT.secondaryColor,
    borderColor: 'rgba(16, 185, 129, 0.2)'
  },
  {
    icon: <FaCity size={14} color={LAYOUT.accentColor} />,
    value: '30+',
    label: 'Municipios beneficiados',
    color: LAYOUT.accentColor,
    borderColor: 'rgba(139, 92, 246, 0.2)'
  }
];

const BISQuienesSomos: React.FC = () => {
  return (
    <div className="pdf-bis-quienes-somos" style={{
      height: '100%',
      width: '1400px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827', // Consistent dark background
      color: 'white',
      padding: `${LAYOUT.padding}px`,
      maxWidth: '270mm',
      maxHeight: '160mm'
    }}>
      {/* Background design elements */}
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
      
      {/* Subtle grid pattern with blurred edges */}
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

      {/* Floating title */}
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
          fontSize: '12px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
        }}>
          BIS INTEGRACIONES
        </h2>
      </div>
      
      {/* Main content */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '35px', // Space for title
      }}>
        <div style={{
          marginBottom: '15px',
        }}>
          <h2 style={{
            fontSize: `${LAYOUT.titleFontSize}px`,
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
          }}>
          15 años <span style={{ color: LAYOUT.primaryColor }}>de Innovación</span> 
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: `linear-gradient(90deg, ${LAYOUT.primaryColor}, ${LAYOUT.secondaryColor})`,
            borderRadius: '2px',
            marginBottom: '20px',
          }}></div>
          <p style={{
            fontSize: '14px',
            color: '#e0e0ff',
            maxWidth: '700px',
            lineHeight: 1.4,
            margin: 0,
          }}>
          Somos protagonistas de la transición energética en LATAM con soluciones inteligentes y sustentables.
        </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '15px',
          flex: 1,
          marginBottom: '15px',
        }}>
          {/* Left column */}
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
                {/* Using map to render trayectoria items */}
                {TRAYECTORIA_ITEMS.map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      marginRight: '12px',
                      marginTop: '3px',
                      backgroundColor: item.bgColor,
                      padding: '8px',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#E5E7EB',
                        margin: '0 0 3px 0',
                      }}>
                        {item.title}
                      </h4>
                      <p style={{
                        fontSize: '12px',
                        color: '#D1D5DB',
                        margin: 0,
                        lineHeight: 1.4,
                      }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            {/* Top image */}
            <div style={{
              position: 'relative',
              height: '170px',
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
            
            {/* Coverage map section */}
            <div style={{
              flex: 1,
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '10px',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
              backdropFilter: 'blur(8px)',
            }}>
              <div style={{
                position: 'absolute',
                top: '10%',
                left: '10%',
                width: '10%',
                height: '20%',
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
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: LAYOUT.primaryColor,
                  marginBottom: '10px',
                  borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
                  paddingBottom: '5px',
                }}>
                  Cobertura Geográfica
                </h3>
                
                {/* Argentina Section - Using constants */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: GEOGRAPHIC_COVERAGE.argentina.bgColor,
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {GEOGRAPHIC_COVERAGE.argentina.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      {GEOGRAPHIC_COVERAGE.argentina.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                      marginBottom: '8px',
                    }}>
                      {GEOGRAPHIC_COVERAGE.argentina.provinces.map((provincia, index) => (
                        <div key={index} style={{
                          backgroundColor: GEOGRAPHIC_COVERAGE.argentina.tagColor,
                          padding: '3px 8px',
                          borderRadius: '20px',
                          fontSize: '8px',
                          color: GEOGRAPHIC_COVERAGE.argentina.textColor,
                        }}>
                          {provincia}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Latin America Section - Using constants */}
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '12px',
                    marginTop: '3px',
                    backgroundColor: GEOGRAPHIC_COVERAGE.latam.bgColor,
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {GEOGRAPHIC_COVERAGE.latam.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 3px 0',
                    }}>
                      {GEOGRAPHIC_COVERAGE.latam.title}
                    </h4>
                    
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '5px',
                    }}>
                      {GEOGRAPHIC_COVERAGE.latam.countries.map((pais, index) => (
                        <div key={index} style={{
                          backgroundColor: GEOGRAPHIC_COVERAGE.latam.tagColor,
                          padding: '3px 8px',
                          borderRadius: '20px',
                          fontSize: '8px',
                          color: GEOGRAPHIC_COVERAGE.latam.textColor,
                        }}>
                          {pais}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer statistics - Using map from constants */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '12px',
          marginTop: 'auto',
        }}>
          {STATS_ITEMS.map((stat, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                border: `1px solid ${stat.borderColor}`,
                borderRadius: '8px',
                padding: '10px',
                textAlign: 'center',
                backdropFilter: 'blur(4px)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '5px',
              }}>
                {stat.icon}
                <p style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: stat.color,
                  margin: 0,
                }}>
                  {stat.value}
                </p>
              </div>
              <p style={{
                fontSize: '11px',
                color: '#D1D5DB',
                margin: 0,
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BISQuienesSomos;