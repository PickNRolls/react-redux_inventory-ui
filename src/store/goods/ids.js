import * as types from './types';

const initialState = [
  'oeukjnt23qh',
  'oaouie21',
  'uedo.py.oeua',
  'akcaohtn,.bue'
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
