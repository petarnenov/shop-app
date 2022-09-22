import React, { useContext } from 'react';

import Button from '../Button/Button';
import CartDropdowncontext from '../context/CartDropdownContext';

import './styles.scss';

const CartDropdown = () => {
  const { isCartOpen } = useContext(CartDropdowncontext);

  if (!isCartOpen) return null;

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
