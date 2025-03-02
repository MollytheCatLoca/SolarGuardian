"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Save, Image as ImageIcon, X, ZoomIn, ZoomOut, RotateClockwise } from 'lucide-react';

/**
 * Componente SimpleImageUploader - Versión simplificada sin dependencias complejas
 */
export function SimpleImageUploader() {
  // Estados para manejar las imágenes
  const [images, setImages] = useState({
    dashboard: null,
    devices: null,
    alerts: null,
    maintenance: null,
    performance: null,
    hero: null
  });
  
  // Estado para la imagen que se está editando actualmente
  const [currentImage, setCurrentImage] = useState(null);
  const [currentKey, setCurrentKey] = useState(null);
  const [editMode, setEditMode] = useState(false);
  
  // Estados para la edición de imágenes
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [filename, setFilename] = useState("");
  
  // Referencias
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Etiquetas descriptivas para cada tipo de imagen
  const imageLabels = {
    dashboard: "Dashboard General",
    devices: "Monitoreo de Dispositivos",
    alerts: "Sistema de Alertas",
    maintenance: "Mantenimiento Programado",
    performance: "Análisis de Rendimiento",
    hero: "Imagen Principal (Hero)"
  };
  
  // Función para subir una imagen
  const handleUpload = (key) => {
    setCurrentKey(key);
    fileInputRef.current.click();
  };
  
  // Función para manejar el cambio en el input de archivo
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        setCurrentImage(img);
        setImages(prev => ({
          ...prev,
          [currentKey]: img
        }));
        setEditMode(true);
        setFilename(`BIS-${currentKey.charAt(0).toUpperCase() + currentKey.slice(1)}-Preview.jpg`);
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
    e.target.value = null; // Resetear el input
  };
  
  // Función para renderizar la imagen en el canvas
  const renderCanvas = () => {
    if (!currentImage || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Guardar el estado actual
    ctx.save();
    
    // Trasladar al centro del canvas para rotar
    ctx.translate(canvas.width / 2, canvas.height / 2);
    
    // Rotar
    ctx.rotate((rotation * Math.PI) / 180);
    
    // Escalar (zoom)
    ctx.scale(zoom, zoom);
    
    // Dibujar la imagen
    ctx.drawImage(
      currentImage,
      -currentImage.width / 2,
      -currentImage.height / 2,
      currentImage.width,
      currentImage.height
    );
    
    // Restaurar el estado
    ctx.restore();
  };
  
  // Renderizar el canvas cuando cambien zoom o rotación
  useEffect(() => {
    if (editMode) {
      renderCanvas();
    }
  }, [currentImage, zoom, rotation, editMode]);
  
  // Función para guardar la imagen editada
  const saveEditedImage = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    
    // Crear un nuevo canvas con dimensiones fijas para el carrusel
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = 1280;  // Ancho fijo
    outputCanvas.height = 720;  // Alto fijo (relación 16:9)
    
    const outputCtx = outputCanvas.getContext('2d');
    
    // Fondo negro
    outputCtx.fillStyle = '#121212';
    outputCtx.fillRect(0, 0, outputCanvas.width, outputCanvas.height);
    
    // Calcular dimensiones para mantener la relación de aspecto
    const aspectRatio = canvas.width / canvas.height;
    let drawWidth = outputCanvas.width;
    let drawHeight = outputCanvas.width / aspectRatio;
    
    if (drawHeight > outputCanvas.height) {
      drawHeight = outputCanvas.height;
      drawWidth = outputCanvas.height * aspectRatio;
    }
    
    // Calcular posición centrada
    const x = (outputCanvas.width - drawWidth) / 2;
    const y = (outputCanvas.height - drawHeight) / 2;
    
    // Dibujar la imagen original en el nuevo canvas
    outputCtx.drawImage(canvas, x, y, drawWidth, drawHeight);
    
    // Convertir el canvas a una URL de datos
    const dataUrl = outputCanvas.toDataURL('image/jpeg', 0.85);
    
    // Crear un enlace de descarga
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Salir del modo de edición
    setEditMode(false);
  };
  
  // Función para cancelar la edición
  const cancelEdit = () => {
    setEditMode(false);
    setZoom(1);
    setRotation(0);
  };
  
  return (
    <div className="bg-[#0a0b14] border border-gray-800 rounded-lg p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-white">Generador de Imágenes para el Carrusel</h2>
      
      {/* Input de archivo oculto */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      
      {editMode ? (
        // Modo de edición
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl text-white">Editar: {imageLabels[currentKey]}</h3>
            <Button variant="ghost" onClick={cancelEdit}>
              <X className="mr-2" size={16} />
              Cancelar
            </Button>
          </div>
          
          <div className="flex flex-col space-y-4">
            {/* Controles de edición simplificados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm">Zoom: {zoom.toFixed(1)}</p>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
                      >
                        <ZoomOut size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setZoom(Math.min(3, zoom + 0.1))}
                      >
                        <ZoomIn size={16} />
                      </Button>
                    </div>
                  </div>
                  {/* Slider simplificado con botones */}
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-xs">0.5x</span>
                    <input
                      type="range"
                      min="0.5"
                      max="3"
                      step="0.1"
                      value={zoom}
                      onChange={(e) => setZoom(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white text-xs">3x</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <p className="text-white text-sm">Rotación: {rotation}°</p>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setRotation((rotation + 90) % 360)}
                    >
                      <RotateClockwise size={16} />
                    </Button>
                  </div>
                  {/* Slider simplificado con botones */}
                  <div className="flex items-center space-x-2">
                    <span className="text-white text-xs">0°</span>
                    <input
                      type="range"
                      min="0"
                      max="359"
                      step="1"
                      value={rotation}
                      onChange={(e) => setRotation(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-white text-xs">359°</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-white text-sm">Nombre del archivo</p>
                  <Input
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-gray-400 text-sm">
                  <p className="mb-2">Recomendaciones:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>La imagen se guardará en formato 16:9 (1280x720px)</li>
                    <li>Ajusta el zoom para que se vean bien los elementos importantes</li>
                    <li>Usa la rotación si la imagen está torcida</li>
                    <li>Mantén el nombre de archivo propuesto para que coincida con el código</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700" onClick={saveEditedImage}>
                  <Save className="mr-2" size={16} />
                  Guardar imagen
                </Button>
              </div>
            </div>
            
            {/* Canvas para previsualización */}
            <div className="overflow-hidden rounded-lg border border-gray-700 bg-black">
              <canvas 
                ref={canvasRef}
                width={800}
                height={450}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      ) : (
        // Modo de selección de imagen
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(images).map((key) => (
            <div
              key={key}
              className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden flex flex-col"
            >
              <div className="p-4 border-b border-gray-800 bg-gray-900 flex justify-between items-center">
                <h3 className="font-medium text-white">{imageLabels[key]}</h3>
                <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                  {key === 'hero' ? 'Hero' : 'Carrusel'}
                </span>
              </div>
              
              <div className="p-6 flex-grow flex items-center justify-center" style={{minHeight: "150px"}}>
                {images[key] ? (
                  <div className="relative aspect-video w-full h-auto">
                    <img
                      src={images[key].src}
                      alt={imageLabels[key]}
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center text-center text-gray-500">
                    <ImageIcon size={48} className="mb-2 opacity-50" />
                    <p className="text-sm">Ninguna imagen seleccionada</p>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t border-gray-800 bg-gray-900">
                <Button
                  className="w-full bg-purple-700 hover:bg-purple-800"
                  onClick={() => handleUpload(key)}
                >
                  <Upload className="mr-2" size={16} />
                  {images[key] ? 'Cambiar imagen' : 'Subir imagen'}
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-8 bg-gray-900 border border-gray-800 rounded-lg p-4">
        <h3 className="font-medium text-white mb-4">Instrucciones</h3>
        <ol className="list-decimal text-gray-400 pl-5 space-y-2">
          <li>Haz capturas de pantalla de todas las secciones de Solar Guardian Pro</li>
          <li>Haz clic en "Subir imagen" para cada tipo de imagen que necesitas</li>
          <li>Ajusta el zoom y la rotación si es necesario</li>
          <li>Guarda cada imagen con el nombre de archivo predeterminado</li>
          <li>Coloca todas las imágenes generadas en la carpeta <code className="bg-gray-800 px-1 py-0.5 rounded">public</code> de tu proyecto</li>
          <li>¡Listo! Las imágenes aparecerán automáticamente en la landing page</li>
        </ol>
      </div>
    </div>
  );
}

export default SimpleImageUploader;