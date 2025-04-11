"use client"

import React from 'react';
import { 
  FaFileContract, 
  FaChartLine, 
  FaSearchPlus, 
  FaCheckCircle, 
  FaCertificate, 
  FaServer,
  FaClipboardCheck,
  FaFileAlt
} from "react-icons/fa";

// Datos de pasos del proceso
const processSteps = [
  { text: "Análisis de viabilidad del proyecto", icon: <FaSearchPlus size={12} color="#F59E0B" /> },
  { text: "Preparación de documentación técnica", icon: <FaFileAlt size={12} color="#F59E0B" /> },
  { text: "Validación por tercera parte", icon: <FaClipboardCheck size={12} color="#F59E0B" /> },
  { text: "Certificación y registro oficial", icon: <FaCertificate size={12} color="#F59E0B" /> }
];

// Datos de evidencia técnica
const technicalEvidence = [
  { text: "Sustitución de energía fósil (matriz 65% fósil)", icon: <FaFileContract size={12} color="#3B82F6" /> },
  { text: "Datos de consumo anterior vs energía generada", icon: <FaChartLine size={12} color="#3B82F6" /> },
  { text: "Monitoreo vía smart loggers", icon: <FaServer size={12} color="#3B82F6" /> },
  { text: "Plataforma SolarGuardian.pro para validación", icon: <FaCheckCircle size={12} color="#3B82F6" /> }
];

const CarbonBondProcess: React.FC = () => {
  return (
    <div className="carbon-bond-process" style={{
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
        right: '0%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
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
        {/* Columna izquierda: Imagen y descripción */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        }}>
          {/* Título flotante moderno */}
          <div style={{
            position: 'relative',
            height: 'auto',
            marginBottom: '10px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.3))',
              paddingLeft: '12px',
              paddingRight: '25px',
              paddingTop: '8px',
              paddingBottom: '8px',
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
                ¿CÓMO FUNCIONA EL ESQUEMA DE BONOS?
              </h2>
            </div>
          </div>
          
          {/* Diagrama del proceso */}
          <div style={{
            height: '160px',
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '18px',
            marginTop: '10px' ,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '25px',
            }}>
              {/* Paso 1 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.2)',
                  border: '2px solid rgba(16, 185, 129, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}>
                  <FaFileContract size={24} color="#10B981" />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#E5E7EB',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}>
                  <strong>Contratación</strong><br/>
                  Consultora especializada
                </p>
              </div>
              
              {/* Flecha */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6B7280',
                fontSize: '20px',
              }}>
                →
              </div>
              
              {/* Paso 2 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(59, 130, 246, 0.2)',
                  border: '2px solid rgba(59, 130, 246, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}>
                  <FaFileAlt size={24} color="#3B82F6" />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#E5E7EB',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}>
                  <strong>Preparación</strong><br/>
                  Evidencia técnica
                </p>
              </div>
              
              {/* Flecha */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6B7280',
                fontSize: '20px',
              }}>
                →
              </div>
              
              {/* Paso 3 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(245, 158, 11, 0.2)',
                  border: '2px solid rgba(245, 158, 11, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}>
                  <FaClipboardCheck size={24} color="#F59E0B" />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#E5E7EB',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}>
                  <strong>Validación</strong><br/>
                  Por tercera parte
                </p>
              </div>
              
              {/* Flecha */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                color: '#6B7280',
                fontSize: '20px',
              }}>
                →
              </div>
              
              {/* Paso 4 */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '90px',
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(139, 92, 246, 0.2)',
                  border: '2px solid rgba(139, 92, 246, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '8px',
                }}>
                  <FaCertificate size={24} color="#8B5CF6" />
                </div>
                <p style={{
                  fontSize: '10px',
                  color: '#E5E7EB',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: 1.2,
                }}>
                  <strong>Certificación</strong><br/>
                  Verra
                </p>
              </div>
            </div>
          </div>
          
          {/* Descripción del proceso */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '15px',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#3B82F6',
              marginBottom: '10px',
              borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              paddingBottom: '5px',
            }}>
              BIS lidera todo el proceso
            </h3>
            
            <p style={{
              fontSize: '13px',
              color: '#E5E7EB',
              lineHeight: 1.2,
              marginBottom: '10px',
            }}>
              BIS contrata y gestiona una consultora especializada en certificación internacional que se encarga 
              de preparar toda la documentación necesaria para la emisión de bonos de carbono. Se recopila la 
              información técnica que demuestra la reducción de emisiones de CO₂ a partir de la generación de 
              energía solar, sustituyendo fuentes fósiles en la matriz energética actual (65% fósil).
            </p>
            
            <div style={{
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '6px',
              padding: '8px',
            }}>
              <p style={{
                fontSize: '12px',
                color: '#93C5FD',
                margin: 0,
              }}>
                <strong>Certificadora:</strong> Trabajamos con Verra, la organización más reconocida mundialmente 
                en la certificación de bonos de carbono, asegurando la mayor credibilidad y valor de mercado.
              </p>
            </div>
          </div>
          
          {/* Información adicional */}
          <div style={{
            background: 'linear-gradient(90deg, #3B82F6 0%, #10B981 100%)',
            borderRadius: '8px',
            padding: '12px',
            marginTop: 'auto',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '5px',
            }}>
              Período de certificación:
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: 'white',
              margin: 0,
              lineHeight: 1.4,
            }}>
              Los bonos de carbono se emiten y cobran durante <strong>7 años</strong>, generando un flujo de ingresos 
              constante que puede representar entre el 40% y 80% del total de intereses del proyecto.
            </p>
          </div>
        </div>
        
        {/* Columna derecha: Características y servicios */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
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
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05))',
              borderRadius: '50%',
              border: '2px solid rgba(16, 185, 129, 0.5)',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.3)',
            }}>
              <FaCertificate size={30} color="#10B981" />
            </div>
          </div>
          
          {/* Pasos del proceso */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#F59E0B',
              marginBottom: '10px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
              paddingBottom: '5px',
            }}>
              Pasos del Proceso
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {processSteps.map((step, index) => (
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
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    borderRadius: '4px',
                  }}>
                    {step.icon}
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Evidencia técnica */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '12px',
          }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#3B82F6',
              marginBottom: '10px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              paddingBottom: '5px',
            }}>
              Evidencia Técnica
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {technicalEvidence.map((evidence, index) => (
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
                    {evidence.icon}
                  </div>
                  <p style={{
                    fontSize: '10px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {evidence.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Destacado informativo */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
            marginTop: 'auto',
          }}>
            <div style={{
              padding: '10px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              borderRadius: '6px',
            }}>
              <h4 style={{
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#10B981',
                margin: '0 0 5px 0',
              }}>
                ¿Sabías qué?
              </h4>
              <p style={{
                fontSize: '11px',
                color: '#D1D5DB',
                margin: 0,
                lineHeight: 1,
              }}>
                La "adicionalidad" es el criterio clave para la emisión de bonos: 
                el proyecto debe demostrar que sin los bonos de carbono no sería 
                viable económicamente. BIS se encarga de modelar y documentar 
                este requisito fundamental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBondProcess;