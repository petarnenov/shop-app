import { createContext, useEffect, useState } from 'react';

import shopDataJSON from '../../shop-data.json';

const initProductsContext = {
  products: [],
  setProducts: () => null,
};

const ProductsContext = createContext(initProductsContext);

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(shopDataJSON);
  }, [products]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
