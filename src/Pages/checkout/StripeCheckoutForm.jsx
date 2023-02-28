import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51J8fx1SCEIkGmPl3H7qejdtOXJIFAiBgI5hP1pkC8yGo8VpsmoGdsWuGfqZIBtjSYBV49lgIxyKX5KQFhKl847Od00eWZNmQH3');
const inputStyle = {
  iconColor: '#c4f0ff',
  color: '#ff0',
  fontWeight: '500',
  fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  fontSize: '16px',
  fontSmoothing: 'antialiased',
  ':-webkit-autofill': {
    color: '#fce883',
  },
  '::placeholder': {
    color: '#87BBFD',
  },
}

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement    options={{
   style: {
     base: inputStyle,
   },
 }} />
      <button type="submit">Pay</button>
    </form>
  );
};

export const StripeCheckoutForm = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
