import deepFreeze from 'deep-freeze';
import reducer from '../';
import * as types from '../actionTypes';
import initialState from '../initialState';

// Fixtures
// import { playloadInfo } from '../__fixtures__/ranking';

describe('Ranking reducer', () => {
  const payloadError = { error: 0, message: 'Test de Error' };
  const payloadRanking = {
    general: [
      { player: { nickname: 'test3', id: 3 }, points: 4440, position: 1, oldPosition: 3 },
      { player: { nickname: 'test4', id: 4 }, points: 3220, position: 2, oldPosition: 10 }
    ],
    player: [
      { player: { nickname: 'test1', id: 1 }, points: 444, position: 23, oldPosition: 13 },
      { player: { nickname: 'test2', id: 2 }, points: 322, position: 25, oldPosition: 18 }
    ]
  };

  test('at start should return initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  describe('Get info cycle', () => {
    test('Start fetch process. Change flag', () => {
      const stateBefore = { ...initialState };
      const stateAfter = { ...initialState, isLoaded: false };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.FETCH_ATTEMPT
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    test('Success fetching data. Change flag and gets data', () => {
      const stateBefore = { ...initialState, isLoaded: false };
      const stateAfter = {
        ...initialState,
        isLoaded: true,
        top: [
          { nickname: 'test3', points: 4440, id: 3, position: 1, oldPosition: 3 },
          { nickname: 'test4', points: 3220, id: 4, position: 2, oldPosition: 10 }
        ],
        player: [
          { nickname: 'test1', points: 444, id: 1, position: 23, oldPosition: 13 },
          { nickname: 'test2', points: 322, id: 2, position: 25, oldPosition: 18 }
        ]
      };

      deepFreeze(stateBefore);
      deepFreeze(stateAfter);

      const action = {
        type: types.FETCH_SUCCESS,
        payload: payloadRanking
      };

      expect(reducer(stateBefore, action)).toEqual(stateAfter);
    });

    describe('Errors', () => {
      test('Should save error. Save message', () => {
        const stateBefore = { ...initialState, isLoaded: false };
        const stateAfter = { ...stateBefore, isLoaded: true, error: payloadError };

        deepFreeze(stateBefore);
        deepFreeze(stateAfter);

        const action = {
          type: types.FETCH_ERROR,
          payload: payloadError
        };

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
      });

      test('Should clean error on success', () => {
        const stateBefore = { ...initialState, isLoaded: true, error: { ...initialState.error, global: payloadError } };
        const stateAfter = { ...initialState, isLoaded: true };

        deepFreeze(stateBefore);
        deepFreeze(stateAfter);

        const action = {
          type: types.FETCH_SUCCESS,
          payload: []
        };

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
      });

      test('Should clean error on new attempt', () => {
        const stateBefore = { ...initialState, isLoaded: true, error: { ...initialState.error, global: payloadError } };
        const stateAfter = { ...initialState, isLoaded: false };

        deepFreeze(stateBefore);
        deepFreeze(stateAfter);

        const action = {
          type: types.FETCH_ATTEMPT,
          payload: []
        };

        expect(reducer(stateBefore, action)).toEqual(stateAfter);
      });
    });
  });
});
