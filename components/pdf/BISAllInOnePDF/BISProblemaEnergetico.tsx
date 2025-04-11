"use client"

import React from 'react';
import { AlertTriangle, Zap, DollarSign, BarChart, CloudLightning, TrendingUp, Clock, Activity, RefreshCw } from 'lucide-react';
import CostsCard from './CostsCard';
import ConsequencesCard from './ConsequencesCard';

const BISProblemaEnergetico = () => {
  // Constantes del manual de estilos
  const SPACING = 14; // Espaciado estándar
  const CARD_PADDING = 14; // Padding interno
  
  // Constantes para alturas de tarjetas
  const CARD_HEIGHT_PROBLEM_1 = 120; // Altura para tarjeta de problema 1
  const CARD_HEIGHT_PROBLEM_2 = 129; // Altura para tarjeta de problema 2
  const CARD_HEIGHT_PROBLEM_3 = 120; // Altura para tarjeta de problema 3
  
  // Constantes para alturas de tarjetas de solución
  const CARD_HEIGHT_SOLUTION_1 = 100; // Altura para imagen
  const CARD_HEIGHT_SOLUTION_2 = 180; // Altura para tarjeta de solución
  const CARD_HEIGHT_SOLUTION_3 = 90; // Altura para tarjeta de impacto
  
  // Colores basados en el manual (usando rojo como color principal para crisis energética)
  const COLOR_PRINCIPAL = "#f87171"; // Rojo para limitaciones/problemas
  const COLOR_SECUNDARIO = "#fbbf24"; // Ámbar para soluciones/advertencias
  const COLOR_ALTERNATIVO = "#10b981"; // Esmeralda para impacto positivo

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#072235] via-[#051c2c] to-[#03111c] text-white p-4 overflow-hidden ">
      {/* Efectos de fondo según manual - comprimidos */}
      <div className="absolute inset-0 z-0">
        {/* Manchas de color */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#f87171] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#fbbf24] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Patrón de cuadrícula con líneas finas */}
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
        
        {/* Efumados en bordes - reducidos */}
        <div className="absolute top-0 left-0 right-0 h-[60px] bg-gradient-to-b from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[60px] bg-gradient-to-t from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 left-0 bottom-0 w-[60px] bg-gradient-to-r from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 bottom-0 w-[60px] bg-gradient-to-l from-[#03111c] to-transparent opacity-20"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header (reducido al 8-10% del espacio vertical) */}
        <div className="mb-3">
          {/* Badge categoría más compacto */}
          <div className="inline-block px-3 py-1 bg-[rgba(248,113,113,0.2)] backdrop-blur-sm rounded-full mb-2 border border-[rgba(248,113,113,0.15)]">
            <div className="flex items-center">
              <AlertTriangle className="h-3 w-3 text-[#f87171] mr-1" />
              <p className="text-[10px] font-medium text-[#f87171] uppercase tracking-[0.05em] m-0">
                Crisis energética inminente
              </p>
            </div>
          </div>
          
          {/* Título principal reducido */}
          <h2 className="text-[20px] font-[700] text-white mb-1 drop-shadow-md">
            Infraestructura eléctrica al borde del 
            <span style={{ 
              color: '#f87171',
              background: 'linear-gradient(90deg, #f87171, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}> colapso</span>
          </h2>
          
          {/* Descripción breve más compacta */}
         
        </div>

        {/* Layout de 2 Columnas (comprimido verticalmente) */}
        <div className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-3 mb-3 flex-grow mr-2">
          {/* Columna Izquierda: Problemas/Limitaciones */}
          <div className="space-y-2">
            {/* Problema 1: Infraestructura obsoleta - comprimido */}
            <div className="bg-[rgba(248,113,113,0.1)] backdrop-blur-sm border border-[rgba(248,113,113,0.2)] rounded-[8px] p-[10px]" style={{ height: `${CARD_HEIGHT_PROBLEM_1}px` }}>
              <div className="flex items-start h-full">
                <div className="flex-shrink-0 mr-[6px] mt-4 text-[#f87171]">
                  <Zap size={10} />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h4 className="text-[13px] font-[700] text-[#f87171] mt-3 mb-[3px]">Transporte Saturado</h4>
                    <p className="text-[10px] text-[rgba(224,242,254,0.9)] leading-[1] mt-2 m-0">
                    Argentina no tiene un problema de generación —con 43 GW instalados para una demanda de 30 GW—, tiene un cuello de botella estructural en transporte y distribución: sin inversión, no hay red; sin red, no hay energía. No es magia, es infraestructura.
                    </p>
                  </div>
                  <div className="mt-2 flex items-center">
                    <div className="h-1 flex-grow bg-[rgba(248,113,113,0.1)] rounded-full overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-[#f87171] to-[#fb923c] rounded-full"></div>
                    </div>
                    <span className="ml-2 text-[9px] text-[#f87171] font-medium">95% Saturación</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Problema 2: Proyección de costos - comprimido */}
            
            <CostsCard />
            
          
          </div>
          
          {/* Columna Derecha: Soluciones/Ventajas - comprimida */}
          <div className="flex flex-col space-y-2">
            {/* Imagen principal según manual - reducida */}
            <div className="relative w-full border border-[rgba(255,255,255,0.1)] shadow-md overflow-hidden flex-none rounded-[8px]" style={{ height: `120px` }}>
              <div className="absolute top-[-10px] left-0 right-0 bottom-0 bg-[url('/solar-alarm.jpg')] bg-[size:160%] bg-[position:40%_60%] bg-no-repeat"></div>
              
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[rgba(5,28,44,0.4)] to-[rgba(5,28,44,0)] rounded-[8px] pointer-events-none"></div>
              
              <div className="absolute bottom-[5px] left-[5px] bg-[rgba(5,28,44,0.7)] backdrop-blur-sm p-[3px_8px] rounded-[4px] z-[2]">
                <p className="text-[9px] text-white m-0 font-[500]">
                  El Colapso de la Infraestructura Eléctrica
                </p>
              </div>
            </div>
            
            {/* Ventajas de generación distribuida - comprimida */}
            <div className="bg-[rgba(100,82,60,0)] backdrop-blur-sm border border-[rgba(251,191,36,0.2)] rounded-[8px] p-[1px]" style={{ height: `100px` }}>
              
            <ConsequencesCard />
              
            </div>
            
            {/* Beneficios económicos y ambientales - comprimidos */}
            
          </div>
        </div>
        
        {/* Estadísticas clave (footer) - comprimido */}
        <div className="grid grid-cols-3 gap-2 mt-2">
  {/* Desafío 1 */}
  <div className="bg-[rgba(248,113,113,0.1)] backdrop-blur-sm border border-[rgba(248,113,113,0.15)] rounded-[8px] p-2 text-center">
    <p className="text-[12px] font-bold text-[#f87171] m-0">+25%</p>
    <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">Demanda vs. +5% de expansión en la red</p>
  </div>

  {/* Desafío 2 */}
  <div className="bg-[rgba(251,191,36,0.1)] backdrop-blur-sm border border-[rgba(251,191,36,0.15)] rounded-[8px] p-2 text-center">
  <p className="text-[12px] font-bold text-[#fbbf24] m-0">+5 años</p>
  <p className="text-[8px] text-[rgba(224,242,254,0.7)] m-0">para resolverlo si se actúa hoy</p>
</div>


  {/* Desafío 3 */}
  <div className="bg-[rgba(16,185,129,0.1)] backdrop-blur-sm border border-[rgba(16,185,129,0.15)] rounded-[8px] p-2 text-center">
    <p className="text-[12px] font-bold text-[#b91024] m-0">$10B USD</p>
    <p className="text-[8px] text-[rgba(254,224,229,0.7)] m-0">Financiamiento urgente en redes</p>
  </div>
</div>

       
      </div>
    </div>
  );
};

export default BISProblemaEnergetico;