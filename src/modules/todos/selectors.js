import { createSelector } from 'reselect';
import _ from 'lodash';

const getLocalState = state => state.todos || {};

export const getIsLoaded = createSelector([getLocalState], state => state.isLoaded === true);
export const getTodos = createSelector([getLocalState], state => _.get(state, 'list', []));
export const getError = createSelector([getLocalState], state => state.error || {});
