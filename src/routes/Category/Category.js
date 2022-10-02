import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard.js/ProductCard';
import { getCategoriesMap } from '../../store/categories/categoriesSelector';
import { useSelector } from 'react-redux';

import './styles.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(getCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

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
