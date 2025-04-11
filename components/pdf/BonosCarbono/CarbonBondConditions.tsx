"use client"

import React from 'react';
import { 
  FaBalanceScale, 
  FaChartLine, 
  FaFileContract, 
  FaCalculator, 
  FaCheckCircle, 
  FaCertificate,
  FaMoneyBillWave,
  FaHandHoldingUsd,
  FaPercentage
} from "react-icons/fa";

// Datos de requisitos de adicionalidad
const additionalityRequirements = [
  { text: "El proyecto no sería viable sin los bonos", icon: <FaBalanceScale size={12} color="#F59E0B" /> },
  { text: "Los bonos actúan como catalizador financiero", icon: <FaMoneyBillWave size={12} color="#F59E0B" /> },
  { text: "Demuestra barreras para implementación", icon: <FaFileContract size={12} color="#F59E0B" /> },
  { text: "Sobrepasa práctica habitual del sector", icon: <FaCheckCircle size={12} color="#F59E0B" /> }
];

// Datos de requisitos de ingeniería financiera
const financialRequirements = [
  { text: "Modelado del gap de retorno", icon: <FaCalculator size={12} color="#3B82F6" /> },
  { text: "Análisis de impacto del bono", icon: <FaChartLine size={12} color="#3B82F6" /> },
  { text: "Proyección de flujos a 7 años", icon: <FaPercentage size={12} color="#3B82F6" /> },
  { text: "Estructura de financiamiento viable", icon: <FaHandHoldingUsd size={12} color="#3B82F6" /> }
];

const CarbonBondConditions: React.FC = () => {
  return (
    <div className="carbon-bond-conditions" style={{
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
        {/* Columna izquierda: Imagen y descripción */}
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
            marginBottom: '10px'
          }}>
            <div style={{
              background: 'linear-gradient(90deg, rgba(245, 158, 11, 0.9), rgba(245, 158, 11, 0.3))',
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
                CONDICIONES CLAVE PARA EMITIR BONOS
              </h2>
            </div>
          </div>
          
          {/* Gráfico/imagen representativa */}
          <div style={{
            height: '240px',
            position: 'relative',
            marginTop: '2px',
            backgroundImage: 'url("/condiciones_bono.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '8px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
          }}>
            {/* Imagen con overlay */}
            
          </div>
          
          {/* Descripción de adicionalidad */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#F59E0B',
              marginBottom: '3px',
              borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
              paddingBottom: '2px',
            }}>
              Principio de Adicionalidad
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: '#E5E7EB',
              lineHeight: 1.2,
              marginBottom: '8px',
            }}>
              El concepto de <strong>"adicionalidad"</strong> es fundamental para la emisión de bonos de carbono. Significa que el proyecto no sería económicamente viable sin los ingresos adicionales provenientes de los bonos. Los proyectos deben demostrar claramente que los bonos de carbono funcionan como un <strong>catalizador financiero</strong> que hace la diferencia entre un proyecto no rentable y uno viable.
            </p>
            
            <div style={{
              backgroundColor: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              borderRadius: '6px',
              padding: '6px',
            }}>
              <p style={{
                fontSize: '12px',
                color: '#FBBF24',
                margin: 0,
              }}>
                <strong>Clave:</strong> BIS estructura financieramente el proyecto para demostrar este gap de viabilidad 
                y modelar cómo los bonos de carbono pueden cerrar esa brecha.
              </p>
            </div>
          </div>
          
          {/* Beneficios destacados */}
          <div style={{
            background: 'linear-gradient(90deg, #F59E0B 0%, #3B82F6 100%)',
            borderRadius: '8px',
            padding: '12px',
            marginTop: '2px',
          }}>
            <h3 style={{
              fontSize: '12px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '5px',
            }}>
              Beneficio Financiero:
            </h3>
            
            <p style={{
              fontSize: '10px',
              color: 'white',
              margin: 0,
              lineHeight: 1,
            }}>
              Los bonos de carbono pueden representar entre el <strong>40% y 80% del total de intereses</strong> del proyecto durante los 7 años de certificación. En algunos casos excepcionales, pueden incluso cubrir la totalidad de la inversión inicial.
            </p>
          </div>
        </div>
        
        {/* Columna derecha: Características y requisitos */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
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
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))',
              borderRadius: '50%',
              border: '2px solid rgba(245, 158, 11, 0.5)',
              boxShadow: '0 0 15px rgba(245, 158, 11, 0.3)',
            }}>
              <FaBalanceScale size={30} color="#F59E0B" />
            </div>
          </div>
          
          {/* Requisitos de adicionalidad */}
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
              Requisitos de Adicionalidad
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {additionalityRequirements.map((requirement, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                      gap: '8px',
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
                    {requirement.icon}
                  </div>
                  <p style={{
                    fontSize: '11px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {requirement.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Requisitos de ingeniería financiera */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '12px',
          }}>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#3B82F6',
              marginBottom: '8px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              paddingBottom: '8px',
            }}>
              Ingeniería Financiera
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}>
              {financialRequirements.map((requirement, index) => (
                <div 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
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
                    {requirement.icon}
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {requirement.text}
                  </p>
                </div>
              ))}
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
              padding: '16px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '6px',
            }}>
              <h4 style={{
                fontSize: '12px',
                fontWeight: 'bold',
                color: '#3B82F6',
                margin: '0 0 5px 0',
              }}>
                Mejora del retorno de inversión
              </h4>
              <p style={{
                fontSize: '10px',
                color: '#D1D5DB',
                margin: 0,
                padding: '0',
                textAlign: 'left',
                lineHeight: 1.2,
              }}>
                <strong>Efecto directo:</strong> Los bonos de carbono reducen 
                significativamente la tasa implícita del financiamiento, mejorando 
                el retorno y transformando proyectos previamente descartados 
                en inversiones atractivas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonBondConditions;