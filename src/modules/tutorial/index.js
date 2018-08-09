import * as actions from './actions';
import initialState from './initialState';
import { get, isEmpty } from 'lodash';

const tutorial = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_COLOR:
      return {
        ...state,
        backgroundColor: get(action, 'payload', state.backgroundColor)
      };
    case actions.SET_FIGURE:
      return {
        ...state,
        figure: get(action, 'payload', state.figure)
      };
    case actions.CLEAN:
      return initialState;
    default:
      return state;
  }
};

export * from './selectors';
export * from './actions';
export default tutorial;
