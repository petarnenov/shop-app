import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoriesContext from '../../components/context/CategoriesContext';
import ProductCard from '../../components/ProductCard.js/ProductCard';

import './styles.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Category;
