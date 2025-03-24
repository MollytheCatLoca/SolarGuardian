import React from 'react';
import { 
  Sun, 
  Zap, 
  Clock, 
  DollarSign, 
  BarChart, 
  Check, 
  Leaf
} from 'lucide-react';

const SolarInfoCard = () => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full overflow-hidden rounded-xl border border-[rgba(59,130,246,0.3)] shadow-lg bg-gradient-to-br from-[#072235] via-[#051c2c] to-[#03111c] text-white">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-15"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
          
          {/* Grid pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              opacity: 0.4,
              filter: 'blur(0.5px)',
            }}
          ></div>
          
          {/* Edge gradients */}
          <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-[#03111c] to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-[60px] bg-gradient-to-t from-[#03111c] to-transparent opacity-30"></div>
        </div>
        
        {/* Card header */}
        <div className="relative z-10 px-4 pt-4 pb-2 border-b border-blue-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="p-1.5 bg-[rgba(52,211,153,0.15)] rounded-lg">
                <Sun className="h-4 w-4 text-green-400" />
              </div>
              <h2 className="text-xl text-center md:text-2xl font-bold drop-shadow-md mb-2">
              Energía limpia{' '}
              <span className="relative">
                <span
                  className="relative z-10"
                  style={{
                    background: 'linear-gradient(90deg, #38bdf8, #34d399, #a78bfa)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 100%',
                    animation: 'gradientMove 6s linear infinite',
                  }}
                >
                  sin inversión inicial
                </span>
              </span>
            </h2>
            </div>
            
            <div className="inline-flex items-center px-2 py-1 bg-[rgba(59,130,246,0.15)] backdrop-blur-sm rounded-full border border-[rgba(59,130,246,0.3)]">
              <span className="text-xs font-medium text-[#38bdf8] uppercase tracking-wider">All-in-One</span>
            </div>
          </div>
        </div>
        
        {/* Card content - Two columns */}
        <div className="relative z-10 p-4 grid grid-cols-2 gap-4 h-[calc(100%-80px)]">
          {/* Left column */}
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="p-1 bg-[rgba(52,211,153,0.15)] rounded-full mt-0.5 flex-shrink-0">
                <Clock className="h-3 w-3 text-green-400" />
              </div>
              <p className="text-xs text-[rgba(224,242,254,0.9)] leading-tight">
                Incorporá energía solar de forma rápida y sin complicaciones, sin necesidad de obras ni inversiones iniciales.
              </p>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="p-1 bg-[rgba(52,211,153,0.15)] rounded-full mt-0.5 flex-shrink-0">
                <Zap className="h-3 w-3 text-yellow-400" />
              </div>
              <p className="text-xs text-[rgba(224,242,254,0.9)] leading-tight">
                Nuestra solución <span className="text-green-300 font-bold">All-in-One</span> se instala en tiempo récord, permitiéndote empezar a ahorrar desde el primer día.
              </p>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="p-1 bg-[rgba(52,211,153,0.15)] rounded-full mt-0.5 flex-shrink-0">
                <DollarSign className="h-3 w-3 text-blue-400" />
              </div>
              <p className="text-xs text-[rgba(224,242,254,0.9)] leading-tight">
                Pagás solo cuando el sistema está funcionando, con un esquema de leasing flexible, eficiente y pensado para vos.
              </p>
            </div>
            
            <div className="flex items-start space-x-2">
              <div className="p-1 bg-[rgba(52,211,153,0.15)] rounded-full mt-0.5 flex-shrink-0">
                <Check className="h-3 w-3 text-purple-400" />
              </div>
              <p className="text-xs text-[rgba(224,242,254,0.9)] leading-tight">
                Elegí energía limpia con la confianza de un modelo probado, seguro y escalable.
              </p>
            </div>
          </div>
        </div>
        
        {/* Card footer */}
        <div className="relative z-10 px-4 py-2 bg-[rgba(7,34,53,0.6)] border-t border-blue-500/20  bottom-0 w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <div className="h-1 w-1 rounded-full bg-green-400"></div>
              <div className="h-1 w-1 rounded-full bg-blue-400"></div>
              <div className="h-1 w-1 rounded-full bg-purple-400"></div>
            </div>
            <p className="text-[10px] text-gray-400">BIS Integraciones • Soluciones solares</p>
          </div>
        </div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-green-400/30 rounded-tl-lg"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400/30 rounded-tr-lg"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400/30 rounded-bl-lg"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-400/30 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default SolarInfoCard;