import React, { useContext, useEffect } from 'react';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const CartDropdown = () => {
  const { isCartOpen, cartItems, itemsCounter } =
    useContext(CartDropdownContext);

  if (!isCartOpen) return null;

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem cartItem={cartItem} key={cartItem.name} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
