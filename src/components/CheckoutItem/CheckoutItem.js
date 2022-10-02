import React from 'react';
import {
  addItemToCart,
  removeItemFromCart,
  removeProductFromCart,
} from '../../store/cartDropdown/cartDropdownAction';
import { useDispatch } from 'react-redux';

import './styles.scss';

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch();

  const { imageUrl, quantity, price, name } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span
          className="arrow"
          onClick={() => dispatch(removeItemFromCart(item))}
        >
          {'<'}
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => dispatch(addItemToCart(item))}>
          {'>'}
        </span>
      </div>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(removeProductFromCart(item))}
      >
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
