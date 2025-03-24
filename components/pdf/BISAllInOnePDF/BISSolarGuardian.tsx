"use client"

import React from "react";
import {
  ShieldCheck,
  BarChart2,
  BellRing,
  Cpu,
  LockKeyhole
} from "lucide-react";

// Importamos el componente SystemImageSection
import SystemImageSection from "./SystemImageSection";

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  
  // Colores y estilos
  primaryColor: '#0ea5e9', // Sky
  secondaryColor: '#06b6d4', // Cyan
  accentColor: '#14b8a6', // Teal
};

const BISSolarGuardian = () => {
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#0f172a', // Fondo azul muy oscuro casi negro
      color: 'white',
      padding: `${LAYOUT.padding}px`,
    }}>
      {/* Elementos de diseño del fondo - mucho más sutiles y transparentes */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '20%',
        width: '50%',
        height: '50%',
        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.07) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'screen',
        filter: 'blur(80px)',
        opacity: 0.15,
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '30%',
        width: '60%',
        height: '60%',
        background: 'radial-gradient(circle, rgba(20, 184, 166, 0.07) 0%, rgba(0,0,0,0) 70%)',
        mixBlendMode: 'screen',
        filter: 'blur(100px)',
        opacity: 0.1,
        zIndex: 1,
      }}/>
      
      {/* Patrón de cuadrícula extremadamente sutil */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.015) 1px, transparent 1px)',
        backgroundSize: '20px 20px',
        zIndex: 1,
        opacity: 0.3,
        filter: 'blur(0.7px)',
      }}/>

      {/* Título flotante */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '0',
        zIndex: 10,
        background: 'linear-gradient(90deg, rgba(6, 182, 212, 0.7), rgba(6, 182, 212, 0.1))',
        paddingLeft: '15px',
        paddingRight: '25px',
        marginBottom: '15px',
        paddingTop: '6px',
        paddingBottom: '6px',
        borderTopRightRadius: '25px',
        borderBottomRightRadius: '25px',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        borderLeft: '3px solid rgba(14, 165, 233, 0.7)',
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
          <ShieldCheck className="h-4 w-4 text-cyan-100 mr-2" />
          SISTEMA DE MONITOREO
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
          marginBottom: '12px',
        }}>
          <h2 style={{
            fontSize: '22px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #38bdf8, #2dd4bf)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '20px',
            marginTop: '20px'
          }}>
            SolarGuardian Pro
          </h2>
          <div style={{
            width: '80px',
            height: '3px',
            background: 'linear-gradient(to right, rgba(6, 182, 212, 0.7), rgba(6, 182, 212, 0.1))',
            borderRadius: '2px',
            marginBottom: '8px',
          }}></div>
          <p style={{
            fontSize: '13px',
            color: '#e0f2fe',
            maxWidth: '700px',
            lineHeight: 1.4,
            margin: 0,
            marginBottom: '13px'
          }}>
            Sistema avanzado de monitoreo, mantenimiento predictivo y tokenización para parques solares. 
            Optimizá tus operaciones con análisis en tiempo real y reducción de costos.
          </p>
        </div>

        {/* Grid reorganizado en 2 columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
          flex: 1,
        }}>
          {/* Columna izquierda: Features en lista vertical */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            <FeatureCard
              icon={<BarChart2 className="h-6 w-6 text-indigo-400" />}
              title="Dashboard Integral"
              desc="Métricas en tiempo real, KPIs y análisis predictivo para optimizar el rendimiento del sistema."
            />
            <FeatureCard
              icon={<Cpu className="h-6 w-6 text-indigo-400" />}
              title="Mantenimiento Predictivo"
              desc="IA y machine learning para anticipar fallos, optimizar ciclos de mantenimiento y extender vida útil."
            />
            <FeatureCard
              icon={<BellRing className="h-6 w-6 text-indigo-400" />}
              title="Sistema de Alertas"
              desc="Detección temprana de anomalías con notificaciones multicanal personalizables."
            />
            <FeatureCard
  icon={<LockKeyhole className="h-6 w-6 text-indigo-400" />}
  title="Tokenización de Activos"
  desc="Convierte activos solares en tokens digitales para facilitar inversión, trazabilidad y seguridad."
/>

            
            {/* Footer con información de seguridad */}
            <div style={{
              background: 'rgba(12, 74, 110, 0.1)',
              borderRadius: '10px',
              border: '1px solid rgba(6, 182, 212, 0.1)',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              marginTop: 'auto',
              backdropFilter: 'blur(4px)',
            }}>
              <div style={{
                background: 'rgba(14, 116, 144, 0.15)',
                borderRadius: '8px',
                padding: '8px',
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <LockKeyhole className="h-4 w-4 text-cyan-300" />
              </div>
              <div>
                <h4 style={{
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: '#e0f2fe',
                  margin: '0 0 3px 0',
                }}>
                  Seguridad de Nivel Empresarial
                </h4>
                <p style={{
                  fontSize: '10px',
                  color: '#bae6fd',
                  margin: 0,
                  lineHeight: 1.3,
                }}>
                  Cifrado AES-256, autenticación multifactor y certificación ISO 27001.
                </p>
              </div>
            </div>
          </div>
          
          {/* Columna derecha: Imagen ampliada */}
          <div style={{
            background: 'rgba(12, 74, 110, 0.08)',
            backdropFilter: 'blur(4px)',
            borderRadius: '12px',
            border: '1px solid rgba(6, 182, 212, 0.08)',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          }}>
            <div style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              {/* Efecto de resplandor difuso detrás de la imagen */}
              <div style={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, rgba(0,0,0,0) 70%)',
                filter: 'blur(25px)',
                opacity: 0.5,
                zIndex: 0,
              }}/>
              
              {/* Imagen del sistema con mayor tamaño */}
              <div style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                zIndex: 1,
              }}>
                <SystemImageSection />
              </div>
            </div>
            
            {/* Pie de imagen con métricas */}
            <div style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              borderTop: '1px solid rgba(6, 182, 212, 0.1)',
              paddingTop: '8px',
            }}>
              <div style={{
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#38bdf8',
                  margin: '0 0 2px 0',
                }}>
                  42%
                </p>
                <p style={{
                  fontSize: '8px',
                  color: '#bae6fd',
                  margin: 0,
                }}>
                  Reducción de costos
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#38bdf8',
                  margin: '0 0 2px 0',
                }}>
                  99.8%
                </p>
                <p style={{
                  fontSize: '8px',
                  color: '#bae6fd',
                  margin: 0,
                }}>
                  Uptime del sistema
                </p>
              </div>
              
              <div style={{
                textAlign: 'center',
              }}>
                <p style={{
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: '#38bdf8',
                  margin: '0 0 2px 0',
                }}>
                  +2.700
                </p>
                <p style={{
                  fontSize: '8px',
                  color: '#bae6fd',
                  margin: 0,
                }}>
                  Instalaciones activas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente FeatureCard - más minimalista
const FeatureCard = ({ icon, title, desc }) => (
  <div style={{
    background: 'linear-gradient(135deg, rgba(12, 74, 110, 0.1), rgba(14, 116, 144, 0.05))',
    backdropFilter: 'blur(8px)',
    borderRadius: '12px',
    border: '1px solid rgba(6, 182, 212, 0.1)',
    padding: '12px',
    display: 'flex',
    alignItems: 'flex-start',
    boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.06), 0 3px 6px -1px rgba(0, 0, 0, 0.04)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    position: 'relative',
    overflow: 'hidden',
  }} 
  className="hover:transform hover:scale-[1.01] hover:shadow-lg">
    {/* Elemento decorativo sutil */}
    <div style={{
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      width: '70px',
      height: '70px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, rgba(6, 182, 212, 0) 70%)',
      zIndex: 0,
    }}></div>
    
    <div style={{
      background: 'linear-gradient(135deg, rgba(14, 116, 144, 0.2), rgba(6, 182, 212, 0.1))',
      borderRadius: '10px',
      padding: '10px',
      marginRight: '12px',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.04)',
      border: '1px solid rgba(6, 182, 212, 0.08)',
      position: 'relative',
      zIndex: 1,
    }}>
      {icon}
    </div>
    
    <div style={{
      position: 'relative',
      zIndex: 1,
    }}>
      <h4 style={{
        fontSize: '13px',
        fontWeight: 'bold',
        margin: '0 0 5px 0',
        background: 'linear-gradient(to right, #38bdf8, #a78bfa)',  // Azul a púrpura
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        letterSpacing: '0.02em',
      }}>
        {title}
      </h4>
      
      <p style={{
        fontSize: '8px',  // Texto más pequeño
        color: '#bae6fd',
        margin: 0,
        lineHeight: 0.9,
        maxWidth: '280px',
        opacity: 0.9,
      }}>
        {desc}
      </p>
      
      {/* Línea decorativa sutil */}
      <div style={{
        width: '30px',
        height: '2px',
        background: 'linear-gradient(to right, rgba(56, 189, 248, 0.6), rgba(167, 139, 250, 0.3))',  // Azul a púrpura
        borderRadius: '1px',
        marginTop: '6px',
      }}></div>
    </div>
  </div>
);

export default BISSolarGuardian;