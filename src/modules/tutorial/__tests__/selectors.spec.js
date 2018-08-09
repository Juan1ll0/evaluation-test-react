import * as selectors from '../selectors';
import initialState from '../initialState';
import { playloadFigures } from '../__fixtures__/tutorial';

describe('Tutorial selectors', () => {
  describe('Check getListFigures', () => {
    test('Should return 3 figures', () => {
      let state = { tutorial: { ...initialState, listFigures: playloadFigures } };
      expect(selectors.getListFigures(state)).toEqual(playloadFigures);
    });
  });

  describe('Check getSelectedFigure', () => {
    test('Should return selected figure', () => {
      const fakeFigure = playloadFigures[0];
      let state = { tutorial: { ...initialState, listFigures: playloadFigures, figure: fakeFigure } };
      expect(selectors.getSelectedFigure(state)).toEqual(fakeFigure);
    });
  });
});
