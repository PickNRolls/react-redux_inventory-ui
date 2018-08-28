import { combineReducers } from 'redux';
import './actions';

// Reducers
import byId from './byId';
import ids from './ids';
import viewedId from './viewed';

const goods = combineReducers({
  byId,
  ids,
  viewedId
});


export default goods;
