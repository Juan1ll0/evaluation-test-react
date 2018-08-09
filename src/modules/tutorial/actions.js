import * as actions from './actionTypes';

export const setColor = color => ({ type: actions.SET_COLOR, payload: color });
export const setFigure = figure => ({ type: actions.SET_FIGURE, payload: figure });
export const cleanSelection = () => ({ type: actions.CLEAN });

export * from './actionTypes';
