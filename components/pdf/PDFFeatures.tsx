// components/pdf/PDFFeatures.tsx
import React from 'react';
import { 
  FaChartLine, 
  FaServer, 
  FaBell, 
  FaTools, 
  FaCalendarCheck, 
  FaChartPie,
  FaKey, 
  FaCogs
} from "react-icons/fa";

// Features data to display
const featureData = [
  {
    icon: <FaChartLine size={18} color="#3b82f6" />,
    title: "Dashboard Integral",
    description: "Panel centralizado con métricas, gráficos en tiempo real, y análisis predictivo."
  },
  {
    icon: <FaServer size={18} color="#10b981" />,
    title: "Gestión de Dispositivos",
    description: "Monitoreo detallado de inversores, paneles, baterías y sistemas auxiliares."
  },
  {
    icon: <FaBell size={18} color="#ef4444" />,
    title: "Sistema de Alertas",
    description: "Detección temprana de incidencias clasificadas por severidad con notificaciones."
  },
  {
    icon: <FaTools size={18} color="#f97316" />,
    title: "Mantenimiento Predictivo",
    description: "Planificación automática de tareas basada en análisis predictivo."
  },
  {
    icon: <FaCalendarCheck size={18} color="#8b5cf6" />,
    title: "Calendario Integrado",
    description: "Visualización y programación eficiente de tareas de mantenimiento."
  },
  {
    icon: <FaChartPie size={18} color="#eab308" />,
    title: "Informes Personalizados",
    description: "Generación de reportes detallados con métricas clave y análisis financiero."
  },
  {
    icon: <FaKey size={18} color="#06b6d4" />,
    title: "Tokenización de Energía",
    description: "Sistema para la tokenización de energía generada con impacto ambiental medible."
  },
  {
    icon: <FaCogs size={18} color="#94a3b8" />,
    title: "Configuración Avanzada",
    description: "Panel para personalizar la plataforma, roles de usuario y permisos."
  }
];

const PDFFeatures: React.FC = () => {
  return (
    <div className="pdf-features" style={{
      padding: '10px',
    }}>
      <h2 style={{
        fontSize: '28px',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        Características <span style={{ color: '#8a3ab4' }}>Principales</span>
      </h2>
      
      <p style={{
        fontSize: '14px',
        color: '#d1d5db',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto 30px',
      }}>
        Una plataforma integral diseñada para maximizar la eficiencia operativa, reducir costos 
        de mantenimiento y aumentar la rentabilidad de sus instalaciones solares.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
      }}>
        {featureData.map((feature, index) => (
          <div key={index} style={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(17, 25, 40, 0.75)',
            borderRadius: '12px',
            border: '1px solid rgba(255, 255, 255, 0.125)',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}>
            <div style={{
              backgroundColor: 'rgba(17, 25, 40, 0.7)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
            }}>
              {feature.icon}
            </div>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '8px',
            }}>
              {feature.title}
            </h3>
            <p style={{
              fontSize: '12px',
              color: '#d1d5db',
              lineHeight: 1.4,
            }}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFFeatures;