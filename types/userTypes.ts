// src/types/userTypes.ts

export interface User {
    id: number;
    clientId: number;
    roleId: number;
    name: string;
    email: string;
    phone?: string;
    passwordHash: string;
  }
  
  export interface Role {
    id: number;
    name: string; // 'Administrador', 'Técnico', 'Operador', etc.
    description: string;
  }