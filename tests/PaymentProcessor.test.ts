import {
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handlePayment,
} from "../Solid/3.Lsp_exercise/PaymentProcessor";

describe("Payment Processor", () => {
  let consoleLogSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, "log").mockImplementation();
  });

  afterEach(() => {
    consoleLogSpy.mockRestore();
  });

  test("CreditCardPayment processes correctly", () => {
    const creditCardPayment = new CreditCardPayment();
    handlePayment(creditCardPayment, 100);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Processing credit card payment of $100"
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Validating credit card details..."
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("Charging the credit card...");
  });

  test("PayPalPayment processes correctly", () => {
    const payPalPayment = new PayPalPayment();
    handlePayment(payPalPayment, 200);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Processing PayPal payment of $200"
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("Redirecting to PayPal...");
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Completing PayPal transaction..."
    );
  });

  test("CashPayment processes correctly", () => {
    const cashPayment = new CashPayment();
    handlePayment(cashPayment, 50);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Processing cash payment of $50"
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "Cash payment requires a physical transaction."
    );
  });
});
