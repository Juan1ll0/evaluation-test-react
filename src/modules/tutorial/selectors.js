import { createSelector } from 'reselect';
import { get } from 'lodash';

const getLocalState = state => state.tutorial || {};

export const getListColors = createSelector([getLocalState], state => get(state, 'listColors', []));
export const getListFigures = createSelector([getLocalState], state => get(state, 'listFigures', []));

export const getSelectedColor = createSelector([getLocalState], state => get(state, 'backgroundColor', ''));
export const getSelectedFigure = createSelector([getLocalState], state => get(state, 'figure', ''));
