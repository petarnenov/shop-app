import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserStore } from '../../store/user/userSelector';
import { getTotal } from '../../store/cartDropdown/cartDropdownSelector';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';

import { PaymentFormContainer, FormContainer } from './styles';
import { SpinnerContainer } from '../Button/styles';

const PaymentForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(getTotal);
  const { currentUser } = useSelector(getUserStore);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !amount) {
      return;
    }

    setIsProcessingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    // create actiual payment
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          //add more details next
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });
    setIsProcessingPayment(false);
    if (paymentResult.error) {
      console.error(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log(paymentResult);
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement />
        <Button
          buttonTypeClass={BUTTON_TYPE_CLASSES.invrted}
          isLoading={!stripe || isProcessingPayment}
        >
          Pay now
        </Button>
        <SpinnerContainer />
      </FormContainer>
    </PaymentFormContainer>
  );
};

PaymentForm.propTypes = {};

export default PaymentForm;
