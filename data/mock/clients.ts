// src/data/mock/clients.ts
import { Client } from '@/types/clientTypes';

export const clients: Client[] = [
  {
    id: 1,
    name: 'Energía Solar Argentina S.A.',
    address: 'Av. Corrientes 1234, Buenos Aires',
    phone: '+54 11 4567-8900',
    email: 'contacto@energiasolar.com.ar',
    description: 'Empresa dedicada a la gestión de parques solares en Argentina.'
  },
  {
    id: 2,
    name: 'EcoSolar Mendoza',
    address: 'San Martín 567, Mendoza',
    phone: '+54 261 423-5678',
    email: 'info@ecosolar.com.ar',
    description: 'Empresa especializada en energías renovables con foco en la región de Cuyo.'
  },
  {
    id: 3,
    name: 'SunPower Patagonia',
    address: 'Av. Rivadavia 890, Neuquén',
    phone: '+54 299 442-1122',
    email: 'operaciones@sunpower.com.ar',
    description: 'Operador de parques solares en la región patagónica.'
  }
];