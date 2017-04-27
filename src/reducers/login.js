const INITIAL_STATE = {
  isAuthenticated: false,
  auth_token: null,
  fetching: false,
  fetched: false,
  error: null
 };

 export const AUTH_LOGIN = 'AUTH_LOGIN',
   AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS',
   AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';

// Reducers
export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: null
      };

    case AUTH_LOGIN_SUCCESS:
      let data = action.payload
      console.log("Login ok", data);
      return {
        ...state,
        isAuthenticated: data.status === '200' ? true : false,
        auth_token: data.auth_token,
        fetching: false,
        fetched: true,
        error: null
      };

    case AUTH_LOGIN_FAIL:
      let error = action.payload
      return {
        ...state,
        isAuthenticated: false,
        fetching: false,
        fetched: false,
        error: error
      };

    default:
      return state;
  }
}
