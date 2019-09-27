import { history } from './../../App';
import {
  MARKET_REQUEST,
  MARKET_REQUEST_SUCCESS,
  MARKET_REQUEST_ERROR,

  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,

  PUT_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART
} from './action';

//===============
export function marketRequest() {
  return {
    type: MARKET_REQUEST
  }
}
export function marketRequestSuccess(data) {
  return {
    type: MARKET_REQUEST_SUCCESS,
    payload: data
  };
}
export function marketRequestError(errorMessage) {
  return {
    type: MARKET_REQUEST_ERROR,
    payload: errorMessage
  }
}

//===================
export function loginRequest(data) {
  return {
    type: LOGIN_REQUEST,
    payload: data
  };
}
export function loginRequestSuccess(token) {
  localStorage.setItem("token", `${token}`);
  history.push("/market");
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload: null
  };
}
export function loginRequestError(data) {
  return {
    type: LOGIN_REQUEST_ERROR,
    payload: data
  };
}
//===========
export function putItemToCart(elem) {
  return {
    type: PUT_ITEM_TO_CART,
    payload: elem
  };
}
export function deleteItemFromCart(data) {
  return {
    type: DELETE_ITEM_FROM_CART,
    payload: data
  };
}