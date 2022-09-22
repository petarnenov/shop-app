import React, { useContext } from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const CartIcon = () => {
  const { toggleCartOpen, itemsCounter } = useContext(CartDropdownContext);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCounter}</span>
    </div>
  );
};

export default CartIcon;
