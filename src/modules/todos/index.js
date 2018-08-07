import * as actions from './actions';
import initialState from './initialState';

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ATTEMPT:
      return {
        ...state,
        isLoaded: false,
        error: {}
      };
    case actions.FETCH_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoaded: true,
        error: {}
      };
    case actions.FETCH_ERROR:
      return {
        ...state,
        isLoaded: true,
        error: action.payload
      };
    default:
      return state;
  }
};

export * from './selectors';
export * from './actions';
export default todos;
