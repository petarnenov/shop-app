import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard.js/ProductCard';

import './styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <Link to={title} className="title">
        {title.toUpperCase()}
      </Link>
      <div className="preview">
        {products.slice(0, 4).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
