"use client"

import React from 'react';
import { 
  FaSolarPanel, 
  FaBolt, 
  FaWifi, 
  FaLightbulb, 
  FaBatteryFull, 
  FaWater 
} from "react-icons/fa";

// Datos de características técnicas
const technicalFeatures = [
  { text: "Capacidad: 100kW de generación", icon: <FaBolt size={12} color="#F59E0B" /> },
  { text: "Inversor de alta eficiencia", icon: <FaBolt size={12} color="#F59E0B" /> },
  { text: "Container preensamblado", icon: <FaBolt size={12} color="#F59E0B" /> },
  { text: "Espacio para baterías", icon: <FaBolt size={12} color="#F59E0B" /> }
];

// Datos de servicios soportados
const supportedServices = [
  { text: "Iluminación LED total", icon: <FaLightbulb size={12} color="#3B82F6" /> },
  { text: "WiFi público de alto alcance", icon: <FaWifi size={12} color="#3B82F6" /> },
  { text: "Puntos de hidratación", icon: <FaWater size={12} color="#3B82F6" /> },
  { text: "Cargadores para dispositivos", icon: <FaBatteryFull size={12} color="#3B82F6" /> }
];

const PDFMiniParque: React.FC = () => {
  return (
    <div className="pdf-mini-parque" style={{
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
          {/* Imagen del Mini Parque con título flotante */}
          <div style={{
            height: '180px',
            position: 'relative',
          }}>
            {/* Título flotante moderno */}
            <div style={{
              position: 'absolute',
              top: '15px',
              left: '0',
              zIndex: 10,
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
            }}>
              <h2 style={{
                margin: 0,
                padding: 0,
                fontSize: '16px',
                fontWeight: 'bold',
                color: 'white',
                letterSpacing: '0.5px',
              }}>
                MINI PARQUE ALL-IN-ONE
              </h2>
            </div>
            
            {/* Imagen con overlay */}
            <div style={{
              height: '100%',
              width: '100%',
              backgroundImage: 'url(/mini-parque.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderRadius: '8px',
              position: 'relative',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(0deg, rgba(17, 24, 39, 0.7) 0%, rgba(17, 24, 39, 0.2) 50%, rgba(17, 24, 39, 0.4) 100%)',
                borderRadius: '8px',
              }}/>
              
              <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: 'rgba(16, 185, 129, 0.9)',
                backgroundSize: '180%',
                backgroundPosition: 'center',
                padding: '6px 12px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              }}>
                <FaSolarPanel size={12} style={{ marginRight: '6px' }} />
                <span>100kW</span>
              </div>
            </div>
          </div>
          
          {/* Descripción del Mini Parque */}
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
              Potencia y Versatilidad
            </h3>
            
            <p style={{
              fontSize: '13px',
              color: '#E5E7EB',
              lineHeight: 1.5,
              marginBottom: '10px',
            }}>
              El Mini Parque All-in-One de 100kW está diseñado para plazas grandes o espacios públicos con múltiples necesidades energéticas. Su capacidad permite alimentar iluminación LED completa, sistemas WiFi, cargadores, y otros servicios de alto valor para la comunidad.
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
                <strong>Ideal para:</strong> Parques municipales, plazas céntricas, y espacios de alta concurrencia ciudadana.
              </p>
            </div>
          </div>
          
          {/* Beneficios destacados */}
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
              Beneficios Destacados:
            </h3>
            
            <p style={{
              fontSize: '12px',
              color: 'white',
              margin: 0,
              lineHeight: 1.4,
            }}>
              El Mini Parque de 100kW puede integrarse a la red eléctrica municipal, permitiendo la inyección de excedentes bajo esquemas de generación distribuida, maximizando el retorno de inversión para el municipio.
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
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0.05))',
              borderRadius: '50%',
              border: '2px solid rgba(59, 130, 246, 0.5)',
              boxShadow: '0 0 15px rgba(59, 130, 246, 0.3)',
            }}>
              <FaSolarPanel size={30} color="#3B82F6" />
            </div>
          </div>
          
          {/* Características Técnicas */}
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
              marginBottom: '10px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(245, 158, 11, 0.3)',
              paddingBottom: '5px',
            }}>
              Características Técnicas
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {technicalFeatures.map((feature, index) => (
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
                    {feature.icon}
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Servicios Soportados */}
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
              marginBottom: '10px',
              textAlign: 'center',
              borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
              paddingBottom: '5px',
            }}>
              Servicios Soportados
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              {supportedServices.map((service, index) => (
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
                    {service.icon}
                  </div>
                  <p style={{
                    fontSize: '12px',
                    color: '#E5E7EB',
                    margin: 0,
                  }}>
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Diagrama simplificado */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(75, 85, 99, 0.4)',
            borderRadius: '8px',
            padding: '10px',
            marginTop: 'auto',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <FaSolarPanel size={16} color="#3B82F6" />
                <p style={{ fontSize: '9px', color: '#D1D5DB', margin: '3px 0 0' }}>Paneles</p>
              </div>
              
              <div style={{ fontSize: '14px', color: '#6B7280' }}>→</div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <FaBolt size={16} color="#F59E0B" />
                <p style={{ fontSize: '9px', color: '#D1D5DB', margin: '3px 0 0' }}>Inversor</p>
              </div>
              
              <div style={{ fontSize: '14px', color: '#6B7280' }}>→</div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
                <FaLightbulb size={16} color="#10B981" />
                <p style={{ fontSize: '9px', color: '#D1D5DB', margin: '3px 0 0' }}>Servicios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFMiniParque;