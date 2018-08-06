// Deps
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Components
import App from './App';

// Styles
import 'assets/styles/index.css';
import 'assets/styles/App.css';

ReactDOM.render(<App />, document.getElementById('app'));
registerServiceWorker();
