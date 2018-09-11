import * as types from './types';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_GOODS:
      return action.id;

    default:
      return state;
  }
};
