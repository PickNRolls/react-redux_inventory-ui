import * as goodsTypes from '../goods/types';

const initialState = {
  'laptops': {
    category: 'computers',
    goodsIds: [],
    title: 'Ноутбуки'
  },
  'tablets': {
    category: 'computers',
    goodsIds: [],
    title: 'Планшеты'
  },
  'washing-machines': {
    category: 'appliances',
    goodsIds: [],
    title: 'Стиральные машинки'
  },
  't-shirts': {
    category: 'clothes',
    goodsIds: [],
    title: 'Футболки'
  },
  'sneakers': {
    category: 'clothes',
    goodsIds: [],
    title: 'Кроссовки'
  },
  'jeans': {
    category: 'clothes',
    goodsIds: [],
    title: 'Джинсы'
  },
  'sofas': {
    category: 'furniture',
    goodsIds: [],
    title: 'Диваны'
  },
  'chairs': {
    category: 'furniture',
    goodsIds: [],
    title: 'Стулья'
  },
  'computer-games': {
    category: 'entertainment',
    goodsIds: [],
    title: 'Компьютерные игры'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case goodsTypes.RECEIVE_GOODS:
      var changes = {};

      action.ids.forEach(id => {
        var s = action.byId[id].subcategory;
        if (state[s]) {
          if (changes[s]) {
            changes[s].push(id);
          } else {
            changes[s] = [id];
          }
        }
      });

      var nextState = { ...state };

      for (var prop in changes) {
        nextState = {
          ...nextState,
          [prop]: {
            ...state[prop],
            goodsIds: changes[prop]
          }
        };
      }

      return nextState;

    default:
      return state;
  }
};
