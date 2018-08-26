import { combineReducers } from 'redux';

import goods from '../view/routes/goods/redux/reducers';
import UI from '../view/redux/reducers';

const root = combineReducers({
  UI,
  goods
});

export default root;
