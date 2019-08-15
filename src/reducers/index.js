import { combineReducers } from 'redux';
import breakPointReducer from './breakpoint';
import languageReducer from './language';

const reducers = combineReducers({
  breakPoint: breakPointReducer,
  language: languageReducer,
});

export default reducers;