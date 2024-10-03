export interface NotificationService {
  sendNotification(message: string): void;
}

export class EmailService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending email with message: ${message}`);
  }
}

export class SMSService implements NotificationService {
  sendNotification(message: string): void {
    console.log(`Sending SMS with message: ${message}`);
  }
}
