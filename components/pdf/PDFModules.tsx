// components/pdf/PDFModules.tsx
import React from 'react';
import { 
  FaSolarPanel, 
  FaBell, 
  FaTools, 
  FaChartLine, 
  FaKey,
  FaMobileAlt,
  FaShieldAlt
} from "react-icons/fa";

// Módulos funcionales - Ahora con 6 módulos para equilibrar el grid
const moduleData = [
  {
    id: "monitoreo",
    title: "Monitoreo",
    icon: <FaSolarPanel size={16} color="#4ade80" />,
    description: "Seguimiento en tiempo real del rendimiento de su parque solar",
    features: [
      "Dashboard personalizable con KPIs",
      "Monitoreo en tiempo real",
      "Seguimiento de generación",
      "Análisis de eficiencia"
    ]
  },
  {
    id: "alertas",
    title: "Alertas",
    icon: <FaBell size={16} color="#fb7185" />,
    description: "Sistema inteligente de alertas y notificaciones",
    features: [
      "Alertas por severidad",
      "Notificaciones multicanal",
      "Diagnóstico automatizado",
      "Histórico de incidencias"
    ]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    icon: <FaTools size={16} color="#f97316" />,
    description: "Gestión avanzada de tareas de mantenimiento",
    features: [
      "Plantillas personalizables",
      "Programación predictiva",
      "Seguimiento de tareas",
      "Histórico de intervenciones"
    ]
  },
  {
    id: "reportes",
    title: "Reportes",
    icon: <FaChartLine size={16} color="#60a5fa" />,
    description: "Informes detallados del rendimiento de su planta",
    features: [
      "Informes personalizados",
      "Análisis financiero",
      "Múltiples formatos",
      "Reportes de impacto"
    ]
  },
  {
    id: "tokens",
    title: "Tokens",
    icon: <FaKey size={16} color="#fbbf24" />,
    description: "Tokenización de la producción energética",
    features: [
      "Tokenización de energía",
      "Seguimiento de CO₂",
      "Certificados digitales",
      "Análisis de valor"
    ]
  },
  {
    id: "seguridad",
    title: "Seguridad",
    icon: <FaShieldAlt size={16} color="#a78bfa" />,
    description: "Protección integral de datos y control de acceso",
    features: [
      "Autenticación avanzada",
      "Control de permisos",
      "Encriptación de datos",
      "Auditoria de actividad"
    ]
  }
];

const PDFModules: React.FC = () => {
  return (
    <div className="pdf-modules" style={{
      padding: '10px',
    }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: '12px',
      }}>
        Módulos <span style={{ color: '#8a3ab4' }}>Funcionales</span>
      </h2>
      
      <p style={{
        fontSize: '12px',
        color: '#d1d5db',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 15px',
      }}>
        Descubra las capacidades de cada módulo de SolarGuardian Pro, diseñados 
        para trabajar en perfecta integración.
      </p>
      
      {/* Diseño grid moderno con 3 columnas y 2 filas para un total de 6 cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        marginTop: '50px',
        gap: '12px',
        maxHeight: '145mm', // Restricción de altura para asegurar que cabe en la página
        paddingBottom: '5mm',
      }}>
        {moduleData.map((module) => (
          <div 
            key={module.id} 
            style={{
              background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.9))',
              border: '1px solid rgba(75, 85, 99, 0.4)',
              borderRadius: '10px',
              padding: '12px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
              gap: '10px',
            }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(138, 58, 180, 0.3), rgba(138, 58, 180, 0.1))',
                padding: '6px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(138, 58, 180, 0.3)',
              }}>
                {module.icon}
              </div>
              <h3 style={{
                fontSize: '15px',
                fontWeight: 'bold',
                color: 'white',
                margin: 0,
              }}>
                {module.title}
              </h3>
            </div>
            
            <p style={{
              fontSize: '11px',
              color: '#d1d5db',
              marginBottom: '8px',
              lineHeight: 1.3,
            }}>
              {module.description}
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '5px',
            }}>
              {module.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '5px',
                  }}
                >
                  <div style={{
                    minWidth: '8px',
                    height: '8px',
                    backgroundColor: '#8a3ab4',
                    borderRadius: '2px',
                    marginTop: '3px',
                  }}></div>
                  <p style={{
                    fontSize: '10px',
                    color: '#e5e7eb',
                    margin: 0,
                  }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFModules;