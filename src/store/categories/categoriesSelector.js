export const getCategoriesMap = (state) => {
  const categoriesMap = state?.categories?.categoriesArray?.reduce((acc, { title, items }) => {    
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoriesMap;
};
