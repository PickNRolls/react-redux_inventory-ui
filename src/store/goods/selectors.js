export const getCategoryList = function(state) {
  return state.categoriesByName;
};

export const getGoodsArray = function(state) {
  return state.goods.ids.map((id) => state.goods.byId[id]);
};
