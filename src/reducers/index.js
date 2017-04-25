import { combineReducers } from 'redux'
import login from './login'
import rss from './reducerRSS'

export default combineReducers({
    login,
    rss
});