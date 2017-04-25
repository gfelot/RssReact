import { combineReducers } from 'redux'
import login from './login'
import rss from './rss'

export default combineReducers({
    login,
    rss
});
