import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import reducers from 'modules/reducer';

const configureStore = initialState => createStore(reducers, initialState, applyMiddleware(thunk, apiMiddleware));

export default configureStore;
