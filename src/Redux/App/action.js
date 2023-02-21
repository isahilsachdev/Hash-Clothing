import axiosApiCall from "../../Components/axiosApiCall";
import {
  GET_CLOTH_SUCCESS,
  GET_CLOTH_FAILURE,
  GET_CLOTH_REQUEST,
  ADD_CLOTH_REQUEST,
  ADD_CLOTH_SUCCESS,
  ADD_CLOTH_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  DELETE_CLOTH,
  // DELETE_CLOTH,
  // UPDATE_CLOTH
} from "./actionTypes";

// to get clothes
const getClothRequest = () => {
  return {
    type: GET_CLOTH_REQUEST
  };
};
const getClothSuccess = (payload) => {
  return {
    type: GET_CLOTH_SUCCESS,
    payload
  };
};
const getClothFailure = () => {
  return {
    type: GET_CLOTH_FAILURE
  };
};

// to add clothes to cart
const addClothRequest = () => {
  return {
    type: ADD_CLOTH_REQUEST
  };
};
const addClothSuccess = (payload) => {
  return {
    type: ADD_CLOTH_SUCCESS,
    payload
  };
};
const addClothFailure = () => {
  return {
    type: ADD_CLOTH_FAILURE
  };
};

// to get cart items
const getCartRequest = () => {
  return {
    type: GET_CART_REQUEST
  };
};
const getCartSuccess = (payload) => {
  return {
    type: GET_CART_SUCCESS,
    payload
  };
};
const getCartFailure = () => {
  return {
    type: GET_CART_FAILURE
  };
};

// delete from cart

const deleteCloth = (payload) => {
  return {
    type: DELETE_CLOTH,
    payload
  };
};

export const fetchCategories = (params) => (dispatch) => {
  dispatch(getClothRequest());
  axiosApiCall(params ? `/product/${params}` : '/product/categories', 'get', null)
    .then((res) => {
      const resp = params ? res.data.products : res.data.categories
      console.log("resp", resp)
      dispatch(getClothSuccess(resp));
    })
    .catch((err) =>{
      console.log(err, 'error')
      dispatch(getClothFailure())
    });
};

export const postCartItem = data => (dispatch) => {
  dispatch(addClothRequest());
  axiosApiCall('/cart', 'post', data)
    .then((res) => {
      dispatch(addClothSuccess(res.data));
      if (window.location.pathname === '/cart') { // update only when in cart page
        dispatch(fetchCartItem());
      }
    })
    .catch((err) =>{
      console.log(err, 'error')
      dispatch(addClothFailure())
    });
};

export const fetchCartItem = (params) => (dispatch) => {
  dispatch(getCartRequest());
  axiosApiCall('/cart', 'get', null)
    .then((res) => {
      dispatch(getCartSuccess(res.data.data));
    })
    .catch((err) =>{
      console.log(err, 'error')
      dispatch(getCartFailure())
    });
};

export const deleteCartItem = (id) => (dispatch) => {
  axiosApiCall(`/cart/${id}`, 'delete', null)
    .then((res) => {
      dispatch(deleteCloth(res.data));
      dispatch(fetchCartItem());
    })
};

export const deleteAllCartItem = (items) => (dispatch) => {
  // return Promise.all(items.forEach(item => dispatch(deleteCartItemWithoutFetch(item))));
}

export const deleteAllCartItemForId = (item) => (dispatch) => {
  axiosApiCall(`/cart/all/${item.item_id}`, 'delete', null)
  .then((res) => {
    dispatch(deleteCloth(res.data));
    dispatch(fetchCartItem());
  })
}