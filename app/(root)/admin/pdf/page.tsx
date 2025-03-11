"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const PDFIndexPage = () => {
  const presentations = [
    {
      id: 'solar-guardian',
      title: 'SolarGuardian Pro',
      description: 'Plataforma de monitoreo y gestión para sistemas solares fotovoltaicos',
      color: 'from-blue-600 to-purple-600',
      path: '/admin/pdf/solar-guardian'
    },
    {
      id: 'eco-parque',
      title: 'Eco-Parque All-in-One',
      description: 'Soluciones solares integradas para plazas y espacios públicos sostenibles',
      color: 'from-green-600 to-blue-600',
      path: '/admin/pdf/eco-parque'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Presentaciones Interactivas</h1>
            <p className="text-gray-600">Seleccione la presentación que desea visualizar</p>
          </div>
          
          <div className="grid gap-6">
            {presentations.map((presentation) => (
              <Link 
                href={presentation.path}
                key={presentation.id}
                className="block"
              >
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl`}>
                  <div className={`h-3 bg-gradient-to-r ${presentation.color}`}></div>
                  <div className="p-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">{presentation.title}</h2>
                      <p className="text-gray-600">{presentation.description}</p>
                    </div>
                    <div className="bg-blue-50 rounded-full p-3">
                      <ArrowRight className="text-blue-600" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/images/bis-logo.png"
                alt="BIS Integraciones"
                width={150}
                height={60}
                className="object-contain"
              />
              <p className="mt-2 text-gray-600 text-sm">© 2025 BIS Integraciones</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFIndexPage;