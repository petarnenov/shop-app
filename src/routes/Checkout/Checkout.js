import React, { useContext } from 'react';

import CartDropdownContext from '../../components/context/CartDropdownContext';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './styles.scss';

const Checkout = () => {
  const { cartItems,total } = useContext(CartDropdownContext);
  return (
    <div className="checkout-container">
      <header className='checkout-header'>
        <span>Product</span>
        <span>Description</span>
        <span>Quantity</span>
        <span>Price</span>
        <span>Remove</span>
      </header>
      {cartItems.map((item) => (
        <CheckoutItem item={item} key={item.name} />
      ))}
      <div className="total">Total: ${total}</div>
    </div>
  );
};

export default Checkout;
