"use client"

import React from 'react';
import { 
  FaSolarPanel, 
  FaTools, 
  FaDesktop, 
  FaCertificate, 
  FaHandshake, 
  FaUniversity,
  FaChartLine,
  FaNetworkWired,
  FaClipboardCheck
} from "react-icons/fa";

// Datos de servicios BIS
const bisServices = [
  { 
    id: "development",
    title: "Desarrollo del parque", 
    icon: <FaSolarPanel size={20} color="#10B981" />,
    description: "Diseño e instalación de sistemas solares modulares y escalables.",
  },
  { 
    id: "technology",
    title: "Tecnología para auditoría", 
    icon: <FaNetworkWired size={20} color="#3B82F6" />,
    description: "Smart loggers y sistemas de trazabilidad listos para certificación.",
  },
  { 
    id: "operation",
    title: "Operación y mantenimiento", 
    icon: <FaDesktop size={20} color="#8B5CF6" />,
    description: "Monitoreo continuo vía plataforma SolarGuardian.pro.",
  },
  { 
    id: "bonds",
    title: "Emisión de bonos", 
    icon: <FaCertificate size={20} color="#F59E0B" />,
    description: "Lideramos todo el proceso con consultoras especializadas.",
  },
  { 
    id: "finance",
    title: "Estructuración financiera", 
    icon: <FaUniversity size={20} color="#EC4899" />,
    description: "Acompañamiento en búsqueda de financiamiento y modelado.",
  }
];

// Fases del proyecto
const projectPhases = [
  { text: "Evaluación inicial y viabilidad", color: "#10B981" },
  { text: "Diseño y planificación", color: "#3B82F6" },
  { text: "Instalación y comisionado", color: "#8B5CF6" },
  { text: "Certificación y emisión de bonos", color: "#F59E0B" },
  { text: "Operación y mantenimiento (7+ años)", color: "#EC4899" },
];

const BISStrategicPartner: React.FC = () => {
  return (
    <div className="bis-strategic-partner" style={{
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
        top: '10%',
        right: '5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '10%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      {/* Contenido principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '15px',
        zIndex: 5,
        height: '100%',
      }}>
        {/* Columna izquierda: Título y servicios */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {/* Título flotante moderno */}
          <div style={{
            position: 'relative',
            height: 'auto',
            marginBottom: '5px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.3))',
              paddingLeft: '12px',
              paddingRight: '25px',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
              borderLeft: '3px solid rgba(59, 130, 246, 0.9)',
              display: 'inline-block',
            }}>
              <h2 style={{
                margin: 0,
                padding: 0,
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '0.5px',
              }}>
                BIS COMO PARTNER ESTRATÉGICO
              </h2>
            </div>
          </div>
          
          {/* Introducción */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '15px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}>
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.2)',
                padding: '8px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <FaHandshake size={20} color="#10B981" />
              </div>
              <h3 style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: '#10B981',
                margin: 0,
              }}>
                Solución Integral 360°
              </h3>
            </div>
            
            <p style={{
              fontSize: '13px',
              lineHeight: 1.1,
              color: '#E5E7EB',
              marginBottom: '10px',
            }}>
              BIS ofrece una <strong>solución completa</strong> que integra la tecnología solar All-in-One 
              con la emisión de bonos de carbono, brindando un acompañamiento integral en cada etapa del proyecto.
              Nos encargamos de todo el proceso, desde el desarrollo técnico hasta la monetización del impacto ambiental.
            </p>
            
            <div style={{
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '6px',
              padding: '6px',
            }}>
              <p style={{
                fontSize: '12px',
                color: '#6EE7B7',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <FaClipboardCheck size={14} color="#10B981" />
                <span><strong>Ventaja clave:</strong> El cliente accede a todo el proceso con un único partner, 
                simplificando la implementación y maximizando resultados.</span>
              </p>
            </div>
          </div>
          
          {/* Servicios principales con iconos */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            flex: 1,
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#E5E7EB',
              marginBottom: '5px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(75, 85, 99, 0.4)',
              paddingBottom: '6px',
            }}>
              Servicios Integrados
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              {bisServices.slice(0, 3).map((service) => (
                <div 
                  key={service.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '6px',
                    padding: '6px',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${service.icon.props.color}`,
                  }}
                >
                  <div style={{
                    marginTop: '2px',
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: service.icon.props.color,
                      margin: '0 0 3px 0',
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      fontSize: '11px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1,
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Banner destacado */}
          <div style={{
            background: 'linear-gradient(90deg, #10B981 0%, #3B82F6 100%)',
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            marginBottom: '120px',
            gap: '10px',
          }}>
            <FaChartLine size={24} color="white" />
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                margin: '0 0 3px 0',
              }}>
                SolarGuardian.pro
              </h3>
              <p style={{
                fontSize: '11px',
                color: 'white',
                margin: 0,
                lineHeight: 1,
              }}>
                Plataforma exclusiva para monitoreo y verificación continua, 
                esencial para la validación y certificación de bonos de carbono.
              </p>
            </div>
          </div>
        </div>
        
        {/* Columna derecha: Imagen y servicios adicionales */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {/* Contenedor para imagen */}
          <div style={{
            height: '240px',
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '2px',
            overflow: 'hidden',
          }}>
            {/* Título flotante sobre la imagen */}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              zIndex: 10,
              background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.5), rgba(16, 185, 129, 0.9))',
              padding: '6px 12px',
              borderRadius: '4px',
              backdropFilter: 'blur(4px)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}>
              <h3 style={{
                margin: 0,
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
              }}>
                Acompañamiento Integral
              </h3>
            </div>
            
            {/* Contenedor de la imagen con efectos visuales */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/BIS_integraciones.png")', /* Reemplaza esta URL con la de tu imagen */
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '7px',
              position: 'relative',
            }}>
              {/* Overlay con gradiente para mejorar visibilidad del texto */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(0deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.2) 50%, rgba(17, 24, 39, 0.4) 100%)',
                borderRadius: '7px',
              }}/>
              
              {/* Etiqueta de valor en la parte inferior izquierda */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                <FaHandshake size={12} style={{ marginRight: '5px' }} />
                <span>SOLUCIÓN INTEGRADA</span>
              </div>
            </div>
          </div>
          
          {/* Servicios adicionales */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            flex: 1,
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {bisServices.slice(3, 5).map((service) => (
                <div 
                  key={service.id}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '8px',
                    padding: '8px',
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    borderRadius: '8px',
                    borderLeft: `3px solid ${service.icon.props.color}`,
                  }}
                >
                  <div style={{
                    marginTop: '2px',
                  }}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      color: service.icon.props.color,
                      margin: '0 0 3px 0',
                    }}>
                      {service.title}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1,
                    }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Etapas del proyecto */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '2px',
          }}>
            <h3 style={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#E5E7EB',
              marginBottom: '3px',
              textAlign: 'center',
            }}>
              Fases del Proyecto
            </h3>
            
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2px',
            }}>
              {projectPhases.map((phase, index) => (
                <React.Fragment key={index}>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '15%',
                  }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: `${phase.color}40`,
                      borderRadius: '50%',
                      border: `2px solid ${phase.color}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '4px',
                    }}>
                      <span style={{
                        fontSize: '10px',
                        fontWeight: 'bold',
                        color: phase.color,
                      }}>
                        {index + 1}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '9px',
                      color: '#D1D5DB',
                      margin: 0,
                      textAlign: 'center',
                      lineHeight: 1,
                    }}>
                      {phase.text}
                    </p>
                  </div>
                  
                  {index < projectPhases.length - 1 && (
                    <div style={{
                      width: '10px',
                      height: '1px',
                      backgroundColor: '#4B5563',
                      marginTop: '-15px',
                    }}></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          
          {/* Mensaje llamado a la acción */}
          <div style={{
            backgroundColor: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: '8px',
            marginBottom: '122px',
            padding: '8px',
            lineHeight: 1.1,
          }}>
            <p style={{
              fontSize: '12px',
              color: '#10B981',
              margin: 0,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
              Simplifique su transición energética con un único partner que se encarga de todo el proceso,
              desde la instalación hasta la monetización de los bonos de carbono.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISStrategicPartner;