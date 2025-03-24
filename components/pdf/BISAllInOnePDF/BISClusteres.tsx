"use client"

import React from 'react';
import { Network, Building2, CheckCircle2, Landmark, TrendingUp, Users, Briefcase, Building, Factory } from 'lucide-react';

// Constantes para ajustar fácilmente el layout
const LAYOUT = {
  // Dimensiones y espaciado
  padding: 15,
  
  // Colores y estilos - más sutiles para integrarse con el fondo oscuro
  primaryColor: 'rgba(139, 92, 246, 0.8)', // Púrpura más transparente
  secondaryColor: 'rgba(217, 70, 239, 0.7)', // Fucsia más transparente
  accentColor: 'rgba(167, 139, 250, 0.7)', // Violeta claro más transparente
  
  // Imágenes
  worldImagePath: '/EN_FINMundo.jpg',
};

const BISClusteres = () => {
  // Datos para participantes del clúster
  const participantes = [
    { icon: Building, title: "Municipios", descripcion: "Infraestructura pública y terrenos" },
    { icon: Factory, title: "Industrias", descripcion: "Alto consumo energético continuo" },
    { icon: Building2, title: "Empresas", descripcion: "Oficinas y centros de datos" },
    { icon: Briefcase, title: "Instituciones", descripcion: "Financiamiento y respaldo" }
  ];

  // Datos para los beneficios
  const beneficios = [
    { 
      titulo: "Reducción de costos",
      porcentaje: "-32%", 
      descripcion: "En facturación energética" 
    },
    { 
      titulo: "Retorno de inversión",
      porcentaje: "3.2", 
      descripcion: "Años para recuperar inversión" 
    },
    { 
      titulo: "Impacto ambiental",
      porcentaje: "-127", 
      descripcion: "Toneladas CO₂ evitadas al año" 
    }
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white p-5 overflow-hidden">
      {/* Elementos de diseño del fondo - más sutiles e integrados */}
      <div className="absolute inset-0 z-0">
        {/* Manchas de color con opacidad reducida */}
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-violet-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-fuchsia-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
        
        {/* Patrón de cuadrícula sutil */}
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header con badge categoría y título */}
        <div className="mb-4">
          {/* Badge con efecto más sutil */}
          <div style={{
            position: 'relative',
            zIndex: 10,
            background: 'linear-gradient(90deg, rgba(139, 92, 246, 0.25) 0%, rgba(139, 92, 246, 0.08) 100%)',
            paddingLeft: '15px',
            paddingRight: '20px',
            marginBottom: '15px',
            paddingTop: '6px',
            paddingBottom: '8px',
            borderTopRightRadius: '25px',
            borderBottomRightRadius: '25px',
            backdropFilter: 'blur(6px)',
            boxShadow: '0 8px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
            borderLeft: '3px solid rgba(217, 70, 239, 0.4)',
            display: 'inline-block',
          }}>
            <div className="flex items-center">
              <Network className="h-4 w-4 text-violet-300 mr-2" />
              <p className="text-[11px] font-medium text-violet-200 uppercase tracking-wider m-0">
                Innovación colaborativa
              </p>
            </div>
          </div>
          
          <h2 className="text-xl font-bold text-white ml-1 mb-2">
            Clústeres Energéticos
            <span style={{ 
              color: '#d946ef',
              marginLeft: '8px',
              opacity: 0.85,
            }}>Multiplican el Impacto</span>
          </h2>
          
          <div style={{
            width: '80px',
            height: '3px',
            background: `linear-gradient(90deg, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2))`,
            borderRadius: '2px',
            marginBottom: '10px',
            marginLeft: '1px',
          }}></div>
          
          <p className="text-xs text-gray-300/90 max-w-2xl ml-1">
            Ecosistemas de generación compartida que unen municipios y empresas, maximizando el retorno económico y ambiental.
          </p>
        </div>
        
        {/* Participantes del clúster - más pequeños y sutiles */}
        <div className="mb-3">
          <h3 className="text-sm font-semibold text-violet-200 mb-2 flex items-center ml-1">
            <Users className="h-3.5 w-3.5 text-violet-400 mr-1.5" />
            Participantes del Ecosistema
          </h3>
          
          <div className="grid grid-cols-4 gap-2">
            {participantes.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(30, 41, 59, 0.4)',
                border: '1px solid rgba(139, 92, 246, 0.08)',
                borderRadius: '8px',
                padding: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
              }}>
                <div className="flex flex-col items-center text-center">
                  <div style={{
                background: 'rgba(139, 92, 246, 0.08)',
                padding: '5px',
                borderRadius: '6px',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                    <item.icon className="h-3.5 w-3.5 text-violet-300" />
                  </div>
                  <h4 className="text-[10px] font-medium text-white mb-0.5">{item.title}</h4>
                  <p className="text-[8px] text-gray-300/80">{item.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Ejemplo real y gráfico de impacto */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          {/* Ejemplo real con estilo sutil */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: '10px',
            padding: '12px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(139, 92, 246, 0.08)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[url('/cluster-example.jpg')] bg-cover bg-center opacity-15"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
            </div>
            
            <div className="relative z-10">
              <h4 className="text-xs font-medium text-violet-200 mb-1 flex items-center">
                <Landmark className="h-3 w-3 text-violet-400 mr-1" />
                Corredor Industrial Norte
              </h4>
              <p className="text-[9px] text-gray-300/80 mb-2">
                Clúster que integra 1 municipio y 5 empresas industriales con un parque solar de 2MW.
              </p>
              <div className="flex space-x-2">
                {['−32% costos', '+18 empleos', 'ROI: 3.2 años'].map((item, index) => (
                  <div key={index} style={{
                    background: 'rgba(139, 92, 246, 0.08)',
                    padding: '2px 6px',
                    borderRadius: '12px',
                    fontSize: '8px',
                    color: '#d1d5db',
                    border: '1px solid rgba(139, 92, 246, 0.05)',
                  }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Imagen EN_FINMundo.jpg en lugar de gráfico */}
          <div style={{
            background: 'rgba(30, 41, 59, 0.4)',
            borderRadius: '10px',
            overflow: 'hidden',
            border: '1px solid rgba(139, 92, 246, 0.08)',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
            position: 'relative',
            height: '100%',
          }}>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${LAYOUT.worldImagePath})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.8,
            }}></div>
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.3) 0%, rgba(15, 23, 42, 0.5) 100%)',
            }}></div>
            
            {/* Overlay con título */}
            <div style={{
              position: 'relative',
              zIndex: 10,
              padding: '12px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
              <div>
                <h4 className="text-xs font-medium text-violet-200 mb-1 flex items-center">
                  <TrendingUp className="h-3 w-3 text-violet-400 mr-1" />
                  Impacto Global
                </h4>
                <p className="text-[9px] text-gray-300/80">
                  Nuestras soluciones contribuyen a los objetivos de desarrollo sostenible en energía limpia.
                </p>
              </div>
              
              <div style={{
                background: 'rgba(139, 92, 246, 0.1)',
                padding: '4px 8px',
                borderRadius: '16px',
                fontSize: '8px',
                color: '#d1d5db',
                border: '1px solid rgba(139, 92, 246, 0.1)',
                alignSelf: 'flex-start',
                marginTop: 'auto',
              }}>
                Integración energética sustentable
              </div>
            </div>
          </div>
        </div>
        
        {/* Beneficios clave con estilo más sutil */}
        <div className="mb-2">
          <h3 className="text-sm font-semibold text-violet-200 mb-2 flex items-center ml-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 mr-1.5" />
            Indicadores de Éxito
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            {beneficios.map((item, index) => (
              <div key={index} style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '8px',
                padding: '8px',
                border: '1px solid rgba(139, 92, 246, 0.08)',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
              }}>
                <h4 className="text-[10px] font-medium text-violet-200 mb-0.5">{item.titulo}</h4>
                <div className="flex items-end gap-1">
                  <span style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    color: '#d1d5db',
                    margin: 0,
                  }}>{item.porcentaje}</span>
                  <span className="text-[8px] text-gray-300/80 pb-0.5">{item.descripcion}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer con estilo de BISQuienesSomos */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          borderRadius: '10px',
          padding: '10px',
          border: '1px solid rgba(139, 92, 246, 0.08)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          backdropFilter: 'blur(8px)',
          marginTop: 'auto',
        }}>
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-3">
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(139, 92, 246, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(139, 92, 246, 0.1)',
              }}>
                <Network className="h-4 w-4 text-violet-300" />
              </div>
            </div>
            <div>
              <h4 className="text-xs font-medium text-white m-0">
                Transformando la economía energética regional
              </h4>
              <p className="text-[9px] text-gray-300/80 m-0 mt-0.5">
                Los Clústeres Energéticos de BIS son la pieza clave para un nuevo modelo de infraestructura descentralizada y colaborativa.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISClusteres;