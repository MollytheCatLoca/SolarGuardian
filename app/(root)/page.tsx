"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/Text-Generate-Effect";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import { FaSolarPanel, FaBolt, FaChartLine, FaBell, FaTools, FaMobileAlt } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from "@/components/ui/carousel";

// Define feature data
const featureData = [
  {
    icon: <FaSolarPanel className="h-8 w-8 text-purple-500" />,
    title: "Monitoreo en Tiempo Real",
    description: "Visualiza potencia, energía y eficiencia de tu parque solar en tiempo real desde un dashboard intuitivo."
  },
  {
    icon: <FaBolt className="h-8 w-8 text-yellow-400" />,
    title: "Gestión Energética",
    description: "Optimiza generación y almacenamiento con análisis predictivo que maximiza el rendimiento de tus instalaciones."
  },
  {
    icon: <FaChartLine className="h-8 w-8 text-blue-500" />,
    title: "Análisis de Rendimiento",
    description: "Informes detallados y gráficos interactivos que muestran tendencias y oportunidades de mejora."
  },
  {
    icon: <FaBell className="h-8 w-8 text-red-500" />,
    title: "Sistema de Alertas",
    description: "Notificaciones instantáneas vía email, SMS y WhatsApp ante cualquier incidencia, con diagnóstico preliminar."
  },
  {
    icon: <FaTools className="h-8 w-8 text-green-500" />,
    title: "Mantenimiento Preventivo",
    description: "Planificación inteligente de tareas basada en datos históricos y predicciones de desgaste de componentes."
  },
  {
    icon: <FaMobileAlt className="h-8 w-8 text-indigo-500" />,
    title: "Acceso Multiplataforma",
    description: "Gestiona tu parque solar desde cualquier dispositivo con nuestra aplicación responsive."
  }
];

// Carrousel data
const carouselSlides = [
  {
    title: "Dashboard General",
    description: "Panel centralizado con todas las métricas clave: generación, eficiencia, estado operativo y alertas activas.",
    imagePath: "/BIS-Dashboard-Preview.jpg",
    altText: "Dashboard general de Solar Guardian Pro"
  },
  {
    title: "Monitoreo de Dispositivos",
    description: "Seguimiento detallado de cada componente del sistema: inversores, paneles, baterías y sistemas auxiliares.",
    imagePath: "/BIS-Devices-Preview.jpg",
    altText: "Pantalla de monitoreo de dispositivos"
  },
  {
    title: "Gestión de Alertas",
    description: "Sistema inteligente que clasifica y notifica incidencias según su severidad y prioridad.",
    imagePath: "/BIS-Alerts-Preview.jpg",
    altText: "Sistema de gestión de alertas"
  },
  {
    title: "Mantenimiento Programado",
    description: "Planificación y seguimiento de tareas de mantenimiento preventivo y correctivo.",
    imagePath: "/BIS-Maintenance-Preview.jpg",
    altText: "Calendario de mantenimiento programado"
  },
  {
    title: "Análisis de Rendimiento",
    description: "Informes detallados y visualizaciones que permiten optimizar la operación de tu parque solar.",
    imagePath: "/BIS-Performance-Preview.jpg",
    altText: "Gráficos de análisis de rendimiento"
  }
];

// Stats data
const statsData = [
  { number: "98.7%", text: "Disponibilidad del sistema" },
  { number: "15+", text: "Integraciones con fabricantes" },
  { number: "45%", text: "Reducción de incidencias" },
  { number: "24/7", text: "Monitoreo continuo" }
];

// Testimonial data
const testimonials = [
  {
    quote: "Solar Guardian Pro nos ha permitido reducir en un 35% el tiempo de inactividad por mantenimiento correctivo. La anticipación a fallos es impresionante.",
    company: "Energía Solar del Norte",
    name: "Carlos Mendoza",
    role: "Director de Operaciones"
  },
  {
    quote: "La integración con nuestros inversores Huawei fue perfecta. Ahora tenemos visibilidad total de nuestro parque solar de 25MW desde una sola plataforma.",
    company: "Renovables Argentinas",
    name: "Laura Giménez",
    role: "CTO"
  },
  {
    quote: "El ROI de implementar Solar Guardian Pro fue evidente desde el primer trimestre. Aumentamos nuestra eficiencia operativa en un 22%.",
    company: "SolTech Industries",
    name: "Martín Rodríguez",
    role: "CEO"
  }
];

const Home = () => {
  const [refreshHero, setRefreshHero] = useState(false);

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

  // Custom style for cards and sections
  const customStyle = {
    backdropFilter: "blur(16px) saturate(180%)",
    backgroundColor: "rgba(17, 25, 40, 0.75)",
    borderRadius: "12px",
    border: "1px solid rgba(255, 255, 255, 0.125)",
  };

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto dark">
      <div className="w-full">
        {/* Navigation */}
        
        
        {/* Hero Section */}
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
            <div className="text-center mb-8">
              <p className="uppercase tracking-widest text-xs text-blue-100 mb-4">
                PLATAFORMA DE GESTIÓN DE MANTENIMIENTO PARA PARQUES SOLARES
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Solar <span className="text-purple">Guardian</span> Pro
              </h1>
              
              <p className="md:tracking-wider text-base md:text-lg lg:text-xl text-white max-w-3xl mx-auto mb-8">
                Sistema integral que centraliza el monitoreo, control y optimización de parques solares con inteligencia predictiva y gestión avanzada de mantenimiento.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/energy/dashboard">
                  <MagicButton 
                    title="INICIAR " 
                    icon={<FaSolarPanel />} 
                    position="right"
                  />
                </a>
                <a href="/contactus">
                  <MagicButton 
                    title="Solicitar Información" 
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
              </div>
            </div>
            
            {/* Hero image */}
            <div className="-mt-10 flex justify-center p-44 ">
              <div className="relative w-full max-w-5xl">
                <img 
                  src="/dashboard-main.jpg" 
                  alt="Solar Guardian Pro Dashboard" 
                  className="w-full h-auto rounded-lg shadow-2xl border border-gray-800"
                />
                <div className="absolute -top-8 -right-4 bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium">
                  V 3.5
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Features Section */}
        <section className="py-16 relative -mt-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Características <span className="text-purple-500">Principales</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featureData.map((feature, index) => (
                <div
                  key={index}
                  style={customStyle}
                  className="p-6 rounded-xl flex flex-col h-full hover:border-purple-500 transition-all duration-300"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Interactive Screens Slider Section */}
        <section className="py-16 relative -mt-44" style={customStyle}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Explora la <span className="text-purple">Plataforma</span>
            </h2>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {carouselSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="bg-[#0a0b14] border-gray-800">
                        <CardContent className="flex flex-col p-6">
                          <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
                            <img 
                              src={slide.imagePath} 
                              alt={slide.altText}
                              className="w-full h-full object-cover"
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
              <div className="flex justify-center mt-6 gap-4">
                <CarouselPrevious className="static transform-none bg-purple-600 hover:bg-purple-700 border-none" />
                <CarouselNext className="static transform-none bg-purple-600 hover:bg-purple-700 border-none" />
              </div>
            </Carousel>
            
            <div className="text-center mt-8">
              <a href="/energy/all-in-one">
                <MagicButton 
                  title="Ver Todas las Funcionalidades" 
                  icon={<FaLocationArrow />} 
                  position="right"
                />
              </a>
            </div>
          </div>
        </section>
        
        {/* Key Stats Section */}
        <section className="mt-24 relative">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((stat, index) => (
                <div 
                  key={index} 
                  style={customStyle}
                  className="p-6 rounded-xl flex flex-col items-center text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-purple mb-2">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="-py-24 relative -mt-96">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Lo que dicen nuestros <span className="text-purple">Clientes</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  style={customStyle}
                  className="p-6 rounded-xl h-full flex flex-col"
                >
                  <div className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 flex-grow italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-purple">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Integration Partners Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Integraciones <span className="text-purple">Disponibles</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
              Solar Guardian Pro se integra perfectamente con los principales fabricantes de equipos para parques solares.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <img src="/logos/huawei_logo_PNG1.png" alt="Huawei" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/sma-logo.svg" alt="SMA" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/fronius-logo.png" alt="Fronius" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/schneider-logo.svg" alt="Schneider Electric" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
              <img src="/logos/siemens-logo.svg" alt="Siemens" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 relative" style={customStyle}>
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Listo para transformar la gestión de tu <span className="text-purple">Parque Solar</span>?
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Únete a cientos de empresas que ya han optimizado sus operaciones con Solar Guardian Pro. Solicita una demostración personalizada hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contactus">
                <MagicButton 
                  title="Solicitar Demo" 
                  icon={<FaLocationArrow />} 
                  position="right"
                />
              </a>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <Link href="/contactus">
         
        </Link>
      </div>
    </main>
  );
};

export default Home;