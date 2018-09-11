export const getGoodsArray = (state, name) => {
  if (name) {
    var subcategory = state.subcategoriesByName[name];
    
    // Return all goods in particular subcategory
    if (subcategory && subcategory.goodsIds.length) {
      return subcategory.goodsIds.map(id =>
        state.goods.byId[id]
      );

    // Return all goods in category
    }

    if (name !== 'all' && !subcategory) {
      return state.categoriesByName[name].goodsIds.map(id =>
        state.goods.byId[id]
      );
    }
  }

  // Return with all category
  return state.goods.ids.map(id => state.goods.byId[id]);
};
