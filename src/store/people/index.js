import { combineReducers } from 'redux';

// Reducers
import byId from './byId';
import ids from './ids';

export default combineReducers({
  byId,
  ids
})
