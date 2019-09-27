import {
  MARKET_REQUEST,
  MARKET_REQUEST_SUCCESS,
  MARKET_REQUEST_ERROR,

  PUT_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART
} from "../action";

const initialState = {
  preloader: false,
  marketItems: [],
  errorMessage: "",
  cartItem: []
};

const marketReducer = (state = initialState, action) => {
  switch (action.type) {
    case MARKET_REQUEST:
      return {
        ...state,
        preloader: true
      };
    case MARKET_REQUEST_SUCCESS:
      return {
        ...state,
        marketItems: action.payload,
        preloader: false
      };
    case MARKET_REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
        preloader: false
      };
      case PUT_ITEM_TO_CART:
        return {
          ...state,
          cartItem: [...state.cartItem, action.payload]
        };
      case DELETE_ITEM_FROM_CART:
        return {
          ...state,
          cartItem: action.payload
        };
    default:
      return initialState;
  }
};

export default marketReducer;
