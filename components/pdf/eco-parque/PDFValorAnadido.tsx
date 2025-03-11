"use client"

import React from 'react';
import { 
  FaBatteryFull, 
  FaWifi, 
  FaChartLine, 
  FaLightbulb, 
  FaShieldAlt,
  FaWater,
  FaUmbrella,
  FaDesktop,
  FaBicycle,
  FaTrash,
  FaUsers,
  FaMedkit
} from "react-icons/fa";

// Datos de soluciones de valor añadido
const valueAddedSolutions = [
  {
    title: "Baterías en el Container",
    description: "Extiende la disponibilidad energética durante la noche y asegura funcionamiento básico incluso en cortes de red.",
    icon: <FaBatteryFull size={16} color="#F59E0B" />,
    color: "#F59E0B",
    info: "Capacidades: 10kWh - 30kWh"
  },
  {
    title: "Mobiliario Urbano Inteligente",
    description: "Bancos con cargadores solares, pérgolas que brindan sombra y amplían capacidad, puntos de hidratación.",
    icon: <FaUmbrella size={16} color="#10B981" />,
    color: "#10B981",
    info: "Personalizable con identidad municipal"
  },
  {
    title: "Conectividad y Monitoreo",
    description: "SolarGuardian Pro para control en tiempo real y WiFi público gratuito alimentado al 100% con energía solar.",
    icon: <FaWifi size={16} color="#3B82F6" />,
    color: "#3B82F6",
    info: "Control remoto vía app o web"
  },
  {
    title: "Iluminación Inteligente",
    description: "Luminarias LED con sensores de movimiento y fotocélulas para uso eficiente de la energía.",
    icon: <FaLightbulb size={16} color="#8B5CF6" />,
    color: "#8B5CF6",
    info: "Ahorro de hasta 70% en costos"
  }
];

// Opcionales adicionales
const additionalOptions = [
  { name: "Mesas de Picnic Solares", icon: <FaUmbrella size={12} color="#3B82F6" /> },
  { name: "Totems Informativos", icon: <FaDesktop size={12} color="#10B981" /> },
  { name: "Señalética Educativa", icon: <FaChartLine size={12} color="#8B5CF6" /> },
  { name: "Bicicletas Generadoras", icon: <FaBicycle size={12} color="#F59E0B" /> },
  { name: "Puestos de Salud", icon: <FaMedkit size={12} color="#EC4899" /> },
  { name: "Contenedores Inteligentes", icon: <FaTrash size={12} color="#10B981" /> }
];

const PDFValorAnadido: React.FC = () => {
  return (
    <div className="pdf-valor-anadido" style={{
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
        top: '30%',
        right: '5%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '15%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      {/* Título flotante */}
      <div style={{
        position: 'absolute',
        top: '15px',
        left: '0',
        zIndex: 10,
        background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.9), rgba(139, 92, 246, 0.3))',
        paddingLeft: '15px',
        paddingRight: '25px',
        paddingTop: '8px',
        paddingBottom: '8px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid rgba(59, 130, 246, 0.9)',
      }}>
        <h2 style={{
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
        }}>
          SOLUCIONES DE VALOR AÑADIDO
        </h2>
      </div>
      
      {/* Contenido principal */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        zIndex: 5,
        marginTop: '35px', // Espacio para el título
      }}>
        {/* Grid de soluciones principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '15px',
          marginBottom: '15px',
        }}>
          {valueAddedSolutions.map((solution, index) => (
            <div
              key={index}
              style={{
                background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                border: `1px solid rgba(75, 85, 99, 0.4)`,
                borderTop: `3px solid ${solution.color}`,
                borderRadius: '8px',
                padding: '12px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                marginBottom: '8px',
              }}>
                <div style={{
                  backgroundColor: `rgba(${solution.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.2)`,
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {React.cloneElement(solution.icon, { size: 18 })}
                </div>
                
                <div>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 'bold',
                    color: solution.color,
                    margin: 0,
                    marginBottom: '5px',
                  }}>
                    {solution.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '12px',
                    color: '#E5E7EB',
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {solution.description}
                  </p>
                </div>
              </div>
              
              {solution.info && (
                <div style={{
                  backgroundColor: `rgba(${solution.color.slice(1).match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.1)`,
                  borderRadius: '4px',
                  padding: '5px 8px',
                  marginTop: 'auto',
                }}>
                  <p style={{
                    fontSize: '11px',
                    color: solution.color,
                    margin: 0,
                    fontStyle: 'italic',
                  }}>
                    {solution.info}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Opciones adicionales */}
        <div style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
          border: '1px solid rgba(75, 85, 99, 0.4)',
          borderRadius: '8px',
          padding: '12px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          marginBottom: '15px',
        }}>
          <h3 style={{
            fontSize: '16px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '10px',
            textAlign: 'center',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '5px',
          }}>
            Opciones Complementarias
          </h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
          }}>
            {additionalOptions.map((option, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(75, 85, 99, 0.3)',
                  borderRadius: '6px',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(75, 85, 99, 0.5)',
                  borderRadius: '50%',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {option.icon}
                </div>
                <span style={{
                  fontSize: '12px',
                  color: '#E5E7EB',
                }}>
                  {option.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ideas Innovadoras */}
        <div style={{
          background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5))',
          borderRadius: '8px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          marginTop: 'auto',
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <FaUsers size={20} color="white" />
          </div>
          
          <div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
              marginBottom: '3px',
            }}>
              Impacto Comunitario Maximizado
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: 'white',
              margin: 0,
              lineHeight: 1.4,
            }}>
              Incorpore bicicletas estacionarias generadoras, puestos solares de salud, contenedores inteligentes 
              con compresión solar, o estaciones de recreación acuática para convertir su espacio público en un 
              centro de innovación sostenible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFValorAnadido;