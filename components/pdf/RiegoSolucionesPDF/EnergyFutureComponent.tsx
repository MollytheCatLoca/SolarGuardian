import React from 'react';
import { FaLeaf, FaSolarPanel, FaBolt, FaChartLine, FaGlobe } from 'react-icons/fa';

const EnergyFutureComponent: React.FC = () => {
  return (
    <div className="relative overflow-hidden" style={{
      backgroundColor: '#0c101a',
      borderRadius: '20px',
      width: '100%',
      padding: '24px',
      color: '#e0f2fe',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      {/* Elementos de fondo */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.2,
        zIndex: 0,
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '256px',
          height: '256px',
          background: 'radial-gradient(circle, rgba(14, 165, 233, 0.6) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '100%',
          transform: 'translate(30%, -30%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '100%',
          transform: 'translate(-30%, 30%)',
          filter: 'blur(50px)',
        }} />
      </div>

      {/* Overlay de patrón grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 1,
        opacity: 0.1,
      }} />

      {/* Efectos de efumado en los extremos */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '80px',
        background: 'linear-gradient(to bottom, rgba(12, 16, 26, 0.9), rgba(12, 16, 26, 0))',
        zIndex: 5,
        pointerEvents: 'none',
      }} />
      
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '80px',
        background: 'linear-gradient(to top, rgba(12, 16, 26, 0.9), rgba(12, 16, 26, 0))',
        zIndex: 5,
        pointerEvents: 'none',
      }} />

      {/* Contenido principal */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '16px',
      }}>
        {/* Sección de encabezado */}
        <div style={{
          textAlign: 'center',
          marginBottom: '24px',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            backgroundColor: 'rgba(14, 165, 233, 0.2)',
            borderRadius: '50px',
            marginBottom: '12px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(14, 165, 233, 0.15)',
          }}>
            <span style={{
              color: '#7dd3fc',
              fontWeight: 600,
              fontSize: '12px',
              letterSpacing: '0.05em',
            }}>
              TRANSFORMACIÓN ENERGÉTICA
            </span>
          </div>
          
          <h1 style={{
            fontSize: '40px',
            fontWeight: 700,
            color: 'white',
            margin: '10px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Listo para Cambiar tu{' '}
            <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Futuro Energético</span>
          </h1>
          
          <div style={{
            margin: '12px auto',
            height: '1px',
            width: '60%',
            background: 'linear-gradient(to right, transparent, rgba(14, 165, 233, 0.6), transparent)',
          }} />
          
          <p style={{
            color: 'rgba(224, 242, 254, 0.8)',
            fontSize: '16px',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.5,
          }}>
            Una solución completa para maximizar la eficiencia de tus sistemas energéticos, reducir costos operativos y contribuir a un futuro más sostenible.
          </p>
        </div>
        
        {/* Caja principal de beneficios */}
        <div style={{
          background: 'rgba(3, 105, 161, 0.2)',
          borderRadius: '16px',
          padding: '24px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(14, 165, 233, 0.2)',
          width: '100%',
          marginBottom: '24px',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px',
          }}>
            <h2 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#38bdf8',
            }}>
              BIS Integraciones <span style={{ fontWeight: 800 }}>Soluciones</span>
            </h2>
            <div style={{
              height: '1px',
              width: '120px',
              background: 'linear-gradient(to right, rgba(14, 165, 233, 0.7), transparent)',
            }} />
          </div>
          
          {/* Grid de beneficios */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '14px',
            marginBottom: '20px',
          }}>
            <BenefitItem 
              icon={<FaSolarPanel />}
              title="Maximiza tu Rendimiento" 
              description="Optimización inteligente para alcanzar la máxima eficiencia de tus sistemas solares"
            />
            <BenefitItem 
              icon={<FaChartLine />}
              title="Analítica Avanzada" 
              description="Métricas detalladas e informes personalizados para optimizar la toma de decisiones"
            />
            <BenefitItem 
              icon={<FaBolt />}
              title="Autonomía Energética" 
              description="Reduce tu dependencia de la red con soluciones de almacenamiento inteligentes"
            />
            <BenefitItem 
              icon={<FaGlobe />}
              title="Impacto Ambiental" 
              description="Reduce tu huella de carbono y contribuye a un futuro más sostenible"
            />
          </div>
          
          {/* CTA */}
          <div style={{
            textAlign: 'center',
            borderTop: '1px solid rgba(14, 165, 233, 0.3)',
            paddingTop: '18px',
            marginTop: '8px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
              <span style={{
                color: 'white',
                fontWeight: 500,
                fontSize: '12px',
                marginBottom: '8px',
              }}>
                Solicita tu evaluación personalizada hoy:
              </span>
              <span style={{
                fontSize: '20px',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.05em',
              }}>
                bisintegraciones.com/contacto
              </span>
            </div>
          </div>
        </div>
        
        {/* Footer con botones de acción */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '-10px',
          marginLeft: '20px',
        }}>
          <div style={{
            fontSize: '8px',
            color: 'rgba(224, 242, 254, 0.5)',
          }}>
            Documento exclusivo para clientes potenciales
          </div>
          
        </div>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div style={{
      display: 'flex',
    }}>
      <div style={{
        marginRight: '14px',
        flexShrink: 0,
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.15)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#38bdf8',
        }}>
          {icon}
        </div>
      </div>
      <div>
        <h3 style={{
          color: 'white',
          fontWeight: 500,
          fontSize: '15px',
          marginBottom: '5px',
        }}>
          {title}
        </h3>
        <p style={{
          color: 'rgba(224, 242, 254, 0.7)',
          fontSize: '10px',
          lineHeight: 1.2,
          margin: 0,
        }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default EnergyFutureComponent;