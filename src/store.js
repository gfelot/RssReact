// Setup redux store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducers from './reducers';

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory()
const routerHistory = routerMiddleware(history)

const middleware = applyMiddleware(routerHistory, thunk, logger)
const store = createStore(reducers, middleware)

export default store;
