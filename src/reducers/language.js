import { handleActions } from 'redux-actions';
import Cookies from 'js-cookie';
import { langList } from 'utils';
import { langActions as actions } from 'actions';

const defaultLanguage = 'en-US';

const reducer = handleActions(
  {
    [actions.setLang]: {
      next(state, action) {
        Cookies.set('lang', action.payload);
        return action.payload;
      },
      throw(state) {
        return state;
      },
    },
    [actions.initialLang]: {
      next() {
        const lang =
          Cookies.get('lang') || langList.find(lang => lang.key === navigator.language).key || defaultLanguage;
        return lang;
      },
      throw(state) {
        return state;
      },
    },
  },
  defaultLanguage
);

export default reducer;
