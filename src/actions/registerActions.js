// import axios from 'axios'
//
// const RootURL = "http://localhost:8080"
//
// export const REGISTER_USER = 'REGISTER_USER'
// export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
// export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL'
//
// export function registerUser(formData) {
//   const request = axios.post(
//     `${RootURL}/subscribe`,
//     formData
//   )
//
//   return {
//     type: REGISTER_USER,
//     payload: request
//   }
// }
//
// export function registerUserSuccess(user) {
//   return {
//     type: REGISTER_USER_SUCCESS,
//     payload: user
//   }
// }
//
// export function registerUserFail(error) {
//   return {
//     type: REGISTER_USER_FAIL,
//     payload: error
//   }
// }
