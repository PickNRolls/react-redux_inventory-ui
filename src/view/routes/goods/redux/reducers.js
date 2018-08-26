import types from './types';

const initialState = {
  goodsById: {},
  goodsIds: [],

  categoriesByName: {
    'all': {
      title: 'Все категории',
      img: 'img/icons/all.svg'
    },
    'electronic': {
      title: 'Электроника',
      img: 'img/icons/1.svg',
      subcategoriesNames: []
    },
    'computers': {
      title: 'Компьютерная техника',
      img: 'img/icons/2.svg',
      subcategoriesNames: ['laptops', 'tablets']
    },
    'appliances': {
      title: 'Бытовая техника',
      img: 'img/icons/3.svg',
      subcategoriesNames: ['washing-machines']
    },
    'clothes': {
      title: 'Одежда и обувь',
      img: 'img/icons/4.svg',
      subcategoriesNames: ['t-shirts', 'sneakers', 'jeans']
    },
    'sport': {
      title: 'Спорт и отдых',
      img: 'img/icons/5.svg',
      subcategoriesNames: []
    },
    'furniture': {
      title: 'Мебель',
      img: 'img/icons/6.svg',
      subcategoriesNames: ['sofas', 'chairs']
    },
    'auto': {
      title: 'Автомобили и мотоциклы',
      img: 'img/icons/7.svg',
      subcategoriesNames: []
    },
    'entertainment': {
      title: 'Досуг и развлечения',
      img: 'img/icons/8.svg',
      subcategoriesNames: ['computer-games']
    }
  },


  subcategoriesByName: {
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
  }
};

var goods = function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

export default goods;
