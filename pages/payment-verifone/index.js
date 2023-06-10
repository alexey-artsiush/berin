import { useState } from 'react';
import { processPayment } from '../../api/verifone';

export default function PaymentPage() {
  const [paymentResult, setPaymentResult] = useState(null);

  const handlePayment = async () => {
    const paymentData = {
      // Здесь должны быть данные платежа, например, сумма, описание, детали покупки и т.д.
    };

    try {
      const result = await processPayment(paymentData);
      setPaymentResult(result);
    } catch (error) {
      console.error(error);
      setPaymentResult(null);
    }
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <button onClick={handlePayment}>Process Payment</button>
      {paymentResult && (
        <div>
          <h2>Payment Result:</h2>
          <pre>{JSON.stringify(paymentResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
