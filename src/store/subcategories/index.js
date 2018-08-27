const initialState = {
  'laptops': {
    goodsIds: ['oeukjnt23qh'],
    title: 'Ноутбуки'
  },
  'tablets': {
    goodsIds: ['akcaohtn,.bue'],
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
    goodsIds: ['oaouie21', 'uedo.py.oeua'],
    title: 'Компьютерные игры'
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
