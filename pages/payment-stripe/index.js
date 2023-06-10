import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '/components/CheckoutForm';
import styles from "@/styles/pages/Payment.module.scss";

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function Home() {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntent, setPaymentIntent] = useState('');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads using our local API
    fetch('api/stripe_intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: 30000,
        payment_intent_id: '',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.client_secret), setPaymentIntent(data.id);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
    labels: 'floating',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Head>
        <title>Payments</title>
      </Head>
      <div className={styles.wrapper}>
        {clientSecret && (
          <Elements options={options} stripe={stripe}>
            <CheckoutForm paymentIntent={paymentIntent} />
          </Elements>
        )}
      </div>
      </div>
  );
}
