"use client";

import React from 'react';
import { Sun, CreditCard, TrendingUp, Building2, DollarSign, ArrowDownUp, BarChart3, ChevronUp } from 'lucide-react';

const BISLeasingOportunidad = () => {
  // Constantes del manual de estilos
  const SPACING = 10; // Espaciado estándar
  const CARD_PADDING = 15; // Padding interno

  // Constantes para altura general del contenedor
  const CONTAINER_HEIGHT = 90; // Porcentaje de altura para escalar todo

  // Constantes para alturas y escalado de tarjetas
  const CARD_LEFT_SCALE =100; // Porcentaje de escala para columna izquierda
  const CARD_RIGHT_SCALE = 100; // Porcentaje de escala para columna derecha

  // Alturas base para cada componente individual (en píxeles)
  const HEADER_HEIGHT = 95;
  const CARD_LEFT_HEIGHT = 352;
  const DIAGRAM_HEIGHT = 200;
  const BENEFITS_HEIGHT = 70;
  const CARD_RIGHT_TOP_HEIGHT = 168;
  const CARD_RIGHT_BOTTOM_HEIGHT = 132;
  const FOOTER_HEIGHT = 60;

  // Constantes para distribución de columnas (solo para pantallas md en adelante)
  const LEFT_COLUMN_WIDTH = 50;
  const RIGHT_COLUMN_WIDTH = 50;

  // Padding para las tarjetas
  const MAIN_CARD_PADDING = 15;
  const SUB_CARD_PADDING = 35;

  type baseHeightType = number;
  // Función para calcular alturas escaladas
  const getScaledHeight = (baseHeight: number, scale = 100) => {
    return `${(baseHeight * scale * CONTAINER_HEIGHT) / 10000}px`;
  };

  // Lista de bancos asociados
  const bancos = [
    "Banco Comafi Leasing",
    "BST Leasing",
    "BICE",
    "Provincia Leasing"
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#072235] via-[#051c2c] to-[#03111c] text-white p-4 overflow-hidden">
      {/* Fondo y efectos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#38bdf8] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
        <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 left-0 bottom-0 w-[60px] bg-gradient-to-r from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 bottom-0 w-[60px] bg-gradient-to-l from-[#03111c] to-transparent opacity-20"></div>
      </div>

      {/* Contenedor central */}
      <div className="relative z-10 flex flex-col h-[560px] max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-3" style={{ height: 100 }}>
          <div className="inline-block px-3 py-1 bg-[rgba(14,165,233,0.2)] backdrop-blur-sm rounded-full mb-2 border border-[rgba(14,165,233,0.15)]">
            <div className="flex items-center">
              <CreditCard className="h-3 w-3 text-[#0ea5e9] mr-1" />
              <p className="text-[10px] font-medium text-[#0ea5e9] uppercase tracking-[0.05em] m-0">
                LA OPORTUNIDAD
              </p>
            </div>
          </div>
          <h2 className="text-[20px] font-[700] text-white mb-1 drop-shadow-md">
            Leasing Operativo para{" "}
            <span
              style={{
                color: "#0ea5e9",
                background: "linear-gradient(90deg, #0ea5e9, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Parques Solares All-in-One
            </span>
          </h2>
          <p className="text-[11px] text-[rgba(224,242,254,0.9)] leading-[1.3] mb-2">
            El modelo financiero que está revolucionando la adopción de energía renovable: sin inversión inicial, con ahorros desde el primer mes.
          </p>
        </div>

        {/* Layout de columnas: en móviles 1 columna; en md se usan 40% y 60% */}
        <div className="grid grid-cols-1 md:[grid-template-columns:40%_60%]  h-[300px] gap-3 mb-3 flex-grow">
          {/* Columna izquierda */}
          <div className="flex flex-col h-[450px]">
            <div
              className="bg-[rgba(14,165,233,0.1)] backdrop-blur-sm border border-[rgba(14,165,233,0.2)] rounded-[8px] flex-1 flex flex-col overflow-hidden"
              style={{ padding: `10px` }}
            >
              {/* Sección Diagrama */}
              <div
                className="relative bg-[rgba(14,165,233,0.02)] rounded-lg overflow-hidden flex flex-col items-center justify-center"
                style={{ padding: "10px", height: getScaledHeight(DIAGRAM_HEIGHT, CARD_LEFT_SCALE) }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-[120px] h-[30px] relative bg-[rgba(14,165,233,0.15)] rounded-lg border border-[rgba(14,165,233,0.3)] flex items-center justify-center">
                    <Sun className="text-[#0ea5e9] w-8 h-8" />
                    <div className="grid grid-cols-3 grid-rows-3 gap-1 w-[80%] h-[80%]">
                      {Array(9).fill(0).map((_, i) => (
                        <div key={i} className="bg-[#0ea5e9] opacity-70 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-2 bg-[#0ea5e9] text-white text-[8px] px-2 py-0.5 rounded-full">
                    Parque Solar All-in-One
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-[rgba(14,165,233,0.3)] backdrop-blur-md px-2 py-1 rounded-full text-[8px] border border-[rgba(14,165,233,0.2)]">
                  Leasing Operativo
                </div>
              </div>

              {/* Sección Inversión */}
              <div className="flex flex-col items-center my-3">
                <ArrowDownUp className="text-[#0ea5e9] w-8 h-8" />
                <span className="bg-[rgba(14,165,233,0.2)] text-[#0ea5e9] text-[8px] px-2 py-0.5 rounded-full border border-[rgba(14,165,233,0.3)] mt-1">
                  $0 Inversión Inicial
                </span>
              </div>

              {/* Sección Funcionamiento */}
              <div className="flex justify-between">
                <div className="h-[60px] w-[90px] bg-[rgba(14,165,233,0.1)] rounded-lg border border-[rgba(14,165,233,0.2)] flex flex-col items-center justify-center p-1">
                  <Building2 className="text-[#0ea5e9] w-6 h-6 mb-1" />
                  <div className="text-[8px] text-white text-center">Empresa</div>
                  <div className="text-[7px] text-[rgba(224,242,254,0.7)] text-center">Consumidor</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="w-[60px] flex justify-between items-center mb-1">
                    <div className="h-[1px] w-full bg-[rgba(14,165,233,0.5)]"></div>
                    <ArrowDownUp className="text-[#0ea5e9] w-4 h-4" />
                    <div className="h-[1px] w-full bg-[rgba(14,165,233,0.5)]"></div>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] text-white font-medium">Leasing</div>
                    <div className="text-[8px] text-[rgba(224,242,254,0.7)]">4-6 años</div>
                  </div>
                </div>
                <div className="h-[60px] w-[90px] bg-[rgba(14,165,233,0.1)] rounded-lg border border-[rgba(14,165,233,0.2)] flex flex-col items-center justify-center p-1">
                  <CreditCard className="text-[#0ea5e9] w-6 h-6 mb-1" />
                  <div className="text-[8px] text-white text-center">Banco</div>
                  <div className="text-[7px] text-[rgba(224,242,254,0.7)] text-center">Financista</div>
                </div>
              </div>
            </div>

            {/* Sección Beneficios */}
            <div className="mt-2 flex-1" style={{ minHeight: getScaledHeight(BENEFITS_HEIGHT, CARD_LEFT_SCALE) , gap: "5px", padding: "15px"}}>
              <h4 className="text-[13px] font-[700] text-[#38bdf8] mb-[4px]">Beneficios para la empresa:</h4>
              <div className="space-y-1">
                <div className="flex items-start gap-[6px]">
                  <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(14,165,233,0.2)] flex items-center justify-center flex-shrink-0">
                    <ChevronUp size={9} className="text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#bae6fd] m-0 leading-[1.2]">
                      Rápida adopción, sin CAPEX
                    </p>
                    <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                      Sin necesidad de obras civiles o inversión inicial
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[6px]">
                  <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(14,165,233,0.2)] flex items-center justify-center flex-shrink-0">
                    <ChevronUp size={9} className="text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#bae6fd] m-0 leading-[1.2]">
                      Ahorro desde el primer mes
                    </p>
                    <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                      Reducción del 30% en costos energéticos durante el leasing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[6px]">
                  <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(14,165,233,0.2)] flex items-center justify-center flex-shrink-0">
                    <ChevronUp size={9} className="text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#bae6fd] m-0 leading-[1.2]">
                      Sistema llave en mano
                    </p>
                    <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                      Instalación en días y generación inmediata de energía
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[6px]">
                  <div className="mt-[2px] h-4 w-4 rounded-full bg-[rgba(14,165,233,0.2)] flex items-center justify-center flex-shrink-0">
                    <ChevronUp size={9} className="text-[#0ea5e9]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-[#bae6fd] m-0 leading-[1.2]">
                      Ahorro posterior del 97%
                    </p>
                    <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">
                      19 años de energía prácticamente gratuita post-leasing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col h-[300px]">
            {/* Tarjeta superior derecha */}
            <div
  className="bg-[rgba(14,165,233,0.1)] backdrop-blur-sm border border-[rgba(14,165,233,0.2)] rounded-[8px] flex flex-col h-full"
  style={{ padding: "10px" }}
>
  {/* Título */}
  <h3 className="text-[12px] font-bold text-[#0ea5e9] mb-1">
    Reducción del Riesgo Financiero
  </h3>

  {/* Área escalable principal */}
  <div className="relative flex-1 overflow-hidden rounded-[6px] ">
    {/* Capa de fondo */}
    <div className="absolute inset-0 bg-[rgba(14,165,233,0.05)]"></div>

    {/* Contenido central con dos columnas */}
    <div className="relative flex items-center justify-around h-[85px] z-10">
      {/* Columna izquierda */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-[rgba(14,165,233,0.2)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center relative">
          <TrendingUp className="w-6 h-6 text-[#0ea5e9]" />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white text-[8px] font-bold">
            +
          </div>
        </div>
        <div className="text-center mt-1">
          <p className="text-[9px] font-medium text-white m-0">Activo Movible</p>
          <p className="text-[7px] text-[rgba(224,242,254,0.7)] m-0">
            Reubicable
          </p>
        </div>
      </div>

      {/* Divisor */}
      <div className="h-6 w-1 mt-4 bg-[rgba(14,165,233,0.3)]"></div>

      {/* Columna derecha */}
      <div className="flex flex-col items-center">
        <div className="w-8 h-8 rounded-full bg-[rgba(14,165,233,0.2)] border border-[rgba(14,165,233,0.3)] flex items-center justify-center relative">
          <DollarSign className="w-6 h-6 text-[#0ea5e9]" />
          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white text-[8px] font-bold">
            -
          </div>
        </div>
        <div className="text-center mt-1">
          <p className="text-[9px] font-medium text-white m-0">Menor Riesgo</p>
          <p className="text-[7px] text-[rgba(224,242,254,0.7)] m-0">
            Mejores Tasas
          </p>
        </div>
      </div>
    </div>

    {/* Etiqueta superpuesta */}
    <div className="absolute top-2 right-60 bg-[rgba(14,165,233,0.3)] backdrop-blur-md px-2 py-1 rounded-full text-[10px] border border-[rgba(14,165,233,0.2)] text-white">
      Bancos lo prefieren
    </div>
  </div>

  {/* Grid de indicadores */}
  <div className="grid grid-cols-3 gap-6">
    <div className="bg-gradient-to-br from-[rgba(14,165,233,0.2)] to-[rgba(3,105,161,0.2)] rounded-[6px] text-center border border-[rgba(14,165,233,0.15)] shadow-sm flex flex-col justify-center p-0.3">
      <p className="text-[10px] font-bold text-[#0ea5e9] m-0">100%</p>
      <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">Financiable</p>
    </div>
    <div className="bg-gradient-to-br from-[rgba(14,165,233,0.2)] to-[rgba(3,105,161,0.2)] rounded-[6px] text-center border border-[rgba(14,165,233,0.15)] shadow-sm flex flex-col justify-center p-0.3">
      <p className="text-[12px] font-bold text-[#0ea5e9] m-0">4-6</p>
      <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">Años de plazo</p>
    </div>
    <div className="bg-gradient-to-br from-[rgba(14,165,233,0.2)] to-[rgba(3,105,161,0.2)] rounded-[6px] text-center border border-[rgba(14,165,233,0.15)] shadow-sm flex flex-col justify-center p-0.3">
      <p className="text-[12px] font-bold text-[#0ea5e9] m-0">30%</p>
      <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0">
        Ahorro inmediato
      </p>
    </div>
  </div>
</div>


            {/* Tarjeta inferior derecha */}
            
            <div
            className="bg-[rgba(14,165,233,0.1)] backdrop-blur-sm border border-[rgba(14,165,233,0.2)] rounded-[8px] flex flex-col h-[220px]"
            style={{ padding: "15px", marginTop: "10px" }}
          >
            {/* Header */}
            <header className="flex items-center justify-between mb-3">
              <h3 className="text-[12px] font-bold text-[#0ea5e9] m-0">
                Bancos y Financieras Asociadas
              </h3>
              <span className="bg-gradient-to-r from-[rgba(14,165,233,0.3)] to-[rgba(3,105,161,0.3)] text-[8px] px-2 py-0.5 rounded-full text-white border border-[rgba(14,165,233,0.2)]">
                Alianzas estratégicas
              </span>
            </header>
          
            {/* Main: sección de bancos */}
            <main className="flex-1 mb-1">
              <div className="grid grid-cols-2 gap-2 h-full">
                {bancos.map((banco, index) => (
                  <div
                    key={index}
                    className="bg-[rgba(14,165,233,0.05)] rounded-[4px] border border-[rgba(14,165,233,0.15)] p-2 flex flex-col items-center justify-center"
                  >
                    <div className="flex items-center justify-center w-8 h-8 bg-[rgba(14,165,233,0.15)] rounded-full mb-1">
                      <CreditCard className="w-5 h-5 text-[#0ea5e9]" />
                    </div>
                    <p className="text-[8px] font-medium text-white text-center m-0">
                      {banco}
                    </p>
                  </div>
                ))}
              </div>
            </main>
          
            {/* Footer: descripción */}
            <footer>
              <p className="text-[9px] text-[rgba(224,242,254,0.9)] m-0 leading-tight">
                Líneas de leasing con baja ejecución son perfectas para parques solares All-in-One,
                ofreciendo oportunidades en financiamiento verde y eficiencia energética.
              </p>
            </footer>
          </div>
          





             {/* FIN de Tarjeta inferior derecha */}
          </div>
        </div>

        {/* Conclusión */}
        <div
          className="bg-gradient-to-r from-[rgba(14,165,233,0.2)] to-[rgba(56,189,248,0.2)] backdrop-blur-sm rounded-[8px] p-3 mt-auto border border-[rgba(14,165,233,0.15)] shadow-sm"
          style={{ height: getScaledHeight(FOOTER_HEIGHT) }}
        >
          <div className="flex items-center h-full">
            <div className="flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(14,165,233,0.3)] flex items-center justify-center">
                <BarChart3 className="h-5 w-5 text-[#bae6fd]" />
              </div>
            </div>
            <div>
              <p className="text-[11px] text-white m-0 font-medium">
                El leasing operativo es el acelerador de la transición energética, eliminando barreras financieras y permitiendo adopción masiva de energía renovable.
              </p>
              <p className="text-[9px] text-[rgba(224,242,254,0.7)] m-0 mt-1">
                BIS Integraciones | División Financiera y Leasing Operativo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISLeasingOportunidad;
