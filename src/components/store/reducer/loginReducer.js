import {
  LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_ERROR,
} from "../action";

const initialState = {
  loginPreloader: false,
  errorMessage: '',
  dataLogin: {},

};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginPreloader: true,
        dataLogin: action.payload
      };
    case LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        errorMessage: '',
        loginPreloader: false
      };
    case LOGIN_REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        loginPreloader: false
      };
    default:
      return initialState;
  }
};

export default loginReducer;