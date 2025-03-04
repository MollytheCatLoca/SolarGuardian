// types/unifiedDeviceTypes.ts

/**
 * Unifica los tipos de dispositivos entre diferentes archivos de tipos
 */

// Tipos enumerados para garantizar consistencia
export type DeviceType = 'SmartLogger' | 'Inversor' | 'Batería' | 'Medidor' | 'Panel' | 'Otro';
export type DeviceStatus = 'Activo' | 'Advertencia' | 'Falla' | 'Mantenimiento' | 'Inactivo';

// Mapeos para standarizar valores
export const STATUS_MAPPING = {
  // De valores en inglés a español
  'online': 'Activo',
  'warning': 'Advertencia',
  'error': 'Falla',
  'maintenance': 'Mantenimiento',
  'offline': 'Inactivo',
  
  // De valores en español a inglés (para compatibilidad inversa)
  'Activo': 'online',
  'Advertencia': 'warning',
  'Falla': 'error',
  'Mantenimiento': 'maintenance',
  'Inactivo': 'offline'
} as const;

export const TYPE_MAPPING = {
  // De valores en inglés a español
  'smartlogger': 'SmartLogger',
  'inverter': 'Inversor',
  'battery': 'Batería',
  'meter': 'Medidor',
  'panel': 'Panel',
  'other': 'Otro',
  
  // De valores en español a inglés (para compatibilidad inversa)
  'SmartLogger': 'smartlogger',
  'Inversor': 'inverter',
  'Batería': 'battery',
  'Medidor': 'meter',
  'Panel': 'panel',
  'Otro': 'other'
} as const;

// Interfaz básica para cualquier tipo de dispositivo
export interface BaseDevice {
  id: number;
  type: string;
  name: string;
  model: string;
  serialNumber: string;
  status: string;
  plantId: number; // ID de la planta a la que pertenece el dispositivo
}

// Interfaz unificada para dispositivos
export interface UnifiedDevice extends BaseDevice {
  installationDate: string;
  lastMaintenanceDate?: string;
  physicalLocation: string;
  description?: string;
  firmwareVersion?: string;
  readings?: DeviceReading[];
  
  // Campos específicos según el tipo de dispositivo
  // Estos se incluyen como opcionales y se utilizan según el tipo
  batteryDetails?: {
    stateOfCharge: number; // Porcentaje
    capacity: number; // kWh
    cycles: number;
  };
  
  inverterDetails?: {
    maxPower: number; // kW
    efficiency: number; // Porcentaje
    inputVoltage: number; // V
    outputVoltage: number; // V
  };
  
  panelDetails?: {
    peakPower: number; // Wp
    efficiency: number; // Porcentaje
    area: number; // m²
  };
}

// Lectura de métricas para un dispositivo
export interface DeviceReading {
  timestamp: string;
  metrics: Record<string, number | string>;
}

/**
 * Funciones para convertir entre los diferentes formatos
 */

// Convierte desde el formato de deviceTypes.ts al formato unificado
export function convertFromLegacyFormat(legacyDevice: any): UnifiedDevice {
  return {
    id: legacyDevice.id,
    plantId: legacyDevice.plantId,
    type: mapDeviceType(legacyDevice.type),
    name: legacyDevice.name || `Dispositivo ${legacyDevice.id}`,
    model: legacyDevice.model,
    serialNumber: legacyDevice.serialNumber,
    status: mapDeviceStatus(legacyDevice.status),
    installationDate: legacyDevice.installationDate,
    lastMaintenanceDate: legacyDevice.lastMaintenanceDate || legacyDevice.installationDate,
    physicalLocation: legacyDevice.physicalLocation
  };
}

// Convierte desde el formato de solarTypes.ts al formato unificado
export function convertFromSolarFormat(solarDevice: any): UnifiedDevice {
  return {
    id: solarDevice.id,
    plantId: solarDevice.plantId || 0,
    type: mapDeviceType(solarDevice.type),
    name: solarDevice.name,
    model: solarDevice.model,
    serialNumber: solarDevice.serialNumber,
    status: mapDeviceStatus(solarDevice.status),
    installationDate: solarDevice.installDate,
    lastMaintenanceDate: solarDevice.lastMaintenanceDate,
    physicalLocation: solarDevice.location,
    readings: solarDevice.readings
  };
}

// Funciones auxiliares
function mapDeviceStatus(status: string): DeviceStatus {
  return STATUS_MAPPING[status.toLowerCase() as keyof typeof STATUS_MAPPING] as DeviceStatus || 'Activo';
}

function mapDeviceType(type: string): DeviceType {
  return TYPE_MAPPING[type.toLowerCase() as keyof typeof TYPE_MAPPING] as DeviceType || 'Otro';
}