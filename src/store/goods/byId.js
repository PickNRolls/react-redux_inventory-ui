import * as types from './types';

const initialState = {
  'oeukjnt23qh': {
    id: 'oeukjnt23qh',
    category: 'laptops',
    images: [0, 2, 3],
    previewImage: '/img/goods/1.jpg',
    name: 'Apple Macbook 2017',
    price: 120000,
    guaranteeUpTo: '17.03.2020',
    purchaseDate: '17.09.2017',
    responsible: 'Антон Бочаров'
  },
  'oaouie21': {
    id: 'oaouie21',
    category: 'computer-games',
    images: [0, 2, 3, 4],
    previewImage: '/img/goods/3.jpg',
    name: 'Sony Dualshock 5',
    price: 6000,
    guaranteeUpTo: '17.03.2020',
    purchaseDate: '17.09.2017',
    responsible: 'Константин Красиков'
  },
  'uedo.py.oeua': {
    id: 'uedo.py.oeua',
    category: 'computer-games',
    images: [0, 2],
    previewImage: '/img/goods/3.jpg',
    name: 'Sony Dualshock 5',
    price: 6000,
    guaranteeUpTo: '17.03.2020',
    purchaseDate: '17.09.2017',
    responsible: 'Антон Бочаров'
  },
  'akcaohtn,.bue': {
    id: 'akcaohtn,.bue',
    category: 'tablets',
    images: [0, 2],
    previewImage: '/img/goods/2.jpg',
    name: 'Apple iPad Pro 12',
    price: 68000,
    guaranteeUpTo: '17.03.2020',
    purchaseDate: '17.09.2017',
    responsible: 'Антон Бочаров'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_GOODS:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
};
