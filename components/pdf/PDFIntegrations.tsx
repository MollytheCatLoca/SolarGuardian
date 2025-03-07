// components/pdf/PDFIntegrations.tsx
import React from 'react';
import { FaPlug, FaCheck, FaExchangeAlt, FaHandshake, FaCogs } from 'react-icons/fa';

// Datos de integraciones por categoría
const integrationData = [
  {
    category: "Inversores",
    icon: <FaPlug size={14} color="#4ade80" />,
    logos: [
      { src: "/logos/huawei_logo_PNG1.png", alt: "Huawei", height: 24 },
      { src: "/logos/sma-logo.svg", alt: "SMA", height: 22 },
      { src: "/logos/fronius-logo.png", alt: "Fronius", height: 22 }
    ]
  },
  {
    category: "Control",
    icon: <FaExchangeAlt size={14} color="#60a5fa" />,
    logos: [
      { src: "/logos/schneider-logo.svg", alt: "Schneider Electric", height: 24 },
      { src: "/logos/siemens-logo.svg", alt: "Siemens", height: 22 },
      { src: "/Abb_logo_PNG6.png", alt: "ABB", height: 24 }
    ]
  },
  {
    category: "Monitoreo",
    icon: <FaCogs size={14} color="#f97316" />,
    logos: [
      { src: "/icons/SolarEdge_logo.svg", alt: "SolarEdge", height: 24 }
    ]
  }
];

// Beneficios de integración más concisos
const integrationBenefits = [
  "Implementación en menos de 48 horas",
  "Datos unificados en un solo dashboard",
  "Actualización continua para nuevos modelos",
  "API disponible para desarrolladores"
];

const PDFIntegrations: React.FC = () => {
  return (
    <div className="pdf-integrations" style={{
      padding: '5px',
    }}>
      {/* Título con diseño minimalista */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '10px',
      }}>
        <div style={{
          height: '1px',
          width: '40px',
          background: 'linear-gradient(90deg, rgba(138, 58, 180, 0.01), rgba(138, 58, 180, 0.5))',
          marginRight: '15px',
        }}></div>
        <h2 style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: 'white',
          margin: 0,
        }}>
          Integraciones <span style={{ color: '#8a3ab4' }}>Empresariales</span>
        </h2>
        <div style={{
          height: '1px',
          width: '40px',
      
          background: 'linear-gradient(90deg, rgba(138, 58, 180, 0.5), rgba(138, 58, 180, 0.01))',
          marginLeft: '15px',
        }}></div>
      </div>
      
      {/* Subtítulo más conciso */}
      <p style={{
        fontSize: '12px',
        color: '#d1d5db',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 10px',
      }}>
        SolarGuardian Pro se integra con los principales fabricantes de equipos para parques solares
      </p>
      
      {/* Layout principal más apaisado */}
      <div style={{
        display: 'flex',
        gap: '15px',
        marginTop: '100px',
      }}>
        {/* Panel principal: BIS All-in-One destacado */}
        <div style={{
          flex: '1.2',
          background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.4), rgba(31, 41, 55, 0.7))',
          borderRadius: '10px',
          padding: '12px',
          border: '1px solid rgba(138, 58, 180, 0.2)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Elementos decorativos de fondo */}
          <div style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(138, 58, 180, 0.05), rgba(0, 0, 0, 0))',
            top: '-50px',
            right: '-50px',
            zIndex: 0,
          }}></div>
          <div style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(67, 97, 238, 0.05), rgba(0, 0, 0, 0))',
            bottom: '-30px',
            left: '-30px',
            zIndex: 0,
          }}></div>
          
          {/* Contenido */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px',
            marginBottom: '10px',
            position: 'relative',
            zIndex: 2,
          }}>
            <img 
              src="/BISLogo.svg" 
              alt="BIS Integraciones" 
              style={{ 
                height: '45px',
                opacity: 0.95,
              }} 
            />
            <div style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                marginBottom: '2px',
              }}>
                BIS <span style={{ color: '#8a3ab4' }}>All-in-One</span> Solution
              </h3>
              <p style={{
                fontSize: '11px',
                color: '#d1d5db',
                margin: 0,
              }}>
                Una plataforma única para todas sus necesidades de monitoreo y control
              </p>
            </div>
          </div>
          
          {/* Beneficios de integración */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            marginBottom: '5px',
            position: 'relative',
            zIndex: 2,
          }}>
            {integrationBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(138, 58, 180, 0.15)',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  minWidth: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FaCheck size={10} color="#8a3ab4" />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#e5e7eb',
                  margin: 0,
                }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
          
          {/* Etiqueta de solución completa */}
          <div style={{
            backgroundColor: 'rgba(138, 58, 180, 0.15)',
            borderRadius: '6px',
            padding: '6px 10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            width: 'fit-content',
            margin: '0 auto',
            position: 'relative',
            zIndex: 2,
          }}>
            <FaHandshake size={12} color="#8a3ab4" />
            <p style={{
              fontSize: '10px',
              fontWeight: 'bold',
              color: '#8a3ab4',
              margin: 0,
            }}>
              Compatible con +20 fabricantes líderes
            </p>
          </div>
        </div>
        
        {/* Panel de categorías: Más horizontal y compacto */}
        <div style={{
          flex: '2',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <div style={{
            display: 'flex',
            gap: '10px',
            height: '100%',
          }}>
            {integrationData.map((category, idx) => (
              <div 
                key={idx}
                style={{
                  flex: 1,
                  background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.8))',
                  borderRadius: '8px',
                  border: '1px solid rgba(75, 85, 99, 0.2)',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: '8px',
                }}>
                  <div style={{
                    background: 'rgba(138, 58, 180, 0.1)',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(138, 58, 180, 0.15)',
                  }}>
                    {category.icon}
                  </div>
                  <h3 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 0,
                  }}>
                    {category.category}
                  </h3>
                </div>
                
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  gap: '8px',
                  flex: 1,
                }}>
                  {category.logos.map((logo, logoIdx) => (
                    <div 
                      key={logoIdx} 
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(17, 24, 39, 0.6)',
                        borderRadius: '6px',
                        padding: '8px',
                        flex: 1,
                        border: '1px solid rgba(138, 58, 180, 0.05)',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02), rgba(31, 41, 55, 0.5))',
                        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
                      }}
                    >
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        style={{ 
                          height: `${logo.height}px`,
                          maxWidth: '100%',
                          opacity: 0.85,
                          filter: 'grayscale(15%)',
                        }} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Nota sobre integraciones personalizadas */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(17, 24, 39, 0.5), rgba(31, 41, 55, 0.8))',
            borderRadius: '8px',
            border: '1px solid rgba(75, 85, 99, 0.2)',
            padding: '8px 15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <p style={{
              fontSize: '10px',
              color: '#d1d5db',
              margin: 0,
            }}>
              ¿No encuentra su tecnología? Contáctenos para discutir integraciones personalizadas.
            </p>
            <div style={{
              backgroundColor: 'rgba(138, 58, 180, 0.1)',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '10px',
              fontWeight: 'bold',
              color: '#8a3ab4',
            }}>
              API ABIERTA
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFIntegrations;