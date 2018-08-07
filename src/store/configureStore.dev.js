import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import reducers from 'modules/reducer';

const configureStore = initialState => {
  let store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, apiMiddleware)
  );

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('../modules/reducer', () => {
      const nextReducer = require('../modules/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};

export default configureStore;
