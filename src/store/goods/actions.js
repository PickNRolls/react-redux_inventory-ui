import * as types from './types';
// Unic id
import v4 from 'uuid/v4';

export const receiveGoods = goods => {
  return {
    type: types.RECEIVE_GOODS,
    byId: goods.byId,
    ids: goods.ids
  };
};

export const addGoods = payload => {
  return {
    type: types.ADD_GOODS,
    payload: {
      id: v4(),
      ...payload
    }
  };
};

export const viewGoods = id => {
  return {
    type: types.VIEW_GOODS,
    id
  };
};
