// types/solarTypes.ts

// Parque Solar
export interface SolarPark {
    id: string;
    name: string;
    location: {
      city: string;
      province: string;
      country: string;
      coordinates: {
        latitude: number;
        longitude: number;
      };
    };
    capacity: {
      installed: number; // MW
      current: number; // MW (potencia actual)
    };
    details: {
      commissionDate: string; // Fecha de puesta en marcha
      area: number; // m²
      panels: number;
      inverters: number;
    };
  }
  
  // Dispositivo (panel, inversor, batería, etc.)
  export interface Device {
    id: string;
    type: 'panel' | 'inverter' | 'battery' | 'meter' | 'smartlogger' | 'other';
    name: string;
    model: string;
    serialNumber: string;
    status: 'online' | 'offline' | 'warning' | 'error' | 'maintenance';
    installDate: string;
    lastMaintenanceDate: string;
    location: string; // Sector o zona dentro del parque
    readings: DeviceReading[];
  }
  
  // Lectura de un dispositivo
  export interface DeviceReading {
    timestamp: string;
    metrics: {
      [key: string]: number; // Diferentes métricas según el tipo de dispositivo
    };
  }
  
  // Alerta
  export interface Alert {
    id: string;
    deviceId: string;
    deviceName: string;
    deviceType: string;
    severity: 'low' | 'medium' | 'high' | 'critical';
    status: 'active' | 'acknowledged' | 'resolved';
    type: string;
    message: string;
    timestamp: string;
    acknowledgedBy?: string;
    acknowledgedAt?: string;
    resolvedBy?: string;
    resolvedAt?: string;
  }
  
  // Tarea de mantenimiento
  export interface MaintenanceTask {
    id: string;
    title: string;
    description: string;
    status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
    priority: 'low' | 'medium' | 'high';
    scheduledDate: string;
    estimatedDuration: number; // en minutos
    assignedTo?: string;
    devices: string[]; // IDs de los dispositivos involucrados
    checklist: {
      id: string;
      task: string;
      completed: boolean;
    }[];
    notes?: string;
  }
  
  // Métricas de generación de energía
  export interface EnergyGeneration {
    timestamp: string;
    currentPower: number; // MW
    dailyEnergy: number; // MWh
    monthlyEnergy: number; // MWh
    yearlyEnergy: number; // MWh
    totalEnergy: number; // MWh (acumulado histórico)
  }
  
  // Usuario del sistema
  export interface SolarUser {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'technician' | 'operator' | 'viewer';
    avatar?: string;
    permissions: string[];
  }