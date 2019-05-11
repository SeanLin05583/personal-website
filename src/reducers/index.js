import { combineReducers } from 'redux';
import breakPointReducer from './breakpoint';

const reducers = combineReducers({
  breakPoint: breakPointReducer,
});

export default reducers;