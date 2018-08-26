import { combineReducers } from 'redux';

import goods from '../view/routes/goods/redux/reducers';

const root = combineReducers({
  goods
});

export default root;
