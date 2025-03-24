"use client"

import React from 'react';
import { LayoutGrid, TreePine, Droplets, Building, HomeIcon, Cpu, Battery, Signal, Zap, Globe, Shield } from 'lucide-react';

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado - reducidos para comprimir
  padding: 34,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#8B5CF6', // Púrpura
  
  // Factor de reducción de altura
  heightReduction: 0.95, // 80% de la altura original (20% de reducción)
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
            Soluciones All-in-One para diversas aplicaciones más allá de los parques solares tradicionales.
            Integramos tecnología y sustentabilidad para cada sector.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px', // Reducido de 15px
          flex: 1,
          marginBottom: '12px', // Reducido de 15px
        }}>
          {/* Tarjeta 1: EcoParques Urbanos */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '10px',
            padding: '12px', // Reducido de 15px
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(4px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Elemento decorativo */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)',
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
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <TreePine size={16} color="#c4b5fd" />
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
                    EcoParques Urbanos
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '10px',
                      backgroundColor: 'rgba(124, 58, 237, 0.2)',
                      color: '#ddd6fe',
                      padding: '2px 6px',
                      borderRadius: '12px',
                    }}>Plazas Sostenibles</span>
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#D1D5DB',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Mini y nano parques solares (100kW y 50kW) para infraestructura pública 100% renovable
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
                    {['MicroHUBs autosuficientes', 'WiFi, carga, iluminación', 'Agua potable solar', 'Escalable: 5-500kW'].map((item, i) => (
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
                    {['Pueblos sin red eléctrica', 'Escuelas rurales', 'Centros de salud', 'Proyectos humanitarios'].map((item, i) => (
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
          
          {/* Tarjeta 2: BIS Smart Energy Vault */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            borderRadius: '10px',
            padding: '12px', // Reducido de 15px
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(4px)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Elemento decorativo */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)',
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
                  backgroundColor: 'rgba(217, 70, 239, 0.15)',
                  padding: '8px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Battery size={16} color="#f9a8d4" />
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
                    BIS Smart Energy Vault
                    <span style={{
                      marginLeft: '8px',
                      fontSize: '10px',
                      backgroundColor: 'rgba(236, 72, 153, 0.2)',
                      color: '#fbcfe8',
                      padding: '2px 6px',
                      borderRadius: '12px',
                    }}>Nuevo</span>
                  </h3>
                  <p style={{
                    fontSize: '12px',
                    color: '#D1D5DB',
                    margin: 0,
                    lineHeight: 1.3,
                  }}>
                    Almacenamiento energético All-in-One para industrias con optimización de consumo
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
                    {['Baterías última generación', 'IA para optimización', 'Carga en horarios económicos', 'Integra con Solar Guardian'].map((item, i) => (
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
                    {['Industrias de alto consumo', 'Centros logísticos', 'Supermercados', 'Infraestructura crítica 24/7'].map((item, i) => (
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
        </div>
        
        {/* Bottom section - ecosistema mejorado con visualización moderna */}
        <div style={{
          background: 'rgba(17, 24, 39, 0.5)',
          borderRadius: '10px',
          padding: '10px',
          marginTop: 'auto',
          border: '1px solid rgba(139, 92, 246, 0.2)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(4px)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
          }}>
            <Signal size={16} color="#c4b5fd" style={{ marginRight: '8px' }} />
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: '#E5E7EB',
              margin: 0,
            }}>
              Ecosistema integrado de soluciones
            </h3>
          </div>
          
          <div style={{
            background: 'rgba(31, 41, 55, 0.5)',
            borderRadius: '8px',
            overflow: 'hidden',
            height: '80px', // Reducido de 100px
            position: 'relative',
          }}>
            {/* Diagrama SVG mejorado y reducido */}
            <svg viewBox="0 0 800 120" width="100%" height="100%" style={{ position: 'relative', zIndex: 2 }}>
              {/* Círculo central con efecto */}
              <defs>
                <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                  <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
                </radialGradient>
              </defs>
              
              <circle cx="400" cy="60" r="28" fill="url(#centerGlow)" />
              <circle cx="400" cy="60" r="25" fill="rgba(31, 41, 55, 0.8)" stroke="rgba(139, 92, 246, 0.6)" strokeWidth="1" />
              <text x="400" y="57" fontSize="10" fill="white" textAnchor="middle" fontWeight="bold">BIS Core</text>
              <text x="400" y="68" fontSize="7" fill="#d8b4fe" textAnchor="middle">Plataforma Central</text>
              
              {/* Líneas de conexión */}
              <path d="M150,60 C250,60 350,60 370,60" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M430,60 C450,60 550,60 650,60" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M400,30 L400,15" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1" strokeDasharray="3,2" />
              <path d="M400,90 L400,105" stroke="rgba(167, 139, 250, 0.6)" strokeWidth="1" strokeDasharray="3,2" />
              
              {/* Nodos secundarios */}
              <circle cx="150" cy="60" r="16" fill="rgba(139, 92, 246, 0.15)" />
              <circle cx="150" cy="60" r="14" fill="rgba(31, 41, 55, 0.7)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
              <text x="150" y="63" fontSize="9" fill="#c4b5fd" textAnchor="middle">EcoParques</text>
              
              <circle cx="650" cy="60" r="16" fill="rgba(139, 92, 246, 0.15)" />
              <circle cx="650" cy="60" r="14" fill="rgba(31, 41, 55, 0.7)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
              <text x="650" y="63" fontSize="9" fill="#c4b5fd" textAnchor="middle">Riego Solar</text>
              
              <circle cx="400" cy="15" r="16" fill="rgba(139, 92, 246, 0.15)" />
              <circle cx="400" cy="15" r="14" fill="rgba(31, 41, 55, 0.7)" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1" />
              <text x="400" y="18" fontSize="9" fill="#c4b5fd" textAnchor="middle">MicroHUB</text>
              
              <circle cx="400" cy="105" r="16" fill="rgba(216, 180, 254, 0.15)" />
              <circle cx="400" cy="105" r="14" fill="rgba(31, 41, 55, 0.7)" stroke="rgba(216, 180, 254, 0.5)" strokeWidth="1" />
              <text x="400" y="108" fontSize="9" fill="#f9a8d4" textAnchor="middle">Energy Vault</text>
            </svg>
            
            {/* Efecto de fondo con gradiente radial */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, rgba(31, 41, 55, 0) 70%)',
              zIndex: 1,
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISVerticales;