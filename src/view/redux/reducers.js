import * as types from './types';
import layouts from '../layout/main-variants';

// Outer types
import * as goodsTypes from '../../store/goods/types';

const initialState = {
  layoutView: {
    ...layouts[0],
    index: 0,
    loading: true
  },
  popupIsEnabled: false,
  popupIndex: 0
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

    case types.CHANGE_POPUP_VISIBILITY:
      return {
        ...state,
        popupIsEnabled: action.isEnabled
      };

    case types.SWITCH_POPUP:
      return {
        ...state,
        popupIndex: action.index
      };

    case goodsTypes.RECEIVE_GOODS:
      return {
        ...state,
        layoutView: {
          loading: false
        }
      };

    default:
      return state;
  }
};

export default UI;
