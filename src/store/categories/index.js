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
    goodsIds: ['oeukjnt23qh', 'akcaohtn,.bue'],
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
    goodsIds: ['oaouie21', 'uedo.py.oeua'],
    subcategoriesNames: ['computer-games']
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
