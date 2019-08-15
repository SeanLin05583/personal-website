import { createAction } from 'redux-actions';

const SET_LANG = 'SET_LANG';

const setLang = createAction(
  SET_LANG,
  payload => payload,
);

export default {
  setLang,
}