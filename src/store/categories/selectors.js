export const getCategoryList = state => {
  return state.categoriesByName;
};

export const getSubcategoriesOf = (state, category) => {
  if (!state.categoriesByName[category]) {
    return null;
  }

  return state.categoriesByName[category].subcategoriesNames;
};
