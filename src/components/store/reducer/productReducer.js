import {
  START_REQUEST,
  PUT_PRODUCT_TO_STATE,
  GET_ERROR
} from "../action";

const initialState = {
  preloader: false,
  productInitialState: [],
  errorMessage: ""
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REQUEST:
      return {
        ...state,
        preloader: true
      };
    case PUT_PRODUCT_TO_STATE:
      return {
        ...state,
        productInitialState: action.newProduct,
        preloader: false
      };
    case GET_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        preloader: false
      };
    default:
      return initialState;
  }
};

export default productReducer;
