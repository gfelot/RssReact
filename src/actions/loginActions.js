import axios from 'axios'

const baseURL = 'https://rssfeedepitech.herokuapp.com/api/'

// Action Constants
export const AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

// Actions
// These are usually private and are used by action creators to create the dispatched data.
export function loginUser() {
  return {
    type: AUTH_LOGIN,
    payload: null
  }
};

export function loginUserSuccess(data) {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: data
  }
};

export function loginUserFail(error) {
  return {
    type: AUTH_LOGIN_FAIL,
    payload: error
  }
};


// Action Creators
// This is the only action creator that needs to be exported.  Usually you would
// have several for doing CRUD operations and such.
export const loginUserAction = (username, password) => {

  // The "dispatch" parameter is automatically injected by redux-thunk.  Redux-thunk lets
  // you process async operations and dispatch the returned data when it's ready.
  return (dispatch) => {
    dispatch(loginUser());

    // This is how you would dispatch an async API call.
    axios.post(`${RootURL}/login`, { email: username, password: password })
      .then(res => dispatch( loginUserSuccess(res.data) ))
      .catch(e => dispatch( loginUserFail(e) ))
    }

  }
}
