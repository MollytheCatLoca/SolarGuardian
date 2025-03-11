"use client"

import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaSolarPanel,
  FaCheckCircle,
  FaTools,
  FaFileContract,
  FaHandshake,
  FaLeaf,
  FaBuilding,
  FaTree,
  FaCity
} from "react-icons/fa";

// Pasos del proceso
const procesSteps = [
  {
    title: "Consulta Inicial",
    description: "Contáctenos para una evaluación sin compromiso de las necesidades de su espacio público.",
    icon: <FaPhone size={18} color="white" />,
    color: "#10B981"
  },
  {
    title: "Visita Técnica",
    description: "Nuestros expertos evaluarán el espacio y realizarán un dimensionamiento personalizado.",
    icon: <FaTools size={18} color="white" />,
    color: "#3B82F6"
  },
  {
    title: "Propuesta Personalizada",
    description: "Recibirá una configuración ajustada a sus necesidades con opciones de financiamiento.",
    icon: <FaFileContract size={18} color="white" />,
    color: "#8B5CF6"
  },
  {
    title: "Implementación Rápida",
    description: "Desde la aprobación, su Eco-Parque estará operativo en 4-6 semanas.",
    icon: <FaHandshake size={18} color="white" />,
    color: "#F59E0B"
  }
];

// Fortalezas de las empresas
const companyStrengths = [
  {
    company: "BIS Integraciones",
    description: "Especialistas en soluciones de energía renovable",
    icon: <FaSolarPanel size={16} color="#3B82F6" />,
    color: "#3B82F6",
    strengths: [
      "Sistemas fotovoltaicos avanzados",
      "Almacenamiento energético",
      "Monitoreo remoto SolarGuardian",
      "Optimización de consumo"
    ]
  },
  {
    company: "Grupo Lumbrera",
    description: "Especialistas en desarrollo de espacios públicos",
    icon: <FaTree size={16} color="#10B981" />,
    color: "#10B981",
    strengths: [
      "Diseño de paisajes urbanos",
      "Construcción sostenible",
      "Mobiliario urbano innovador",
      "Experiencia en obra pública"
    ]
  }
];

const PDFContacto: React.FC = () => {
  return (
    <div className="pdf-contacto" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827',
      color: 'white',
      padding: '15px',
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
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
        paddingTop: '8px',
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
          INICIE SU PROYECTO
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '35px', // Espacio para el título
        gap: '15px',
      }}>
        {/* Alianza estratégica */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '10px',
          }}>
            <div style={{
              height: '1px',
              backgroundColor: 'rgba(75, 85, 99, 0.4)',
              flex: 1,
            }}></div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
            }}>
              Alianza Estratégica
            </h3>
            <div style={{
              height: '1px',
              backgroundColor: 'rgba(75, 85, 99, 0.4)',
              flex: 1,
            }}></div>
          </div>
          
          <p style={{
            fontSize: '12px',
            color: '#E5E7EB',
            textAlign: 'center',
            margin: '0 0 15px 0',
            lineHeight: 1.4,
          }}>
            Este proyecto innovador surge de la colaboración natural entre dos empresas líderes en sus respectivos campos:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '15px',
          }}>
            {companyStrengths.map((company, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `rgba(${company.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`,
                  border: `1px solid rgba(${company.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  borderRadius: '8px',
                  padding: '12px',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '8px',
                  borderBottom: `1px solid rgba(${company.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  paddingBottom: '8px',
                }}>
                  <div style={{
                    backgroundColor: `rgba(${company.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.2)`,
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {company.icon}
                  </div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: company.color,
                      margin: '0 0 2px 0',
                    }}>
                      {company.company}
                    </h4>
                    <p style={{
                      fontSize: '11px',
                      color: '#D1D5DB',
                      margin: 0,
                    }}>
                      {company.description}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '5px',
                }}>
                  {company.strengths.map((strength, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '5px',
                      }}
                    >
                      <span style={{
                        color: company.color,
                        fontSize: '12px',
                        lineHeight: 1,
                        marginTop: '2px',
                      }}>
                        ✓
                      </span>
                      <p style={{
                        fontSize: '10px',
                        color: '#E5E7EB',
                        margin: 0,
                        lineHeight: 1.3,
                      }}>
                        {strength}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Proceso de implementación */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '12px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '5px',
          }}>
            Proceso de Implementación
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
          }}>
            {procesSteps.map((step, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(31, 41, 55, 0.5)',
                  border: '1px solid rgba(75, 85, 99, 0.4)',
                  borderTop: `3px solid ${step.color}`,
                  borderRadius: '8px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                }}
              >
                {index < procesSteps.length - 1 && (
                  <div style={{
                    position: 'absolute',
                    top: '25px',
                    right: '-13px',
                    color: '#6B7280',
                    zIndex: 2,
                  }}>
                    <FaArrowRight />
                  </div>
                )}
                
                <div style={{
                  backgroundColor: step.color,
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                  alignSelf: 'center',
                }}>
                  {React.cloneElement(step.icon, { size: 15 })}
                </div>
                
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: step.color,
                  margin: '0 0 5px 0',
                  textAlign: 'center',
                }}>
                  {step.title}
                </h4>
                
                <p style={{
                  fontSize: '9px',
                  color: '#D1D5DB',
                  margin: 0,
                  lineHeight: 1.3,
                  textAlign: 'center',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Información de contacto */}
        <div style={{
          background: 'linear-gradient(to right, rgba(59, 130, 246, 0.8), rgba(16, 185, 129, 0.8))',
          borderRadius: '8px',
          padding: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          marginTop: 'auto',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaCity size={28} color="white" />
            </div>
            
            <div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 0 5px 0',
              }}>
                Contáctenos
              </h3>
              <p style={{
                fontSize: '14px',
                color: 'white',
                margin: 0,
              }}>
                Transformemos juntos sus espacios públicos
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <FaEnvelope size={14} color="white" />
              <p style={{
                fontSize: '13px',
                color: 'white',
                margin: 0,
                fontWeight: 'bold',
              }}>
                contact@bisintegraciones.com
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <FaGlobe size={14} color="white" />
              <p style={{
                fontSize: '13px',
                color: 'white',
                margin: 0,
                fontWeight: 'bold',
              }}>
                bisintegraciones.com/contacto
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <FaMapMarkerAlt size={14} color="white" />
              <p style={{
                fontSize: '13px',
                color: 'white',
                margin: 0,
              }}>
                Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFContacto;