import { createAction } from 'redux-actions';

const SET_BREAKPOINT = 'SET_BREAKPOINT';

const setBreakPoint = createAction(
  SET_BREAKPOINT,
  payload => payload,
);

export default {
  setBreakPoint,
}