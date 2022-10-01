import React, { useContext } from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import CartDropdownContext from '../context/CartDropdownContext';

import './styles.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartDropdownContext);
  const { name, imageUrl, price } = product;

  const handleClick = (e) => {
    e.preventDefault();
    addItemToCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonTypeClass={BUTTON_TYPE_CLASSES.invrted} onClick={handleClick}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
