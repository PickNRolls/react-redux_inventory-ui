export const getCategoryList = state => {
  return state.categoriesByName;
};

export const getGoodsArray = (state, name) => {
  if (name) {
    var subcategory = state.subcategoriesByName[name];
    
    // Return all goods in particular subcategory
    if (subcategory) {
      return subcategory.goodsIds.map(id =>
        state.goods.byId[id]
      );

    // Return all goods in category
    } else if (name !== 'all') {
      return state.categoriesByName[name].goodsIds.map(id =>
        state.goods.byId[id]
      );
    }
  }

  // Return with all category
  return state.goods.ids.map(id => state.goods.byId[id]);
};
