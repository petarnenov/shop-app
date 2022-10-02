import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';
import { getItemsCounter } from '../../store/cartDropdown/cartDropdownSelector';
import { setIsCartOpen } from '../../store/cartDropdown/cartDropdownAction';

const CartIcon = () => {
  const itemsCounter = useSelector(getItemsCounter);
  const dispatch = useDispatch();

  return (
    <div
      className="cart-icon-container"
      onClick={() => dispatch(setIsCartOpen())}
    >
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCounter}</span>
    </div>
  );
};

export default CartIcon;
