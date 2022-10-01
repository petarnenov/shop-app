import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.js';
//import SHOP_DATA from '../../shop-data.js';

const initCategoriesContext = {
  categoriesMap: {},
  setCategoriesMap: () => null,
};

const CategoriesContext = createContext(initCategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // run just one to load data to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getGategoriesMap = async () => {
      const categoriesMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoriesMap);
    };
    getGategoriesMap();
  }, []);

  useEffect(() => {
    //setProducts(SHOP_DATA);
  }, [categoriesMap]);

  return (
    <CategoriesContext.Provider value={{ categoriesMap, setCategoriesMap }}>
      {children}
    </CategoriesContext.Provider>
  );
};

export default CategoriesContext;
