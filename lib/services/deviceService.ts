// src/lib/services/clientService.ts
import { clients } from '@/data/mock/clients';
import { Client } from '@/types/clientTypes';

// Simular una pequeña latencia para emular llamadas a API
const simulateLatency = () => new Promise(resolve => setTimeout(resolve, 300));

/**
 * Obtiene todos los clientes
 */
export const getAllClients = async (): Promise<Client[]> => {
  await simulateLatency();
  return [...clients];
};

/**
 * Obtiene un cliente por su ID
 */
export const getClientById = async (id: number): Promise<Client | undefined> => {
  await simulateLatency();
  return clients.find(client => client.id === id);
};

/**
 * Crea un nuevo cliente
 */
export const createClient = async (clientData: Omit<Client, 'id'>): Promise<Client> => {
  await simulateLatency();
  
  // Simulamos la creación asignando un nuevo ID (en una DB real esto sería automático)
  const newId = Math.max(...clients.map(c => c.id)) + 1;
  const newClient: Client = {
    id: newId,
    ...clientData
  };
  
  // En una implementación real, aquí se añadiría a la base de datos
  // Para el mock, no modificamos el array original para evitar problemas de estado
  
  return newClient;
};

/**
 * Actualiza un cliente existente
 */
export const updateClient = async (id: number, clientData: Partial<Client>): Promise<Client | undefined> => {
  await simulateLatency();
  
  const clientIndex = clients.findIndex(client => client.id === id);
  if (clientIndex === -1) return undefined;
  
  // En una implementación real, aquí se actualizaría en la base de datos
  // Para el mock, creamos un objeto actualizado pero no modificamos el array original
  const updatedClient: Client = {
    ...clients[clientIndex],
    ...clientData
  };
  
  return updatedClient;
};

/**
 * Elimina un cliente
 */
export const deleteClient = async (id: number): Promise<boolean> => {
  await simulateLatency();
  
  const clientIndex = clients.findIndex(client => client.id === id);
  if (clientIndex === -1) return false;
  
  // En una implementación real, aquí se eliminaría de la base de datos
  // Para el mock, simplemente devolvemos true para simular éxito
  
  return true;
};