const initialState = {
  'htnoeceuaocrh': {
    id: 'htnoeceuaocrh',
    name: {
      first: 'Антон',
      last: 'Бочаров'
    },
    position: 'Кладовщик',
    email: 'antonBocharov@gmail.com',
    avatar: '/img/anton.png',
    goodsIds: ['oeukjnt23qh']
  },
  'uhseurolerlptu': {
    id: 'uhseurolerlptu',
    name: {
      first: 'Петр',
      last: 'Крафтверк'
    },
    position: 'Ответственный',
    email: 'petrCraft@gmail.com',
    avatar: '/img/petr.png',
    goodsIds: ['oaouie21']
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
};
