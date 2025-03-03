// src/lib/services/userService.ts
import { users } from '@/data/mock/users';
import { roles } from '@/data/mock/roles';
import { User, Role } from '@/types/userTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

// Función para enmascarar datos sensibles para devolución
const maskSensitiveData = (user: User): Omit<User, 'passwordHash'> & { passwordHash?: string } => {
  const { passwordHash, ...rest } = user;
  return rest;
};

/**
 * Obtiene todos los usuarios (sin contraseñas)
 */
export const getAllUsers = async (): Promise<Omit<User, 'passwordHash'>[]> => {
  await simulateLatency();
  return users.map(maskSensitiveData);
};

/**
 * Obtiene usuarios por cliente
 */
export const getUsersByClientId = async (clientId: number): Promise<Omit<User, 'passwordHash'>[]> => {
  await simulateLatency();
  
  return users
    .filter(user => user.clientId === clientId)
    .map(maskSensitiveData);
};

/**
 * Obtiene usuarios por rol
 */
export const getUsersByRoleId = async (roleId: number): Promise<Omit<User, 'passwordHash'>[]> => {
  await simulateLatency();
  
  return users
    .filter(user => user.roleId === roleId)
    .map(maskSensitiveData);
};

/**
 * Obtiene un usuario por su ID
 */
export const getUserById = async (id: number): Promise<Omit<User, 'passwordHash'> | undefined> => {
  await simulateLatency();
  
  const user = users.find(user => user.id === id);
  return user ? maskSensitiveData(user) : undefined;
};

/**
 * Obtiene un usuario por su email
 */
export const getUserByEmail = async (email: string): Promise<Omit<User, 'passwordHash'> | undefined> => {
  await simulateLatency();
  
  const user = users.find(user => user.email.toLowerCase() === email.toLowerCase());
  return user ? maskSensitiveData(user) : undefined;
};

/**
 * Crea un nuevo usuario
 */
export const createUser = async