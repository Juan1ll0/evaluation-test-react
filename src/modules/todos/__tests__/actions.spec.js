import * as actions from '../actions';
import * as actionTypes from '../actionTypes';

describe('Ranking actions', () => {
  test('Should fetch player data', () => {
    const initialState = { auth: { token: '7sadbasdy2uq3t' } };
    const dispatchMock = jest.fn();
    const fetchMock = jest.fn();
    const getStateMock = jest.fn();
    getStateMock.mockReturnValue(initialState);
    const token = initialState.auth.token;

    const expectedActions = [actionTypes.FETCH_ATTEMPT, actionTypes.FETCH_SUCCESS, actionTypes.FETCH_ERROR];

    actions.fetchRanking()(dispatchMock, getStateMock, fetchMock);
    expect(fetchMock).toBeCalledWith('ranking', expectedActions, { include: 'player' }, { token });
  });
});
