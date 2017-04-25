import axios from 'axios'
const RootURL = "http://localhost:8080",
  INITIAL_STATE = { isAuthenticated: false };

// Action Constants
export const AUTH_LOGIN = 'AUTH_LOGIN',
  AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
  AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

// Actions
// These are usually private and are used by action creators to create the dispatched data.
const loginUser = () => {
  return {
    type: AUTH_LOGIN, 
    payload: null
  }
};

const loginUserSuccess = (user) => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: user
  }
};

const loginUserFail = (error) => {
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

    // Mocking an async call using setTimeout at 2 seconds.  You would normally 
    // make an API call here and dispatch the results.
    setTimeout(
      () => dispatch( loginUserSuccess({ userName: username }) ),
      1000
    );

    /*
    // This is how you would dispatch an async API call.
    axios.post(`${RootURL}/login`, { user: username, pw: password })
      .then(res => dispatch( loginUserSuccess(res.user) ))
      .catch(e => dispatch( loginUserFail(e) ))
    }
    */
  }
}

// Reducers
export default function (state = INITIAL_STATE, action) {
  console.log(action.type, action.payload)

  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state 
      };

    case AUTH_LOGIN_SUCCESS:
      let username = action.payload.userName  
      return {
        ...state,
        isAuthenticated: !!username && !!username.length
      };

    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false
      };

    default:
      return state;
  }
}
