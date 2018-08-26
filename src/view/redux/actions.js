import types from './types';

var changeMainLayout = function(index) {
  return {
    type: types.CHANGE_MAIN_LAYOUT,
    index
  };
};

export default {
  changeMainLayout
};
