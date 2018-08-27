import { combineReducers } from 'redux';
import './actions';

// Reducers
import byId from './byId';
import ids from './ids';

const goods = combineReducers({
  byId,
  ids
});


export default goods;
