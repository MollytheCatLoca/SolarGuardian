"use client"

import React from 'react';
import { Mail, Phone, Globe, MapPin, Linkedin, ArrowRight, Calendar, Users } from 'lucide-react';

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#8B5CF6', // Púrpura
};

const BISCierre = () => {
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
        background: 'radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(0,0,0,0) 70%)',
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
        background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.9), rgba(59, 130, 246, 0.3))',
        paddingLeft: '15px',
        paddingRight: '25px',
        marginBottom: '10px',
        paddingTop: '6px',
        paddingBottom: '6px',
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
          display: 'flex',
          alignItems: 'center'
        }}>
          <Globe className="h-4 w-4 text-blue-100 mr-2" />
          CONTACTO Y COLABORACIÓN
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
          marginBottom: '15px',
          textAlign: 'center',
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
          }}>
            Energía para el <span style={{ color: '#93c5fd' }}>futuro</span>
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
            borderRadius: '2px',
            marginBottom: '8px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}></div>
          <p style={{
            fontSize: '13px',
            color: '#e0e0ff',
            margin: '0 auto',
            maxWidth: '700px',
            lineHeight: 1.4,
          }}>
            BIS Integraciones está liderando la transformación energética en Argentina.
            Únase a la revolución de la Generación Distribuida.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px', // Reducido de 15px
          flex: 1,
          marginBottom: '12px', // Reducido de 15px
        }}>
          {/* Columna izquierda - Información de contacto */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '10px',
            padding: '12px', // Reducido de 15px
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(4px)',
          }}>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#E5E7EB',
              margin: '0 0 10px 0',
              borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
              paddingBottom: '5px',
            }}>
              Contáctenos
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {/* Email */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Mail size={14} color="#93c5fd" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    Email
                  </h4>
                  <p style={{
                    fontSize: '11px',
                    color: '#D1D5DB',
                    margin: 0,
                  }}>
                    contacto@bisintegraciones.com
                  </p>
                </div>
              </div>
              
              {/* Teléfono */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Phone size={14} color="#93c5fd" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    Teléfono
                  </h4>
                  <p style={{
                    fontSize: '11px',
                    color: '#D1D5DB',
                    margin: 0,
                  }}>
                    +54 11 3407-6585
                  </p>
                </div>
              </div>
              
              {/* Sitio web */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Globe size={14} color="#93c5fd" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    Sitio web
                  </h4>
                  <p style={{
                    fontSize: '11px',
                    color: '#D1D5DB',
                    margin: 0,
                  }}>
                    www.bisintegraciones.com/energy
                  </p>
                </div>
              </div>
              
              {/* Dirección */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <MapPin size={14} color="#93c5fd" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    Oficinas centrales
                  </h4>
                  <p style={{
                    fontSize: '11px',
                    color: '#D1D5DB',
                    margin: 0,
                  }}>
                    Av. del Libertador 1234, Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              
              {/* LinkedIn */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.15)',
                  padding: '6px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <Linkedin size={14} color="#93c5fd" />
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    LinkedIn
                  </h4>
                  <p style={{
                    fontSize: '11px',
                    color: '#D1D5DB',
                    margin: 0,
                  }}>
                    linkedin.com/company/bis-integraciones
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contacto ejecutivo */}
            <div style={{
              marginTop: '10px',
              padding: '8px',
              background: 'rgba(31, 41, 55, 0.5)',
              borderRadius: '8px',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
              }}>
                <div style={{
                  marginRight: '10px',
                  backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  height: '32px',
                  width: '32px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                }}>
                  
                </div>
                <div>
                  <h4 style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    color: '#E5E7EB',
                    margin: '0 0 2px 0',
                  }}>
                    Ing. Maximiliano Keczeli
                  </h4>
                  <p style={{
                    fontSize: '10px',
                    color: '#93c5fd',
                    margin: 0,
                  }}>
                    Director Ejecutivo
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Columna derecha - Próximos pasos */}
          <div style={{
            background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            borderRadius: '10px',
            padding: '12px', // Reducido de 15px
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(4px)',
          }}>
            <h3 style={{
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#E5E7EB',
              margin: '0 0 10px 0',
              borderBottom: '1px solid rgba(59, 130, 246, 0.2)',
              paddingBottom: '5px',
            }}>
              Oportunidades de colaboración
            </h3>
            
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}>
              {/* Para Municipios */}
              <div style={{
                background: 'rgba(31, 41, 55, 0.5)',
                borderRadius: '8px',
                padding: '8px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '8px',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <ArrowRight size={12} color="#93c5fd" />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 4px 0',
                    }}>
                      Para Municipios
                    </h4>
                    <p style={{
                      fontSize: '10px',
                      color: '#D1D5DB',
                      margin: '0 0 6px 0',
                      lineHeight: 1.3,
                    }}>
                      Implementación de EcoParques y sistemas de generación distribuida para servicios públicos.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                    }}>
                      <span style={{
                        fontSize: '9px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        padding: '2px 6px',
                        borderRadius: '12px',
                        color: '#bfdbfe',
                      }}>
                        Leasing operativo
                      </span>
                      <span style={{
                        fontSize: '9px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        padding: '2px 6px',
                        borderRadius: '12px',
                        color: '#bfdbfe',
                      }}>
                        0% inversión inicial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Para Empresas */}
              <div style={{
                background: 'rgba(31, 41, 55, 0.5)',
                borderRadius: '8px',
                padding: '8px',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    marginRight: '8px',
                    marginTop: '2px',
                    flexShrink: 0,
                  }}>
                    <ArrowRight size={12} color="#93c5fd" />
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '12px',
                      fontWeight: 'bold',
                      color: '#E5E7EB',
                      margin: '0 0 4px 0',
                    }}>
                      Para Empresas
                    </h4>
                    <p style={{
                      fontSize: '10px',
                      color: '#D1D5DB',
                      margin: '0 0 6px 0',
                      lineHeight: 1.3,
                    }}>
                      Parques solares All-in-One adaptados a su industria con retorno de inversión acelerado.
                    </p>
                    <div style={{
                      display: 'flex',
                      gap: '6px',
                    }}>
                      <span style={{
                        fontSize: '9px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        padding: '2px 6px',
                        borderRadius: '12px',
                        color: '#bfdbfe',
                      }}>
                        ROI en 4 años
                      </span>
                      <span style={{
                        fontSize: '9px',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        padding: '2px 6px',
                        borderRadius: '12px',
                        color: '#bfdbfe',
                      }}>
                        Ahorro inmediato
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Consulta personalizada */}
              <div style={{
                background: 'linear-gradient(to right, rgba(6, 78, 59, 0.3), rgba(5, 150, 105, 0.1))',
                borderRadius: '8px',
                padding: '8px',
                border: '1px solid rgba(16, 185, 129, 0.2)',
              }}>
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#a7f3d0',
                  margin: '0 0 4px 0',
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <Calendar size={12} color="#6ee7b7" style={{ marginRight: '6px' }} />
                  Solicite una consulta personalizada
                </h4>
                <p style={{
                  fontSize: '10px',
                  color: '#d1fae5',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Nuestro equipo de expertos realizará un análisis de sus necesidades energéticas y le presentará una propuesta adaptada a su caso específico.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mensaje final */}
        <div style={{
          marginTop: 'auto',
          background: 'rgba(17, 24, 39, 0.5)',
          borderRadius: '10px',
          padding: '10px',
          textAlign: 'center',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          backdropFilter: 'blur(4px)',
        }}>
          <h3 style={{
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#E5E7EB',
            margin: '0 0 6px 0',
          }}>
            "Construyamos juntos el futuro energético de LATAM"
          </h3>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Users size={12} color="#93c5fd" style={{ marginRight: '6px' }} />
            <p style={{
              fontSize: '10px',
              color: '#D1D5DB',
              margin: 0,
            }}>
              BIS Integraciones © 2025 | Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISCierre;