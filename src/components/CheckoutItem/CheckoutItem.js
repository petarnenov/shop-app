import React, { useContext } from 'react';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const CheckoutItem = ({ item }) => {
  const { removeItemFromCart, addItemToCart, removeProductFromCart } =
    useContext(CartDropdownContext);
  const { imageUrl, quantity, price, name } = item;
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <div className="quantity">
        <span className="arrow" onClick={() => removeItemFromCart(item)}>
          {'<'}
        </span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={() => addItemToCart(item)}>
          {'>'}
        </span>
      </div>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => removeProductFromCart(item)}
      >
       &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
