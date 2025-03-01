// lib/solar/dummyData.ts
import { SolarPark, Device, Alert, MaintenanceTask, EnergyGeneration } from '@/types/solarTypes';

// Parque solar dummy
export const dummySolarPark: SolarPark = {
  id: 'park-001',
  name: 'Parque Solar Central',
  location: {
    city: 'Buenos Aires',
    province: 'Buenos Aires',
    country: 'Argentina',
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816,
    },
  },
  capacity: {
    installed: 5.0, // 5 MW
    current: 4.35, // 4.35 MW (87% de capacidad)
  },
  details: {
    commissionDate: '2022-06-15',
    area: 50000, // m²
    panels: 12000,
    inverters: 50,
  },
};

// Dispositivos dummy
export const dummyDevices: Device[] = [
  {
    id: 'device-001',
    type: 'smartlogger',
    name: 'SmartLogger3000',
    model: 'SL3000A01CN',
    serialNumber: 'SN20220001',
    status: 'online',
    installDate: '2022-06-15',
    lastMaintenanceDate: '2023-12-10',
    location: 'Control Central',
    readings: [
      {
        timestamp: '2024-02-27T10:00:00Z',
        metrics: {
          temperature: 42, // °C
          humidity: 35, // %
          signalStrength: 95, // %
        },
      },
    ],
  },
  {
    id: 'device-002',
    type: 'inverter',
    name: 'Inversor 1',
    model: 'SUN2000-100KTL',
    serialNumber: 'SN20220002',
    status: 'warning',
    installDate: '2022-06-15',
    lastMaintenanceDate: '2023-11-05',
    location: 'Sector Norte',
    readings: [
      {
        timestamp: '2024-02-27T10:00:00Z',
        metrics: {
          inputVoltage: 580, // V
          outputVoltage: 400, // V
          outputCurrent: 145, // A
          outputPower: 98, // kW
          efficiency: 97.5, // %
          temperature: 65, // °C
        },
      },
    ],
  },
  {
    id: 'device-003',
    type: 'inverter',
    name: 'Inversor 2',
    model: 'SUN2000-100KTL',
    serialNumber: 'SN20220003',
    status: 'error',
    installDate: '2022-06-15',
    lastMaintenanceDate: '2023-09-20',
    location: 'Sector Este',
    readings: [
      {
        timestamp: '2024-02-27T10:00:00Z',
        metrics: {
          inputVoltage: 570, // V
          outputVoltage: 395, // V
          outputCurrent: 110, // A
          outputPower: 82, // kW
          efficiency: 92.1, // % (baja eficiencia, por eso está en error)
          temperature: 72, // °C
        },
      },
    ],
  },
  {
    id: 'device-004',
    type: 'battery',
    name: 'Batería Principal',
    model: 'LUNA2000-100KWH',
    serialNumber: 'SN20220004',
    status: 'online',
    installDate: '2022-06-15',
    lastMaintenanceDate: '2023-10-15',
    location: 'Almacenamiento Central',
    readings: [
      {
        timestamp: '2024-02-27T10:00:00Z',
        metrics: {
          stateOfCharge: 76, // %
          voltage: 850, // V
          current: 120, // A
          temperature: 35, // °C
          cycleCount: 324,
        },
      },
    ],
  },
  {
    id: 'device-005',
    type: 'panel',
    name: 'Panel #128',
    model: 'Bifacial 540W',
    serialNumber: 'SN20220128',
    status: 'warning',
    installDate: '2022-06-15',
    lastMaintenanceDate: '2023-08-22',
    location: 'Sector Sur, Fila 5',
    readings: [
      {
        timestamp: '2024-02-27T10:00:00Z',
        metrics: {
          voltage: 41.5, // V
          current: 10.2, // A
          power: 423, // W
          temperature: 68, // °C (temperatura elevada, de ahí la advertencia)
        },
      },
    ],
  },
];

// Alertas dummy
export const dummyAlerts: Alert[] = [
  {
    id: 'alert-001',
    deviceId: 'device-003',
    deviceName: 'Inversor 2',
    deviceType: 'inverter',
    severity: 'medium',
    status: 'active',
    type: 'efficiency_low',
    message: 'Eficiencia por debajo del umbral (92.1% < 95%)',
    timestamp: '2024-02-27T08:15:00Z',
  },
  {
    id: 'alert-002',
    deviceId: 'device-003',
    deviceName: 'Inversor 2',
    deviceType: 'inverter',
    severity: 'high',
    status: 'active',
    type: 'connection_unstable',
    message: 'Conexión inestable detectada en Sector Este',
    timestamp: '2024-02-27T09:45:00Z',
  },
  {
    id: 'alert-003',
    deviceId: 'device-005',
    deviceName: 'Panel #128',
    deviceType: 'panel',
    severity: 'low',
    status: 'active',
    type: 'temperature_high',
    message: 'Temperatura elevada (68°C > 65°C)',
    timestamp: '2024-02-27T10:12:00Z',
  },
];

// Tareas de mantenimiento dummy
export const dummyMaintenanceTasks: MaintenanceTask[] = [
  {
    id: 'task-001',
    title: 'Limpieza de Paneles - Sector Norte',
    description: 'Limpieza general de paneles para remover polvo y suciedad acumulada',
    status: 'pending',
    priority: 'medium',
    scheduledDate: '2024-02-28T08:30:00Z',
    estimatedDuration: 240, // 4 horas
    assignedTo: 'tech-001',
    devices: ['device-005'],
    checklist: [
      { id: 'check-001', task: 'Inspección visual previa', completed: false },
      { id: 'check-002', task: 'Limpieza con agua desmineralizada', completed: false },
      { id: 'check-003', task: 'Verificación de rendimiento post-limpieza', completed: false },
    ],
  },
  {
    id: 'task-002',
    title: 'Inspección de Inversores',
    description: 'Inspección técnica de inversores para verificar funcionamiento y mantenimiento preventivo',
    status: 'pending',
    priority: 'high',
    scheduledDate: '2024-03-01T10:00:00Z',
    estimatedDuration: 180, // 3 horas
    assignedTo: 'tech-002',
    devices: ['device-002', 'device-003'],
    checklist: [
      { id: 'check-004', task: 'Verificación de conexiones', completed: false },
      { id: 'check-005', task: 'Limpieza de filtros de ventilación', completed: false },
      { id: 'check-006', task: 'Prueba de carga', completed: false },
      { id: 'check-007', task: 'Actualización de firmware si es necesario', completed: false },
    ],
  },
  {
    id: 'task-003',
    title: 'Actualización de Firmware - Dispositivos',
    description: 'Actualización de firmware de SmartLogger y dispositivos conectados',
    status: 'pending',
    priority: 'medium',
    scheduledDate: '2024-03-03T14:00:00Z',
    estimatedDuration: 120, // 2 horas
    assignedTo: 'tech-003',
    devices: ['device-001'],
    checklist: [
      { id: 'check-008', task: 'Backup de configuración actual', completed: false },
      { id: 'check-009', task: 'Actualización de firmware', completed: false },
      { id: 'check-010', task: 'Verificación de funcionamiento post-actualización', completed: false },
    ],
  },
];

// Datos de generación de energía dummy
export const dummyEnergyGeneration: EnergyGeneration = {
  timestamp: '2024-02-27T10:00:00Z',
  currentPower: 4.35, // MW
  dailyEnergy: 16.8, // MWh
  monthlyEnergy: 426.2, // MWh
  yearlyEnergy: 1254.7, // MWh
  totalEnergy: 8412.6, // MWh
};

// Datos históricos para gráficos
export const dummyEnergyHistory = {
  hourly: [
    { time: '00:00', power: 0.0 },
    { time: '01:00', power: 0.0 },
    { time: '02:00', power: 0.0 },
    { time: '03:00', power: 0.0 },
    { time: '04:00', power: 0.0 },
    { time: '05:00', power: 0.0 },
    { time: '06:00', power: 0.2 },
    { time: '07:00', power: 1.1 },
    { time: '08:00', power: 2.7 },
    { time: '09:00', power: 3.8 },
    { time: '10:00', power: 4.3 },
    { time: '11:00', power: 4.8 },
    { time: '12:00', power: 4.9 },
    { time: '13:00', power: 4.7 },
    { time: '14:00', power: 4.5 },
    { time: '15:00', power: 4.0 },
    { time: '16:00', power: 3.2 },
    { time: '17:00', power: 2.1 },
    { time: '18:00', power: 0.8 },
    { time: '19:00', power: 0.1 },
    { time: '20:00', power: 0.0 },
    { time: '21:00', power: 0.0 },
    { time: '22:00', power: 0.0 },
    { time: '23:00', power: 0.0 },
  ],
  daily: [
    { date: '2024-02-21', energy: 17.2 },
    { date: '2024-02-22', energy: 16.9 },
    { date: '2024-02-23', energy: 15.8 },
    { date: '2024-02-24', energy: 14.2 },
    { date: '2024-02-25', energy: 16.5 },
    { date: '2024-02-26', energy: 16.1 },
    { date: '2024-02-27', energy: 16.8 },
  ],
  monthly: [
    { month: 'Ene', energy: 430.5 },
    { month: 'Feb', energy: 426.2 },
    { month: 'Mar', energy: 0 },
    { month: 'Abr', energy: 0 },
    { month: 'May', energy: 0 },
    { month: 'Jun', energy: 0 },
    { month: 'Jul', energy: 0 },
    { month: 'Ago', energy: 0 },
    { month: 'Sep', energy: 0 },
    { month: 'Oct', energy: 0 },
    { month: 'Nov', energy: 0 },
    { month: 'Dic', energy: 398.0 },
  ],
};

// Usuarios dummy del sistema
export const dummyUsers = [
  {
    id: 'user-001',
    name: 'Administrador',
    email: 'admin@solarguardian.com',
    role: 'admin',
    avatar: '/avatar-admin.png',
  },
  {
    id: 'tech-001',
    name: 'Técnico 1',
    email: 'tech1@solarguardian.com',
    role: 'technician',
    avatar: '/avatar-tech1.png',
  },
  {
    id: 'tech-002',
    name: 'Técnico 2',
    email: 'tech2@solarguardian.com',
    role: 'technician',
    avatar: '/avatar-tech2.png',
  },
  {
    id: 'tech-003',
    name: 'Técnico 3',
    email: 'tech3@solarguardian.com',
    role: 'technician',
    avatar: '/avatar-tech3.png',
  },
  {
    id: 'op-001',
    name: 'Operador 1',
    email: 'op1@solarguardian.com',
    role: 'operator',
    avatar: '/avatar-op1.png',
  },
];