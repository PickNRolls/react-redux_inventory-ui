import * as types from './types';

export const changeMainLayout = index => {
  return {
    type: types.CHANGE_MAIN_LAYOUT,
    index
  };
};

export const togglePopup = isEnabled => {
  return {
    type: types.CHANGE_POPUP_VISIBILITY,
    isEnabled
  };
};

export const switchPopup = index => {
  return {
    type: types.SWITCH_POPUP,
    index
  };
};
