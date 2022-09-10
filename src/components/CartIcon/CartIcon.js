import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdowncontext from '../context/CartDropdownContext';

import './styles.scss';

const CartIcon = () => {
  const { setShow } = useContext(CartDropdowncontext);

  const handleClick = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  return (
    <div className="cart-icon-container" onClick={handleClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
