"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Spotlight } from "@/components/ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import { 
  FaSolarPanel, 
  FaBolt, 
  FaChartLine, 
  FaBell, 
  FaTools, 
  FaMobileAlt, 
  FaShieldAlt,
  FaKey, 
  FaCalendarCheck, 
  FaClipboardCheck,
  FaCogs,
  FaChartPie,
  FaServer
} from "react-icons/fa";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

// Datos actualizados de características principales
const featureData = [
  {
    icon: <FaChartLine className="h-8 w-8 text-blue-500" />,
    title: "Dashboard Integral",
    description: "Panel centralizado con métricas, gráficos en tiempo real, y análisis predictivo que simplifica la visualización de todos los indicadores clave."
  },
  {
    icon: <FaServer className="h-8 w-8 text-green-500" />,
    title: "Gestión Avanzada de Dispositivos",
    description: "Monitoreo detallado de inversores, paneles, baterías y sistemas auxiliares con seguimiento de estado y configuración personalizada."
  },
  {
    icon: <FaBell className="h-8 w-8 text-red-500" />,
    title: "Sistema Inteligente de Alertas",
    description: "Detección temprana de incidencias clasificadas por severidad con notificaciones personalizables vía email, SMS y WhatsApp."
  },
  {
    icon: <FaTools className="h-8 w-8 text-orange-500" />,
    title: "Mantenimiento Predictivo",
    description: "Planificación automática de tareas basada en análisis predictivo, con seguimiento de ciclo de vida de componentes y plantillas personalizables."
  },
  {
    icon: <FaCalendarCheck className="h-8 w-8 text-purple-500" />,
    title: "Calendario Integrado",
    description: "Visualización y programación eficiente de tareas de mantenimiento con recordatorios automáticos y asignación a técnicos."
  },
  {
    icon: <FaChartPie className="h-8 w-8 text-yellow-400" />,
    title: "Informes Personalizados",
    description: "Generación de reportes detallados con métricas clave, análisis financiero y comparativas históricas exportables en múltiples formatos."
  },
  {
    icon: <FaKey className="h-8 w-8 text-cyan-500" />,
    title: "Tokenización de Energía",
    description: "Sistema avanzado para la tokenización de energía generada, creando activos digitales auditables con impacto ambiental medible."
  },
  {
    icon: <FaCogs className="h-8 w-8 text-gray-300" />,
    title: "Configuración Avanzada",
    description: "Panel de administración completo para personalizar todos los aspectos de la plataforma, roles de usuario y permisos de acceso."
  }
];

// Nuevas capturas de pantalla para el carrusel
const carouselSlides = [
  {
    title: "Dashboard Centralizado",
    description: "Visualización integral en tiempo real de métricas clave, estado de dispositivos y producción energética.",
    imagePath: "/BIS-Dashboard-Preview.jpg",
    altText: "Dashboard centralizado de SolarGuardian Pro"
  },
  {
    title: "Gestión de Dispositivos",
    description: "Monitoreo detallado de cada componente con acceso a configuraciones, métricas y estado actualizado.",
    imagePath: "/BIS-Devices-Preview.jpg",
    altText: "Pantalla de gestión de dispositivos"
  },
  {
    title: "Sistema de Alertas",
    description: "Centro de notificaciones categorizado con herramientas de diagnóstico y flujos de resolución integrados.",
    imagePath: "/BIS-Alerts-Preview.jpg",
    altText: "Sistema de gestión de alertas"
  },
  {
    title: "Planificación de Mantenimiento",
    description: "Gestión avanzada de tareas preventivas y correctivas con templates personalizables y seguimiento.",
    imagePath: "/BIS-Maintenance-Preview.jpg",
    altText: "Sistema de planificación de mantenimiento"
  },
  {
    title: "Generación de Reportes",
    description: "Informes personalizables con visualizaciones avanzadas para análisis técnico y financiero.",
    imagePath: "/BIS-Performance-Preview.jpg",
    altText: "Sistema de generación de reportes"
  },
  {
    title: "Tokenización de Energía",
    description: "Plataforma para la gestión de tokens energéticos con seguimiento de generación e impacto ambiental.",
    imagePath: "/BIS-Tokens-Preview.jpg",
    altText: "Sistema de tokenización de energía"
  }
];

// Datos actualizados de estadísticas
const statsData = [
  { number: "99.7%", text: "Disponibilidad del sistema" },
  { number: "20+", text: "Integraciones con fabricantes" },
  { number: "58%", text: "Reducción de incidencias" },
  { number: "35%", text: "Ahorro en costos operativos" }
];

// Testimonios actualizados
const testimonials = [
  {
    quote: "SolarGuardian Pro transformó nuestra operación al permitirnos anticipar el 90% de las fallas potenciales. Redujimos el tiempo de inactividad en un 45% y nuestros costos de mantenimiento en un 30%.",
    company: "Energía Solar del Norte",
    name: "Carlos Mendoza",
    role: "Director de Operaciones"
  },
  {
    quote: "La integración con nuestros equipos fue perfecta y la tokenización de energía nos abrió nuevas oportunidades de negocio. La plataforma es robusta, escalable y el soporte técnico es excepcional.",
    company: "Renovables Argentinas",
    name: "Laura Giménez",
    role: "CTO"
  },
  {
    quote: "El ROI de implementar SolarGuardian Pro superó nuestras expectativas. La visibilidad completa de nuestras operaciones nos permitió optimizar recursos, aumentar la producción y mejorar la rentabilidad.",
    company: "SolTech Industries",
    name: "Martín Rodríguez",
    role: "CEO"
  }
];

// Nuevos módulos funcionales para mostrar en pestañas
const moduleTabs = [
  {
    id: "monitoreo",
    title: "Monitoreo",
    icon: <FaSolarPanel className="mr-2" />,
    features: [
      "Dashboard personalizable con KPIs configurables",
      "Monitoreo de rendimiento en tiempo real",
      "Visualización geoespacial de instalaciones",
      "Seguimiento de generación, consumo e inyección",
      "Análisis de eficiencia y pérdidas",
      "Visualización de curvas de carga",
      "Seguimiento de estado de baterías y almacenamiento",
      "Monitoreo de inversores y conversión energética"
    ]
  },
  {
    id: "alertas",
    title: "Alertas",
    icon: <FaBell className="mr-2" />,
    features: [
      "Sistema de alertas categorizado por severidad",
      "Notificaciones multicanal (email, SMS, WhatsApp)",
      "Centro de gestión de incidencias",
      "Diagnóstico preliminar automatizado",
      "Flujos de escalamiento configurables",
      "Histórico y análisis de alertas",
      "Reconocimiento y resolución trackeable",
      "Métricas de tiempo de respuesta y resolución"
    ]
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento",
    icon: <FaTools className="mr-2" />,
    features: [
      "Plantillas de mantenimiento personalizables",
      "Programación automática basada en análisis predictivo",
      "Asignación y seguimiento de tareas",
      "Checklists digitales para verificación",
      "Registro fotográfico de intervenciones",
      "Integración con calendario y recordatorios",
      "Histórico de intervenciones por dispositivo",
      "Cálculo de MTBF y MTTR por componente"
    ]
  },
  {
    id: "reportes",
    title: "Reportes",
    icon: <FaChartLine className="mr-2" />,
    features: [
      "Generación de informes personalizados",
      "Análisis financiero y técnico detallado",
      "Comparativas con períodos anteriores",
      "Múltiples formatos de exportación (PDF, Excel, CSV)",
      "Programación de envío automático",
      "Reportes de impacto ambiental",
      "Métricas de ROI y retorno energético",
      "Análisis predictivo de generación futura"
    ]
  },
  {
    id: "tokens",
    title: "Tokens",
    icon: <FaKey className="mr-2" />,
    features: [
      "Tokenización de energía generada",
      "Mercado interno para compra/venta de tokens",
      "Seguimiento de CO₂ evitado",
      "Certificados ambientales digitales",
      "Registro histórico en blockchain",
      "Análisis de valor generado",
      "Estimación de retorno de inversión",
      "Análisis de CAPEX vs generación tokenizada"
    ]
  }
];

// Caso de estudio para mostrar impacto
const caseStudy = {
  title: "Caso de Éxito: Parque Solar de 5MW en Argentina",
  before: {
    downtime: "45 horas/mes",
    maintenance: "$12,500/mes",
    efficiency: "82%",
    roi: "8.3 años"
  },
  after: {
    downtime: "12 horas/mes",
    maintenance: "$7,800/mes",
    efficiency: "94%",
    roi: "5.9 años"
  },
  results: [
    "73% reducción en tiempo de inactividad",
    "37% ahorro en costos de mantenimiento",
    "12% aumento en eficiencia operativa",
    "2.4 años menos en tiempo de retorno de inversión"
  ]
};

const Home = () => {
  const [refreshHero, setRefreshHero] = useState(false);
  const [activeTab, setActiveTab] = useState("monitoreo");

  useEffect(() => {
    setRefreshHero(true);
    
    // Force CSS styles reload
    const links = document.querySelectorAll('link[rel=stylesheet]');
    links.forEach(link => {
      const href = link.href;
      link.href = '';
      link.href = href;
    });
  }, []);

  // Custom style para componentes con efecto de glassmorphism
  const customStyle = {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto dark overflow-x-hidden">
      <div className="w-full">
        {/* Hero Section con efecto de spotlight y partículas */}
        <section className="relative min-h-screen flex items-center justify-center py-10 mt-10">
          {/* Spotlight effects */}
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
          
          {/* Grid background */}
          <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image: radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>
          
          <div className="container mx-auto px-6 z-10 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <div className="inline-block px-4 py-2 bg-purple-900/30 rounded-full mb-4">
                <p className="uppercase tracking-widest text-xs text-blue-100">
                  Plataforma de Gestión Integral para Parques Solares
                </p>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Solar <span className="text-purple bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Guardian</span> Pro
              </motion.h1>
              
              <motion.p 
                className="md:tracking-wider text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Sistema integral que revoluciona el monitoreo, mantenimiento y optimización de parques solares con tecnología predictiva, tokenización de energía y análisis avanzado.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a href="/dashboard">
                  <MagicButton 
                    title="ACCEDER AL DEMO" 
                    icon={<FaSolarPanel />} 
                    position="right"
                  />
                </a>
                <a href="/contactus">
                  <MagicButton 
                    title="SOLICITAR INFO" 
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </motion.div>
            </motion.div>
            
            {/* Hero image with animation */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="-mt-10 flex justify-center p-4 md:p-12 lg:p-16"
            >
              <div className="relative w-full max-w-5xl mt-14">
                <img 
                  src="/dashboard-main.jpg" 
                  alt="Solar Guardian Pro Dashboard" 
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-800"
                />
                <div className="absolute -top-8 -right-4 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  V 4.0
                </div>
                
                {/* Floating feature highlights */}
                <motion.div 
                  className="absolute -left-4 top-1/4 bg-blue-900/80 text-white p-3 rounded-lg text-sm shadow-lg backdrop-blur-sm border border-blue-500/30"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <FaChartLine className="text-blue-400" />
                    <span>Analytics en tiempo real</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -right-4 top-1/3 bg-green-900/80 text-white p-3 rounded-lg text-sm shadow-lg backdrop-blur-sm border border-green-500/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <FaTools className="text-green-400" />
                    <span>Mantenimiento predictivo</span>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-10 -left-6 bg-purple/30 text-white p-3 rounded-lg text-sm shadow-lg backdrop-blur-sm border border-purple/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <FaKey className="text-purple" />
                    <span>Tokenización energética</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Sección de información general con animaciones */}
        <section className="py-24 relative bg-gradient-to-b from-[#0a0b14] to-[#111928]">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Solución integral para la <span className="text-purple">gestión avanzada</span> de Parques Solares
              </h2>
              <p className="text-gray-300 text-lg">
                SolarGuardian Pro combina monitoreo inteligente, análisis predictivo y gestión automatizada para maximizar la eficiencia y rentabilidad de instalaciones fotovoltaicas de cualquier escala.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="border border-purple-500/30 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/BIS-Dashboard-Monitoreo.jpg" 
                    alt="Dashboard de monitoreo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-purple-500/20 p-2 rounded-full">
                      <FaSolarPanel className="text-purple-400" />
                    </div>
                    <h3 className="text-xl font-bold">Monitoreo Centralizado</h3>
                  </div>
                  <p className="text-gray-400 pl-10">
                    Visualización completa del rendimiento con métricas en tiempo real de todos los componentes del parque solar.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-500/20 p-2 rounded-full">
                      <FaChartLine className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold">Analítica Avanzada</h3>
                  </div>
                  <p className="text-gray-400 pl-10">
                    Algoritmos de IA/ML para análisis predictivo de rendimiento, detección temprana de fallos y optimización de producción.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <FaTools className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold">Mantenimiento Inteligente</h3>
                  </div>
                  <p className="text-gray-400 pl-10">
                    Programación automática de intervenciones predictivas basadas en datos históricos, meteorológicos y estado de componentes.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-yellow-500/20 p-2 rounded-full">
                      <FaKey className="text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-bold">Tokenización Energética</h3>
                  </div>
                  <p className="text-gray-400 pl-10">
                    Transformación de la energía producida en activos digitales con trazabilidad, certificación ambiental y valor económico.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de características principales con diseño actualizado */}
        <section className="py-24 relative bg-[#0a0b14]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Características <span className="text-purple">Principales</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Una plataforma integral diseñada para maximizar la eficiencia operativa, reducir costos de mantenimiento y aumentar la rentabilidad de sus instalaciones solares.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featureData.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={customStyle}
                  className="p-6 rounded-xl flex flex-col h-full hover:border-purple-500 transition-all duration-300"
                >
                  <div className="bg-[#111928]/70 p-3 rounded-full w-fit mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de módulos con pestañas interactivas */}
        <section className="py-24 relative bg-gradient-to-b from-[#111928] to-[#0a0b14]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Módulos <span className="text-purple">Funcionales</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Descubra las capacidades de cada módulo de SolarGuardian Pro, diseñados para trabajar en perfecta integración.
              </p>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
                {moduleTabs.map((tab) => (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="px-6 py-3 m-1 rounded-full bg-[#1f2937]/70 data-[state=active]:bg-purple-600 data-[state=active]:text-white text-gray-300 border border-gray-800 data-[state=active]:border-purple-400"
                  >
                    <div className="flex items-center">
                      {tab.icon}
                      {tab.title}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              <div className="bg-[#111928]/50 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                {moduleTabs.map((tab) => (
                  <TabsContent key={tab.id} value={tab.id} className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                      <div>
                        <h3 className="text-2xl font-bold mb-4 text-white flex items-center">
                          {tab.icon}
                          <span className="ml-2">Módulo de {tab.title}</span>
                        </h3>
                        <p className="text-gray-300 mb-6">
                          Funcionalidades avanzadas para la gestión profesional de cada aspecto de sus instalaciones solares.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {tab.features.map((feature, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-2"
                            >
                              <div className="bg-purple-500/20 p-1 rounded-full mt-1">
                                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                              </div>
                              <p className="text-gray-300 text-sm">{feature}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border border-purple-500/20 rounded-lg overflow-hidden shadow-lg">
                        <img 
                          src={`/module-${tab.id}.jpg`} 
                          alt={`Módulo de ${tab.title}`} 
                          className="w-full h-auto"
                          onError={(e) => {
                            // Fallback para imágenes que no existan
                            e.currentTarget.src = "/BIS-Dashboard-Preview.jpg";
                          }}
                        />
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </div>
            </Tabs>
          </div>
        </section>
        
        {/* Sección de carrusel de pantallas */}
        <section className="py-24 relative bg-[#0a0b14]" style={customStyle}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Explore la <span className="text-purple">Plataforma</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Conozca la interfaz intuitiva y potentes herramientas que SolarGuardian Pro pone a su disposición.
              </p>
            </div>
            
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent>
                {carouselSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-[#0a0b14]/80 border-gray-800">
                        <CardContent className="flex flex-col p-6">
                          <div className="aspect-video relative rounded-xl overflow-hidden mb-6 border border-gray-800">
                            <img 
                              src={slide.imagePath} 
                              alt={slide.altText}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                // Fallback para imágenes que no existan
                                e.currentTarget.src = "/BIS-Dashboard-Preview.jpg";
                              }}
                            />
                          </div>
                          <div className="text-center">
                            <h3 className="text-2xl font-bold mb-2">{slide.title}</h3>
                            <p className="text-gray-400">{slide.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="static transform-none bg-purple-600 hover:bg-purple-700 border-none" />
                <CarouselNext className="static transform-none bg-purple-600 hover:bg-purple-700 border-none" />
              </div>
            </Carousel>
            
            <div className="text-center mt-12">
              <a href="/contactus">
                <MagicButton 
                  title="Solicitar Demostración Personalizada" 
                  icon={<FaLocationArrow />} 
                  position="right"
                />
              </a>
            </div>
          </div>
        </section>
        
        {/* Sección de caso de estudio */}
        <section className="py-24 relative bg-gradient-to-b from-[#0a0b14] to-[#111928]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Impacto <span className="text-purple">Real</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Conozca los resultados tangibles que nuestros clientes han logrado implementando SolarGuardian Pro.
              </p>
            </div>
            
            <div className="bg-[#111928]/80 border border-gray-800 rounded-xl p-8 max-w-5xl mx-auto backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">{caseStudy.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="border border-red-500/20 bg-red-900/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-red-400">Antes de SolarGuardian Pro</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Tiempo de inactividad:</span>
                      <span className="text-red-400 font-bold">{caseStudy.before.downtime}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Costos de mantenimiento:</span>
                      <span className="text-red-400 font-bold">{caseStudy.before.maintenance}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Eficiencia operativa:</span>
                      <span className="text-red-400 font-bold">{caseStudy.before.efficiency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Retorno de inversión:</span>
                      <span className="text-red-400 font-bold">{caseStudy.before.roi}</span>
                    </div>
                  </div>
                </div>
                
                <div className="border border-green-500/20 bg-green-900/10 rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-4 text-green-400">Con SolarGuardian Pro</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Tiempo de inactividad:</span>
                      <span className="text-green-400 font-bold">{caseStudy.after.downtime}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Costos de mantenimiento:</span>
                      <span className="text-green-400 font-bold">{caseStudy.after.maintenance}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                      <span className="text-gray-400">Eficiencia operativa:</span>
                      <span className="text-green-400 font-bold">{caseStudy.after.efficiency}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Retorno de inversión:</span>
                      <span className="text-green-400 font-bold">{caseStudy.after.roi}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple/10 border border-purple/20 rounded-3xl p-6">
                <h4 className="text-xl font-semibold mb-4 text-center text-purple">Resultados Destacados</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div 
                      key={index} 
                      className="bg-[#111928] p-4 rounded-lg border border-gray-800 text-center"
                    >
                      <p className="text-white">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Sección de estadísticas clave con animación */}
        <section className="py-16 relative bg-[#111928]">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={customStyle}
                  className="p-8 rounded-xl flex flex-col items-center text-center"
                >
                  <div className="text-3xl md:text-5xl font-bold text-purple bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 mb-4">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-gray-300">{stat.text}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de testimonios mejorada */}
        <section className="py-24 relative bg-gradient-to-b from-[#111928] to-[#0a0b14]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Lo que dicen nuestros <span className="text-purple">Clientes</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Empresas líderes del sector energético confían en SolarGuardian Pro para optimizar sus operaciones.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  style={customStyle}
                  className="p-8 rounded-xl h-full flex flex-col"
                >
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-8 flex-grow italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-sm text-purple">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sección de integraciones /Users/maxkeczeli/Proyects/SolarG/frontend/public/Abb_logo_PNG6.png*/}
        <section className="py-16 relative bg-[#0a0b14]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integraciones <span className="text-purple">Empresariales</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                SolarGuardian Pro se integra perfectamente con los principales fabricantes de equipos para parques solares.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <img src="/BISLogo.svg" alt="BISLogo" className="h-32 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/huawei_logo_PNG1.png" alt="Huawei" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/sma-logo.svg" alt="SMA" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/fronius-logo.png" alt="Fronius" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/schneider-logo.svg" alt="Schneider Electric" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/siemens-logo.svg" alt="Siemens" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/Abb_logo_PNG6.png" alt="ABB" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/icons/SolarEdge_logo.svg" alt="SolarEdge" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">¿No encuentra su tecnología? Contáctenos para discutir integraciones personalizadas.</p>
            </div>
          </div>
        </section>
        
        {/* Sección CTA final */}
        <section className="py-24 relative bg-gradient-to-b from-[#0a0b14] to-[#111928]">
          <div className="container mx-auto px-6">
            <div className="bg-[#111928]/80 border border-purple-500/20 rounded-xl p-12 max-w-5xl mx-auto text-center backdrop-blur-sm">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Transforme la gestión de su <span className="text-purple">Parque Solar</span>
              </motion.h2>
              <motion.p 
                className="text-gray-300 text-lg max-w-3xl mx-auto mb-12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Únase a las empresas líderes que han optimizado sus operaciones, reducido costos y maximizado su rentabilidad con SolarGuardian Pro.
              </motion.p>
              
              <motion.div 
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <a href="/dashboard">
                  <MagicButton 
                    title="COMENZAR AHORA" 
                    icon={<FaSolarPanel />} 
                    position="right"
                  />
                </a>
                <a href="/contactus">
                  <MagicButton 
                    title="SOLICITAR DEMOSTRACIÓN" 
                    icon={<FaLocationArrow />} 
                    position="right"
                  />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;