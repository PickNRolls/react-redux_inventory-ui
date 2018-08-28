import * as types from './types';
import layouts from '../layout/main-variants';

const initialState = {
  layoutView: {
    ...layouts[0],
    index: 0
  }
};

const UI = (state = initialState, action) => {
  switch(action.type) {
    case types.CHANGE_MAIN_LAYOUT:
      return {
        ...state,
        layoutView: {
          ...layouts[action.index],
          index: action.index
        }
      };

    default:
      return state;
  }
};

export default UI;
