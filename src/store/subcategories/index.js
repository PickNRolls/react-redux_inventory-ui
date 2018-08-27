const initialState = {
  'laptops': {
    goodsIds: ['oe345HTkoetn82Hent'],
    title: 'Ноутбуки'
  },
  'tablets': {
    goodsIds: [],
    title: 'Планшеты'
  },
  'washing-machines': {
    goodsIds: [],
    title: 'Стиральные машинки'
  },
  't-shirts': {
    goodsIds: [],
    title: 'Футболки'
  },
  'sneakers': {
    goodsIds: [],
    title: 'Кроссовки'
  },
  'jeans': {
    goodsIds: [],
    title: 'Джинсы'
  },
  'sofas': {
    goodsIds: [],
    title: 'Диваны'
  },
  'chairs': {
    goodsIds: [],
    title: 'Стулья'
  },
  'computer-games': {
    goodsIds: [],
    title: 'Компьютерные игры'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
