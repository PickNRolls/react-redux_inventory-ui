import * as types from './types';

const initialState = 'oeukjnt23qh';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_GOODS:
      return action.id;

    default:
      return state;
  }
};
