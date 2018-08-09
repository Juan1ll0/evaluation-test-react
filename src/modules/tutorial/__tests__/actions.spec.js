import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

// Fixtures
import { playloadFigures } from '../__fixtures__/tutorial';

describe('Tutorial actions', () => {
  test('Dispatch SET_FIGURE action', () => {
    const fakeFigure = playloadFigures[0];
    expect(actions.setFigure(fakeFigure)).toEqual({ type: actions.SET_FIGURE, payload: fakeFigure });
  });
});
