import React from 'react';
import CategoryPreview from '../../components/CategoryPreview/CategoryPreview';
import { useSelector } from 'react-redux';
import { getCategoriesMap } from '../../store/categories/categoriesSelector';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(getCategoriesMap);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};

export default CategoriesPreview;
