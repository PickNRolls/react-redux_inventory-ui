import types from './types';

var changeCategory = function(category) {
  return {
    type: types.CHANGE_CATEGORY,
    category
  };
};

export default {
  changeCategory
};
