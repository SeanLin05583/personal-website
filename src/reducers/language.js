import { handleActions } from 'redux-actions';
import { langActions as actions } from 'actions';

const language = 'zh-TW';

const reducer = handleActions({
  [actions.setLang]: {
    next(state, action) {
      return action.payload;
    },
    throw(state) {
      return state;
    },
  },
}, language);

export default reducer;
