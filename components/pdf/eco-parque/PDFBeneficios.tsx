"use client"

import React from 'react';
import { 
  FaLeaf, 
  FaMoneyBillWave, 
  FaTools, 
  FaUsers, 
  FaWifi,
  FaSolarPanel,
  FaLightbulb,
  FaChartLine,
  FaBuilding,
  FaMapMarkedAlt,
  FaClock
} from "react-icons/fa";

// Variable para ajustar el espaciado vertical - modificar según necesidad (0.8 - 1.2)
const verticalSpacingFactor = 1.35; // Incremento del 10% en el espaciado

// Función para calcular espaciado basado en el factor
const spacing = (baseSize: number) => {
  return Math.round(baseSize * verticalSpacingFactor);
};

// Beneficios principales
const mainBenefits = [
  {
    title: "Energía Limpia y Reducción de Costos",
    icon: <FaLeaf size={14} color="#10B981" />,
    color: "#10B981",
    points: [
      "Minimiza compra de energía para iluminación y servicios urbanos",
      "Imagen renovada por invertir en innovación verde",
      "Reducción de emisiones de CO2 y objetivos sostenibles"
    ]
  },
  {
    title: "Implementación Simplificada",
    icon: <FaTools size={14} color="#3B82F6" />,
    color: "#3B82F6",
    points: [
      "Formato All-in-One reduce complejidades de obra civil",
      "Financiamiento por leasing con bajo pago inicial",
      "Instalación rápida con mínima intervención"
    ]
  },
  {
    title: "Mayor Atractivo y Participación",
    icon: <FaUsers size={14} color="#8B5CF6" />,
    color: "#8B5CF6",
    points: [
      "WiFi, cargadores y mobiliario aumenta afluencia",
      "Educación ambiental con informes en tiempo real",
      "Espacios modernos y funcionales para la comunidad"
    ]
  },
  {
    title: "Mantenimiento Reducido",
    icon: <FaTools size={14} color="#F59E0B" />,
    color: "#F59E0B",
    points: [
      "SolarGuardian Pro vigila y alerta fallas",
      "Equipos bajo garantía y servicio preventivo opcional",
      "Menor vandalismo gracias al monitoreo continuo"
    ]
  }
];

// Configuraciones por escenario
const configScenarios = [
  {
    title: "Plaza Mediana (Nano 50 kW)",
    icon: <FaMapMarkedAlt size={14} />,
    color: "#10B981",
    specs: [
      { label: "Objetivo", value: "Iluminación LED y servicios básicos" },
      { label: "Elementos", value: "Container 50kW, WiFi, bancos, señalética" },
      { label: "Área", value: "500-1000m²" },
      { label: "Tiempo", value: "24-48h" }
    ]
  },
  {
    title: "Parque Urbano (Mini 100 kW)",
    icon: <FaMapMarkedAlt size={14} />,
    color: "#3B82F6",
    specs: [
      { label: "Objetivo", value: "Múltiples servicios y zonas recreativas" },
      { label: "Elementos", value: "Container 100kW, batería, iluminación, pérgola" },
      { label: "Área", value: ">1000m²" },
      { label: "Tiempo", value: "48-72h" }
    ]
  }
];

const PDFBeneficios: React.FC = () => {
  return (
    <div className="pdf-beneficios" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827',
      color: 'white',
      padding: '12px',
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      {/* Título flotante */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '0',
        zIndex: 10,
        background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.9), rgba(16, 185, 129, 0.3))',
        paddingLeft: '15px',
        paddingRight: '25px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid rgba(59, 130, 246, 0.9)',
      }}>
        <h2 style={{
          margin: 0,
          padding: 0,
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
        }}>
          BENEFICIOS PARA MUNICIPIOS
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: spacing(30), // Espacio para el título, ajustable
        gap: spacing(10), // Espacio entre secciones, ajustable
      }}>
        {/* Grid de beneficios principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: spacing(10), // Espacio entre cards, ajustable
        }}>
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                border: '1px solid rgba(75, 85, 99, 0.4)',
                borderLeft: `3px solid ${benefit.color}`,
                borderRadius: '8px',
                padding: spacing(10), // Padding interno, ajustable
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: spacing(6), // Espacio después del título, ajustable
              }}>
                <div style={{
                  backgroundColor: `rgba(${benefit.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.2)`,
                  padding: '6px',
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {React.cloneElement(benefit.icon, { size: 14 })}
                </div>
                
                <h3 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: benefit.color,
                  margin: 0,
                }}>
                  {benefit.title}
                </h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing(3), // Espacio entre puntos, ajustable
              }}>
                {benefit.points.map((point, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '5px',
                    }}
                  >
                    <span style={{
                      color: benefit.color,
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
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Configuraciones por escenario */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: spacing(10), // Padding interno, ajustable
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <h3 style={{
            fontSize: '13px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: spacing(8), // Espacio después del título, ajustable
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '3px',
          }}>
            Configuraciones por Escenario
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: spacing(10), // Espacio entre configuraciones, ajustable
          }}>
            {configScenarios.map((scenario, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `rgba(${scenario.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`,
                  border: `1px solid rgba(${scenario.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  borderRadius: '6px',
                  padding: spacing(8), // Padding interno, ajustable
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginBottom: spacing(5), // Espacio después del título, ajustable
                  borderBottom: `1px solid rgba(${scenario.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
                  paddingBottom: '4px',
                }}>
                  <div style={{
                    backgroundColor: 'rgba(31, 41, 55, 0.5)',
                    padding: '4px',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    {React.cloneElement(scenario.icon, { color: scenario.color, size: 12 })}
                  </div>
                  
                  <h4 style={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: scenario.color,
                    margin: 0,
                  }}>
                    {scenario.title}
                  </h4>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr',
                  gap: `${spacing(2)}px ${spacing(5)}px`, // Espaciado entre filas y columnas, ajustable
                  lineHeight: verticalSpacingFactor.toString(), // Ajusta la altura de línea según el factor
                }}>
                  {scenario.specs.map((spec, idx) => (
                    <React.Fragment key={idx}>
                      <p style={{
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#D1D5DB',
                        margin: 0,
                      }}>
                        {spec.label}:
                      </p>
                      <p style={{
                        fontSize: '9px',
                        color: '#E5E7EB',
                        margin: 0,
                      }}>
                        {spec.value}
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* ROI y estadísticas */}
        <div style={{
          background: 'linear-gradient(to right, rgba(16, 185, 129, 0.8), rgba(59, 130, 246, 0.8))',
          borderRadius: '8px',
          padding: `${spacing(8)}px ${spacing(12)}px`, // Padding interno, ajustable
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: spacing(10), // Espacio entre ícono y texto, ajustable
            maxWidth: '140px',
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '50%',
              width: spacing(28), // Tamaño del círculo, ajustable
              height: spacing(28), // Tamaño del círculo, ajustable
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <FaChartLine size={14} color="white" />
            </div>
            
            <div>
              <h3 style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
                marginBottom: '1px',
              }}>
                ROI y Sostenibilidad
              </h3>
              
              <p style={{
                fontSize: '9px',
                color: 'white',
                margin: 0,
                lineHeight: 1.2,
              }}>
                Retorno en 3-5 años 
              </p>
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            gap: spacing(8), // Espacio entre tarjetas, ajustable
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: spacing(5), // Padding interno, ajustable
              borderRadius: '6px',
              minWidth: '60px',
            }}>
              <FaSolarPanel size={12} color="white" />
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                margin: `${spacing(2)}px 0`, // Margen vertical, ajustable
              }}>
                -70%
              </p>
              <p style={{
                fontSize: '8px',
                color: 'white',
                margin: 0,
                textAlign: 'center',
              }}>
                Costos energéticos
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: spacing(5), // Padding interno, ajustable
              borderRadius: '6px',
              minWidth: '60px',
            }}>
              <FaLightbulb size={12} color="white" />
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                margin: `${spacing(2)}px 0`, // Margen vertical, ajustable
              }}>
                +50%
              </p>
              <p style={{
                fontSize: '8px',
                color: 'white',
                margin: 0,
                textAlign: 'center',
              }}>
                Afluencia
              </p>
            </div>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: spacing(5), // Padding interno, ajustable
              borderRadius: '6px',
              minWidth: '60px',
            }}>
              <FaLeaf size={12} color="white" />
              <p style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                margin: `${spacing(2)}px 0`, // Margen vertical, ajustable
              }}>
                85t
              </p>
              <p style={{
                fontSize: '8px',
                color: 'white',
                margin: 0,
                textAlign: 'center',
              }}>
                CO₂ evitado/año
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFBeneficios;