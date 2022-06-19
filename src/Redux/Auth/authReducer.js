import {
  LOGIN_TODO_FAILURE,
  LOGIN_TODO_LOGOUT,
  LOGIN_TODO_REQUEST,
  LOGIN_TODO_SUCCESS
} from "./actionTypes";

// const token = loadData("token");
// const email = loadData("email");
const init = {
  isAuth: true,
  isLoading: true,
  error: false,
  email: "",
  token: ""
};

const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case LOGIN_TODO_SUCCESS: {
      // setData("token", payload.token);
      // setData("email", payload.email);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        error: false,
        token: payload.token,
        email: payload.email
      };
    }
    case LOGIN_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: true,
        isAuth: false
      };
    }
    case LOGIN_TODO_LOGOUT: {
      return {
        ...state,
        isLoading: false,
        error: false,
        isAuth: false
      };
    }
    default: {
      return state;
    }
  }
};

export { authReducer };
