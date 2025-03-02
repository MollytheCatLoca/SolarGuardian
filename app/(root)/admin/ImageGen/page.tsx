"use client";

import React from 'react';
import ClipboardImageUploader from '@/components/ClipboardImageUploader';
import Link from 'next/link';


const ImageGeneratorPage = () => {
  return (
    <main className="relative bg-black-100 min-h-screen dark">
      <div className="w-full">
        {/* Navigation */}
      
        
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">
            Generador de <span className="text-purple-500">Imágenes</span> para Landing Page
          </h1>
          
          <p className="text-gray-400 max-w-3xl mx-auto mb-12 text-center">
            Esta herramienta te permite pegar capturas de pantalla directamente desde tu portapapeles y optimizarlas 
            para el carrusel y la sección hero de la landing page de Solar Guardian Pro.
          </p>
          
          <ClipboardImageUploader />
          
          <div className="mt-12 flex justify-center">
            <Link 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-purple-700 hover:bg-purple-800 rounded-lg text-white font-medium transition-colors"
            >
              Volver a la Landing Page
            </Link>
          </div>
        </div>
        
     
      </div>
    </main>
  );
};

export default ImageGeneratorPage;