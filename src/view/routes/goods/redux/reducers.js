import types from './types';

const initialState = {
  UI: {
    activeCategory: 'Электроника'
  },

  goodsById: {},
  goodsIds: [],

  categoriesByName: {
    'Электроника': {
      img: 'img/icons/1.svg',
      route: '/goods/electonic',
      subcategoriesNames: []
    },
    'Компьютерная техника': {
      img: 'img/icons/2.svg',
      route: '/goods/computers',
      subcategoriesNames: ['Ноутбуки', 'Планшеты']
    },
    'Бытовая техника': {
      img: 'img/icons/3.svg',
      route: '/goods/appliances',
      subcategoriesNames: ['Стиральные машинки']
    },
    'Одежда и обувь': {
      img: 'img/icons/4.svg',
      route: '/goods/clothes',
      subcategoriesNames: ['Футболки', 'Кроссовки', 'Джинсы']
    },
    'Спорт и отдых': {
      img: 'img/icons/5.svg',
      route: '/goods/sport',
      subcategoriesNames: []
    },
    'Мебель': {
      img: 'img/icons/6.svg',
      route: '/goods/furniture',
      subcategoriesNames: ['Диваны', 'Кресла']
    },
    'Автомобили и мотоциклы': {
      img: 'img/icons/7.svg',
      route: '/goods/auto',
      subcategoriesNames: []
    },
    'Досуг и развлечения': {
      img: 'img/icons/8.svg',
      route: '/goods/entertainment',
      subcategoriesNames: ['Компьютерные игры']
    }
  },

  subcategoriesByName: {
    'Ноутбуки': ['oe345HTkoetn82Hent'],
    'Планшеты': [],
    'Стиральные машинки': [],
    'Футболки': [],
    'Кроссовки': [],
    'Джинсы': [],
    'Диваны': [],
    'Кресла': [],
    'Компьютерные игры': []
  }
};

var goods = function(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_CATEGORY:
      if (!state.categoriesByName[action.category])
        return state;

      return {
        ...state,
        UI: {
          activeCategory: action.category
        }
      };

    default:
      return state;
  }
};

export default goods;
