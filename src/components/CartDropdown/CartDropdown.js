import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getCartItems,
  getIsCartOpen,
} from '../../store/cartDropdown/cartDropdownSelector';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';

import './styles.scss';
import { setIsCartOpen } from '../../store/cartDropdown/cartDropdownAction';

const CartDropdown = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(getIsCartOpen);
  const cartItems = useSelector(getCartItems);

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
          dispatch(setIsCartOpen());
          navigate('/checkout');
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

export default CartDropdown;
