import {
  CreditCardPayment,
  PayPalPayment,
  CashPayment,
  handlePayment,
} from "./PaymentProcessor";

const creditCardPayment = new CreditCardPayment();
handlePayment(creditCardPayment, 100);

const payPalPayment = new PayPalPayment();
handlePayment(payPalPayment, 200);

const cashPayment = new CashPayment();
handlePayment(cashPayment, 50);
