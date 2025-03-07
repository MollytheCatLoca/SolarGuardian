// components/pdf/PDFStats.tsx
import React from 'react';

// Datos de estadísticas
const statsData = [
  { number: "99.7%", text: "Disponibilidad del sistema" },
  { number: "20+", text: "Integraciones con fabricantes" },
  { number: "58%", text: "Reducción de incidencias" },
  { number: "35%", text: "Ahorro en costos operativos" }
];

const PDFStats: React.FC = () => {
  return (
    <div className="pdf-stats" style={{
      padding: '10px',
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '15px',
      }}>
        {statsData.map((stat, index) => (
          <div 
            key={index}
            style={{
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(17, 25, 40, 0.75)',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.125)',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#8a3ab4',
              marginBottom: '8px',
            }}>
              {stat.number}
            </div>
            <div style={{
              fontSize: '12px',
              color: '#d1d5db',
            }}>
              {stat.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PDFStats;