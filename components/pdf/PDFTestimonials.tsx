// components/pdf/PDFTestimonials.tsx
import React from 'react';
import { FaQuoteLeft, FaQuoteRight, FaAward, FaChartLine, FaBullseye } from 'react-icons/fa';

// Testimonios
const testimonials = [
  {
    quote: "SolarGuardian Pro transformó nuestra operación al permitirnos anticipar el 90% de las fallas potenciales. Redujimos el tiempo de inactividad en un 45% y nuestros costos de mantenimiento en un 30%.",
    company: "Energía Solar del Norte",
    name: "Carlos Mendoza",
    role: "Director de Operaciones",
    highlight: "45% menos tiempo de inactividad",
    icon: <FaChartLine size={16} color="#4ade80" />
  },
  {
    quote: "La integración con nuestros equipos fue perfecta y la tokenización de energía nos abrió nuevas oportunidades de negocio. La plataforma es robusta, escalable y el soporte técnico es excepcional.",
    company: "Renovables Argentinas",
    name: "Laura Giménez",
    role: "CTO",
    highlight: "Nuevas oportunidades de negocio",
    icon: <FaBullseye size={16} color="#f472b6" />
  },
  {
    quote: "El ROI de implementar SolarGuardian Pro superó nuestras expectativas. La visibilidad completa de nuestras operaciones nos permitió optimizar recursos, aumentar la producción y mejorar la rentabilidad.",
    company: "SolTech Industries",
    name: "Martín Rodríguez",
    role: "CEO",
    highlight: "ROI superior a lo esperado",
    icon: <FaAward size={16} color="#facc15" />
  }
];

const PDFTestimonials: React.FC = () => {
  return (
    <div className="pdf-testimonials" style={{
      padding: '10px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: '25px',
        justifyContent: 'center',
        marginBottom: '15px',
      }}>
        <div style={{
          height: '2px',
          width: '40px',
          marginTop: '0px',
          background: 'linear-gradient(90deg, rgba(138, 58, 180, 0.01), rgba(138, 58, 180, 0.8))',
          marginRight: '15px',
        }}></div>
        <h2 style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
          margin: 0,
        }}>
          Lo que dicen nuestros <span style={{ color: '#8a3ab4' }}>Clientes</span>
        </h2>
        <div style={{
          height: '2px',
          width: '40px',
          background: 'linear-gradient(90deg, rgba(138, 58, 180, 0.8), rgba(138, 58, 180, 0.01))',
          marginLeft: '15px',
        }}></div>
      </div>
      
      <p style={{
        fontSize: '13px',
        color: '#d1d5db',
        textAlign: 'center',
        marginBottom: '20px',
        maxWidth: '600px',
        margin: '0 auto 20px',
      }}>
        Empresas líderes del sector energético confían en SolarGuardian Pro para optimizar sus operaciones
      </p>

      {/* Sección sofisticada de estadísticas */}
      <div style={{
        background: 'linear-gradient(145deg, rgba(24, 27, 42, 0.7), rgba(17, 25, 40, 0.85))',
        borderRadius: '12px',
        marginBottom: '15px',
        marginTop: '55px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        border: '1px solid rgba(75, 85, 99, 0.2)',
      }}>
        <div style={{ 
          textAlign: 'center', 
          padding: '0 15px',
          borderRight: '1px solid rgba(138, 58, 180, 0.2)'
        }}>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(90deg, #8a3ab4, #4361ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '5px',
          }}>
            95%
          </div>
          <div style={{ fontSize: '11px', color: '#d1d5db' }}>
            Tasa de retención de clientes
          </div>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: '0 15px',
          borderRight: '1px solid rgba(138, 58, 180, 0.2)'
        }}>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(90deg, #8a3ab4, #4361ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '5px',
          }}>
            +50
          </div>
          <div style={{ fontSize: '11px', color: '#d1d5db' }}>
            Plantas solares optimizadas
          </div>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: '0 15px',
          borderRight: '1px solid rgba(138, 58, 180, 0.2)'
        }}>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(90deg, #8a3ab4, #4361ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '5px',
          }}>
            32%
          </div>
          <div style={{ fontSize: '11px', color: '#d1d5db' }}>
            Promedio de ahorro mensual
          </div>
        </div>
        <div style={{ 
          textAlign: 'center', 
          padding: '0 15px',
        }}>
          <div style={{ 
            fontSize: '28px', 
            fontWeight: 'bold', 
            background: 'linear-gradient(90deg, #8a3ab4, #4361ee)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '5px',
          }}>
            4.9/5
          </div>
          <div style={{ fontSize: '11px', color: '#d1d5db' }}>
            Calificación de satisfacción
          </div>
        </div>
      </div>
      
      {/* Testimonios en formato horizontal */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '15px',
      }}>
        {testimonials.map((testimonial, index) => (
          <div 
            key={index}
            style={{
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.8))',
              borderRadius: '10px',
              border: '1px solid rgba(75, 85, 99, 0.3)',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            {/* Destacado del testimonio */}
            <div style={{
              position: 'absolute',
              top: '-10px',
              right: '20px',
              backgroundColor: 'rgba(138, 58, 180, 0.9)',
              fontSize: '10px',
              fontWeight: 'bold',
              color: 'white',
              padding: '4px 10px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
            }}>
              {testimonial.icon}
              {testimonial.highlight}
            </div>
            
            {/* Estrellas */}
            <div style={{
              marginBottom: '10px',
              display: 'flex',
            }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#eab308', fontSize: '12px' }}>★</span>
              ))}
            </div>
            
            {/* Comillas decorativa */}
            <div style={{
              position: 'absolute',
              top: '25px',
              left: '10px',
              opacity: 0.1,
              color: '#8a3ab4',
            }}>
              <FaQuoteLeft size={20} />
            </div>
            
            {/* Texto del testimonio */}
            <p style={{
              color: '#d1d5db',
              marginBottom: '10px',
              fontStyle: 'italic',
              fontSize: '11px',
              lineHeight: 1.3,
              padding: '0 5px',
              flex: 1,
            }}>
              "{testimonial.quote}"
            </p>
            
            {/* Comillas decorativa final */}
            <div style={{
              position: 'absolute',
              bottom: '45px',
              right: '10px',
              opacity: 0.1,
              color: '#8a3ab4',
            }}>
              <FaQuoteRight size={20} />
            </div>
            
            {/* Información del cliente */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              borderTop: '1px solid rgba(75, 85, 99, 0.3)',
              paddingTop: '10px',
              marginTop: '5px',
            }}>
              <div style={{
                width: '30px',
                height: '30px',
                backgroundColor: '#8a3ab4',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '12px',
                marginRight: '10px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
              }}>
                {testimonial.name.charAt(0)}
              </div>
              
              <div>
                <p style={{
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '12px',
                  margin: 0,
                }}>
                  {testimonial.name}
                </p>
                <p style={{
                  fontSize: '10px',
                  color: '#9ca3af',
                  margin: '2px 0',
                }}>
                  {testimonial.role} · <span style={{ color: '#8a3ab4' }}>{testimonial.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Panel de confianza adicional */}
      <div style={{
        marginTop: '15px',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '12px',
          color: '#8b5cf6',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
        }}>
          <span style={{ 
            fontSize: '10px', 
            padding: '2px 8px', 
            backgroundColor: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '4px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
          }}>
            NUEVO
          </span>
          Solicite una demostración personalizada y descubra cómo SolarGuardian Pro puede transformar sus operaciones
        </p>
      </div>
    </div>
  );
};

export default PDFTestimonials;