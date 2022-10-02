import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { useDispatch } from 'react-redux';

import './styles.scss';
import { addItemToCart } from '../../store/cartDropdown/cartDropdownAction';

const ProductCard = ({ product }) => {  
  const dispatch = useDispatch();
  const { name, imageUrl, price } = product;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonTypeClass={BUTTON_TYPE_CLASSES.invrted}
        onClick={handleClick}
      >
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
