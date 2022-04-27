export interface AlertMessage {
  level: 'error' | 'warn' | 'success' | 'ongoing' | 'dismiss',
  message: string
  length?: number
}