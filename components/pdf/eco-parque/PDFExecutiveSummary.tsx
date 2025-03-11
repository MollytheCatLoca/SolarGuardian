"use client"

import React from 'react';
import { 
  FaSolarPanel, 
  FaLeaf, 
  FaWifi, 
  FaLightbulb, 
  FaHandHoldingUsd, 
  FaCity,
  FaPlug,
  FaChartLine
} from "react-icons/fa";

// Datos de características
const features = [
  {
    id: "sostenibilidad",
    title: "Sostenibilidad Ambiental",
    icon: <FaLeaf size={16} color="#10B981" />,
    description: "Reduce la huella de carbono municipal y educa a la comunidad",
  },
  {
    id: "ahorro",
    title: "Ahorro Económico",
    icon: <FaHandHoldingUsd size={16} color="#F59E0B" />,
    description: "Minimiza costos de iluminación y mantenimiento a largo plazo",
  },
  {
    id: "comunidad",
    title: "Valor Comunitario",
    icon: <FaCity size={16} color="#6366F1" />,
    description: "Servicios modernos para mayor bienestar ciudadano",
  },
  {
    id: "implementacion",
    title: "Implementación Ágil",
    icon: <FaPlug size={16} color="#EC4899" />,
    description: "Sistema pre-ensamblado que reduce tiempos de instalación",
  }
];

// Datos de ventajas clave
const keyBenefits = [
  { text: "Energía 100% renovable", color: "#10B981" },
  { text: "Monitoreo remoto en tiempo real", color: "#3B82F6" },
  { text: "Modularidad escalable", color: "#8B5CF6" },
  { text: "Financiamiento por leasing", color: "#F59E0B" },
  { text: "Integración con red municipal", color: "#EC4899" },
  { text: "Diseño personalizable", color: "#06B6D4" }
];

const PDFExecutiveSummary: React.FC = () => {
  return (
    <div className="pdf-executive-summary" style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: '#111827',
      color: 'white',
      padding: '20px',
      maxWidth: '250mm',
      maxHeight: '160mm'
    }}>
      {/* Elementos de diseño del fondo */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '30%',
        height: '30%',
        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 1,
      }}/>
      
      <h2 style={{
        fontSize: '20px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom: '15px',
        zIndex: 5,
        textAlign: 'center'
      }}>
        Solución <span style={{ color: '#10B981' }}>Integral</span> para Espacios Públicos Sostenibles
      </h2>
      
      {/* Descripción general */}
      <div style={{
        padding: '15px',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        border: '1px solid rgba(16, 185, 129, 0.3)',
        borderRadius: '8px',
        marginBottom: '20px',
        zIndex: 5,
      }}>
        <p style={{
          fontSize: '13px',
          lineHeight: 1.5,
          color: '#E5E7EB',
        }}>
          <span style={{ fontWeight: 'bold', color: '#10B981' }}>Eco-Parque All-in-One</span> combina la generación de energía solar con equipamiento urbano sostenible, 
          transformando plazas públicas en espacios modernos y ecológicos. Cada sistema modular plug & play 
          proporciona desde 50kW hasta 100kW de energía limpia para alimentar servicios comunitarios de alto valor.
        </p>
      </div>
      
      {/* Características principales */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '15px',
        marginBottom: '20px',
        zIndex: 5,
      }}>
        {features.map((feature) => (
          <div 
            key={feature.id} 
            style={{
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              borderRadius: '8px',
              padding: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
              gap: '10px',
            }}>
              <div style={{
                background: 'rgba(17, 24, 39, 0.6)',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(75, 85, 99, 0.4)',
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
              }}>
                {feature.title}
              </h3>
            </div>
            
            <p style={{
              fontSize: '12px',
              color: '#D1D5DB',
              margin: 0,
              lineHeight: 1.3,
            }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Diagrama de funcionamiento simplificado */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '20px',
        zIndex: 5,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          padding: '10px 15px',
          backgroundColor: 'rgba(17, 24, 39, 0.7)',
          borderRadius: '8px',
          border: '1px solid rgba(75, 85, 99, 0.4)',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'rgba(16, 185, 129, 0.2)',
            borderRadius: '8px',
          }}>
            <FaSolarPanel size={20} color="#10B981" />
            <p style={{ fontSize: '10px', margin: '5px 0 0', color: '#D1D5DB' }}>Generación</p>
          </div>
          
          <div style={{ fontSize: '20px', color: '#6B7280' }}>→</div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            borderRadius: '8px',
          }}>
            <FaPlug size={20} color="#3B82F6" />
            <p style={{ fontSize: '10px', margin: '5px 0 0', color: '#D1D5DB' }}>Container</p>
          </div>
          
          <div style={{ fontSize: '20px', color: '#6B7280' }}>→</div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'rgba(245, 158, 11, 0.2)',
            borderRadius: '8px',
          }}>
            <FaLightbulb size={20} color="#F59E0B" />
            <p style={{ fontSize: '10px', margin: '5px 0 0', color: '#D1D5DB' }}>Servicios</p>
          </div>
          
          <div style={{ fontSize: '20px', color: '#6B7280' }}>→</div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '10px',
            backgroundColor: 'rgba(139, 92, 246, 0.2)',
            borderRadius: '8px',
          }}>
            <FaChartLine size={20} color="#8B5CF6" />
            <p style={{ fontSize: '10px', margin: '5px 0 0', color: '#D1D5DB' }}>Monitoreo</p>
          </div>
        </div>
      </div>
      
      {/* Ventajas clave */}
      <div style={{
        backgroundColor: 'rgba(17, 24, 39, 0.7)',
        borderRadius: '8px',
        padding: '12px',
        border: '1px solid rgba(75, 85, 99, 0.4)',
        marginTop: 'auto',
        zIndex: 5,
      }}>
        <h3 style={{
          fontSize: '14px',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '10px',
        }}>
          Ventajas Clave:
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {keyBenefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <div style={{
                width: '8px',
                height: '8px',
                backgroundColor: benefit.color,
                borderRadius: '2px',
              }}></div>
              <p style={{
                fontSize: '11px',
                color: '#E5E7EB',
                margin: 0,
              }}>
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFExecutiveSummary;