import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import login from './login'
import rss from './rss'


export default combineReducers({
    router: routerReducer,
    login,
    rss
});
