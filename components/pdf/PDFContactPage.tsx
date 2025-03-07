import React from 'react';

const PDFContactPage = () => {
  return (
    <div className="bg-[#121824] text-white w-[250mm] h-[160mm] overflow-hidden p-4">
      {/* Header - Más compacto */}
      <div className="mb-3">
        <h2 className="text-xl font-bold text-[#9c79db]">Pruebe SolarGuardian Ahora</h2>
      </div>
      
      {/* Contenido principal - Layout horizontal para formato apaisado */}
      <div className="flex h-[140mm]">
        {/* Columna izquierda - Call to Action principal */}
        <div className="w-[100mm] pr-3 flex flex-col">
          <div className="bg-[#1a2236] rounded-lg p-4 border border-[#2a3245] mb-3 flex-1">
            <h3 className="text-lg font-bold text-[#9c79db] mb-2">Acceso Inmediato</h3>
            
            <div className="bg-[#2a2b47] border border-[#464982] rounded-lg p-3 mb-3">
              <p className="flex items-center">
                <LinkIcon className="text-[#9c79db] mr-2" />
                <span className="font-medium text-green-500">solarguardian.pro</span>
              </p>
              <p className="text-gray-300 mt-1 text-xs">
                Visite nuestro sitio y haga clic en "Iniciar Demo"
              </p>
            </div>
            
            <a 
              href="https://solarguardian.pro" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full py-2 bg-gradient-to-r from-[#5a4b97] to-[#6e64c8] hover:from-[#654ca3] hover:to-[#7a6ed4] text-white font-bold text-center rounded-lg transition-colors duration-300 mb-3"
            >
              Iniciar Demo Ahora
            </a>
            
            <p className="text-gray-400 text-xs text-center mb-3">
              No se requiere tarjeta de crédito
            </p>
            
            <div className="mt-2">
              <h4 className="text-white font-bold text-sm mb-2">Beneficios:</h4>
              <ul className="space-y-1">
                <BenefitItem text="Configuraciones personalizadas" />
                <BenefitItem text="Asistencia personalizada" />
                <BenefitItem text="Acceso a funciones exclusivas" />
                <BenefitItem text="Recursos adicionales" />
              </ul>
            </div>
          </div>
          
          <div className="bg-[#1a2236] rounded-lg p-4 border border-[#2a3245]">
            <h3 className="text-lg font-bold text-[#9c79db] mb-2">Proceso Simple</h3>
            
            <div className="space-y-2">
              <StepItem 
                number="1" 
                title="Visitar solarguardian.pro" 
              />
              
              <StepItem 
                number="2" 
                title="Clic en 'Iniciar Demo'" 
              />
              
              <StepItem 
                number="3" 
                title="Crear cuenta" 
              />
            </div>
          </div>
        </div>
        
        {/* Columna central - Características */}
        <div className="w-[140mm] pl-3">
          <div className="bg-[#1a2236] rounded-lg p-4 border border-[#2a3245] h-full">
            <h3 className="text-lg font-bold text-[#9c79db] mb-3">Lo que encontrará en la demo</h3>
            
            <div className="grid grid-cols-2 gap-3 h-[120mm] overflow-hidden">
              <FeatureCard 
                icon={<ChartIcon />}
                title="Panel de Control Interactivo" 
                description="Experimente nuestro dashboard con datos simulados en tiempo real de sus instalaciones solares. Visualice producción, consumo y eficiencia en gráficos intuitivos."
              />
              
              <FeatureCard 
                icon={<AlertIcon />}
                title="Sistema de Alertas" 
                description="Configure y pruebe diferentes tipos de alertas para mantenimiento preventivo, detección de anomalías y rendimiento subóptimo en sus instalaciones solares."
              />
              
              <FeatureCard 
                icon={<ReportIcon />}
                title="Generación de Informes" 
                description="Cree reportes personalizados sobre producción energética, ahorro económico y reducción de emisiones de CO2. Exporte en múltiples formatos."
              />
              
              <FeatureCard 
                icon={<DeviceIcon />}
                title="Gestión de Dispositivos" 
                description="Administre todos sus inversores, medidores y sensores desde una interfaz unificada. Monitoreo en tiempo real de cada componente del sistema."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para tarjeta de característica con imagen
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#232b43] rounded-lg border border-[#30395a] p-3 flex flex-col h-full">
      <div className="flex items-center mb-2">
        <div className="text-[#9c79db] mr-2 p-2 bg-[#2d2e57] rounded-full">
          {icon}
        </div>
        <h5 className="text-white font-medium text-sm">{title}</h5>
      </div>
      <p className="text-gray-400 text-xs mb-2">{description}</p>
      
      <div className="flex-grow flex items-end justify-end mt-2">
        <div className="bg-[#2a2b47] rounded-full px-3 py-1 text-xs text-[#9c79db]">
          Demo disponible
        </div>
      </div>
    </div>
  );
};

// Componente para beneficios de lista (versión compacta)
const BenefitItem = ({ text }) => {
  return (
    <li className="flex items-center">
      <CheckIcon className="text-[#68c3a3] mr-2 flex-shrink-0" />
      <span className="text-gray-300 text-xs">{text}</span>
    </li>
  );
};

// Componente para pasos (versión compacta)
const StepItem = ({ number, title }) => {
  return (
    <div className="flex items-center">
      <div className="w-5 h-5 bg-[#2d2e57] rounded-full flex items-center justify-center mr-2 border border-[#464982] flex-shrink-0">
        <span className="text-[#9c79db] font-bold text-xs">{number}</span>
      </div>
      <h5 className="text-white text-xs">{title}</h5>
    </div>
  );
};

// Iconos (versión más pequeña)
const LinkIcon = ({ className }) => (
  <svg className={`w-4 h-4 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={`w-3 h-3 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AlertIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const ReportIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const DeviceIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
);

export default PDFContactPage;