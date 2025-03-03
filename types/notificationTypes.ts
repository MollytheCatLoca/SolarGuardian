// src/types/notificationTypes.ts

export type NotificationChannel = 'Email' | 'WhatsApp';
export type NotificationStatus = 'Enviado' | 'Pendiente' | 'Fallido';

export interface Notification {
  id: number;
  userId: number;
  alarmId?: number; // Nullable, puede no estar asociado a una alarma
  message: string;
  channel: NotificationChannel;
  sendDate: string; // ISO format date-time
  status: NotificationStatus;
}