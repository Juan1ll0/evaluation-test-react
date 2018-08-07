import * as actions from './actionTypes';
import { fetch } from 'utils/api';

const ENDPOINT = 'todos';

export const fetchTodos = () => (dispatch, getState, apiCallback = fetch) =>
  dispatch(apiCallback(`${ENDPOINT}`, [actions.FETCH_ATTEMPT, actions.FETCH_SUCCESS, actions.FETCH_ERROR]));

export * from './actionTypes';
