"use client"

import React from 'react';
import { 
  FaSolarPanel, 
  FaLeaf, 
  FaArrowRight, 
  FaBuilding,
  FaChartLine
} from "react-icons/fa";

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  imageHeight: '80%',
  imageWidth: '85%',
  titleFontSize: 48,
  subtitleFontSize: 16,
  
  // Colores y estilos
  primaryColor: '#3B82F6', // Azul
  secondaryColor: '#10B981', // Verde
  accentColor: '#F59E0B', // 
  
  // Control de posición de imagen
  imageBgPosition: 'center 59%', // Controla la posición de la imagen dentro de su caja
  imageBgSize: 'cover', // 'cover', 'contain' o valores específicos como '120%'
  
  
  // Posiciones
  tagTop: 20,
  imageMarginTop: 20,
  statsMarginTop: 20,
  
  // Animación
  waveAnimationDuration: '0s',
  
  // Imagenes
  featuredImagePath: '/EN_SolarSunset.jpg',
  alternateImagePath: '/solar-puro.jpg'
};

const BISPortada: React.FC = () => {
  return (
    <div className="pdf-bis-portada" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827', // Fondo oscuro coherente con demás componentes
      color: 'white',
      padding: `${LAYOUT.padding}px`,
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Ondas galácticas sutiles en el fondo */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        opacity: 0.1,
        background: `
          radial-gradient(ellipse at 20% 20%, rgba(16, 185, 129, 0.2) 0%, transparent 70%),
          radial-gradient(ellipse at 80% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 70%)
        `,
        zIndex: 1,
      }}/>
      
      {/* Ondas dinámicas animadas (estilo galaxia) */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '-10%',
        width: '120%',
        height: '120%',
        background: 'transparent',
        transform: 'rotate(-10deg)',
        zIndex: 1,
        overflow: 'hidden',
      }}>
        {/* Primera onda */}
        <div style={{
          position: 'absolute',
          top: '0%',
          left: '0%',
          width: '100%',
          height: '10%',
          borderRadius: '50%',
          border: '1px solid rgba(16, 185, 129, 0.05)',
          boxShadow: '0 0 100px 20px rgba(16, 185, 129, 0.03)',
          animation: `wave ${LAYOUT.waveAnimationDuration} linear infinite`,
        }}/>
        
        {/* Segunda onda */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '90%',
          height: '10%',
          borderRadius: '50%',
          border: '1px solid rgba(59, 130, 246, 0.05)',
          boxShadow: '0 0 80px 20px rgba(59, 130, 246, 0.03)',
          animation: `wave ${LAYOUT.waveAnimationDuration} linear infinite reverse`,
        }}/>
        
        {/* Tercera onda */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '80%',
          height: '10%',
          borderRadius: '50%',
          border: '1px solid rgba(245, 158, 11, 0.05)',
          boxShadow: '0 0 120px 20px rgba(245, 158, 11, 0.03)',
          animation: `wave ${LAYOUT.waveAnimationDuration} linear infinite`,
          animationDelay: '2s',
        }}/>
      </div>
      
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
      
      {/* Contenido principal */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        zIndex: 5,
        marginTop: `${LAYOUT.tagTop}px`,
      }}>
        {/* Etiqueta superior con estilo del PDFHero */}
        <div style={{
          display: 'inline-block',
          padding: '10px 22px',
          background: `linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(31, 41, 55, 0.95) 100%)`,
          borderRadius: '50px',
          marginBottom: '20px',
          backdropFilter: 'blur(10px)',
          border: `1px solid rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.4)`,
          boxShadow: `0 5px 15px -3px rgba(0,0,0,0.4), 0 0 15px rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.15), inset 0 1px 1px rgba(255,255,255,0.1)`,
          position: 'relative',
          overflow: 'hidden',
          transform: 'perspective(800px) rotateX(2deg)',
          transformStyle: 'preserve-3d',
        }}>
          {/* Efecto de brillos internos */}
          <div style={{
            position: 'absolute',
            top: '-60%',
            left: '-10%',
            width: '120%',
            height: '200%',
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 60%)',
            zIndex: 0,
            transform: 'translateZ(5px)',
          }}/>
          
          {/* Línea superior tecnológica */}
          <div style={{
            position: 'absolute',
            top: '5px',
            left: '8%',
            width: '84%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.6), transparent)`,
            zIndex: 1,
            transform: 'translateZ(10px)',
          }}/>
          
          {/* Línea inferior tecnológica */}
          <div style={{
            position: 'absolute',
            bottom: '5px',
            left: '8%',
            width: '84%',
            height: '1px',
            background: `linear-gradient(90deg, transparent, rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3), transparent)`,
            zIndex: 1,
            transform: 'translateZ(10px)',
          }}/>
          
          <p style={{
            color: '#f8fafc',
            fontWeight: 'bold',
            fontSize: '14px',
            margin: 0,
            position: 'relative',
            zIndex: 2,
            letterSpacing: '0.8px',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)',
            transform: 'translateZ(15px)',
          }}>
            INNOVACIÓN EN ENERGÍA PARA <span style={{ 
              color: '#8B5CF6', // Color púrpura del tema
              textShadow: `0 0 8px rgba(139, 92, 246, 0.6), 0 2px 4px rgba(0,0,0,0.5)`
            }}>TRANSFORMAR</span> ARGENTINA
          </p>
        </div>
        
        {/* Logo con resplandor difuso */}
        <div style={{
          position: 'relative',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: `rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
            filter: 'blur(25px)',
            zIndex: 1,
          }}/>
          
        </div>
        
        {/* Título principal con el estilo coherente */}
        <h1 style={{
          fontSize: `${LAYOUT.titleFontSize}px`,
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '15px',
          letterSpacing: '-0.5px',
        }}>
          BIS <span style={{ color: LAYOUT.primaryColor }}>Integraciones</span>
        </h1>
        
        {/* Subtítulo */}
        <p style={{
          fontSize: `${LAYOUT.subtitleFontSize}px`,
          color: '#e0e0ff',
          maxWidth: '600px',
          margin: '0 auto 20px',
          lineHeight: 1.4,
        }}>
          Soluciones modulares que combinan generación solar,  
          infraestructura sostenible y financiamiento innovador
        </p>
        
        {/* Botones de acción con estilo del PDFHero */}
        <div style={{
          display: 'flex',
          gap: '30px',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: `rgba(${LAYOUT.secondaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.8)`,
            padding: '10px 15px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
            backdropFilter: 'blur(4px)',
          }}>
            <FaLeaf size={18} />
            <span>Parques AllInOne</span>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: `rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.6)`,
            padding: '10px 15px',
            borderRadius: '8px',
            color: 'white',
            fontWeight: 'bold',
            backdropFilter: 'blur(4px)',
          }}>
            <FaSolarPanel size={18} />
            <span>Clusters Solares</span>
          </div>
        </div>
      </div>
      
      {/* Contenedor para las dos imágenes */}
      <div style={{
        position: 'relative',
        width: LAYOUT.imageWidth,
        height: LAYOUT.imageHeight,
        margin: `${LAYOUT.imageMarginTop}px auto 0`,
        zIndex: 2,
      }}>
        {/* Imagen destacada principal */}
        {/* Imagen destacada principal */}
<div style={{
  width: '100%',
  height: '100%',
  backgroundImage: `url(${LAYOUT.featuredImagePath})`,
  backgroundSize: LAYOUT.imageBgSize,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: LAYOUT.imageBgPosition,
  borderRadius: '8px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.5)',
  position: 'relative',
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
</div>
        
        {/* Imagen solar puro incrustada */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '140px',
          height: '120px',
          backgroundImage: `url(${LAYOUT.alternateImagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '6px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
          zIndex: 3,
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.2) 0%, rgba(17, 24, 39, 0.4) 100%)',
            borderRadius: '6px',
          }}/>
          
          <div style={{
            position: 'absolute',
            top: '-16px',
            right: '10px',
            background: `linear-gradient(90deg, ${LAYOUT.primaryColor} 0%, ${LAYOUT.secondaryColor} 100%)`,
            color: 'white',
            padding: '5px 10px',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: 'bold',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}>
            2025
          </div>
        </div>
      </div>
      
      {/* Estadísticas clave en la parte inferior */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '30px',
        margin: `${LAYOUT.statsMarginTop}px auto 0`,
        zIndex: 5,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(31, 41, 55, 0.8)',
          padding: '8px 15px',
          borderRadius: '8px',
          border: `1px solid rgba(${LAYOUT.primaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
          backdropFilter: 'blur(4px)',
        }}>
          <FaSolarPanel size={16} color={LAYOUT.primaryColor} />
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white' }}>+50 MW</p>
            <p style={{ margin: 0, fontSize: '10px', color: '#D1D5DB' }}>Instalados</p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(31, 41, 55, 0.8)',
          padding: '8px 15px',
          borderRadius: '8px',
          border: `1px solid rgba(${LAYOUT.secondaryColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
          backdropFilter: 'blur(4px)',
        }}>
          <FaBuilding size={16} color={LAYOUT.secondaryColor} />
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white' }}>Empresas</p>
            <p style={{ margin: 0, fontSize: '10px', color: '#D1D5DB' }}>Municipios</p>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(31, 41, 55, 0.8)',
          padding: '8px 15px',
          borderRadius: '8px',
          border: `1px solid rgba(${LAYOUT.accentColor.replace('#', '').match(/../g).map(x => parseInt(x, 16)).join(', ')}, 0.3)`,
          backdropFilter: 'blur(4px)',
        }}>
          <FaChartLine size={16} color={LAYOUT.accentColor} />
          <div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: 'white' }}>15 años</p>
            <p style={{ margin: 0, fontSize: '10px', color: '#D1D5DB' }}>Experiencia</p>
          </div>
        </div>
      </div>

      {/* Estilos para animaciones */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(180deg);
          }
          100% {
            transform: scale(1) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default BISPortada;