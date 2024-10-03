export interface PaymentProcessor {
  processPayment(amount: number): void;
}

export class CreditCardPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing credit card payment of $${amount}`);
    console.log("Validating credit card details...");
    console.log("Charging the credit card...");
  }
}

export class PayPalPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing PayPal payment of $${amount}`);
    console.log("Redirecting to PayPal...");
    console.log("Completing PayPal transaction...");
  }
}

export class CashPayment implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Processing cash payment of $${amount}`);
    console.log("Cash payment requires a physical transaction.");
  }
}

export function handlePayment(
  paymentProcessor: PaymentProcessor,
  amount: number
): void {
  paymentProcessor.processPayment(amount);
}
