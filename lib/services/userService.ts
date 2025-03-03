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
export const createUser = async (userData: Omit<User, 'id' | 'passwordHash'> & { password: string }): Promise<Omit<User, 'passwordHash'>> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID
  const newId = Math.max(...users.map(u => u.id)) + 1;
  
  // En un sistema real, hashearíamos la contraseña antes de almacenarla
  // Para este mock, simulamos un hash simple
  const passwordHash = `hashed_${userData.password}`;
  
  const newUser: User = {
    id: newId,
    passwordHash,
    ...userData,
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  
  return maskSensitiveData(newUser);
};

/**
 * Actualiza un usuario existente
 */
export const updateUser = async (
  id: number, 
  userData: Partial<Omit<User, 'id' | 'passwordHash'>> & { password?: string }
): Promise<Omit<User, 'passwordHash'> | undefined> => {
  await simulateLatency();
  
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return undefined;
  
  // En un sistema real, hashearíamos la nueva contraseña si se proporciona
  const passwordHash = userData.password 
    ? `hashed_${userData.password}`
    : users[userIndex].passwordHash;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  const updatedUser: User = {
    ...users[userIndex],
    ...userData,
    passwordHash,
    id, // Asegurarse de que el ID no cambie
  };
  
  // Eliminar la propiedad password si existe
  if ('password' in userData) {
    const { password, ...rest } = userData;
    Object.assign(updatedUser, rest);
  }
  
  return maskSensitiveData(updatedUser);
};

/**
 * Elimina un usuario
 */
export const deleteUser = async (id: number): Promise<boolean> => {
  await simulateLatency();
  
  const userIndex = users.findIndex(user => user.id === id);
  if (userIndex === -1) return false;
  
  // En una implementación real, aquí se eliminaría de la base de datos
  
  return true;
};

/**
 * Autenticar un usuario
 */
export const authenticateUser = async (
  email: string, 
  password: string
): Promise<Omit<User, 'passwordHash'> | null> => {
  await simulateLatency();
  
  // En un sistema real, compararíamos el hash de la contraseña
  // Para este mock, simulamos verificación simple
  const user = users.find(
    user => 
      user.email.toLowerCase() === email.toLowerCase() && 
      user.passwordHash === `hashed_${password}`
  );
  
  return user ? maskSensitiveData(user) : null;
};

/**
 * Obtiene todos los roles disponibles
 */
export const getAllRoles = async (): Promise<Role[]> => {
  await simulateLatency();
  return [...roles];
};

/**
 * Obtiene un rol por su ID
 */
export const getRoleById = async (id: number): Promise<Role | undefined> => {
  await simulateLatency();
  return roles.find(role => role.id === id);
};