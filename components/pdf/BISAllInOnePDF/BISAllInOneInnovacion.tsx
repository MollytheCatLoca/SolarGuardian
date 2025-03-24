"use client"

import React from 'react';
import { 
  Sun, 
  Package, 
  Cpu, 
  Zap, 
  BarChart, 
  Battery, 
  Building2, 
  Clock, 
  RefreshCcw, 
  CheckCircle2, 
  DollarSign, 
  Landmark, 
  Shield, 
  LucideIcon,
  Image
} from 'lucide-react';

const BISAllInOneDashboard = () => {
  // Constante para altura general del contenedor
  const CONTAINER_HEIGHT = 100; 
  
  // Constantes para alturas relevantes
  const HEADER_HEIGHT = 80;
  const FEATURES_HEIGHT = 100;
  const FOOTER_HEIGHT = 60;
  
  // Función para calcular alturas escaladas
  const getScaledHeight = (baseHeight, scale = 100) => {
    return `${(baseHeight * scale * CONTAINER_HEIGHT) / 10000}px`;
  };

  // Datos para las características principales
  const mainFeatures = [
    {
      icon: Cpu,
      title: "Electrónica y Control Integrados",
      description: "Inversores optimizados y sistemas SCADA con telemetría en tiempo real",
      color: "#0ea5e9"
    },
    {
      icon: Zap,
      title: "Paneles Plug & Play",
      description: "Deploy inmediato con paneles de alta eficiencia (24.5% conversión)",
      color: "#f97316"
    },
    {
      icon: BarChart,
      title: "Solar Guardian Pro",
      description: "Monitoreo 24/7 en tiempo real y automatización de mantenimiento",
      color: "#10b981"
    },
    {
      icon: RefreshCcw,
      title: "Totalmente Relocalizable",
      description: "Diseño modular que permite reubicación y expansión sencilla",
      color: "#8b5cf6"
    }
  ];

  // Datos para los beneficios clave
  const keyBenefits = [
    {
      icon: DollarSign,
      title: "Leasing Inteligente",
      description: "Sin inversión inicial, hasta 30% de ahorro energético",
      highlight: "Energía sin inversión"
    },
    {
      icon: Building2,
      title: "Clusters Energéticos",
      description: "Generación comunitaria y compartición de infraestructura",
      highlight: "Reducción de costos"
    },
   
  ];

  // Componente de Feature Card
  const FeatureCard = ({ icon: Icon, title, description, color }: { icon: LucideIcon, title: string, description: string, color: string }) => (
    <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl p-1 ml-5 mr-5 border border-[rgba(255,255,255,0.1)] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-opacity-10" style={{ backgroundColor: color, filter: 'blur(25px)' }}></div>
      <div className="flex items-start gap-2">
        <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-4 w-4" style={{ color }} />
        </div>
        <div>
          <h3 className="text-[11px] font-bold text-white mb-1">{title}</h3>
          <p className="text-[8px] text-[rgba(255,255,255,0.7)] leading-tight">{description}</p>
        </div>
      </div>
    </div>
  );

  // Componente de Benefit Card
  const BenefitCard = ({ icon: Icon, title, description, highlight }: { icon: LucideIcon, title: string, description: string, highlight: string }) => (
    <div className="bg-[rgba(14,165,233,0.08)] backdrop-blur-sm rounded-lg p-2 ml-5 mr-5 border border-[rgba(14,165,233,0.15)]">
      <div className="flex items-start gap-2">
        <div className="bg-[rgba(14,165,233,0.15)] rounded-full p-2 flex-shrink-0">
          <Icon className="h-3 w-3 text-[#38bdf8]" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-[10px] font-bold text-white">{title}</h3>
            <span className="text-[9px] bg-[rgba(14,165,233,0.2)] px-2 py-0.5 rounded-full text-[#38bdf8]">{highlight}</span>
          </div>
          
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#072235] via-[#051c2c] to-[#03111c] text-white p-4 overflow-hidden">
      {/* Efectos de fondo estáticos */}
      <div className="absolute inset-0 z-0">
        {/* Manchas de color */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0ea5e9] rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-[#38bdf8] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-2/3 right-1/3 w-48 h-48 bg-[#f97316] rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        {/* Patrón de cuadrícula con líneas finas */}
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
        
        {/* Efumados en bordes */}
        <div className="absolute top-0 left-0 right-0 h-[54px] bg-gradient-to-b from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[54px] bg-gradient-to-t from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 left-0 bottom-0 w-[54px] bg-gradient-to-r from-[#03111c] to-transparent opacity-20"></div>
        <div className="absolute top-0 right-0 bottom-0 w-[54px] bg-gradient-to-l from-[#03111c] to-transparent opacity-20"></div>
      </div>

      {/* Contenido principal con altura y escala flexibles */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Header con badge categoría y título */}
        <div className="mb-2" style={{ height: getScaledHeight(HEADER_HEIGHT) }}>
          <div className="inline-flex items-center bg-[rgba(14,165,233,0.2)] backdrop-blur-sm px-2 py-1 rounded-full text-[9px] border border-[rgba(14,165,233,0.2)] text-white">
            <Package className="h-3 w-3 text-[#38bdf8] mr-1" />
            Solución Integral
          </div>
          
          <h2 className="text-[20px] font-[700] text-white mt-2 ml-3 drop-shadow-md">
            BIS All-in-One: 
            <span style={{ 
              color: '#0ea5e9',
              background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginLeft: '4px'
            }}> La Revolución en Generación Distribuida</span>
          </h2>
        </div>

        {/* Banner principal con imagen de parque solar */}
        <div className="relative w-full mb-3 -mt-4 rounded-xl overflow-hidden border border-[rgba(14,165,233,0.2)]" style={{ height: '100%' }}>
          <div className="absolute inset-0 bg-[url('/solar-all-in-one.png')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,17,28,0.9)] via-[rgba(3,17,28,0.5)] to-[rgba(3,17,28,0.2)]"></div>
          
          <div className="relative p-4 h-full flex flex-col justify-end">
            <div className="absolute top-3 right-3 bg-[rgba(14,165,233,0.3)] backdrop-blur-md px-4 py-1 -mt-2 rounded-full text-[9px] border border-[rgba(14,165,233,0.2)] text-white flex items-center">
              <Battery className="h-3 w-3 text-[#38bdf8] mr-1" />
              Solución completa y modular
            </div>
            
            {/* Métricas clave */}
            <div className="absolute bottom-1 right-10  mt-6 flex space-x-4">
              <div className="text-center">
                <div className="text-[14px] font-bold text-[#38bdf8]">50kW-5MW</div>
                <div className="text-[7px] text-[rgba(255,255,255,0.7)]">Capacidad</div>
              </div>
              <div className="text-center">
                <div className="text-[14px] font-bold text-[#f97316]">24.5%</div>
                <div className="text-[7px] text-[rgba(255,255,255,0.7)]">Eficiencia</div>
              </div>
              <div className="text-center">
                <div className="text-[14px] font-bold text-[#10b981]">4 años</div>
                <div className="text-[7px] text-[rgba(255,255,255,0.7)]">ROI</div>
              </div>
            </div>
            
            
            <p className="text-[9px] text-white mt-1 max-w-2xl">
              Una <span className="text-[#38bdf8] font-medium">infraestructura completa</span> integrada en un shelter modular. Produce, almacena y gestiona. Creado para ser <span className="text-[#f97316] font-medium">financiado vía leasing </span> y generar ahorros desde su instalación.
            </p>
          </div>
        </div>

        {/* Grid de características principales */}
        <div className="mb-3 mt-3">
          <h3 className="text-[15px] font-bold text-white mb-1 flex items-center">
            <Shield className="h-4 w-4 text-[#f97316] mr-2" />
            ¿Qué lo Hace Único?
          </h3>
          
          <div className="grid grid-cols-2 gap-2 p-1" style={{ height: getScaledHeight(FEATURES_HEIGHT) }}>
            {mainFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Espacio para fotos */}
        <div className="grid grid-cols-3 gap-2 mb-3 ">
        <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-[rgba(14,165,233,0.2)] relative overflow-hidden col-span-2 h-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/solar-all-in-one.jpg")' }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(3,17,28,0.8)] to-transparent p-2">
            <p className="text-[9px] text-white font-medium">Plug & Play</p>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm rounded-xl border border-[rgba(14,165,233,0.2)] relative overflow-hidden h-32">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/solar-allinone.png")' }}></div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(3,17,28,0.8)] to-transparent p-2">
            <p className="text-[9px] text-white font-medium">Shelter</p>
          </div>
        </div>
      </div>

        {/* Sección de almacenamiento - reducida */}
        
        
        {/* Beneficios clave */}
        <div className="mb-5 mt-2 flex-1 ">
          <h3 className="text-[15px] font-bold text-white mb-2 flex items-center">
            <CheckCircle2 className="h-4 w-4 text-[#0ea5e9] mr-2" />
            Beneficios Clave
          </h3>
          
          <div className="grid grid-cols-2 gap-2" style={{ height: '100%' }}>
            {keyBenefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
        
        {/* Conclusión / Footer */}
        <div className="bg-gradient-to-r from-[rgba(14,165,233,0.2)] to-[rgba(56,189,248,0.1)] backdrop-blur-sm rounded-xl p-3 mt-auto border border-[rgba(14,165,233,0.15)] shadow-sm" style={{ height: getScaledHeight(FOOTER_HEIGHT) }}>
          <div className="flex items-center h-full">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(14,165,233,0.3)] flex items-center justify-center">
                <Sun className="h-5 w-5 text-[#38bdf8]" />
              </div>
            </div>
            <div>
              <h4 className="text-[12px] font-bold text-white m-0">El Futuro de la Generación Distribuida</h4>
              <p className="text-[8px] text-[rgba(224,242,254,0.9)] m-0 mt-0">
                Los Parques Solares All-in-One son la pieza clave para un nuevo modelo de infraestructura energética descentralizada.
                BIS Integraciones no solo diseña parques solares, construimos el futuro energético. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISAllInOneDashboard;