import { combineReducers } from 'redux';

// Reducers
import goods from './goods';
import categoriesByName from './categories';
import subcategoriesByName from './subcategories';
import UI from '../view/redux/reducers';

const root = combineReducers({
  UI,
  goods,
  categoriesByName,
  subcategoriesByName
});

export default root;
