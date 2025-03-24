import React from 'react';
import { 
  Shield, 
  Leaf, 
  Check, 
  DollarSign, 
  Zap, 
  TrendingUp, 
  Award,
  Users
} from 'lucide-react';

const LeasingBenefitsCard = () => {
  return (
    <div className="bg-[rgba(7,34,53,0.7)] backdrop-blur-sm rounded-xl border border-[rgba(59,130,246,0.3)] p-4 h-[300px] -mt-2 flex flex-col text-xs relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-sky-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-emerald-400 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        
        {/* Custom grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)',
            backgroundSize: '15px 15px',
            opacity: 0.3,
          }}
        ></div>
      </div>
      
      {/* Header with glow effect */}
      <div className="relative z-10 flex items-center justify-between mb-6 p-2 pb-2 border-b border-blue-500/30">
        <div className="flex items-center">
          <div className="p-1.5 bg-[rgba(59,130,246,0.15)] rounded-lg mr-2 relative">
            <Shield className="h-4 w-4 text-blue-400" />
            <div className="absolute inset-0 bg-blue-400 rounded-lg filter blur-md opacity-20 animate-pulse"></div>
          </div>
          <h3 className="text-sm font-bold text-white tracking-wide">
            Beneficios del Leasing Operativo
          </h3>
        </div>
        
        {/* Badge */}
        <div className="inline-flex items-center px-2 py-0.5 bg-gradient-to-r from-blue-500/20 to-green-500/20 backdrop-blur-sm rounded-full border border-[rgba(59,130,246,0.3)]">
          <span className="text-[9px] font-medium text-[#38bdf8] uppercase tracking-wider">All-in-One</span>
        </div>
      </div>
      
      {/* Content section */}
      <div className="grid grid-cols-2 gap-3 flex-1 relative z-10 ml-2">
        {/* Left Column - Cliente */}
        <div className="pr-3 border-r border-blue-500/20 relative">
          {/* Header with gradient underline */}
          <h4 className="text-green-300 font-semibold mb-2 flex items-center">
            <div className="p-1 bg-[rgba(52,211,153,0.15)] rounded-full mr-1.5 shadow-sm">
              <Users className="h-3 w-3 text-green-400" />
            </div>
            <span>Para el Cliente</span>
          </h4>
          <div className="w-16 h-0.5 bg-gradient-to-r from-green-400/80 to-transparent rounded-full -mt-1 mb-3"></div>
          
          <ul className="space-y-2">
            <li className="flex items-start group">
              <div className="bg-[rgba(52,211,153,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(52,211,153,0.3)] transition-colors duration-300">
                <DollarSign className="h-2.5 w-2.5 text-green-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-green-300 block">Sin inversión inicial</span>
                <span className="text-[9px] text-gray-300">Cero gastos de obra civil</span>
              </div>
            </li>
            
            <li className="flex items-start group">
              <div className="bg-[rgba(52,211,153,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(52,211,153,0.3)] transition-colors duration-300">
                <Zap className="h-2.5 w-2.5 text-yellow-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-green-300 block">Ahorro inmediato</span>
                <span className="text-[9px] text-gray-300">Desde el primer día</span>
              </div>
            </li>
            
            <li className="flex items-start group">
              <div className="bg-[rgba(52,211,153,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(52,211,153,0.3)] transition-colors duration-300">
                <TrendingUp className="h-2.5 w-2.5 text-green-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-green-300 block">Competitividad estructural</span>
                <span className="text-[9px] text-gray-300">Reducción de costos operativos</span>
              </div>
            </li>
          </ul>
          
          {/* Floating effect element */}
          <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-green-400 rounded-full opacity-5 blur-xl"></div>
        </div>
        
        {/* Right Column - Financieras */}
        <div className="pl-3 relative">
          {/* Header with gradient underline */}
          <h4 className="text-blue-300 font-semibold mb-2 flex items-center">
            <div className="p-1 bg-[rgba(56,189,248,0.15)] rounded-full mr-1.5 shadow-sm">
              <Shield className="h-3 w-3 text-blue-400" />
            </div>
            <span>Para Financieras</span>
          </h4>
          <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400/80 to-transparent rounded-full -mt-1 mb-3"></div>
          
          <ul className="space-y-2">
            <li className="flex items-start group">
              <div className="bg-[rgba(56,189,248,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(56,189,248,0.3)] transition-colors duration-300">
                <Shield className="h-2.5 w-2.5 text-blue-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-blue-300 block">Bajo riesgo</span>
                <span className="text-[9px] text-gray-300">Activos reubicables</span>
              </div>
            </li>
            
            <li className="flex items-start group">
              <div className="bg-[rgba(56,189,248,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(56,189,248,0.3)] transition-colors duration-300">
                <Award className="h-2.5 w-2.5 text-purple-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-blue-300 block">Mejores condiciones</span>
                <span className="text-[9px] text-gray-300">Tasas y plazos favorables</span>
              </div>
            </li>
            
            <li className="flex items-start group">
              <div className="bg-[rgba(56,189,248,0.15)] p-1 rounded-full mr-2 mt-0.5 group-hover:bg-[rgba(56,189,248,0.3)] transition-colors duration-300">
                <Users className="h-2.5 w-2.5 text-blue-400" />
              </div>
              <div>
                <span className="font-medium text-[11px] text-blue-300 block">Alianzas estratégicas</span>
                <span className="text-[9px] text-gray-300">Comafi, BST, BICE y más</span>
              </div>
            </li>
          </ul>
          
          {/* Floating effect element */}
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-blue-400 rounded-full opacity-5 blur-xl"></div>
        </div>
      </div>
      
      {/* Footer with subtle indicators */}
      <div className="relative z-10 flex items-center justify-between mt-3 pt-2 border-t border-blue-500/20">
        <div className="flex items-center space-x-1">
          <div className="h-1 w-1 rounded-full bg-green-400"></div>
          <div className="h-1 w-1 rounded-full bg-blue-400"></div>
          <div className="h-1 w-1 rounded-full bg-purple-400"></div>
        </div>
        <p className="text-[9px] text-blue-300/70">Solución completa para energía solar sostenible</p>
      </div>
      
      {/* Decorative corner elements */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-green-400/30 rounded-tl-xl"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-blue-400/30 rounded-tr-xl"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-blue-400/30 rounded-bl-xl"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-green-400/30 rounded-br-xl"></div>
    </div>
  );
};

export default LeasingBenefitsCard;