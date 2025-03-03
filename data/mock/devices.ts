// src/data/mock/devices.ts
import { Device } from '@/types/deviceTypes';

export const devices: Device[] = [
  // Parque Solar San Juan (ID: 1)
  {
    id: 1,
    plantId: 1,
    type: 'SmartLogger',
    model: 'SmartLogger3000A01CN',
    serialNumber: 'SL3000-12345678',
    installationDate: '2023-04-15',
    status: 'Activo',
    physicalLocation: 'Caseta principal de control'
  },
  {
    id: 2,
    plantId: 1,
    type: 'Inversor',
    model: 'SUN2000-100KTL-M1',
    serialNumber: 'INV-20230415-001',
    installationDate: '2023-04-15',
    status: 'Activo',
    physicalLocation: 'Sección A, Rack 1'
  },
  {
    id: 3,
    plantId: 1,
    type: 'Inversor',
    model: 'SUN2000-100KTL-M1',
    serialNumber: 'INV-20230415-002',
    installationDate: '2023-04-15',
    status: 'Activo',
    physicalLocation: 'Sección A, Rack 2'
  },
  {
    id: 4,
    plantId: 1,
    type: 'Medidor',
    model: 'DTSU666-H',
    serialNumber: 'MED-20230415-001',
    installationDate: '2023-04-15',
    status: 'Activo',
    physicalLocation: 'Conexión a red'
  },
  
  // Parque Solar La Rioja (ID: 2)
  {
    id: 5,
    plantId: 2,
    type: 'SmartLogger',
    model: 'SmartLogger3000A01CN',
    serialNumber: 'SL3000-87654321',
    installationDate: '2023-08-22',
    status: 'Activo',
    physicalLocation: 'Caseta técnica principal'
  },
  {
    id: 6,
    plantId: 2,
    type: 'Inversor',
    model: 'SUN2000-100KTL-M1',
    serialNumber: 'INV-20230822-001',
    installationDate: '2023-08-22',
    status: 'Falla',
    physicalLocation: 'Sección B, Rack 1'
  },
  {
    id: 7,
    plantId: 2,
    type: 'Medidor',
    model: 'DTSU666-H',
    serialNumber: 'MED-20230822-001',
    installationDate: '2023-08-22',
    status: 'Activo',
    physicalLocation: 'Conexión a red'
  },
  
  // Parque Solar Mendoza Norte (ID: 3)
  {
    id: 8,
    plantId: 3,
    type: 'SmartLogger',
    model: 'SmartLogger3000A01CN',
    serialNumber: 'SL3000-11223344',
    installationDate: '2023-06-10',
    status: 'Activo',
    physicalLocation: 'Centro de control'
  },
  {
    id: 9,
    plantId: 3,
    type: 'Inversor',
    model: 'SUN2000-50KTL-M0',
    serialNumber: 'INV-20230610-001',
    installationDate: '2023-06-10',
    status: 'Activo',
    physicalLocation: 'Ala este, Rack 1'
  },
  {
    id: 10,
    plantId: 3,
    type: 'Batería',
    model: 'LUNA2000-5-E0',
    serialNumber: 'BAT-20230610-001',
    installationDate: '2023-06-10',
    status: 'Activo',
    physicalLocation: 'Sala de baterías'
  },
  
  // Parque Solar Mendoza Sur (ID: 4)
  {
    id: 11,
    plantId: 4,
    type: 'SmartLogger',
    model: 'SmartLogger3000A01CN',
    serialNumber: 'SL3000-55667788',
    installationDate: '2024-01-22',
    status: 'Activo',
    physicalLocation: 'Caseta de monitoreo'
  },
  {
    id: 12,
    plantId: 4,
    type: 'Inversor',
    model: 'SUN2000-60KTL-M0',
    serialNumber: 'INV-20240122-001',
    installationDate: '2024-01-22',
    status: 'Inactivo',
    physicalLocation: 'Sector 1, Rack 1'
  },
  
  // Parque Solar Neuquén (ID: 5)
  {
    id: 13,
    plantId: 5,
    type: 'SmartLogger',
    model: 'SmartLogger3000A01CN',
    serialNumber: 'SL3000-99887766',
    installationDate: '2023-11-05',
    status: 'Activo',
    physicalLocation: 'Edificio de control'
  },
  {
    id: 14,
    plantId: 5,
    type: 'Inversor',
    model: 'SUN2000-100KTL-M1',
    serialNumber: 'INV-20231105-001',
    installationDate: '2023-11-05',
    status: 'Activo',
    physicalLocation: 'Sección principal, Rack 1'
  },
  {
    id: 15,
    plantId: 5,
    type: 'Inversor',
    model: 'SUN2000-100KTL-M1',
    serialNumber: 'INV-20231105-002',
    installationDate: '2023-11-05',
    status: 'Activo',
    physicalLocation: 'Sección principal, Rack 2'
  }
];