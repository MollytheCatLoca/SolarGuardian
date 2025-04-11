"use client";

import React from 'react';
import { ZapIcon } from 'lucide-react';

const ElectricityCostsCard = () => {
  // Constantes y configuración
  const CARD_HEIGHT = 255; // Altura fija de la tarjeta
  const ICON_COLOR = "#f87171"; // Color del ícono y título - rojo
  const BACKGROUND_COLOR = "rgba(248,113,113,0.1)"; // Color de fondo
  const BORDER_COLOR = "rgba(248,113,113,0.2)"; // Color del borde
  
  // Datos de tarifas eléctricas por año (USD/MWh)
  const electricityRates = [
    { year: 2023, rate: 93, description: "Subas iniciales" },
    { year: 2024, rate: 105, description: "Reducción de subsidios" },
    { year: 2025, rate: 130, description: "Eliminación 1/3 subsidios" },
    { year: 2026, rate: 150, description: "Costo pleno" },
    { year: 2029, rate: 170, description: "Estabilización alta" }
  ];
  
  // Calcular el porcentaje de aumento desde 2023 a 2029
  const increasePercentage = Math.round(((170 - 93) / 93) * 100);
  
  // Título y descripción
  const title = "Aumento de costos energéticos";
  const description = "Tarifas eléctricas se podrna incrementar hasta un 80% para 2029. (Subsidios/Dolar)";

  // Función para calcular la altura proporcional para el gráfico
  const getBarHeight = (rate) => {
    const minRate = Math.min(...electricityRates.map(item => item.rate));
    const maxRate = Math.max(...electricityRates.map(item => item.rate));
    const range = maxRate - minRate;
    const minHeight = 15; // Altura mínima en píxeles
    const maxHeight = 145; // Altura máxima en píxeles
    
    return minHeight + ((rate - minRate) / range) * (maxHeight - minHeight);
  };

  return (
    <div 
      className="backdrop-blur-sm rounded-[8px] p-[10px]"
      style={{ 
        height: `${CARD_HEIGHT}px`,
        border: `1px solid ${BORDER_COLOR}`,
        backgroundColor: BACKGROUND_COLOR
      }}
    >
      <div className="flex items-start h-full">
        <div className="flex-shrink-0 mr-[6px] mt-1" style={{ color: ICON_COLOR }}>
          <ZapIcon size={10} />
        </div>
        <div className="flex flex-col justify-between h-full w-full">
          <div>
            <h4 
              className="text-[13px] font-[700] mb-[3px]" 
              style={{ color: ICON_COLOR }}
            >
              {title}
            </h4>
            <p className="text-[10px] text-[rgba(224,242,254,0.9)] leading-[1.4] mt-2 m-0">
              {description}
            </p>
          </div>
          
          <div className="mt-1 flex items-end gap-1">
            {electricityRates.map((item, index) => (
              <div key={index} className="flex flex-col items-center" style={{ width: '20%' }}>
                <div 
                  className="w-full rounded-t-sm flex items-center justify-center"
                  style={{ 
                    height: `${getBarHeight(item.rate)}px`,
                    backgroundColor: `rgba(248,113,113,${0.3 + (index * 0.15)})`,
                  }}
                >
                  {index === electricityRates.length - 1 && (
                    <span className="text-[8px] text-white text-center">
                      +{increasePercentage}%
                    </span>
                  )}
                </div>
                <div className="w-full text-center">
                  <p className="text-[7px] text-blue-200 m-0">{item.year}</p>
                  <p className="text-[6px] text-gray-400 m-0">${item.rate}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricityCostsCard;