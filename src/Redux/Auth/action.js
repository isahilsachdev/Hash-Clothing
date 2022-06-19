import {
  LOGIN_TODO_FAILURE,
  LOGIN_TODO_LOGOUT,
  LOGIN_TODO_REQUEST,
  LOGIN_TODO_SUCCESS
} from "./actionTypes";

import axiosApiCall from "../../Components/axiosApiCall";
const loginRequest = () => {
  return { type: LOGIN_TODO_REQUEST };
};
const loginSuccess = (token, email) => {
  return {
    type: LOGIN_TODO_SUCCESS,
    payload: {
      token,
      email
    }
  };
};

const loginfailure = () => {
  return { type: LOGIN_TODO_FAILURE };
};
const logout = () => {
  return { type: LOGIN_TODO_LOGOUT };
};
const login = ({ email, password }) => (dispatch) => {
  dispatch(loginRequest());
  const payload = {
    email,
    password
  };
  return axiosApiCall('/login', "post", payload)
    .then((res) => {
      dispatch(loginSuccess(res.data.token, email));
    })
    .catch((err) => dispatch(loginfailure()));
};
export { loginRequest, logout, loginSuccess, loginfailure, login };
