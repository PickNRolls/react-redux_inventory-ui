import { combineReducers } from 'redux';

// Reducers
import goods from './goods';
import people from './people';
import categoriesByName from './categories';
import subcategoriesByName from './subcategories';
import UI from '../view/redux/reducers';

const root = combineReducers({
  UI,
  goods,
  people,
  categoriesByName,
  subcategoriesByName
});

export default root;
