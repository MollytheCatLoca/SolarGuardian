// components/pdf/PDFCaseStudy.tsx
import React from 'react';
import { FaArrowRight, FaCheck, FaChartLine, FaClock, FaCoins, FaTools } from 'react-icons/fa';

// Caso de estudio
const caseStudy = {
  title: "Caso de Éxito: Parque Solar de 5MW en Argentina",
  before: {
    downtime: "45 horas/mes",
    maintenance: "$12,500/mes",
    efficiency: "82%",
    roi: "8.3 años"
  },
  after: {
    downtime: "12 horas/mes",
    maintenance: "$7,800/mes",
    efficiency: "94%",
    roi: "5.9 años"
  },
  results: [
    { 
      title: "73% reducción en inactividad",
      icon: <FaClock size={18} color="#f43f5e" />
    },
    { 
      title: "37% ahorro en mantenimiento",
      icon: <FaTools size={18} color="#10b981" />
    },
    { 
      title: "12% aumento en eficiencia",
      icon: <FaChartLine size={18} color="#3b82f6" />
    },
    { 
      title: "2.4 años menos en ROI",
      icon: <FaCoins size={18} color="#f59e0b" />
    }
  ]
};

const PDFCaseStudy: React.FC = () => {
  return (
    <div className="pdf-case-study" style={{
      padding: '5px 10px',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '-20px',
        color: 'white',
        textAlign: 'center',
        marginBottom: '12px',
      }}>
        Impacto <span style={{ color: '#8a3ab4' }}>Real</span>
      </h2>
      
      <p style={{
        fontSize: '12px',
        color: '#d1d5db',
        textAlign: 'center',
        maxWidth: '700px',
        margin: '0 auto 15px'
      }}>
        Resultados tangibles que nuestros clientes han logrado implementando SolarGuardian Pro.
      </p>
      
      <div style={{
        background: 'linear-gradient(145deg, rgba(24, 27, 42, 0.8), rgba(17, 25, 40, 0.95))',
        border: '1px solid #374151',
        borderRadius: '12px',
        padding: '10px',
        marginTop: '-30px',
        margin: '0 auto',
        scale: '0.8',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}>
        {/* Encabezado con título */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '15px',
        }}>
          <div style={{
            height: '2px',
            width: '60px',
            backgroundColor: '#8a3ab4',
            marginRight: '15px',
          }}></div>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            margin: 0,
          }}>
            {caseStudy.title}
          </h3>
          <div style={{
            height: '2px',
            width: '60px',
            backgroundColor: '#8a3ab4',
            marginLeft: '15px',
          }}></div>
        </div>
        
        {/* Layout apaisado en 3 columnas */}
        <div style={{
          display: 'flex',
          gap: '15px',
          marginBottom: '15px',
          alignItems: 'stretch',
        }}>
          {/* Columna 1: Antes */}
          <div style={{
            flex: '1',
            border: '1px solid rgba(239, 68, 68, 0.2)',
            backgroundColor: 'rgba(239, 68, 68, 0.05)',
            borderRadius: '8px',
            padding: '12px',
          }}>
            <h4 style={{
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#ef4444',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#ef4444',
                borderRadius: '50%',
              }}></div>
              Antes de SolarGuardian Pro
            </h4>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px',
              height: '100%',
            }}>
              {Object.entries(caseStudy.before).map(([key, value], idx) => (
                <div 
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: idx < Object.keys(caseStudy.before).length - 1 ? '6px' : '0',
                    borderBottom: idx < Object.keys(caseStudy.before).length - 1 ? '1px solid rgba(55, 65, 81, 0.5)' : 'none',
                  }}
                >
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {key === 'downtime' && <FaClock size={12} color="#d1d5db" />}
                    {key === 'maintenance' && <FaTools size={12} color="#d1d5db" />}
                    {key === 'efficiency' && <FaChartLine size={12} color="#d1d5db" />}
                    {key === 'roi' && <FaCoins size={12} color="#d1d5db" />}
                    {key === 'downtime' && 'Tiempo inactividad:'}
                    {key === 'maintenance' && 'Costos mant.:'}
                    {key === 'efficiency' && 'Eficiencia oper.:'}
                    {key === 'roi' && 'ROI:'}
                  </span>
                  <span style={{ 
                    color: '#ef4444', 
                    fontWeight: 'bold',
                    fontSize: '12px',
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Columna 2: Flecha y comparativa */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 5px',
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(138, 58, 180, 0.2)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '50%',
              marginBottom: '8px',
            }}>
              <FaArrowRight size={20} color="#8a3ab4" />
            </div>
            <div style={{
              border: '1px dashed rgba(138, 58, 180, 0.4)',
              height: '60%',
              width: '0',
            }}></div>
          </div>
          
          {/* Columna 3: Después */}
          <div style={{
            flex: '1',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            backgroundColor: 'rgba(16, 185, 129, 0.05)',
            borderRadius: '8px',
            padding: '12px',
          }}>
            <h4 style={{
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#10b981',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}>
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
              }}></div>
              Con SolarGuardian Pro
            </h4>
            
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '8px',
              height: '100%',
            }}>
              {Object.entries(caseStudy.after).map(([key, value], idx) => (
                <div 
                  key={key}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingBottom: idx < Object.keys(caseStudy.after).length - 1 ? '6px' : '0',
                    borderBottom: idx < Object.keys(caseStudy.after).length - 1 ? '1px solid rgba(55, 65, 81, 0.5)' : 'none',
                  }}
                >
                  <span style={{ 
                    color: '#d1d5db', 
                    fontSize: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}>
                    {key === 'downtime' && <FaClock size={12} color="#d1d5db" />}
                    {key === 'maintenance' && <FaTools size={12} color="#d1d5db" />}
                    {key === 'efficiency' && <FaChartLine size={12} color="#d1d5db" />}
                    {key === 'roi' && <FaCoins size={12} color="#d1d5db" />}
                    {key === 'downtime' && 'Tiempo inactividad:'}
                    {key === 'maintenance' && 'Costos mant.:'}
                    {key === 'efficiency' && 'Eficiencia oper.:'}
                    {key === 'roi' && 'ROI:'}
                  </span>
                  <span style={{ 
                    color: '#10b981', 
                    fontWeight: 'bold',
                    fontSize: '12px',
                  }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Resultados - Estilo horizontal con íconos */}
        <div style={{
          backgroundColor: 'rgba(138, 58, 180, 0.08)',
          border: '1px solid rgba(138, 58, 180, 0.15)',
          borderRadius: '12px',
          padding: '12px',
        }}>
          <h4 style={{
            fontSize: '15px',
            fontWeight: '600',
            marginBottom: '12px',
            textAlign: 'center',
            color: '#8a3ab4',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}>
            <FaCheck size={14} color="#8a3ab4" />
            Resultados Destacados
          </h4>
          
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '10px',
          }}>
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                style={{
                  flex: 1,
                  background: 'linear-gradient(145deg, rgba(30, 34, 50, 0.7), rgba(17, 24, 39, 0.9))',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid rgba(75, 85, 99, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div style={{
                  backgroundColor: 'rgba(138, 58, 180, 0.1)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {result.icon}
                </div>
                <p style={{ 
                  color: 'white', 
                  fontSize: '12px',
                  textAlign: 'center',
                  fontWeight: '500',
                  margin: 0,
                }}>
                  {result.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFCaseStudy;