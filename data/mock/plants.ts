// src/data/mock/plants.ts
import { Plant } from '@/types/plantTypes';

export const plants: Plant[] = [
  {
    id: 1,
    clientId: 1,
    name: 'Parque Solar San Juan',
    location: 'Ruta 40 Km 180, San Juan',
    installationDate: '2023-04-15',
    totalCapacity: 5000, // 5 MWp
    description: 'Parque solar de 5 MWp ubicado en la provincia de San Juan.'
  },
  {
    id: 2,
    clientId: 1,
    name: 'Parque Solar La Rioja',
    location: 'Ruta 74 Km 45, La Rioja',
    installationDate: '2023-08-22',
    totalCapacity: 3500, // 3.5 MWp
    description: 'Parque solar de 3.5 MWp ubicado en la provincia de La Rioja.'
  },
  {
    id: 3,
    clientId: 2,
    name: 'Parque Solar Mendoza Norte',
    location: 'Ruta 40 Km 3200, Mendoza',
    installationDate: '2023-06-10',
    totalCapacity: 2800, // 2.8 MWp
    description: 'Parque solar principal de EcoSolar en la región norte de Mendoza.'
  },
  {
    id: 4,
    clientId: 2,
    name: 'Parque Solar Mendoza Sur',
    location: 'Ruta 143 Km 20, San Rafael, Mendoza',
    installationDate: '2024-01-22',
    totalCapacity: 1500, // 1.5 MWp
    description: 'Parque solar secundario de EcoSolar ubicado en San Rafael.'
  },
  {
    id: 5,
    clientId: 3,
    name: 'Parque Solar Neuquén',
    location: 'Ruta 22 Km 1350, Neuquén',
    installationDate: '2023-11-05',
    totalCapacity: 4200, // 4.2 MWp
    description: 'Principal instalación de SunPower en la Patagonia.'
  }
];