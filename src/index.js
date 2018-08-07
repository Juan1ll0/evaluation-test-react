// Deps
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';

// Components
import App from './App';

// Styles
import 'assets/styles/index.css';
import 'assets/styles/App.css';

// Store
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
registerServiceWorker();
