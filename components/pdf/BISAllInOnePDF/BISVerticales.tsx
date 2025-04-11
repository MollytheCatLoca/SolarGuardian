"use client"

import React from 'react';
import { LayoutGrid, TreePine, Droplets, Building, HomeIcon, Cpu, Battery, Signal, Zap, Globe, Shield, Check, Lightbulb, PanelTop, Factory, Hospital, Construction, Sprout } from 'lucide-react';

// Verticals data for easy editing
const VERTICALS_DATA = [
  {
    icon: <TreePine size={16} color="#c4b5fd" />,
    title: "EcoParques Urbanos",
    badge: "Plazas Sostenibles",
    badgeBgColor: "rgba(124, 58, 237, 0.2)",
    badgeTextColor: "#ddd6fe",
    description: "Mini y nano parques solares (100kW y 50kW) para infraestructura pública 100% renovable",
    characteristics: ['MicroHUBs autosuficientes', 'WiFi, carga, iluminación', 'Agua potable solar', 'Escalable: 5-500kW'],
    useCases: ['Pueblos sin red eléctrica', 'Escuelas rurales', 'Centros de salud', 'Proyectos humanitarios'],
    glowColor: "rgba(139, 92, 246, 0.15)",
    iconBg: "rgba(124, 58, 237, 0.15)"
  },
  {
    icon: <Battery size={16} color="#f9a8d4" />,
    title: "BIS Smart Energy Vault",
    badge: "Nuevo",
    badgeBgColor: "rgba(236, 72, 153, 0.2)",
    badgeTextColor: "#fbcfe8",
    description: "Almacenamiento energético All-in-One para industrias con optimización de consumo",
    characteristics: ['Baterías última generación', 'IA para optimización', 'Carga en horarios económicos', 'Integra con Solar Guardian'],
    useCases: ['Industrias de alto consumo', 'Centros logísticos', 'Supermercados', 'Infraestructura crítica 24/7'],
    glowColor: "rgba(236, 72, 153, 0.15)",
    iconBg: "rgba(217, 70, 239, 0.15)"
  }
];

// Ecosystem solutions for the improved visualization
const ECOSYSTEM_SOLUTIONS = [
  { 
    id: "ecoparques", 
    name: "EcoParques",
    category: "Urbano",
    icon: <TreePine size={12} />,
    colorClass: "bg-purple-500"
  },
  { 
    id: "energyvault", 
    name: "Energy Vault",
    category: "Industrial",
    icon: <Battery size={12} />,
    colorClass: "bg-pink-500"
  },
  { 
    id: "riegosolar", 
    name: "Riego Solar",
    category: "Agrícola",
    icon: <Droplets size={12} />,
    colorClass: "bg-blue-500"
  },
  { 
    id: "microhub", 
    name: "MicroHUB",
    category: "Comunitario",
    icon: <Zap size={12} />,
    colorClass: "bg-yellow-500"
  },
  { 
    id: "smartbuilding", 
    name: "Smart Building",
    category: "Corporativo",
    icon: <Building size={12} />,
    colorClass: "bg-green-500"
  },
  { 
    id: "industria", 
    name: "Industria 4.0",
    category: "Manufactura",
    icon: <Factory size={12} />,
    colorClass: "bg-cyan-500"
  },
  { 
    id: "healthcare", 
    name: "Healthcare",
    category: "Salud",
    icon: <Hospital size={12} />,
    colorClass: "bg-red-500"
  },
  { 
    id: "construccion", 
    name: "Construcción Sustentable",
    category: "Infraestructura",
    icon: <Construction size={12} />,
    colorClass: "bg-amber-500"
  }
];

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado - reducidos para comprimir
  padding: 34,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#8B5CF6', // Púrpura
  
  // Factor de reducción de altura
  heightReduction: 0.95, // 95% de la altura original (5% de reducción)
};

const BISVerticales = () => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827', // Fondo oscuro coherente
      color: 'white',
      padding: `${LAYOUT.padding}px`,
      maxWidth: '270mm',
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '25%',
        right: '25%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.2,
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '30%',
        left: '30%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'multiply',
        filter: 'blur(60px)',
        opacity: 0.1,
        zIndex: 1,
      }}/>
      
      {/* Patrón de cuadrícula sutil con bordes difusos */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
        opacity: 0.4,
        filter: 'blur(0.5px)',
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
        marginBottom: '10px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
        borderLeft: '3px solid rgba(217, 70, 239, 0.9)',
      }}>
        <h2 style={{
          margin: 0,
          padding: 0,
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          letterSpacing: '0.5px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <LayoutGrid className="h-4 w-4 text-purple-100 mr-2" />
          SOLUCIONES SECTORIALES
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
        <div style={{
          marginBottom: '15px', // Reducido de 25px 
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
          }}>
            Verticales de <span style={{ 
              background: 'linear-gradient(to right, #d946ef, #ec4899)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>BIS Integraciones</span>
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(to right, rgba(217, 70, 239, 0.8), rgba(217, 70, 239, 0.2))',
            borderRadius: '2px',
            marginBottom: '8px',
          }}></div>
          <p style={{
            fontSize: '13px',
            color: '#e0e0ff',
            maxWidth: '700px',
            lineHeight: 1.4,
            margin: 0,
          }}>
            Soluciones modulares que integran generación solar avanzada, infraestructura sostenible y mecanismos de financiamiento innovadores.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px', // Reducido de 15px
          flex: 1,
          marginBottom: '12px', // Reducido de 15px
        }}>
          {/* Mapping through the VERTICALS_DATA to generate cards */}
          {VERTICALS_DATA.map((vertical, index) => (
            <div 
              key={index}
              style={{
                background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                border: '1px solid rgba(139, 92, 246, 0.2)',
                borderRadius: '10px',
                padding: '12px', // Reducido de 15px
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                backdropFilter: 'blur(4px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Elemento decorativo */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-20px',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: `radial-gradient(circle, ${vertical.glowColor} 0%, rgba(139, 92, 246, 0) 70%)`,
                zIndex: 0,
              }}></div>
              
              <div style={{
                position: 'relative',
                zIndex: 2
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    marginRight: '12px',
                    backgroundColor: vertical.iconBg,
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {vertical.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 2px 0',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {vertical.title}
                      <span style={{
                        marginLeft: '8px',
                        fontSize: '10px',
                        backgroundColor: vertical.badgeBgColor,
                        color: vertical.badgeTextColor,
                        padding: '2px 6px',
                        borderRadius: '12px',
                      }}>{vertical.badge}</span>
                    </h3>
                    <p style={{
                      fontSize: '12px',
                      color: '#D1D5DB',
                      margin: 0,
                      lineHeight: 1.3,
                    }}>
                      {vertical.description}
                    </p>
                  </div>
                </div>
                
                {/* Área de características y usos - comprimida */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px', // Reducido de 10px
                }}>
                  <div style={{
                    background: 'rgba(31, 41, 55, 0.5)',
                    borderRadius: '8px',
                    padding: '8px', // Reducido de 10px
                  }}>
                    <h4 style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 4px 0',
                    }}>Características</h4>
                    <ul style={{
                      margin: 0,
                      padding: 0,
                      listStyleType: 'none'
                    }}>
                      {vertical.characteristics.map((item, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '3px',
                          fontSize: '10px',
                          color: '#c4b5fd',
                        }}>
                          <span style={{ marginRight: '5px', color: '#c4b5fd' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{
                    background: 'rgba(31, 41, 55, 0.5)',
                    borderRadius: '8px',
                    padding: '8px', // Reducido de 10px
                  }}>
                    <h4 style={{
                      fontSize: '11px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 4px 0',
                    }}>Casos de uso</h4>
                    <ul style={{
                      margin: 0,
                      padding: 0,
                      listStyleType: 'none'
                    }}>
                      {vertical.useCases.map((item, i) => (
                        <li key={i} style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: '3px',
                          fontSize: '10px',
                          color: '#c4b5fd',
                        }}>
                          <span style={{ marginRight: '5px', color: '#f472b6' }}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* IMPROVED ECOSYSTEM VISUALIZATION - Modern solution list with icon grid */}
        <div style={{
          background: 'rgba(17, 24, 39, 0.5)',
          borderRadius: '10px',
          padding: '10px',
          marginTop: '1px',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '6px',
          }}>
           
            
          </div>
          
          <div style={{
            display: 'flex',
            height: '80px',
            position: 'relative',
          }}>
            {/* Left side: Core Platform */}
            <div style={{
              width: '20%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
           
              <div style={{
                width: '100px',
                height: '90px',
                borderRadius: '10px',
                background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
                border: '1px solid rgba(139, 92, 246, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                boxShadow: '0 4px 20px rgba(139, 92, 246, 0.2)',
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                  filter: 'blur(10px)',
                  opacity: 0.7,
                }}/>
                <PanelTop size={40} color="#c4b5fd" style={{ marginBottom: '5px' }} />
                <p style={{
                  margin: 0,
                  fontSize: '10px',
                  fontWeight: 'bold',
                  color: '#e9d5ff',
                }}>BIS Core</p>
               
              </div>
              
              {/* Connecting line */}
              <div style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                width: '30px',
                height: '1px',
                background: 'linear-gradient(to right, rgba(139, 92, 246, 0.7), rgba(139, 92, 246, 0.1))',
              }}/>
            </div>
            
            {/* Right side: Solutions Grid */}
            <div style={{
              width: '75%',
              padding: '0 10px',
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridTemplateRows: 'repeat(2, 1fr)',
                gap: '6px',
                height: '100%',
              }}>
                {/* Map through the ecosystem solutions */}
                {ECOSYSTEM_SOLUTIONS.map((solution, index) => (
                  <div 
                    key={solution.id}
                    style={{
                      background: 'rgba(31, 41, 55, 0.5)',
                      borderRadius: '6px',
                      border: '1px solid rgba(139, 92, 246, 0.1)',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(31, 41, 55, 0.7)',
                      marginRight: '6px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}>
                      <div className={solution.colorClass} style={{
                        position: 'absolute',
                        left: '0',
                        bottom: '0',
                        width: '100%',
                        height: '5px',
                      }}/>
                      {solution.icon}
                    </div>
                    <div>
                      <p style={{
                        margin: 0,
                        fontSize: '9px',
                        fontWeight: 'bold',
                        color: '#e5e7eb',
                        lineHeight: '1',
                      }}>{solution.name}</p>
                      <p style={{
                        margin: 0,
                        fontSize: '7px',
                        color: '#9ca3af',
                        lineHeight: '1.2',
                      }}>{solution.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISVerticales;