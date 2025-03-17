import React from 'react';
import { Sun, ArrowRight } from 'lucide-react';

const HeroCierreImplementacion = () => {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden bg-gradient-to-r from-[#051c2c] to-[#072235] text-white ">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradients */}
        <div className="absolute top-[10%] left-[5%] w-[60%] h-[40%] bg-amber-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[30%] bg-blue-700/20 rounded-full blur-[100px]" />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]">
          <div className="absolute inset-0 bg-[#051c2c]/40 [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-8">
        <div className="max-w-[90%] w-full flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left Column */}
          <div className="md:w-2/3 flex flex-col items-start space-y-4">
            {/* Badge */}
            <div className="bg-amber-600/30 backdrop-blur-sm border border-amber-500/20 px-4 py-1.5 rounded-full flex items-center gap-2">
              <Sun size={14} className="text-amber-400" />
              <p className="text-xs text-amber-200 font-medium">
                PARQUES ALL-IN-ONE
              </p>
            </div>
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-amber-200">
              Cierre e Implementación<br />Financiera
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg md:text-xl text-blue-50/90 max-w-2xl">
              Soluciones de financiamiento optimizadas para sistemas de energía solar
            </p>
            
            {/* CTA Button */}
            <button className="mt-2 flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 px-6 py-3 rounded-full text-white font-medium transition-all duration-300">
              <span>Iniciar Proceso</span>
              <ArrowRight size={16} />
            </button>
          </div>
          
          {/* Right Column - Feature Pills */}
          <div className="md:w-1/3 flex flex-col items-start space-y-3">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm text-blue-50/90 w-full md:max-w-xs">
              Financiamiento del 100% sin inversión inicial
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm text-blue-50/90 w-full md:max-w-xs">
              Ahorro energético desde el primer día
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full text-sm text-blue-50/90 w-full md:max-w-xs">
              Acompañamiento integral en todo el proceso
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-600 via-blue-600 to-amber-600"></div>
    </div>
  );
};

export default HeroCierreImplementacion;