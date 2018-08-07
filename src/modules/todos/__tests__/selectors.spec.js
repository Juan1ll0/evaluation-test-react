import * as selectors from '../selectors';
import initialState from '../initialState';
// import { prepareState } from '../__mocks__/state-auth';
import { payloadError, topPlayersResult, playerRankingResult } from '../__fixtures__/ranking';

describe('Ranking selectors', () => {
  describe('Check getTopRanking', () => {
    test('Should return top 15 players', () => {
      let state = { ranking: { ...initialState, top: topPlayersResult } };
      expect(selectors.getTopRanking(state)).toEqual(topPlayersResult);
    });

    test('Should return empty array whit no players', () => {
      let state = { ranking: { ...initialState } };
      expect(selectors.getTopRanking(state)).toEqual([]);
    });
  });

  describe('Check getPlayerRanking', () => {
    test('Should return parsed players', () => {
      let state = { ranking: { ...initialState, player: playerRankingResult } };
      expect(selectors.getPlayerRanking(state)).toEqual(playerRankingResult);
    });

    test('Should return empty array whit no players', () => {
      let state = { ranking: { ...initialState } };
      expect(selectors.getPlayerRanking(state)).toEqual([]);
    });
  });

  describe('Check getIsLoaded', () => {
    test('Should true or false', () => {
      let state = { ranking: { ...initialState } };
      expect(selectors.getIsLoaded(state)).toEqual(false);

      state = { ranking: { ...initialState, isLoaded: true } };
      expect(selectors.getIsLoaded(state)).toEqual(true);
    });

    test('Should return false with empty string or fake string', () => {
      let state = { ranking: { ...initialState, isLoaded: '' } };
      expect(selectors.getIsLoaded(state)).toEqual(false);

      state = { ranking: { ...initialState, isLoaded: 'xxxx' } };
      expect(selectors.getIsLoaded(state)).toEqual(false);
    });

    test('Should return false with 1 or 0', () => {
      let state = { ranking: { ...initialState, isLoaded: 1 } };
      expect(selectors.getIsLoaded(state)).toEqual(false);

      state = { ranking: { ...initialState, isLoaded: 0 } };
      expect(selectors.getIsLoaded(state)).toEqual(false);
    });
  });

  describe('Check getError', () => {
    test('Should return global error message', () => {
      const state = { ranking: { ...initialState, error: payloadError } };
      expect(selectors.getError(state)).toEqual(payloadError);
    });

    test('Should return an empty value', () => {
      const state = {};
      expect(selectors.getError(state)).toEqual({});
    });
  });
});
