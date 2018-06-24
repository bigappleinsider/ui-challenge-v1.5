import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import locationReducer from './locationReducer';

export default combineReducers({
  routing: routerReducer,
  locationReducer,
});