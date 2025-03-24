"use client";

import React from 'react';
import { AlertTriangle, Zap, Activity, Clock, TrendingDown, Users, Minimize2 } from 'lucide-react';

const GridCollapseDetailedCard = () => {
  // Constantes y configuración
  const CARD_HEIGHT = 255; // Altura fija de la tarjeta
  const ICON_COLOR = "#ef4444"; // Color del ícono y título (rojo más intenso)
  const BACKGROUND_COLOR = "rgba(239,68,68,0.08)"; // Color de fondo
  const BORDER_COLOR = "rgba(239,68,68,0.15)"; // Color del borde
  
  // Datos completos de los indicadores de la tabla
  const collapseIndicators = [
    { 
      icon: "Minimize2",
      title: "Sobrecarga", 
      current: ">90%", 
      critical: ">80%",
      description: "Transformadores saturados en 65% de las zonas."
    },
    { 
      icon: "Activity",
      title: "Cortes", 
      current: "3-5", 
      critical: "3× más",
      description: "Frecuencia triplicada vs. hace 10 años."
    },
    { 
      icon: "TrendingDown",
      title: "Pérdidas", 
      current: "17-20%", 
      critical: "2× OCDE",
      description: "Muy por encima del 5-8% internacional."
    },
    { 
      icon: "Clock",
      title: "Equipos", 
      current: "30+ años", 
      critical: "20 años",
      description: "70% de transformadores supera su vida útil."
    },
    { 
      icon: "TrendingDown",
      title: "Inversión", 
      current: "-50%", 
      critical: "+20%",
      description: "Cae frente a la demanda creciente."
    },
    { 
      icon: "Users",
      title: "Afectados", 
      current: "900k", 
      critical: "Catastrófico",
      description: "Sin servicio en picos veraniegos."
    }
  ]
  ;
  
  // Seleccionar solo 3 indicadores para mostrar (para mantener el diseño compacto)
  const selectedIndicators = collapseIndicators.slice(0, 6);
  
  // Título y descripción
  const title = "Crisis en la red eléctrica";
  const description = "Múltiples indicadores muestran un inminente colapso del SADI.";

  return (
    <div 
      className="backdrop-blur-sm rounded-[8px] p-[20px]"
      style={{ 
        height: `${CARD_HEIGHT}px`,
        border: `1px solid ${BORDER_COLOR}`,
        backgroundColor: BACKGROUND_COLOR
      }}
    >
      <div className="flex items-start h-full">
        <div className="flex-shrink-0 mr-[1px] mt-1" style={{ color: ICON_COLOR }}>
          <AlertTriangle size={10} />
        </div>
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <div className="flex items-center">
              <h4 
                className="text-[12px] font-[700]  mb-[6px] mr-1" 
                style={{ color: ICON_COLOR }}
              >
                {title}
              </h4>
              <Zap size={10} style={{ color: ICON_COLOR }} />
            </div>
            <p className="text-[9px] text-[rgba(224,242,254,0.9)] leading-[1.2] m-0">
              {description}
            </p>
          </div>
          
          <div className="mt-1">
            {selectedIndicators.map((indicator, index) => (
              <div 
                key={index} 
                className="flex items-center mb-1"
              >
                <div className="flex-shrink-0 mr-1">
                  <div className="p-1 rounded" style={{ backgroundColor: "rgba(239,68,68,0.15)" }}>
                    <indicator.icon size={8} style={{ color: ICON_COLOR }} />
                  </div>
                </div>
                <div className="flex-grow mr-1">
                  <div className="flex items-center">
                    <p className="text-[8px] font-medium m-0 mr-1" style={{ color: "rgba(224,242,254,0.9)" }}>
                      {indicator.title}:
                    </p>
                    <p className="text-[8px] m-0 truncate" style={{ color: "rgba(224,242,254,0.7)" }}>
                      {indicator.description}
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="px-1.5 py-0.5 rounded" style={{ backgroundColor: "rgba(239,68,68,0.2)" }}>
                    <p className="text-[8px] font-bold m-0" style={{ color: ICON_COLOR }}>
                      {indicator.current}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-1 pt-1" style={{ borderTop: "1px dashed rgba(239,68,68,0.2)" }}>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-1" style={{ backgroundColor: "rgba(239,68,68,0.3)" }}></div>
              <p className="text-[7px] text-[rgba(224,242,254,0.7)] m-0">Saturación 95% en líneas clave</p>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full mr-1" style={{ backgroundColor: "rgba(239,68,68,0.3)" }}></div>
              <p className="text-[7px] text-[rgba(224,242,254,0.7)] m-0">Situación catalogada como crítica</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCollapseDetailedCard;