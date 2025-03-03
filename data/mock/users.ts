// src/data/mock/users.ts
import { User } from '@/types/userTypes';

export const users: User[] = [
  // Administradores de sistema
  {
    id: 1,
    clientId: 0, // 0 = BIS Integraciones (super admin)
    roleId: 1, // Administrador
    name: 'Administrador Sistema',
    email: 'admin@bisintegraciones.com',
    phone: '+54 9 11 5121 3012',
    passwordHash: 'hash_password_admin'
  },
  {
    id: 2,
    clientId: 0, // 0 = BIS Integraciones
    roleId: 2, // Soporte
    name: 'Soporte Técnico',
    email: 'soporte@bisintegraciones.com',
    phone: '+54 9 11 5121 3013',
    passwordHash: 'hash_password_soporte'
  },
  
  // Usuarios de Energía Solar Argentina S.A. (Cliente ID 1)
  {
    id: 3,
    clientId: 1,
    roleId: 3, // Administrador Cliente
    name: 'Jorge Martínez',
    email: 'jmartinez@energiasolar.com.ar',
    phone: '+54 9 11 2345-6789',
    passwordHash: 'hash_password_jmartinez'
  },
  {
    id: 4,
    clientId: 1,
    roleId: 4, // Técnico
    name: 'Laura González',
    email: 'lgonzalez@energiasolar.com.ar',
    phone: '+54 9 11 3456-7890',
    passwordHash: 'hash_password_lgonzalez'
  },
  {
    id: 5,
    clientId: 1,
    roleId: 4, // Técnico
    name: 'Carlos Pérez',
    email: 'cperez@energiasolar.com.ar',
    phone: '+54 9 11 4567-8901',
    passwordHash: 'hash_password_cperez'
  },
  
  // Usuarios de EcoSolar Mendoza (Cliente ID 2)
  {
    id: 6,
    clientId: 2,
    roleId: 3, // Administrador Cliente
    name: 'María Rodríguez',
    email: 'mrodriguez@ecosolar.com.ar',
    phone: '+54 9 261 567-8901',
    passwordHash: 'hash_password_mrodriguez'
  },
  {
    id: 7,
    clientId: 2,
    roleId: 4, // Técnico
    name: 'Pablo Silva',
    email: 'psilva@ecosolar.com.ar',
    phone: '+54 9 261 678-9012',
    passwordHash: 'hash_password_psilva'
  },
  
  // Usuarios de SunPower Patagonia (Cliente ID 3)
  {
    id: 8,
    clientId: 3,
    roleId: 3, // Administrador Cliente
    name: 'Ana López',
    email: 'alopez@sunpower.com.ar',
    phone: '+54 9 299 789-0123',
    passwordHash: 'hash_password_alopez'
  },
  {
    id: 9,
    clientId: 3,
    roleId: 4, // Técnico
    name: 'Diego Fernández',
    email: 'dfernandez@sunpower.com.ar',
    phone: '+54 9 299 890-1234',
    passwordHash: 'hash_password_dfernandez'
  },
  {
    id: 10,
    clientId: 3,
    roleId: 5, // Operador
    name: 'Lucía Sánchez',
    email: 'lsanchez@sunpower.com.ar',
    phone: '+54 9 299 901-2345',
    passwordHash: 'hash_password_lsanchez'
  }
];