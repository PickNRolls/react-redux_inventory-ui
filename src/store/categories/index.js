import * as goodsTypes from '../goods/types';

const initialState = {
  'all': {
    title: 'Все категории',
    img: '/img/icons/all.svg'
  },
  'electronic': {
    title: 'Электроника',
    img: '/img/icons/1.svg',
    goodsIds: [],
    subcategoriesNames: []
  },
  'computers': {
    title: 'Компьютерная техника',
    img: '/img/icons/2.svg',
    goodsIds: [],
    subcategoriesNames: ['laptops', 'tablets']
  },
  'appliances': {
    title: 'Бытовая техника',
    img: '/img/icons/3.svg',
    goodsIds: [],
    subcategoriesNames: ['washing-machines']
  },
  'clothes': {
    title: 'Одежда и обувь',
    img: '/img/icons/4.svg',
    goodsIds: [],
    subcategoriesNames: ['t-shirts', 'sneakers', 'jeans']
  },
  'sport': {
    title: 'Спорт и отдых',
    img: '/img/icons/5.svg',
    goodsIds: [],
    subcategoriesNames: []
  },
  'furniture': {
    title: 'Мебель',
    img: '/img/icons/6.svg',
    goodsIds: [],
    subcategoriesNames: ['sofas', 'chairs']
  },
  'auto': {
    title: 'Автомобили и мотоциклы',
    img: '/img/icons/7.svg',
    goodsIds: [],
    subcategoriesNames: []
  },
  'entertainment': {
    title: 'Досуг и развлечения',
    img: '/img/icons/8.svg',
    goodsIds: [],
    subcategoriesNames: ['computer-games']
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case goodsTypes.RECEIVE_GOODS:
      var changes = {};

      action.ids.forEach(id => {
        var c = action.byId[id].category;
        if (state[c]) {
          if (changes[c]) changes[c].push(id);
          else {
            changes[c] = [id];
          }
        }
      })
      
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
