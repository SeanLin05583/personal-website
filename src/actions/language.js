import { createAction } from 'redux-actions';

const SET_LANG = 'SET_LANG';
const INITIAL_LANG = 'INITIAL_LANG';

const setLang = createAction(
  SET_LANG,
  payload => payload,
);

const initialLang = createAction(
  INITIAL_LANG,
  payload => payload,
);

export default {
  setLang,
  initialLang,
}
