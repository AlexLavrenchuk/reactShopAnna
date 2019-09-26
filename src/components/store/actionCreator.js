import { history } from './../../App';
import {
  START_REQUEST,
  PUT_PRODUCT_TO_STATE,
  GET_ERROR,

  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,

  BTN_LOCK,
  CHANGE_NAME,
  CHANGE_PASSWORD
} from './action';

//===============
export function preloaderShow() {
  return {
    type: START_REQUEST
  }
}
export function putProductToState(data) {
  return {
    type: PUT_PRODUCT_TO_STATE,
    newProduct: data
  };
}
export function getError(errorMessage) {
  return {
    type: GET_ERROR,
    errorMessage: errorMessage
  }
}

//===================
export function loginRequest(email, password) {
  return {
    type: LOGIN_REQUEST,
    email,
    password
  };
}
export function loginRequestSussess(token) {
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
export function btn(bool) {
  return {
    type: BTN_LOCK,
    payload: bool
  };
}
export function nameChange(text) {
  return {
    type: CHANGE_NAME,
    payload: text
  };
}
export function passwordChange(text) {
  return {
    type: CHANGE_PASSWORD,
    payload: text
  };
}