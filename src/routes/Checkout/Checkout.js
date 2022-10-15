import React from 'react';
import { useSelector } from 'react-redux';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import PaymentForm from '../../components/PaymentForm/PaymentForm';
import {
  getCartItems,
  getTotal,
} from '../../store/cartDropdown/cartDropdownSelector';

import './styles.scss';

const Checkout = () => {
  const cartItems = useSelector(getCartItems);
  const total = useSelector(getTotal);

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.name} />
      ))}
      <div className="total">Total: bgn {total}</div>
      <PaymentForm />
    </div>
  );
};

export default Checkout;
