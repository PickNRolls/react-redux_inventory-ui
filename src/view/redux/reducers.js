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
      var lv = state.layoutView;
      return {
        ...state,
        layoutView: {
          ...lv,
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
      lv = state.layoutView;
      return {
        ...state,
        layoutView: {
          ...lv,
          loading: false
        }
      };

    default:
      return state;
  }
};

export default UI;
