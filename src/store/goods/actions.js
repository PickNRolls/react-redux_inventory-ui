import * as types from './types';
// Unic id
import v4 from 'uuid/v4';

export function addGoods(payload) {
  return {
    type: types.ADD_GOODS,
    payload: {
      id: v4(),
      ...payload
    }
  };
};

export function viewGoods(id) {
  return {
    type: types.VIEW_GOODS,
    id
  };
};
