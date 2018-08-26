import types from './types';

const initialState = {
  layoutView: 0
};

var UI = function(state = initialState, action) {
  switch(action.type) {
    case types.CHANGE_MAIN_LAYOUT:
      return {
        ...state,
        layoutView: action.index
      };

    default:
      return state;
  }
};

export default UI;
