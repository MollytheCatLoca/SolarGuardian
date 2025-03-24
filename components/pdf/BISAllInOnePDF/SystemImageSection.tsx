"use client"

import React from "react";
import { ExternalLink, Play, Eye } from "lucide-react";

// Constantes para fine-tuning
const LAYOUT = {
  // Proporciones
  IMAGE_WIDTH_PERCENTAGE: 75, // Porcentaje para la imagen
  FEATURES_WIDTH_PERCENTAGE: 25, // Porcentaje para las características
  
  // Imagen
  IMAGE_WIDTH: 400, // Ancho en px
  IMAGE_HEIGHT: 300, // Alto en px
  IMAGE_BORDER_RADIUS: 12, // Radio de borde
  IMAGE_SHADOW_OPACITY: 0.2, // Opacidad de la sombra
  
  // Features
  FEATURE_GAP: 8, // Espacio entre características
  FEATURE_PADDING: 8, // Padding interno de características
  FEATURE_BORDER_RADIUS: 8, // Radio de borde de características
  FEATURE_BACKGROUND_OPACITY: 0.15, // Opacidad del fondo
  
  // Colores
  PRIMARY_COLOR: 'rgba(6, 182, 212, 0.9)', // Cyan primario
  SECONDARY_COLOR: 'rgba(14, 165, 233, 0.8)', // Sky secundario
  ACCENT_COLOR: 'rgba(20, 184, 166, 0.7)', // Teal acento
  DARK_BG_COLOR: 'rgba(12, 74, 110, 0.3)', // Fondo oscuro
  
  // Texto
  TITLE_SIZE: 11, // Tamaño de fuente de títulos
  DESCRIPTION_SIZE: 9, // Tamaño de fuente de descripciones
};

// Componente de tarjeta de imagen del sistema
const SystemImageCard = () => {
  return (
    <div style={{
      background: LAYOUT.DARK_BG_COLOR,
      backdropFilter: 'blur(10px)',
      borderRadius: `${LAYOUT.IMAGE_BORDER_RADIUS}px`,
      border: '1px solid rgba(6, 182, 212, 0.08)',
      overflow: 'hidden',
      position: 'relative',
      width: `${LAYOUT.IMAGE_WIDTH}px`,
      height: `${LAYOUT.IMAGE_HEIGHT}px`,
      boxShadow: `0 8px 20px -4px rgba(0, 0, 0, ${LAYOUT.IMAGE_SHADOW_OPACITY}), 0 4px 10px -2px rgba(0, 0, 0, ${LAYOUT.IMAGE_SHADOW_OPACITY / 1.5})`,
    }} className="group">
      {/* Overlay de gradiente para dar profundidad */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(8, 145, 178, 0.1) 0%, rgba(20, 184, 166, 0.05) 100%)',
          zIndex: 2
        }}
      />
      
      {/* Imagen del sistema */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url("/solar-gurdian.png")', // Imagen del sistema
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1,
      }} />

      {/* Detalles superpuestos en el fondo */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(to top, rgba(8, 47, 73, 0.9) 0%, rgba(8, 47, 73, 0.6) 60%, transparent 100%)',
        padding: '12px',
        zIndex: 3
      }}>
        <h3 className="text-sm font-medium text-cyan-100 mb-1">Dashboard SolarGuardian</h3>
        <p className="text-xs text-cyan-100/70 mb-2">Interfaz principal de monitoreo en tiempo real</p>
        
        <div className="flex items-center space-x-2">
          <button style={{
            background: 'rgba(6, 182, 212, 0.3)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            borderRadius: '6px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }} className="hover:bg-cyan-700/40">
            <Eye className="h-3 w-3 text-cyan-300 mr-1" />
            <span className="text-[10px] text-cyan-100">Vista previa</span>
          </button>
          
          <button style={{
            background: 'rgba(20, 184, 166, 0.3)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(20, 184, 166, 0.2)',
            borderRadius: '6px',
            padding: '4px 8px',
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }} className="hover:bg-teal-700/40">
            <Play className="h-3 w-3 text-teal-300 mr-1" />
            <span className="text-[10px] text-teal-100">Demo</span>
          </button>
        </div>
      </div>
      
      {/* Badge superior */}
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'rgba(6, 182, 212, 0.2)',
        backdropFilter: 'blur(8px)',
        borderRadius: '4px',
        padding: '3px 6px',
        zIndex: 4,
        border: '1px solid rgba(6, 182, 212, 0.15)',
      }}>
        <span className="text-[9px] text-cyan-100 font-medium">v3.2.1</span>
      </div>
      
      {/* Ícono de enlace externo */}
      <div style={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        background: 'rgba(12, 74, 110, 0.5)',
        backdropFilter: 'blur(8px)',
        borderRadius: '50%',
        padding: '5px',
        zIndex: 4,
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }} className="hover:bg-sky-700/60">
        <ExternalLink className="h-3.5 w-3.5 text-sky-300" />
      </div>
      
      {/* Overlay de borde brillante en hover */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: `${LAYOUT.IMAGE_BORDER_RADIUS}px`,
        pointerEvents: 'none',
        zIndex: 5,
        transition: 'opacity 0.3s ease',
        opacity: 0,
        boxShadow: 'inset 0 0 0 1px rgba(56, 189, 248, 0.3)',
      }} className="group-hover:opacity-100" />
    </div>
  );
};

// Componente de sección completa
const SystemImageSection = () => {
  // Altura calculada para que las características se ajusten a la altura de la imagen
  const containerHeight = LAYOUT.IMAGE_HEIGHT;
  
  return (
    <div style={{
      height: `${containerHeight}px`,
      width: '100%',
      display: 'flex',
      justifyContent: 'center', // Centra horizontalmente
      alignItems: 'center', // Centra verticalmente
    }}>
      {/* Tarjeta de imagen centrada */}
      <SystemImageCard />
    </div>
  );
};

export default SystemImageSection;