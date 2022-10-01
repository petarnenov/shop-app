import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const CartDropdown = () => {
  const { isCartOpen, cartItems, toggleCartOpen } =
    useContext(CartDropdownContext);
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem cartItem={cartItem} key={cartItem.name} />
          ))
        ) : (
          <span>Your cart is empty</span>
        )}
      </div>
      <Button
        onClick={() => {
          toggleCartOpen();
          navigate('/checkout');
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
