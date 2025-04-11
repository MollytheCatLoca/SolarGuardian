"use client"

import React from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaGlobe, 
  FaMapMarkerAlt, 
  FaArrowRight,
  FaSolarPanel,
  FaChartLine,
  FaFileContract,
  FaHandshake,
  FaLeaf,
  FaRegLightbulb,
  FaCertificate,
  FaMoneyBillWave
} from "react-icons/fa";

// Pasos del proceso
const procesSteps = [
  {
    title: "Evaluación Inicial",
    description: "Análisis de viabilidad técnica y financiera para emisión de bonos de carbono.",
    icon: <FaRegLightbulb size={18} color="white" />,
    color: "#10B981"
  },
  {
    title: "Estructuración",
    description: "Modelado financiero y preparación de documentación para certificación.",
    icon: <FaFileContract size={18} color="white" />,
    color: "#3B82F6"
  },
  {
    title: "Implementación",
    description: "Desarrollo del parque solar e instalación de sistemas de monitoreo.",
    icon: <FaSolarPanel size={18} color="white" />,
    color: "#8B5CF6"
  },
  {
    title: "Certificación",
    description: "Gestión completa del proceso de emisión y validación de bonos de carbono.",
    icon: <FaCertificate size={18} color="white" />,
    color: "#F59E0B"
  }
];

// Fortalezas del enfoque integral
const integralApproach = [
  {
    category: "Solución Energética",
    description: "Generación solar distribuida con tecnología modular",
    icon: <FaSolarPanel size={16} color="#3B82F6" />,
    color: "#3B82F6",
    benefits: [
      "Sistemas All-in-One preconfigurados",
      "Monitoreo remoto vía SolarGuardian",
      "Instalación rápida y escalable",
      "Operación y mantenimiento incluido"
    ]
  },
  {
    category: "Financiamiento Verde",
    description: "Estructuración y emisión de bonos de carbono",
    icon: <FaMoneyBillWave size={16} color="#10B981" />,
    color: "#10B981",
    benefits: [
      "Reducción de la tasa implícita",
      "Flujo de ingresos por 7 años",
      "Certificación con estándares Verra",
      "Mejora del retorno de inversión"
    ]
  }
];

const CarbonBondContact: React.FC = () => {
  return (
    <div className="carbon-bond-contact" style={{
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
          PRÓXIMOS PASOS
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '30px', // Espacio para el título
        gap: '15px',
      }}>
        {/* Visión Integral 360° */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: '10px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '6px',
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
              Visión Integral 360°
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
            lineHeight: 1,
          }}>
            BIS ofrece una solución completa que integra la tecnología de generación solar con una estrategia financiera basada en bonos de carbono:
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
          }}>
            {integralApproach.map((approach, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `rgba(${approach.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`,
                  border: `1px solid rgba(${approach.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                  borderBottom: `1px solid rgba(${approach.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  paddingBottom: '8px',
                }}>
                  <div style={{
                    backgroundColor: `rgba(${approach.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.2)`,
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {approach.icon}
                  </div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: approach.color,
                      margin: '0 0 2px 0',
                    }}>
                      {approach.category}
                    </h4>
                    <p style={{
                      fontSize: '11px',
                      color: '#D1D5DB',
                      margin: 0,
                    }}>
                      {approach.description}
                    </p>
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '5px',
                }}>
                  {approach.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '5px',
                      }}
                    >
                      <span style={{
                        color: approach.color,
                        fontSize: '12px',
                        lineHeight: 1,
                        marginTop: '1px',
                      }}>
                        ✓
                      </span>
                      <p style={{
                        fontSize: '10px',
                        color: '#E5E7EB',
                        margin: 0,
                        lineHeight: 1.1,
                      }}>
                        {benefit}
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
          padding: '10px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '2px',
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
                  lineHeight: 1,
                  textAlign: 'center',
                }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Banner con CTA */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: '6px 15px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderRadius: '50%',
          }}>
            <FaChartLine size={28} color="#10B981" />
          </div>
          
          <div>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#10B981',
              margin: '0 0 5px 0',
            }}>
              Potencial de Aplicación
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#E5E7EB',
              margin: 0,
              lineHeight: 1.2,
            }}>
              Nuestro modelo es ideal para clientes con capacidad de inversión en energía solar que buscan maximizar 
              el retorno financiero mediante la monetización del impacto ambiental positivo.
            </p>
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
        
          marginBottom: '50px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              padding: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <FaLeaf size={28} color="white" />
            </div>
            
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 0 5px 0',
              }}>
                Impulse su proyecto
              </h3>
              <p style={{
                fontSize: '12px',
                color: 'white',
                margin: 0,
              }}>
                Transforme inversiones solares en oportunidades financieras
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <FaEnvelope size={14} color="white" />
              <p style={{
                fontSize: '12px',
                color: 'white',
                margin: 0,
                fontWeight: 'bold',
              }}>
            contacto@bisintegraciones.com
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
                bisintegraciones.com/energy
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <FaPhone size={14} color="white" />
              <p style={{
                fontSize: '13px',
                color: 'white',
                margin: 0,
              }}>
                +54 911 3407 6585
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBondContact;