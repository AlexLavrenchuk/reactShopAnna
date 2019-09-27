import {
  PUT_ITEM_TO_CART
} from "../action";

const initialState = {
  cartItem: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_ITEM_TO_CART:
      return {
        ...state,
        cartItem: [...state.cartItem, action.payload]
      };
    default:
      return initialState;
  }
};
export default cartReducer;