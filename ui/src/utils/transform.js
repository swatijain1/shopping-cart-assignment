export const transformResponse = (responseData) => {
  responseData.sort((a, b) => a.order - b.order);
  return responseData.filter((value) => value.order > 0);
};

export const getActiveCategoryInfo = (categories, activeCategory) => {
  if (!activeCategory || !categories) return null;
  return categories.find(
    (category) => category.key.trim() === activeCategory.trim()
  );
};

export const getFilteredProducts = (productList, categoryInfo) => {
  if (!categoryInfo || !productList) return productList;

  return productList.filter((product) => {
    return product.category === categoryInfo.id;
  });
};
