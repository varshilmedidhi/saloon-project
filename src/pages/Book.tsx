import React, { useState } from 'react';
import { InlineWidget } from 'react-calendly';
import { loadStripe } from '@stripe/stripe-js';
import { env } from '../config/env';
import { Alert } from '../components/common/Alert';
import { Button } from '../components/common/Button';

const stripePromise = loadStripe(env.STRIPE_PUBLISHABLE_KEY);

export function Book() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await fetch('/.netlify/functions/create-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: 2500, // $25.00 deposit
          service: 'Appointment Deposit',
        }),
      });

      if (!response.ok) {
        throw new Error('Payment failed');
      }

      const { id: sessionId } = await response.json();
      const stripe = await stripePromise;
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw stripeError;
      }

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setIsLoading(false);
    }
  };

  // Check for successful payment
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowCalendly(true);
    }
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 mb-8">
            Schedule your treatment at a time that works best for you.
          </p>

          {error && (
            <Alert variant="error" className="mb-6">
              {error}
            </Alert>
          )}

          {!showCalendly ? (
            <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Secure Your Appointment</h2>
              <p className="text-gray-600 mb-6">
                A $25 deposit is required to book your appointment. This amount will be
                deducted from your final service cost.
              </p>
              <Button
                onClick={handlePayment}
                isLoading={isLoading}
                disabled={isLoading}
                className="w-full"
              >
                Pay Deposit & Schedule
              </Button>
            </div>
          ) : (
            <div className="min-h-[700px]">
              <InlineWidget
                url="https://calendly.com/medidhivarshil/30min"
                styles={{
                  height: '700px',
                  width: '100%'
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}