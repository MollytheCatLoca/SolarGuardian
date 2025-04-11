"use client"

import React from 'react';
import { 
  FaMoneyBillWave, 
  FaChartLine, 
  FaArrowRight,
  FaPercentage, 
  FaCalendarAlt, 
  FaHandHoldingUsd, 
  FaArrowDown,
  FaArrowUp,
  FaCheckSquare,
  FaBusinessTime
} from "react-icons/fa";

// Datos de ventajas financieras
const financialAdvantages = [
  { text: "Cobro por 7 años consecutivos", icon: <FaCalendarAlt size={12} color="#3B82F6" /> },
  { text: "40-80% del total de intereses del proyecto", icon: <FaPercentage size={12} color="#3B82F6" /> },
  { text: "Baja la tasa implícita de financiamiento", icon: <FaArrowDown size={12} color="#3B82F6" /> },
  { text: "Mejora el retorno de inversión", icon: <FaArrowUp size={12} color="#3B82F6" /> }
];

// Datos de ejemplos de proyectos
const projectExamples = [
  { 
    name: "Parque Solar Municipal", 
    costSaving: "45%", 
    originalROI: "7 años", 
    enhancedROI: "4.3 años",
    color: "#10B981"
  },
  { 
    name: "Sistema Distribuido Industrial", 
    costSaving: "60%", 
    originalROI: "8.5 años", 
    enhancedROI: "3.8 años",
    color: "#3B82F6"
  },
  { 
    name: "Planta Solar Comercial", 
    costSaving: "75%", 
    originalROI: "9 años", 
    enhancedROI: "3.1 años",
    color: "#F59E0B"
  }
];

const CarbonBondFinancing: React.FC = () => {
  return (
    <div className="carbon-bond-financing" style={{
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
        right: '5%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      {/* Contenido principal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        gap: '15px',
        zIndex: 5,
        height: '100%',
      }}>
        {/* Columna izquierda: Título, gráfico y descripciones */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          marginBottom: '10px'
        }}>
          {/* Título flotante moderno */}
          <div style={{
            position: 'relative',
            height: 'auto',
            marginBottom: '5px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.3))',
              paddingLeft: '12px',
              paddingRight: '25px',
              paddingTop: '8px',
              paddingBottom: '6px',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
              borderLeft: '3px solid rgba(16, 185, 129, 0.9)',
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
                EL BONO COMO MECANISMO DE FINANCIAMIENTO
              </h2>
            </div>
          </div>
          
         
          {/* Contenedor para imagen */}
          <div style={{
            height: '400px',
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
              left: '10px',
              zIndex: 10,
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.5))',
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
                Mecanismo de Financiamiento
              </h3>
            </div>
            
            {/* Contenedor de la imagen con efectos visuales */}
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'url("/bono-financing.jpg")', /* Reemplaza esta URL con la de tu imagen */
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
              
              {/* Etiqueta de valor en la parte inferior derecha */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.8)',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                <FaMoneyBillWave size={12} style={{ marginRight: '5px' }} />
                <span>7 AÑOS DE INGRESOS</span>
              </div>
            </div>
          </div>
          
          
          {/* Conclusión destacada */}
          <div style={{
            background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '10px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '5px',
            }}>
              Resultado:
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: 'white',
              margin: 0,
              lineHeight: 1.3,
            }}>
              Los bonos de carbono transforman <strong>proyectos que antes no cerraban financieramente</strong> en 
              inversiones viables y atractivas, acelerando la transición energética y maximizando el impacto ambiental 
              positivo en concordancia con objetivos económicos.
            </p>
          </div>
        </div>
        
        {/* Columna derecha: Características y ventajas */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          marginBottom: '30px'
        }}>
          {/* Ícono grande */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))',
              borderRadius: '50%',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
            }}>
              <FaMoneyBillWave size={30} color="#3B82F6" />
            </div>
          </div>
          
          {/* Ventajas financieras */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#3B82F6',
              marginBottom: '10px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              paddingBottom: '3px',
            }}>
              Ventajas Financieras
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {financialAdvantages.map((advantage, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '20px',
                    height: '20px',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderRadius: '4px',
                  }}>
                    {advantage.icon}
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {advantage.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Casos especiales */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '12px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#F59E0B',
              marginBottom: '8px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
              paddingBottom: '4px',
            }}>
              Casos Excepcionales
            </h3>
            
            <div style={{
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '8px',
              padding: '8px',
              marginBottom: '8px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '4px',
                gap: '6px',
              }}>
                <FaCheckSquare size={12} color="#F59E0B" />
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#F59E0B',
                  margin: 0,
                }}>
                  Cobertura total de inversión
                </h4>
              </div>
              
              <p style={{
                fontSize: '11px',
                color: '#D1D5DB',
                margin: 0,
                lineHeight: 1,
              }}>
                En proyectos con condiciones óptimas, los bonos de carbono pueden llegar a cubrir el 100% 
                de la inversión inicial, generando un retorno inmediato.
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '8px',
              padding: '10px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '6px',
                gap: '8px',
              }}>
                <FaBusinessTime size={12} color="#F59E0B" />
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#F59E0B',
                  margin: 0,
                }}>
                  Aceleración de proyectos
                </h4>
              </div>
              
              <p style={{
                fontSize: '11px',
                color: '#D1D5DB',
                margin: 0,
                lineHeight: 1,
              }}>
                Proyectos que tradicionalmente tendrían un ciclo de aprobación financiera largo 
                pueden acelerarse significativamente gracias al valor adicional de los bonos.
              </p>
            </div>
          </div>
          
          {/* Dato destacado */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
            marginTop: 'auto',
          }}>
            <div style={{
              padding: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '6px',
            }}>
              <h4 style={{
                fontSize: '11px',
                fontWeight: 'bold',
                color: '#10B981',
                margin: '0 0 5px 0',
              }}>
                Componentes del Beneficio
              </h4>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginBottom: '5px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10B981',
                  borderRadius: '50%',
                }}></div>
                <p style={{
                  fontSize: '10px',
                  color: '#D1D5DB',
                  margin: 0,
                }}>
                  Beneficio económico directo (7 años)
                </p>
              </div>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10B981',
                  borderRadius: '50%',
                }}></div>
                <p style={{
                  fontSize: '10px',
                  color: '#D1D5DB',
                  margin: 0,
                }}>
                  Posicionamiento ESG y marketing ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBondFinancing;