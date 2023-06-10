import axios from 'axios';

const VERIFONE_API_URL = 'https://api.verifone.com/payments';

// Функция для выполнения платежа
export async function processPayment(paymentData) {
  try {
    const response = await axios.post(`${VERIFONE_API_URL}/process`, paymentData);
    return response.data;
  } catch (error) {
    throw new Error('Payment processing failed.');
  }
}
