"use client";

import React from 'react';
import { TrendingUp, Sparkles, PieChart, MapPin, ArrowRight, Globe } from 'lucide-react';

// Datos por sector definidos como constantes
const sectorsData = [
  { key: 'municipios', label: 'Municipios', percentage: 10, color: 'bg-blue-500/70' },
  { key: 'industria', label: 'Industria', percentage: 45, color: 'bg-purple' }, // Podés ajustar aquí si es necesario
  { key: 'agro', label: 'Agro', percentage: 25, color: 'bg-green-500/70' },
  { key: 'comercial', label: 'Comercial', percentage: 20, color: 'bg-orange-500/70' },
];

const LAYOUT = {
  padding: 8,
  primaryColor: 'rgba(99, 102, 241, 0.85)',
  secondaryColor: 'rgba(139, 92, 246, 0.75)',
  accentColor: 'rgba(34, 197, 94, 0.75)',
  heightReduction: 0.8,
};

const BISFuturoGD = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white overflow-hidden">
      {/* Fondo: círculos, grid y detalles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-purple-400 rounded-full mix-blend-soft-light filter blur-3xl opacity-10"></div>
        <div className="absolute w-full h-full bg-[url('/grid-pattern.svg')] bg-repeat opacity-[0.02]"></div>
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '70px',
            width: '3px',
            height: '70%',
            background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.1))',
            borderRadius: '5px',
            opacity: 0.2,
            zIndex: 1,
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '120px',
            width: '70%',
            height: '2px',
            background: 'linear-gradient(to right, rgba(139, 92, 246, 0.3), rgba(99, 102, 241, 0.1))',
            borderRadius: '5px',
            opacity: 0.2,
            zIndex: 1,
          }}
        ></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col h-full p-4">
        {/* Header con badge */}
        <div className="mb-3">
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              background:
                'linear-gradient(90deg, rgba(99, 102, 241, 0.25) 0%, rgba(99, 102, 241, 0.08) 100%)',
              paddingLeft: '15px',
              paddingRight: '20px',
              marginBottom: '10px',
              paddingTop: '4px',
              paddingBottom: '4px',
              borderTopRightRadius: '25px',
              borderBottomRightRadius: '25px',
              backdropFilter: 'blur(6px)',
              boxShadow:
                '0 8px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)',
              borderLeft: '3px solid rgba(139, 92, 246, 0.4)',
              display: 'inline-block',
            }}
          >
            <div className="flex items-center">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300 mr-2" />
              <p className="text-[10px] font-medium text-indigo-200 uppercase tracking-wider m-0">
                Oportunidad histórica
              </p>
            </div>
          </div>
        </div>

        {/* Título */}
        <h2 className="text-lg font-bold text-white mb-1">
          <span style={{ color: '#818cf8' }}>10 GW</span> de GD:{' '}
          <span style={{ color: '#818cf8', marginLeft: '4px' }}>USD 8.000M</span> en 6 años
        </h2>
        <div
          style={{
            width: '80px',
            height: '2px',
            background:
              'linear-gradient(90deg, rgba(99, 102, 241, 0.7), rgba(99, 102, 241, 0.2))',
            borderRadius: '2px',
            marginBottom: '8px',
          }}
        ></div>

        <div className="grid grid-cols-2 gap-3 mb-2 flex-grow">
          {/* Columna izquierda: Proyección GD y Ventajas BIS */}
          <div className="flex flex-col space-y-2">
            {/* Proyección GD */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '8px',
                padding: '10px',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(99, 102, 241, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <h3 className="text-xs font-semibold text-indigo-100 mb-1 flex items-center">
                <TrendingUp className="h-3 w-3 text-indigo-300 mr-1.5" />
                Proyección GD
              </h3>
              <div className="relative h-40 bg-[rgba(15,23,42,0.6)] rounded-lg overflow-hidden -ml-28 p-2">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  {/* Ejes */}
                  <line x1="50" y1="180" x2="380" y2="180" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />
                  <line x1="50" y1="20" x2="50" y2="180" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" />

                  {/* Etiquetas X */}
                  <text x="50" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2025</text>
                  <text x="105" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2026</text>
                  <text x="160" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2027</text>
                  <text x="215" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2028</text>
                  <text x="270" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2029</text>
                  <text x="325" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2030</text>
                  <text x="380" y="195" fontSize="8" fill="#a5b4fc" textAnchor="middle">2031</text>

                  {/* Líneas verticales */}
                  <line x1="50" y1="180" x2="50" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="105" y1="180" x2="105" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="160" y1="180" x2="160" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="215" y1="180" x2="215" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="270" y1="180" x2="270" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="325" y1="180" x2="325" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="380" y1="180" x2="380" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Etiquetas Y */}
                  <text x="40" y="180" fontSize="8" fill="#a5b4fc" textAnchor="end">0</text>
                  <text x="40" y="140" fontSize="8" fill="#a5b4fc" textAnchor="end">2</text>
                  <text x="40" y="100" fontSize="8" fill="#a5b4fc" textAnchor="end">4</text>
                  <text x="40" y="60" fontSize="8" fill="#a5b4fc" textAnchor="end">6</text>
                  <text x="40" y="20" fontSize="8" fill="#a5b4fc" textAnchor="end">10</text>

                  {/* Líneas horizontales */}
                  <line x1="50" y1="140" x2="380" y2="140" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="50" y1="100" x2="380" y2="100" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="50" y1="60" x2="380" y2="60" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />
                  <line x1="50" y1="20" x2="380" y2="20" stroke="rgba(167, 139, 250, 0.05)" strokeWidth="1" strokeDasharray="2,2" />

                  {/* Áreas de escenarios */}
                  <path 
                    d="M50,180 L105,170 L160,155 L215,130 L270,100 L325,70 L380,50 L380,180 Z" 
                    fill="rgba(79, 70, 229, 0.15)" 
                    stroke="transparent"
                  />
                  <path 
                    d="M50,180 L105,160 L160,135 L215,95 L270,60 L325,35 L380,20 L380,50 L325,70 L270,100 L215,130 L160,155 L105,170 L50,180 Z" 
                    fill="rgba(129, 140, 248, 0.2)" 
                    stroke="transparent"
                  />
                  <path 
                    d="M50,180 L105,170 L160,155 L215,130 L270,100 L325,70 L380,50" 
                    fill="none" 
                    stroke="rgba(79, 70, 229, 0.7)" 
                    strokeWidth="1.5"
                  />
                  <path 
                    d="M50,180 L105,160 L160,135 L215,95 L270,60 L325,35 L380,20" 
                    fill="none" 
                    stroke="rgba(129, 140, 248, 0.7)" 
                    strokeWidth="1.5"
                  />
                  <circle cx="50" cy="180" r="2" fill="rgba(79, 70, 229, 0.7)" />
                  <circle cx="380" cy="50" r="2" fill="rgba(79, 70, 229, 0.7)" />
                  <circle cx="380" cy="20" r="2" fill="rgba(129, 140, 248, 0.7)" />
                </svg>
                <div className="absolute bottom-1 right-1 bg-[rgba(15,23,42,0.7)] backdrop-blur-sm p-4 rounded-lg mb-1 mr-1">
                  <div className="flex items-center mb-0.5">
                    <div className="w-2 h-2 bg-indigo-600 mr-1 rounded-sm opacity-70"></div>
                    <span className="text-[8px] text-indigo-200">Conservador: 7 GW</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-400 mr-1 rounded-sm opacity-70"></div>
                    <span className="text-[8px] text-indigo-200">Moderado: 10 GW</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ventajas BIS */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '8px',
                padding: '10px',
                marginTop: '10px',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(99, 102, 241, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                flex: 1,
              }}
            >
              <h3 className="text-xs font-semibold text-indigo-100 mt-2 mb-6">Ventajas BIS</h3>
              <div className="space-y-1.5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="bg-green-900/20 rounded-full p-1">
                      <ArrowRight className="h-2.5 w-2.5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-indigo-100">
                      <span className="font-medium text-green-300">First mover:</span> Soluciones All-in-One con leasing
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="bg-green-900/20 rounded-full p-1">
                      <ArrowRight className="h-2.5 w-2.5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-indigo-100">
                      <span className="font-medium text-green-300">Capacidad:</span> Infraestructura para implementación masiva
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="bg-green-900/20 rounded-full p-1">
                      <ArrowRight className="h-2.5 w-2.5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-indigo-100">
                      <span className="font-medium text-green-300">Alianzas:</span> Municipios, bancos y fabricantes
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-2">
                    <div className="bg-green-900/20 rounded-full p-1">
                      <ArrowRight className="h-2.5 w-2.5 text-green-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[9px] text-indigo-100">
                      <span className="font-medium text-green-300">Tecnología:</span> Sistema Solar Guardian Pro
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2 bg-[rgba(15,23,42,0.6)] rounded-lg p-1.5">
                <p className="text-[9px] text-center text-indigo-200 font-medium">
                  Meta 2030: 500 MW en parques All-in-One
                </p>
              </div>
            </div>
          </div>

          {/* Columna derecha: Benchmarking global y Potencial económico */}
          <div className="flex flex-col space-y-2">
            {/* Benchmarking global */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '8px',
                padding: '10px',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(99, 102, 241, 0.08)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <h3 className="text-xs font-semibold text-indigo-100 mb-1 flex items-center">
                <Globe className="h-3 w-3 text-indigo-300 mr-1.5" />
                Benchmarking global
              </h3>
              <div className="relative bg-[rgba(15,23,42,0.6)] rounded-lg overflow-hidden p-2">
                <h4 className="text-[9px] font-medium text-indigo-200 mb-1">% de energía distribuida</h4>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">Brasil</span>
                      <span className="text-[8px] text-indigo-300">18%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '18%', background: 'linear-gradient(to right, rgba(99,102,241,0.7), rgba(99,102,241,0.2))' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">Alemania</span>
                      <span className="text-[8px] text-indigo-300">32%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '32%', background: 'linear-gradient(to right, rgba(99,102,241,0.7), rgba(99,102,241,0.2))' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">Australia</span>
                      <span className="text-[8px] text-indigo-300">25%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '25%', background: 'linear-gradient(to right, rgba(99,102,241,0.7), rgba(99,102,241,0.2))' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">España</span>
                      <span className="text-[8px] text-indigo-300">12%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '12%', background: 'linear-gradient(to right, rgba(99,102,241,0.7), rgba(99,102,241,0.2))' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">Argentina hoy</span>
                      <span className="text-[8px] text-indigo-300">0.8%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '0.8%', background: 'linear-gradient(to right, rgba(99,102,241,0.7), rgba(99,102,241,0.2))' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">Argentina 2031</span>
                      <span className="text-[8px] text-green-300">15%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div className="h-full" style={{ width: '15%', background: 'linear-gradient(to right, rgba(34,197,94,0.7), rgba(34,197,94,0.2))' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Potencial económico */}
            <div
              style={{
                background: 'rgba(30, 41, 59, 0.4)',
                borderRadius: '8px',
                padding: '10px',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(99, 102, 241, 0.08)',
                position: 'relative',
                overflow: 'hidden',
                flex: 1,
              }}
            >
              <h3 className="text-xs font-semibold text-indigo-100 mb-1 flex items-center">
                <PieChart className="h-3 w-3 text-indigo-300 mr-1.5" />
                Potencial económico
              </h3>
              <div className="flex space-x-2 mb-2">
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '6px',
                    padding: '6px',
                    textAlign: 'center',
                  }}
                >
                  <p className="text-[8px] text-indigo-200 mb-0.5">Inversión</p>
                  <p className="text-base font-bold text-indigo-100">USD 8B</p>
                  <p className="text-[7px] text-indigo-300">2025-2031</p>
                </div>
                <div
                  style={{
                    flex: 1,
                    background: 'rgba(15, 23, 42, 0.6)',
                    borderRadius: '6px',
                    padding: '6px',
                    textAlign: 'center',
                  }}
                >
                  <p className="text-[8px] text-indigo-200 mb-0.5">Empleos</p>
                  <p className="text-base font-bold text-indigo-100">60,000+</p>
                  <p className="text-[7px] text-indigo-300">Dir. e indir.</p>
                </div>
              </div>
              <h4 className="text-[9px] font-medium text-indigo-200 mb-1">Por sectores:</h4>
              <div className="grid grid-cols-2 gap-2">
                {sectorsData.map((sector) => (
                  <div
                    key={sector.key}
                    style={{
                      background: 'rgba(15, 23, 42, 0.6)',
                      borderRadius: '6px',
                      padding: '6px',
                    }}
                  >
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[8px] text-indigo-200">
                        <MapPin className="h-2 w-2 inline mr-0.5" />
                        {sector.label}
                      </span>
                      <span className="text-[8px] text-indigo-300">{sector.percentage}%</span>
                    </div>
                    <div className="h-1 bg-[rgba(15,23,42,0.6)] rounded-full overflow-hidden">
                      <div
                        className={`${sector.color} h-full rounded-full`}
                        style={{ width: `${sector.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Fases de desarrollo */}
        <div
          style={{
            background: 'rgba(30, 41, 59, 0.3)',
            borderRadius: '8px',
            padding: '8px',
            boxShadow:
              '0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -1px rgba(0,0,0,0.03)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(99, 102, 241, 0.08)',
            marginTop: 'auto',
          }}
        >
          <h3 className="text-[9px] font-medium text-indigo-200 mb-1">Fases GD en Argentina:</h3>
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '50%',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2px',
                }}
              >
                <span className="text-[8px] font-medium text-indigo-100">1</span>
              </div>
              <p className="text-[7px] text-indigo-200 text-center">
                Adopción
                <br />
                inicial
              </p>
              <p className="text-[7px] text-indigo-300 text-center">2025-26</p>
            </div>
            <div className="w-1/6 flex items-center justify-center">
              <div className="h-px w-full bg-indigo-700/30"></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '50%',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2px',
                }}
              >
                <span className="text-[8px] font-medium text-indigo-100">2</span>
              </div>
              <p className="text-[7px] text-indigo-200 text-center">
                Crecimiento
                <br />
                acelerado
              </p>
              <p className="text-[7px] text-indigo-300 text-center">2027-28</p>
            </div>
            <div className="w-1/6 flex items-center justify-center">
              <div className="h-px w-full bg-indigo-700/30"></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: 'rgba(15, 23, 42, 0.6)',
                  borderRadius: '50%',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2px',
                }}
              >
                <span className="text-[8px] font-medium text-indigo-100">3</span>
              </div>
              <p className="text-[7px] text-indigo-200 text-center">
                Consolidación
                <br />
                mercado
              </p>
              <p className="text-[7px] text-indigo-300 text-center">2029-30</p>
            </div>
            <div className="w-1/6 flex items-center justify-center">
              <div className="h-px w-full bg-indigo-700/30"></div>
            </div>
            <div className="flex flex-col items-center">
              <div
                style={{
                  background: 'rgba(22, 101, 52, 0.4)',
                  borderRadius: '50%',
                  height: '20px',
                  width: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2px',
                }}
              >
                <span className="text-[8px] font-medium text-green-100">4</span>
              </div>
              <p className="text-[7px] text-green-200 text-center">
                Madurez
                <br />
                mercado
              </p>
              <p className="text-[7px] text-green-300 text-center">2031+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BISFuturoGD;
