import { SendNotification } from "../Solid/5.Dip/SendNotification";
import { EmailService, SMSService } from "../Solid/5.Dip/NotificationService";

describe("SendNotification", () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("should send email notification", () => {
    const emailService = new EmailService();
    const sendNotification = new SendNotification(emailService);
    sendNotification.sendNotification("Test Email");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Sending email with message: Test Email"
    );
  });

  test("should send SMS notification", () => {
    const smsService = new SMSService();
    const sendNotification = new SendNotification(smsService);
    sendNotification.sendNotification("Test SMS");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Sending SMS with message: Test SMS"
    );
  });
});
