"use client"

import React from 'react';
import { ArrowLeft, ArrowRight, DownloadIcon, HomeIcon } from 'lucide-react';

interface PDFPageProps {
  children: React.ReactNode;
  pageNumber: number;
  totalPages: number;
  title: string;
  onPrevPage?: () => void;
  onNextPage?: () => void;
}

const PDFPage: React.FC<PDFPageProps> = ({ 
  children, 
  pageNumber, 
  totalPages, 
  title, 
  onPrevPage, 
  onNextPage 
}) => {
  return (
    <div className="pdf-page">
      {/* Controles de navegación */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <button 
            className="bg-blue-600 text-white p-2 rounded-full disabled:bg-gray-300"
            onClick={onPrevPage}
            disabled={pageNumber === 1}
          >
            <ArrowLeft size={20} />
          </button>
          <span className="text-gray-700">
            Página {pageNumber} de {totalPages}
          </span>
          <button 
            className="bg-blue-600 text-white p-2 rounded-full disabled:bg-gray-300"
            onClick={onNextPage}
            disabled={pageNumber === totalPages}
          >
            <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="flex space-x-3">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg">
            <DownloadIcon size={16} className="mr-2" />
            <span>Descargar PDF</span>
          </button>
          <button className="flex items-center bg-gray-200 px-4 py-2 rounded-lg">
            <HomeIcon size={16} className="mr-2" />
            <span>Inicio</span>
          </button>
        </div>
      </div>
      
      {/* Contenedor de la página actual */}
      <div className="bg-white rounded-lg shadow-xl p-8 mb-8 min-h-[80vh] border border-gray-200">
        {children}
      </div>
    </div>
  );
};

export default PDFPage;