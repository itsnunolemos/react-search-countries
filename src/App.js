
/**
 * Module dependencies.
 */

import './styles/global.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import Routes from './routes/routes';
import store from './redux/store';

/**
 * `App`.
 */

function App() {
  return (
    <Provider store={store}>
      <Router basename={window.location.pathname || ''}>
        <Routes />
      </Router>
    </Provider>
  );
}

/**
 * Export `App`.
 */

export default App;
