import {
  GET_CLOTH_SUCCESS,
  GET_CLOTH_FAILURE,
  GET_CLOTH_REQUEST,
  ADD_CLOTH_REQUEST,
  ADD_CLOTH_SUCCESS,
  ADD_CLOTH_FAILURE,
  GET_CART_FAILURE,
  GET_CART_SUCCESS,
  GET_CART_REQUEST,
  DELETE_CLOTH
} from "./actionTypes";

const init = {
  clothData: [],
  cartData: [],
  isLoading: true,
  error: false
};
const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_CLOTH_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_CLOTH_SUCCESS: {
      return {
        ...state,
        clothData: payload,
        isLoading: false
      };
    }
    case GET_CLOTH_FAILURE: {
      return {
        ...state,
        error: true,
        isLoading: false
      };
    }
    case ADD_CLOTH_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: false
      };
    }
    case ADD_CLOTH_SUCCESS: {
      return {
        ...state,
        error: false,
        cartData: [...state.cartData, payload],
        isLoading: false
      };
    }
    case ADD_CLOTH_FAILURE: {
      return {
        ...state,
        error: true,
        isLoading: false
      };
    }
    case GET_CART_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_CART_SUCCESS: {
      return {
        ...state,
        cartData: payload,
        isLoading: false
      };
    }
    case GET_CART_FAILURE: {
      return {
        ...state,
        error: true,
        isLoading: false
      };
    }
    case DELETE_CLOTH: {
      const updated = state.cartData.filter((item) => item.id !== payload.id);
      return {
        ...state,
        cartData: updated
      };
    }
    default:
      return state;
  }
};
export { reducer };
