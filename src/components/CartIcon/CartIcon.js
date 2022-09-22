import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const CartIcon = () => {
  const { setIsCartOpen, itemsCounter } = useContext(CartDropdownContext);

  const handleIconClick = (e) => {
    e.preventDefault();
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className="cart-icon-container" onClick={handleIconClick}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCounter}</span>
    </div>
  );
};

export default CartIcon;
