"use client";

import React from 'react';
import { FaCheckCircle, FaInfoCircle, FaSolarPanel } from 'react-icons/fa';

// Variables ajustables - consistentes con el template original
const SPACING = 14; // Espaciado estándar entre elementos
const CARD_PADDING = 14; // Padding interno de tarjetas

// Configuración del efumado
const FADE_ENABLED = true;
const FADE_TOP_INTENSITY = 0.2;
const FADE_BOTTOM_INTENSITY = 0.2;
const FADE_LEFT_INTENSITY = 0.2;
const FADE_RIGHT_INTENSITY = 0.2;
const FADE_HEIGHT = 100;
const FADE_WIDTH = 80;
const FADE_TRANSPARENCY = true;

const PDFParquesAllInOne = () => {
  // Función para generar gradientes de efumado
  const getGradientStyle = (direction: string, intensity: number): string => {
    if (FADE_TRANSPARENCY) {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), rgba(7, 34, 53, 0))`;
    } else {
      return `linear-gradient(${direction}, rgba(7, 34, 53, ${intensity}), transparent)`;
    }
  };

  return (
    <div style={{
      width: '100%',
      height: '100%',
      background: 'linear-gradient(135deg, #072235 0%, #051c2c 70%, #03111c 100%)',
      color: '#e0f2fe',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: SPACING,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    }}>
      {/* Background effects */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(234, 88, 12, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(234, 179, 8, 0.15) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '100%',
        zIndex: 1,
        filter: 'blur(40px)',
      }} />
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        zIndex: 1,
      }} />
      {/* Efectos de efumado en los extremos */}
      {FADE_ENABLED && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: FADE_HEIGHT,
            background: getGradientStyle('to bottom', FADE_TOP_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: FADE_HEIGHT,
            background: getGradientStyle('to top', FADE_BOTTOM_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: FADE_WIDTH,
            height: '100%',
            background: getGradientStyle('to right', FADE_LEFT_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }} />
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: FADE_WIDTH,
            height: '100%',
            background: getGradientStyle('to left', FADE_RIGHT_INTENSITY),
            zIndex: 5,
            pointerEvents: 'none',
            mixBlendMode: FADE_TRANSPARENCY ? 'multiply' : 'normal',
          }} />
        </>
      )}

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}>
        {/* Header - compacto */}
        <div style={{
          marginBottom: SPACING * 0.7,
          borderBottom: '1px solid rgba(234, 88, 12, 0.2)',
          paddingBottom: SPACING * 0.5,
          flex: '0 0 auto',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '4px 10px',
            backgroundColor: 'rgba(234, 88, 12, 0.2)',
            borderRadius: '50px',
            marginBottom: SPACING * 0.4,
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(234, 88, 12, 0.15)',
          }}>
            <p style={{
              color: '#fb923c',
              fontWeight: '500',
              fontSize: '11px',
              letterSpacing: '0.05em',
              margin: 0,
            }}>
              SOLUCIÓN INTEGRAL SOLAR
            </p>
          </div>
          <h2 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: 'white',
            margin: '6px 0',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
          }}>
            Parques <span style={{
              color: '#f97316',
              background: 'linear-gradient(90deg, #f97316, #fb923c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>All-in-One</span>
          </h2>
          <p style={{
            fontSize: '13px',
            lineHeight: '1.3',
            color: 'rgba(224, 242, 254, 0.8)',
            maxWidth: '800px',
            margin: '0 0 4px 0',
          }}>
            Energía renovable llave en mano. Simple, eficiente y financiable.
          </p>
        </div>

        {/* Main content - Dos columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: SPACING,
          flex: '1 0 auto',
        }}>
          {/* Columna 1: Descripción, Características Principales, Beneficios */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Descripción */}
            <div style={{
              background: 'rgba(234, 88, 12, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 88, 12, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fb923c',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
              }}>
                ¿Qué es el Generador Solar All-in-One?
              </h3>
              <p style={{
                fontSize: '12px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: 0,
                lineHeight: 1.3,
              }}>
                Es una solución integral y modular. Unico shelter preconfigurado, permitiendo una instalación rápida y asegurando que sea financiable vía leasing.
              </p>
            </div>

            {/* Características Principales */}
            <div style={{
              background: 'rgba(234, 88, 12, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 88, 12, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fb923c',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaCheckCircle size={14} /> Características Principales
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.5,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Shelter preconfigurado: Inversores, comunicaciones, control y transformadores en un solo módulo.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Paneles Plug & Play.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Compatible con Solar Guardian Pro: Monitoreo, optimización y mantenimiento predictivo en tiempo real.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Menos obra civil, menos riesgos: Todo el sistema está diseñado para ser desplegado y operado con mínima inmediatamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficios */}
            <div style={{
              background: 'rgba(234, 88, 12, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 88, 12, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fb923c',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaCheckCircle size={14} /> ¿Por qué elegirlo?
              </h3>
              <p style={{
                fontSize: '12px',
                color: 'rgba(224, 242, 254, 0.9)',
                margin: '0 0 8px 0',
                lineHeight: 1.3,
              }}>
                Pensado para municipios y empresas que buscan independencia energética sin inversión inicial. Homologado por bancos y disponible vía leasing operativo.
              </p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: SPACING * 0.5,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Menos costos energéticos desde el primer día.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Menos restricciones de importación y mayor disponibilidad.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Acceso a financiación inmediata.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fb923c', marginTop: '2px', flexShrink: 0 }}>
                    <FaCheckCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Retorno en solo 4 años.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 2: Imagen, Proceso de Funcionamiento, Características Técnicas */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: SPACING,
          }}>
            {/* Imagen */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '140px', // Altura ajustable
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'url(/EN_BAT_PAN.jpg)', // Ajusta la ruta de la imagen
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }} />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(0deg, rgba(5, 28, 44, 0.4) 0%, rgba(5, 28, 44, 0) 50%)',
                borderRadius: '12px',
                pointerEvents: 'none',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '8px',
                left: '8px',
                background: 'rgba(5, 28, 44, 0.7)',
                backdropFilter: 'blur(8px)',
                padding: '4px 10px',
                borderRadius: '6px',
                zIndex: 2,
              }}>
                <p style={{
                  fontSize: '11px',
                  color: 'white',
                  margin: 0,
                  fontWeight: '500',
                }}>
                  Generador Solar All-in-One
                </p>
              </div>
            </div>

            {/* Proceso de Funcionamiento */}
            <div style={{
              background: 'rgba(234, 179, 8, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
              }}>
                ¿Cómo funciona?
              </h3>
              <ol style={{
                paddingLeft: '16px',
                margin: 0,
                fontSize: '12px',
                color: 'rgba(224, 242, 254, 0.9)',
                lineHeight: 1.4,
              }}>
                <li>Nos pasás tu factura de luz y dimensionamos la mejor solución.</li>
                <li>Te conseguimos la financiación para que empieces sin inversión.</li>
                <li>Instalamos el Generador Solar All-in-One
                  
                </li>
                <li>Operamos y mantenemos remotamente con Solar Guardian Pro.</li>
                <li>Vos solo ahorrás
                </li>
              </ol>
            </div>

            {/* Características Técnicas */}
            <div style={{
              background: 'rgba(234, 179, 8, 0.1)',
              borderRadius: '12px',
              padding: CARD_PADDING,
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(234, 179, 8, 0.2)',
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#fbbf24',
                marginTop: 0,
                marginBottom: SPACING * 0.6,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <FaSolarPanel size={14} /> Características Técnicas
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: SPACING * 0.5,
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Versatilidad total: on-grid, off-grid e híbrido.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Energía solar + almacenamiento inteligente con baterías de última generación.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Plug & Play: conexión a red o autonomía total.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Monitoreo inteligente con IA predictiva y alertas automáticas.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Escalable desde 100 kW hasta 10 MW.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <div style={{ color: '#fbbf24', marginTop: '2px', flexShrink: 0 }}>
                    <FaInfoCircle size={12} />
                  </div>
                  <p style={{ fontSize: '12px', color: 'rgba(224, 242, 254, 0.9)', margin: 0, lineHeight: 1.3 }}>
                    Solar Guardian Pro para monitorea y mantiene tu sistema en tiempo real.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Llamada a la Acción */}
        <div style={{
          background: 'rgba(234, 179, 8, 0.1)',
          borderRadius: '12px',
          padding: '10px 12px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(234, 179, 8, 0.2)',
          marginTop: SPACING,
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#fbbf24',
            margin: 0,
          }}>
            Transformá tu modelo energético con BIS Integraciones. Empezá a ahorrar desde hoy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PDFParquesAllInOne;