const initialState = {
  'laptops': {
    category: 'computers',
    goodsIds: ['oeukjnt23qh'],
    title: 'Ноутбуки'
  },
  'tablets': {
    category: 'computers',
    goodsIds: ['akcaohtn,.bue'],
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
