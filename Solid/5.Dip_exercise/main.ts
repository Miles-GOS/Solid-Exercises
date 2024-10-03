import { SendNotification } from "./SendNotification";
import { EmailService, SMSService } from "./NotificationService";

const emailService = new EmailService();
const sendEmailNotification = new SendNotification(emailService);
sendEmailNotification.sendNotification("Hello, this is an email notification!");

const smsService = new SMSService();
const sendSMSNotification = new SendNotification(smsService);
sendSMSNotification.sendNotification("Hello, this is an SMS notification!");
