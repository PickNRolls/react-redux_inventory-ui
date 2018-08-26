import { createStore } from 'redux';
import rootReducer from './rootReducer';

const store = createStore(rootReducer);

export default store;

/* Store prototype

  Goods state
  {
    id: 'oe345HTkoetn82Hent',
    name: 'Apple Macbook 2017',
    category: subcategories['Ноутбук'],
    gpsCoords: [54.45, 42.53],
    producer: 'Apple',
    model: 'Late 2017',
    purchaseDate: Date Format: 15.11.2017,
    purchasePrice: 110000,
    equipment: 'Кабель питания, клавиатура..',
    guaranteeUpTo: Date Format 14.11.2018,
    images: [url, url, url],
    previewImage: url,
    responsibleId: 'oaet12duDkb1421aoe'
  }


  People state
  {
    id: 'oaet12duDkb1421aoe',
    name: {
      first: 'Антон',
      last: 'Бочаров'
    },
    position: 'Кладовщик',
    email: 'antonBocharov@gmail.com',
    avatar: 'https://avatar.api.ru/oaet12duDkb1421aoe',
    goodsIds: ['oe345HTkoetn82Hent']
  }


  Places state
  {
    id: 'ktheiu24snauh',
    name: 'Отдел качества',
    street: 'ул. Мира, 24'
  }


  UI state
  {
    layoutView: 0 or 1 or 2 - LayoutControl Component button index
  }

  Store state
  {
    UI: {
      layoutView: 0,
      activeCategory: 'Электроника'
    },


    goodsById: {
      'oe345HTkoetn82Hent': {
        id: oe345HTkoetn82Hent,
        name: 'Apple Macbook 2017',
        category: 'Ноутбуки',
        gpsCoords: [54.45, 42.53],
        producer: 'Apple',
        model: 'Late 2017',
        purchaseDate: Date Format: 15.11.2017,
        purchasePrice: 110000,
        equipment: 'Кабель питания, клавиатура..',
        guaranteeUpTo: Date Format 14.11.2018,
        images: [url, url, url],
        previewImage: url
      },
      'hoej21hHosS9281Xa': {
        id: oe345HTkoetn82Hent,
        name: 'Apple Macbook 2017',
        category: 'Ноутбуки',
        gpsCoords: [54.45, 42.53],
        producer: 'Apple',
        model: 'Late 2017',
        purchaseDate: Date Format: 15.11.2017,
        purchasePrice: 110000,
        equipment: 'Кабель питания, клавиатура..',
        guaranteeUpTo: Date Format 14.11.2018,
        images: [url, url, url],
        previewImage: url
      }
    },
    goodsIds: ['oe345HTkoetn82Hent', 'hoej21hHosS9281Xa'], - It's for itterate


    categoriesByName: {
      'Электроника': {
        subcategoriesNames: []
      },
      'Компьютерная техника': {
        subcategoriesNames: ['Ноутбуки', 'Планшеты']
      }
    },
    subcategoriesByName: {
      'Ноутбуки': {
        goodsIds: ['oe345HTkoetn82Hent']
      },
      'Планшеты': {
        goodsIds: []
      }
    },


    peopleById: {
      'oaet12duDkb1421aoe': {
        id: 'oaet12duDkb1421aoe',
        name: {
          first: 'Антон',
          last: 'Бочаров'
        },
        position: 'Кладовщик',
        email: 'antonBocharov@gmail.com',
        avatar: 'https://avatar.api.ru/oaet12duDkb1421aoe',
        goodsIds: ['oe345HTkoetn82Hent']
      }
    },
    peopleIds: ['oaet12duDkb1421aoe'],


    placesByIds: {
      'ktheiu24snauh': {
        id: 'ktheiu24snauh',
        name: 'Отдел качества',
        street: 'ул. Мира, 24'
      }
    },
    placesIds: ['ktheiu24snauh']
  }

*/
