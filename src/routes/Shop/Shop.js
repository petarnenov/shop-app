import React, { useContext } from 'react';
import ProductsContext from '../../components/context/ProductsContext';
import ProductCard from '../../components/ProductCard.js/ProductCard';

import './styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;
