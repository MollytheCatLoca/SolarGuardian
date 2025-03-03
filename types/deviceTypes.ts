// src/types/plantTypes.ts

export interface Plant {
    id: number;
    clientId: number;
    name: string;
    location: string;
    installationDate: string; // ISO format date
    totalCapacity: number; // in kWp
    description?: string;
  }