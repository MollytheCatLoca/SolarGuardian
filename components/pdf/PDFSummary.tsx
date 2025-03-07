import React from 'react';

const PDFSummary: React.FC = () => {
  // Estilo del contenedor principal con dimensiones fijas
  const containerStyle = {
    backgroundColor: '#0c101a',
    height: '160mm',
    width: '250mm',
    borderRadius: '20px',
  };

  return (
    <div className="relative overflow-hidden" style={containerStyle}>
      {/* Elementos de fondo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#8a3ab4] rounded-full filter blur-3xl opacity-20 transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#8a3ab4] rounded-full filter blur-3xl opacity-10 transform -translate-x-1/3 translate-y-1/3" />
      </div>

      {/* Overlay de patrón grid */}
      <div
        className="absolute inset-0"
        style={{
          background: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMzBjMCAxNi41NjktMTMuNDMxIDMwLTMwIDMwQzEzLjQzMSA2MCAwIDQ2LjU2OSAwIDMwIDAgMTMuNDMxIDEzLjQzMSAwIDMwIDBjMTYuNTY5IDAgMzAgMTMuNDMxIDMwIDMweiIgc3Ryb2tlPSIjNjE2MTYxIiBzdHJva2Utd2lkdGg9Ii4yNSIvPjxwYXRoIGQ9Ik0zMCAwdjYwIiBzdHJva2U9IiM2MTYxNjEiIHN0cm9rZS13aWR0aD0iLjI1Ii8+PHBhdGggZD0iTTAgMzBoNjAiIHN0cm9rZT0iIzYxNjE2MSIgc3Ryb2tlLXdpZHRoPSIuMjUiLz48L2c+PC9zdmc+')",
          opacity: 0.05,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 py-10">
        <div className="max-w-4xl w-full">
          {/* Sección de encabezado */}
          <div className="text-center mb-8 mt-10">
            <h1 className="text-3xl font-bold text-white mb-2">
              Transforme la Gestión de su{' '}
              <span className="text-[#8a3ab4]">Parque Solar</span>
              <div className="mt-1 h-px bg-gradient-to-r from-transparent via-[#8a3ab4] to-transparent"></div>
            </h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-2 leading-relaxed">
              Únase a las empresas líderes que han optimizado sus operaciones, reducido costos y maximizado su rentabilidad con nuestra plataforma integral.
            </p>
          </div>
          
          {/* Caja principal de características */}
          <div className="bg-gray-900/70 backdrop-blur-sm border border-[#8a3ab4]/20 rounded-xl p-6 shadow-lg shadow-[#8a3ab4]/5 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">SolarGuardian <span className="font-bold text-[#8a3ab4]">Pro</span></h2>
              <div className="h-px w-32 bg-gradient-to-r from-[#8a3ab4]/50 to-transparent"></div>
            </div>
            
            {/* Grid de características */}
            <div className="grid grid-cols-2 gap-4">
              <FeatureItem 
                number="01"
                title="Monitoreo en Tiempo Real" 
                description="Visualice el rendimiento con actualizaciones instantáneas y alertas automáticas" 
              />
              <FeatureItem 
                number="02"
                title="Análisis Predictivo" 
                description="Anticipe necesidades de mantenimiento con algoritmos avanzados de inteligencia artificial" 
              />
              <FeatureItem 
                number="03"
                title="Reportes Personalizados" 
                description="Informes detallados sobre producción, eficiencia y ROI" 
              />
              <FeatureItem 
                number="04"
                title="Integración Completa" 
                description="Compatible con los principales fabricantes de equipos solares y ERPs" 
              />
            </div>
            
            {/* Llamado a la acción */}
            <div className="text-center border-t border-gray-700 pt-4 mt-4">
              
              <div className="flex flex-col items-center">
                <span className="text-white font-medium text-base mb-1">
                  Acceda a nuestra demo exclusiva hoy mismo:
                </span>
                <span className="text-3xl font-bold text-[#9c79db] tracking-wide">
                  solarguardian.pro
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="absolute bottom-4 w-full flex justify-between items-center px-10 ">
          <div className="text-xs text-gray-500">
            Documento PDF generado para uso exclusivo de clientes potenciales
          </div>
          <div className="text-xs text-[#8a3ab4] font-medium">
            www.bisintegraciones.com/energy
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureItemProps {
  number: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ number, title, description }) => {
  return (
    <div className="flex">
      <div className="mr-3 flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-[#8a3ab4]/10 border border-[#8a3ab4]/30 flex items-center justify-center">
          <span className="text-xs font-bold text-[#8a3ab4]">{number}</span>
        </div>
      </div>
      <div>
        <h3 className="text-white font-medium text-sm mb-1">{title}</h3>
        <p className="text-gray-400 text-xs leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PDFSummary;
