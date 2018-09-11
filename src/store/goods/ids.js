import * as types from './types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_GOODS:
      return action.ids;

    case types.ADD_GOODS:
      return [
        ...state,
        action.payload.id
      ];

    default:
      return state;
  }
};
