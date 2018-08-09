import deepFreeze from 'deep-freeze';
import reducer from '../';
import * as types from '../actionTypes';
import initialState from '../initialState';

// Fixtures
const fakeFigure = { id: 3, label: 'testfigure', image: 'test.svg' };
const fakeColor = { id: 1, label: 'testcolor', image: 'color.svg' };

describe('Tutorial reducer', () => {
  test('at start should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Set figure.', () => {
    test('new figure', () => {
      const stateBefore = { ...initialState };
      const stateAfter = { ...initialState, figure: fakeFigure };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.SET_FIGURE,
        payload: fakeFigure
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    test('empty figure', () => {
      const stateBefore = { ...initialState, figure: fakeFigure };
      const stateAfter = { ...initialState };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.SET_FIGURE,
        payload: {}
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });
  describe('Set Background', () => {
    test('new color', () => {
      const stateBefore = { ...initialState };
      const stateAfter = { ...initialState, backgroundColor: fakeColor };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.SET_COLOR,
        payload: fakeColor
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    test('empty color', () => {
      const stateBefore = { ...initialState, backgroundColor: fakeFigure };
      const stateAfter = { ...initialState };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.SET_COLOR,
        payload: {}
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });
  });
});
