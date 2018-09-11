var delay = ms => {
  return new Promise(res =>
    setTimeout(res, ms)
  );
};

export const fetchGoods = category => {
  return delay(1000).then(() => {
    return {
      byId: {
        'oeukjnt23qh': {
          id: 'oeukjnt23qh',
          category: 'computers',
          subcategory: 'laptops',
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
          category: 'entertainment',
          subcategory: 'computer-games',
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
          category: 'entertainment',
          subcategory: 'computer-games',
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
          category: 'computers',
          subcategory: 'tablets',
          images: [0, 2],
          previewImage: '/img/goods/2.jpg',
          name: 'Apple iPad Pro 12',
          price: 68000,
          guaranteeUpTo: '17.03.2020',
          purchaseDate: '17.09.2017',
          responsible: 'Антон Бочаров'
        }
      },
      ids: [
        'oeukjnt23qh',
        'oaouie21',
        'akcaohtn,.bue',
        'uedo.py.oeua'
      ]
    };
  });
};
