import * as types from './types';

const initialState = [
  'oeukjnt23qh',
  'oaouie21',
  'uedo.py.oeua'
];

export default function ids(state = initialState, action) {
  switch (action.type) {
    case types.ADD_GOODS:
      return [
        ...state,
        action.payload.id
      ];

    default:
      return state;
  }
};
