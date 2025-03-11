"use client"

import React from 'react';
import { 
  FaSolarPanel, 
  FaBolt, 
  FaChartLine, 
  FaMoneyBillWave, 
  FaClock, 
  FaLeaf,
  FaBuilding,
  FaBloggerB,
  FaWifi,
  FaMobileAlt,
  FaWater
} from "react-icons/fa";

// Datos para la comparación
const comparisonData = [
  { 
    feature: "Capacidad de generación", 
    nano: "50kW", 
    mini: "100kW"
  },
  { 
    feature: "Espacio requerido", 
    nano: "500m²", 
    mini: "1000m²"
  },
  { 
    feature: "Tamaño de plaza ideal", 
    nano: "Mediana", 
    mini: "Grande"
  },
  { 
    feature: "Tiempo de instalación", 
    nano: "7-15 dias", 
    mini: "15-30 dias"
  },
  { 
    feature: "Inversión aproximada", 
    nano: "U$D 100K", 
    mini: "U$D 150K"
  },
  { 
    feature: "Retorno de inversión", 
    nano: "3-4 años", 
    mini: "4-5 años"
  }
];

// Datos para comparativa de servicios
const serviceComparisonData = [
  {
    service: "Iluminación LED",
    nano: "Parcial (8-12)",
    mini: "Total (15-25)",
    icon: <FaBloggerB size={14} />
  },
  {
    service: "WiFi público",
    nano: "Moderado",
    mini: "Alto alcance",
    icon: <FaWifi size={14} />
  },
  {
    service: "Puntos de carga",
    nano: "Básicos (2-4)",
    mini: "Extendidos (5-10)",
    icon: <FaMobileAlt size={14} />
  },
  {
    service: "Hidratación",
    nano: "Opcional",
    mini: "Incluido",
    icon: <FaWater size={14} />
  }
];

// Recomendaciones específicas
const recommendations = [
  {
    type: "NANO PARQUE (50kW)",
    ideal: [
      "Plazas barriales",
      "Presupuesto limitado",
      "Proyectos piloto",
      "Menor afluencia"
    ],
    color: "#10B981"
  },
  {
    type: "MINI PARQUE (100kW)",
    ideal: [
      "Plazas céntricas",
      "Alta concurrencia",
      "Mayor demanda",
      "Múltiples servicios"
    ],
    color: "#3B82F6"
  }
];

const PDFParqueComparison: React.FC = () => {
  return (
    <div className="pdf-parque-comparison" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827',
      color: 'white',
      padding: '10px',
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '10%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      {/* Título */}
      <div style={{
        textAlign: 'center',
        marginBottom: '10px',
        zIndex: 5,
      }}>
        <h2 style={{
          fontSize: '18px',
          fontWeight: 'bold',
          color: 'white',
          margin: 0,
          padding: 0,
        }}>
          Comparativa: Mini vs Nano Parque
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
        zIndex: 5,
      }}>
        {/* Columna izquierda: Tabla comparativa principal */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {/* Cabeceras de parques */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '8px',
          }}>
            <div style={{
              padding: '5px',
            }}></div>
            <div style={{
              background: 'linear-gradient(145deg, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.1))',
              borderRadius: '6px',
              padding: '5px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
            }}>
              <FaSolarPanel size={16} color="#10B981" />
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '11px', color: '#10B981' }}>
                NANO (50kW)
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.3), rgba(59, 130, 246, 0.1))',
              borderRadius: '6px',
              padding: '5px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2px',
            }}>
              <FaSolarPanel size={16} color="#3B82F6" />
              <p style={{ margin: 0, fontWeight: 'bold', fontSize: '11px', color: '#3B82F6' }}>
                MINI (100kW)
              </p>
            </div>
          </div>
          
          {/* Tabla de características */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '8px',
          }}>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '3px',
            }}>
              Características Técnicas y Económicas
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              {comparisonData.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr',
                    borderBottom: index < comparisonData.length - 1 ? '1px solid rgba(75, 85, 99, 0.2)' : 'none',
                    paddingBottom: '4px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    paddingRight: '5px',
                  }}>
                    <div style={{
                      backgroundColor: '#374151',
                      borderRadius: '3px',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {index === 0 ? <FaBolt size={8} color="#D1D5DB" /> : 
                       index === 1 ? <FaBuilding size={8} color="#D1D5DB" /> :
                       index === 2 ? <FaLeaf size={8} color="#D1D5DB" /> :
                       index === 3 ? <FaClock size={8} color="#D1D5DB" /> :
                       index === 4 ? <FaMoneyBillWave size={8} color="#D1D5DB" /> :
                       <FaChartLine size={8} color="#D1D5DB" />}
                    </div>
                    <p style={{
                      fontSize: '10px',
                      color: '#E5E7EB',
                      margin: 0,
                    }}>
                      {item.feature}
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '3px',
                    padding: '2px 4px',
                    fontSize: '9px',
                    color: '#10B981',
                    fontWeight: index === 4 || index === 5 ? 'bold' : 'normal',
                    textAlign: 'center',
                  }}>
                    {item.nano}
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '3px',
                    padding: '2px 4px',
                    fontSize: '9px',
                    color: '#3B82F6',
                    fontWeight: index === 0 ? 'bold' : 'normal',
                    textAlign: 'center',
                  }}>
                    {item.mini}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Tabla de servicios */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '8px',
          }}>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '3px',
            }}>
              Servicios Soportados
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}>
              {serviceComparisonData.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr 1fr',
                    borderBottom: index < serviceComparisonData.length - 1 ? '1px solid rgba(75, 85, 99, 0.2)' : 'none',
                    paddingBottom: '4px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    paddingRight: '5px',
                  }}>
                    <div style={{
                      backgroundColor: '#374151',
                      borderRadius: '3px',
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      {React.cloneElement(item.icon, { size: 8 })}
                    </div>
                    <p style={{
                      fontSize: '10px',
                      color: '#E5E7EB',
                      margin: 0,
                    }}>
                      {item.service}
                    </p>
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(16, 185, 129, 0.1)',
                    borderRadius: '3px',
                    padding: '2px 4px',
                    fontSize: '9px',
                    color: index === 3 && item.nano.includes('Op') ? '#9CA3AF' : '#10B981',
                    textAlign: 'center',
                  }}>
                    {item.nano}
                  </div>
                  
                  <div style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderRadius: '3px',
                    padding: '2px 4px',
                    fontSize: '9px',
                    color: '#3B82F6',
                    textAlign: 'center',
                  }}>
                    {item.mini}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Estrategias de implementación compactas */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '6px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 4px 0',
              textAlign: 'center',
            }}>
              Estrategias de Implementación
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '4px',
            }}>
              <div style={{
                backgroundColor: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '4px',
                padding: '4px',
                border: '1px solid rgba(59, 130, 246, 0.2)',
              }}>
                <h4 style={{
                  fontSize: '9px',
                  fontWeight: 'bold',
                  color: '#3B82F6',
                  margin: '0 0 2px 0',
                }}>
                  Integral
                </h4>
                <p style={{
                  fontSize: '8px',
                  color: '#D1D5DB',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Mini Parques en plazas principales, máximo impacto inicial.
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(16, 185, 129, 0.05)',
                borderRadius: '4px',
                padding: '4px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}>
                <h4 style={{
                  fontSize: '9px',
                  fontWeight: 'bold',
                  color: '#10B981',
                  margin: '0 0 2px 0',
                }}>
                  Escalonado
                </h4>
                <p style={{
                  fontSize: '8px',
                  color: '#D1D5DB',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Nano Parques múltiples, expansión progresiva.
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(139, 92, 246, 0.05)',
                borderRadius: '4px',
                padding: '4px',
                border: '1px solid rgba(139, 92, 246, 0.2)',
              }}>
                <h4 style={{
                  fontSize: '9px',
                  fontWeight: 'bold',
                  color: '#8B5CF6',
                  margin: '0 0 2px 0',
                }}>
                  Híbrido
                </h4>
                <p style={{
                  fontSize: '8px',
                  color: '#D1D5DB',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Mini en centro, Nano en barrios, según necesidades.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Columna derecha: Recomendaciones y gráfico */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          {/* Imágenes de los parques */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}>
            <div style={{
              backgroundImage: 'url(/nano-parque.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90px',
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.7))',
              }}/>
              <div style={{
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '9px',
                fontWeight: 'bold',
                color: 'white',
              }}>
                Nano Parque
              </div>
            </div>
            
            <div style={{
              backgroundImage: 'url(/mini-parque.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '90px',
              borderRadius: '6px',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.1), rgba(17, 24, 39, 0.7))',
              }}/>
              <div style={{
                position: 'absolute',
                bottom: '5px',
                left: '5px',
                backgroundColor: 'rgba(59, 130, 246, 0.9)',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '9px',
                fontWeight: 'bold',
                color: 'white',
              }}>
                Mini Parque
              </div>
            </div>
          </div>
          
          {/* Recomendaciones */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '8px',
            flex: 1,
          }}>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '6px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              paddingBottom: '3px',
            }}>
              Recomendaciones de Aplicación
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {recommendations.map((rec, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: `rgba(${rec.color === '#10B981' ? '16, 185, 129' : '59, 130, 246'}, 0.1)`,
                    border: `1px solid rgba(${rec.color === '#10B981' ? '16, 185, 129' : '59, 130, 246'}, 0.3)`,
                    borderRadius: '6px',
                    padding: '5px',
                  }}
                >
                  <h4 style={{
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: rec.color,
                    marginTop: 0,
                    marginBottom: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}>
                    <FaSolarPanel size={10} color={rec.color} />
                    {rec.type}
                  </h4>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '2px 8px',
                  }}>
                    {rec.ideal.map((item, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '3px',
                        }}
                      >
                        <div style={{
                          minWidth: '6px',
                          height: '6px',
                          backgroundColor: rec.color,
                          borderRadius: '1px',
                          marginTop: '4px',
                        }}></div>
                        <p style={{
                          fontSize: '9px',
                          color: '#E5E7EB',
                          margin: 0,
                        }}>
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Diagrama visual de escala */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '8px',
          }}>
            <h3 style={{
              fontSize: '11px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '5px',
              textAlign: 'center',
            }}>
              Escalabilidad y Proporción
            </h3>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '5px',
              gap: '20px',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(16, 185, 129, 0.3)',
                  border: '1px solid rgba(16, 185, 129, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FaSolarPanel size={20} color="#10B981" />
                </div>
                <p style={{ fontSize: '8px', color: '#D1D5DB', margin: 0 }}>50kW</p>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '5px',
                  backgroundColor: 'rgba(59, 130, 246, 0.3)',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <FaSolarPanel size={30} color="#3B82F6" />
                </div>
                <p style={{ fontSize: '8px', color: '#D1D5DB', margin: 0 }}>100kW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFParqueComparison;