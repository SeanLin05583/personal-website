import { handleActions } from 'redux-actions';
import { breakPointActions as actions } from 'actions';

const initialState = {
  isMobile: false,
  isPad: false,
  isPc: false,
};

const reducer = handleActions(
  {
    [actions.setBreakPoint]: (state, action) => {
      const { isMobile, isPad, isPc } = action.payload;
      return {
        ...state,
        isMobile,
        isPad,
        isPc,
      };
    },
  },
  initialState
);

export default reducer;
