import { NotificationService } from "./NotificationService";

export class SendNotification {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
    this.notificationService = notificationService;
  }

  sendNotification(message: string): void {
    this.notificationService.sendNotification(message);
  }
}
