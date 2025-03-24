"use client";

import React from 'react';
import { Sun, Building2, Home, ArrowDownUp, Globe, ChevronUp } from 'lucide-react';

const BISGeneracionDistribuida = () => {
  // Constantes del manual de estilos
  const SPACING = 10; // Espaciado estándar
  const CARD_PADDING = 10; // Padding interno

  // Constantes para altura general del contenedor
  const CONTAINER_HEIGHT = 100; // Porcentaje de altura para escalar todo (100% por defecto)

  // Constantes para alturas y escalado de tarjetas
  const CARD_LEFT_SCALE = 90; // Porcentaje de escala para columna izquierda (100% por defecto)
  const CARD_RIGHT_SCALE = 90; // Porcentaje de escala para columna derecha (100% por defecto)

  // Alturas base para cada componente individual (en píxeles)
  const HEADER_HEIGHT = 90; // Altura para el encabezado
  const CARD_LEFT_HEIGHT = 372; // Altura para tarjeta izquierda
  const DIAGRAM_HEIGHT = 200; // Altura para la imagen del diagrama
  const BENEFITS_HEIGHT = 150; // Altura para la sección de beneficios
  const CARD_RIGHT_TOP_HEIGHT = 178; // Altura para tarjeta superior derecha
  const CARD_RIGHT_BOTTOM_HEIGHT = 162; // Altura para tarjeta inferior derecha
  const FOOTER_HEIGHT = 60; // Altura para el pie de página

  // Constantes para distribución de columnas (solo para pantallas md en adelante)
  const LEFT_COLUMN_WIDTH = 40; // Porcentaje de ancho para columna izquierda
  const RIGHT_COLUMN_WIDTH = 60; // Porcentaje de ancho para columna derecha

  // Padding para las tarjetas
  const MAIN_CARD_PADDING = 20; // Padding para tarjetas principales
  const SUB_CARD_PADDING = 25; // Padding para tarjetas internas

  // Función para calcular alturas escaladas
  const getScaledHeight = (baseHeight, scale = 100) => {
    return `${(baseHeight * scale * CONTAINER_HEIGHT) / 10000}px`;
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#072235] via-[#051c2c] to-[#03111c] text-white p-4 overflow-hidden">
      {/* Fondo y efectos decorativos */}
      <div className="absolute inset-0 z-0">
        {/* Manchas de color */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#10b981] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#34d399] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

        {/* Patrón de cuadrícula */}
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>

        {/* Efusados en bordes */}
        <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 left-0 bottom-0 w-[60px] bg-gradient-to-r from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 bottom-0 w-[60px] bg-gradient-to-l from-[#03111c] to-transparent opacity-20"></div>
      </div>

      {/* Contenedor central para limitar el ancho y centrar el contenido */}
      <div className="relative z-10 flex flex-col h-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-3" style={{ height: getScaledHeight(HEADER_HEIGHT) }}>
          <div className="inline-block px-3 py-1 bg-[rgba(16,185,129,0.2)] backdrop-blur-sm rounded-full mb-2 border border-[rgba(16,185,129,0.15)]">
            <div className="flex items-center">
              <Sun className="h-3 w-3 text-[#10b981] mr-1" />
              <p className="text-[10px] font-medium text-[#10b981] uppercase tracking-[0.05em] m-0">
                LA SOLUCIÓN
              </p>
            </div>
          </div>
          <h2 className="text-[20px] font-[700] text-white mb-1 drop-shadow-md">
            Descentralización y{" "}
            <span
              style={{
                color: "#10b981",
                background: "linear-gradient(90deg, #10b981, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              eficiencia energética
            </span>
          </h2>
          <p className="text-[11px] text-[rgba(224,242,254,0.9)] leading-[1.3] mb-2">
            La Generación Distribuida permite a empresas y municipios producir su propia electricidad, reduciendo costos y aumentando la eficiencia.
          </p>
        </div>

        {/* Layout de columnas: en móviles 1 columna; en md se usan 40% y 60% */}
        <div
          className="grid grid-cols-1 md:[grid-template-columns:40%_60%] gap-3 mb-3 flex-grow"
        >
          {/* Columna izquierda */}
          <div className="flex flex-col h-full">
            <div
              className="bg-[rgba(16,185,129,0.1)] backdrop-blur-sm border border-[rgba(16,185,129,0.2)] rounded-[8px] flex-1 flex flex-col overflow-hidden"
              style={{ padding: `${MAIN_CARD_PADDING}px` }}
            >
              <h3 className="text-[16px] font-[700] text-[#10b981] mb-[6px]">
                ¿Cómo funciona la Generación Distribuida?
              </h3>
              <div className="flex-grow flex flex-col">
                {/* Diagrama */}
                <div
                  className="relative bg-[rgba(16,185,129,0.02)] rounded-[6px] overflow-hidden flex justify-center items-center flex-none"
                  style={{ padding: "12px", height: getScaledHeight(DIAGRAM_HEIGHT, CARD_LEFT_SCALE) }}
                >
                  <div className="relative w-full h-full flex justify-center items-center">
                    <img
                      src="/solar-gendis.png"
                      alt="Diagrama de Generación Distribuida"
                      className="object-contain max-h-full max-w-full"
                    />
                  </div>
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-[rgba(16,185,129,0.72)] to-[rgba(16,185,109,0.19)] backdrop-blur-md p-[4px_6px] rounded-[4px] text-[9px] border border-[rgba(16,185,129,0.3)] shadow-md">
                    <p className="text-white m-0">Energia Descentralizada</p>
                  </div>
                </div>
                {/* Beneficios */}
                <div className="mt-2 flex-1" style={{ minHeight: getScaledHeight(BENEFITS_HEIGHT, CARD_LEFT_SCALE) }}>
                  <h4 className="text-[13px] font-[700] text-[#34d399] mb-[4px]">Beneficios clave:</h4>
                  <div className="space-y-1">
                    <div className="flex items-start gap-[6px]">
                      <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center flex-shrink-0">
                        <ChevronUp size={9} className="text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[#d1fae5] m-0 leading-[1.2]">
                          Reducción de costos de transmisión
                        </p>
                        <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                          Ahorro del 15-25% en costos operativos energéticos
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px]">
                      <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center flex-shrink-0">
                        <ChevronUp size={9} className="text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[#d1fae5] m-0 leading-[1.2]">
                          Mayor estabilidad del suministro
                        </p>
                        <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                          Reducción de interrupciones &gt;65% en zonas críticas
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px]">
                      <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center flex-shrink-0">
                        <ChevronUp size={9} className="text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[#d1fae5] m-0 leading-[1.2]">
                          Menor impacto ambiental
                        </p>
                        <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                          Reducción de emisiones CO₂ de hasta 90%
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-[6px]">
                      <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center flex-shrink-0">
                        <ChevronUp size={9} className="text-[#10b981]" />
                      </div>
                      <div>
                        <p className="text-[10px] font-medium text-[#d1fae5] m-0 leading-[1.2]">
                          Independencia energética
                        </p>
                        <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                          Autoabastecimiento de hasta 95% en instalaciones óptimas
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col h-full gap-3">
            {/* Tarjeta superior derecha */}
            <div
              className="bg-[rgba(16,185,129,0.1)] backdrop-blur-sm border border-[rgba(16,185,129,0.2)] rounded-[8px] flex-none"
              style={{
                height: getScaledHeight(CARD_RIGHT_TOP_HEIGHT, CARD_RIGHT_SCALE),
                padding: `${SUB_CARD_PADDING}px`
              }}
            >
              <h3 className="text-[13px] font-[700] text-[#10b981] mb-[5px]">Potencial Solar en Argentina</h3>
              <div className="relative overflow-hidden rounded-[6px] mb-2" style={{ height: "55%" }}>
                <div className="absolute inset-0 bg-[url('/argentina-solar-map.jpg')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#03111c] via-[rgba(3,17,28,0.6)] to-[rgba(3,17,28,0.2)]"></div>
                <div className="absolute top-5 right-5 bg-[rgba(16,185,129,0.3)] backdrop-blur-md px-2 py-1 rounded-full text-[8px] border border-[rgba(16,185,129,0.2)] text-white">
                  Alta irradiación
                </div>
                <div className="absolute top-[40%] left-[30%] w-12 h-12 rounded-full border-2 border-[#fde047] border-opacity-30 animate-pulse"></div>
                <div className="absolute top-[25%] left-[45%] w-16 h-16 rounded-full border-2 border-[#fde047] border-opacity-50 animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute top-[30%] left-[60%] w-10 h-10 rounded-full border-2 border-[#fde047] border-opacity-40 animate-pulse" style={{ animationDelay: "1s" }}></div>
                <div className="absolute bottom-0 left-0 w-full p-2">
                  <p className="text-[9px] text-white font-medium">Irradiación solar excepcional en el norte y centro del país</p>
                </div>
              </div>
                <div className="grid grid-cols-3 gap-4" style={{ height: "10%" }}>
                <div className="bg-gradient-to-br from-[rgba(16,185,129,0.2)] to-[rgba(6,95,70,0.2)] rounded-[6px] text-center border border-[rgba(16,185,129,0.15)] shadow-sm flex flex-col justify-center  p-0.5 ">
                  <p className="text-[14px] font-bold text-[#10b981] m-0">2100+</p>
                  <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">kWh/m²/año</p>
                </div>
                <div className="bg-gradient-to-br from-[rgba(16,185,129,0.2)] to-[rgba(6,95,70,0.2)] rounded-[6px] text-center border border-[rgba(16,185,129,0.15)] shadow-sm flex flex-col justify-center p-0.5 ">
                  <p className="text-[14px] font-bold text-[#10b981] m-0">60%</p>
                  <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">más que Alemania</p>
                </div>
                <div className="bg-gradient-to-br from-[rgba(16,185,129,0.2)] to-[rgba(6,95,70,0.2)] rounded-[6px] text-center border border-[rgba(16,185,129,0.15)] shadow-sm flex flex-col justify-center p-0.5">
                  <p className="text-[14px] font-bold text-[#10b981] m-0">2x</p>
                  <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">ROI potencial</p>
                </div>
              </div>
            </div>

            {/* Tarjeta inferior derecha */}
            <div
              className="bg-[rgba(16,185,129,0.1)] backdrop-blur-sm border border-[rgba(16,185,129,0.2)] rounded-[8px] flex-1"
              style={{
                minHeight: getScaledHeight(CARD_RIGHT_BOTTOM_HEIGHT, CARD_RIGHT_SCALE),
                padding: `${SUB_CARD_PADDING}px`
              }}
            >
              <div className="flex items-center justify-between mb-[5px]">
                <h3 className="text-[12px] font-[700] text-[#10b981] m-0">Caso de éxito: Brasil</h3>
                <div className="bg-gradient-to-r from-[rgba(16,185,129,0.3)] to-[rgba(6,95,70,0.3)] text-[8px] px-2 py-0.5 rounded-full text-white border border-[rgba(16,185,129,0.2)]">
                  Referencia regional
                </div>
              </div>
              <div className="flex space-x-4 mb-3" style={{ height: "65%" }}>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center mb-1">
                    <Globe className="h-3 w-3 text-[#10b981] mr-1" />
                    <p className="text-[10px] font-medium text-white">Brasil</p>
                  </div>
                  <div className="w-full flex-1 bg-[rgba(16,185,129,0.05)] rounded-[4px] relative border border-[rgba(16,185,129,0.1)]">
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#065f46] to-[#10b981] w-full h-[90%] rounded-b-[4px]"></div>
                    <div className="absolute top-2 left-0 right-0 text-center">
                      <p className="text-[9px] font-medium text-white mt-3  ">GD Instalada</p>
                      <p className="text-[16px] font-bold text-white m-0 drop-shadow-md">33 GW</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-[rgba(224,242,254,0.9)] mt-1">7 años de crecimiento</p>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center mb-1">
                    <Globe className="h-3 w-3 text-[#10b981] mr-1" />
                    <p className="text-[10px] font-medium text-white">Argentina</p>
                  </div>
                  <div className="w-full flex-1 bg-[rgba(16,185,129,0.05)] rounded-[4px] relative border border-[rgba(16,185,129,0.1)]">
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#065f46] to-[#10b981] w-full h-[5%] rounded-b-[4px]"></div>
                    <div className="absolute top-2 left-0 right-0 text-center">
                      <p className="text-[9px] font-medium text-white mt-3">GD Instalada</p>
                      <p className="text-[16px] font-bold text-white m-0 drop-shadow-md">0.2 GW</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-[rgba(224,242,254,0.9)] mt-1">Potencial sin explotar</p>
                </div>
              </div>
              <div className="h-[20%] flex flex-col justify-between">
                <div className="w-full h-[2px] bg-[rgba(16,185,129,0.1)] relative">
                  <div className="absolute left-0 top-0 h-[2px] w-[5%] bg-[#10b981]"></div>
                  <div className="absolute right-0 -top-1 w-3 h-3 rounded-full bg-[#10b981]"></div>
                  <div className="absolute right-0 top-[-14px] text-[8px] font-medium text-[#10b981]">Potencial AR</div>
                </div>
                <p className="text-[9px] text-[rgba(224,242,254,0.9)] m-0 leading-tight">
                  Brasil creció de 0.2 GW a 33 GW en menos de 7 años gracias a políticas efectivas y esquemas de financiamiento innovadores que impulsaron la transformación del sector.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusión */}
        <div
          className="bg-gradient-to-r from-[rgba(16,185,129,0.2)] to-[rgba(52,211,153,0.2)] backdrop-blur-sm rounded-[8px] p-3 mt-auto border border-[rgba(16,185,129,0.15)] shadow-sm"
          style={{ height: getScaledHeight(FOOTER_HEIGHT) }}
        >
          <div className="flex items-center h-full">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(16,185,129,0.3)] flex items-center justify-center">
                <Sun className="h-5 w-5 text-[#d1fae5]" />
              </div>
            </div>
            <div>
              <p className="text-[11px] text-white m-0 font-medium">
                La Generación Distribuida representa la mayor oportunidad de transformación energética para Argentina, con un potencial de crecimiento similar al experimentado por Brasil.
              </p>
              <p className="text-[9px] text-[rgba(224,242,254,0.7)] m-0 mt-1">
                Estudio realizado por BIS Integraciones | División Energías Renovables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISGeneracionDistribuida;
