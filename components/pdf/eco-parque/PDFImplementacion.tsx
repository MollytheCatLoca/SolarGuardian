"use client"

import React from 'react';
import Image from 'next/image';

const PDFImplementacion = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 bg-blue-100 flex items-center justify-center">
            <Image 
              src="/images/placeholder.jpg" 
              alt="Instalación Eco-Parque" 
              width={300} 
              height={200}
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">Visita Técnica y Dimensionamiento</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">1</span>
                <span>Personal de BIS valida consumo eléctrico de la plaza y espacios para instalar contenedor, paneles y complementos.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">2</span>
                <span>Ajuste de la potencia del parque (50 kW o 100 kW) según requerimientos y presupuesto municipal.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">3</span>
                <span>Análisis de servicios complementarios según necesidades específicas del espacio.</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-40 bg-green-100 flex items-center justify-center">
            <Image 
              src="/images/placeholder.jpg" 
              alt="Montaje Eco-Parque" 
              width={300} 
              height={200}
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Montaje y Puesta en Marcha</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">1</span>
                <span>Envío del contenedor All-in-One y equipamiento seleccionado a la ubicación.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">2</span>
                <span>Instalación y configuración de los sistemas por técnicos especializados.</span>
              </li>
              <li className="flex items-start">
                <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mr-2 mt-0.5">3</span>
                <span>Conexión a la red eléctrica municipal (opcional) para inyección y compensación de excedentes.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h3 className="text-xl font-semibold text-purple-700 mb-3">Mantenimiento y Capacitación</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Capacitación a personal local sobre operación básica (encendido, monitoreo, rutinas diarias).</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Soporte continuo a través de la plataforma SolarGuardian Pro y asistencia técnica programada.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Plan de mantenimiento preventivo con visitas periódicas por parte de nuestro personal técnico.</span>
            </li>
            <li className="flex items-start">
              <span className="text-purple-500 mr-2">•</span>
              <span>Documentación técnica completa y manuales de operación en formato digital e impreso.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h3 className="text-xl font-semibold text-amber-700 mb-3">Cronograma Típico</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-24 font-semibold text-amber-800">Semana 1-2:</div>
              <div>Visita técnica, dimensionamiento y propuesta personalizada</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 font-semibold text-amber-800">Semana 3:</div>
              <div>Preparación del contenedor y equipamiento en fábrica</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 font-semibold text-amber-800">Semana 4:</div>
              <div>Adecuación básica del terreno (si es necesario)</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 font-semibold text-amber-800">Semana 5:</div>
              <div>Montaje del sistema y equipos complementarios</div>
            </div>
            <div className="flex items-center">
              <div className="w-24 font-semibold text-amber-800">Semana 6:</div>
              <div>Conexiones, pruebas y puesta en marcha</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-5 rounded-lg mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-3">Garantías y Soporte Post-Instalación</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-1">Garantía de Equipos</h4>
            <p className="text-sm">Paneles solares: 25 años de rendimiento, 10 años de producto.<br/>Inversores: 5 años.<br/>Baterías: 10 años.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-1">Monitoreo 24/7</h4>
            <p className="text-sm">Sistema de supervisión remota con alertas automáticas y reportes mensuales de producción y funcionamiento.</p>
          </div>
          <div className="bg-white p-3 rounded-lg shadow-sm">
            <h4 className="font-semibold text-blue-700 mb-1">Mantenimiento</h4>
            <p className="text-sm">Plan de mantenimiento preventivo anual incluido durante los primeros 2 años. Extensible mediante contrato de servicio.</p>
          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-lg text-white mt-auto">
        <h3 className="font-semibold mb-2">Compromiso con la Excelencia:</h3>
        <p>En BIS Integraciones nos comprometemos con el éxito de su proyecto desde la concepción hasta la operación continua, asegurando que su Eco-Parque All-in-One supere todas las expectativas técnicas y comunitarias.</p>
      </div>
    </div>
  );
};

export default PDFImplementacion;