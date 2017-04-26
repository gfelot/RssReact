import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store'

import './index.css';

// // Setup redux store
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import { logger } from 'redux-logger'
// import reducers from './reducers';
//
// const middleware = applyMiddleware(thunk, logger)
// const store = createStore(
//   reducers,
//   middleware
// );

import App from './containers/App/App'

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
