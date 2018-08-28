import * as types from './types';

export const changeMainLayout = index => {
  return {
    type: types.CHANGE_MAIN_LAYOUT,
    index
  };
};
