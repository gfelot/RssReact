import axios from 'axios'

const RootURL = "http://localhost:8080"

export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL'

export function loginUser(formData) {
  const request = axios.post(
    `${RootURL}/api/subscribe`,
    formData
  )

  return {
    type: LOGIN_USER,
    payload: request
  }
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: user
  }
}

export function loginUserFail(error) {
  return {
    type: LOGIN_USER_FAIL,
    payload: error
  }
}
