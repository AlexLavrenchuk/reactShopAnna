import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
  BTN_LOCK,
  CHANGE_NAME,
  CHANGE_PASSWORD
} from "../action";

const initialState = {
  loginPreloader: false,
  buttonDisabled: true,
  errorMessage: '',
  name: '',
  password: ''
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginPreloader: true,
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loginPreloader: false
      };
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loginPreloader: false
      };
    case BTN_LOCK:
      return {
        ...state,
        buttonDisabled: action.payload
      }
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.payload
      }
    default:
      return initialState;
  }
};

export default loginReducer;