import {

} from "../action";

const initialState = {
  cartItem: []
};

const cartReduser = (state = initialState, action) => {
  switch (action.type) {

  //   case PROTECTED_ROUTE_SUCCESS:
  //     return {
  //       ...state,
  //       preloader: false,
  //       protectedRoute: true
  //     };
  //   case PROTECTED_ROUTE_ERROR:
  //     return {
  //       ...state,
  //       preloader: false,
  //       protectedRoute: false
  //     };
  //   case GET_USERS:
  //     return {
  //       ...state,
  //       preloader: false,
  //       usersCommunity: action.payload
  //     };
  //   case GET_ERROR:
  //     return {
  //       ...state,
  //       preloader: false,
  //       error: action.payload
  //     };
  //   case LOGOUT:
  //     return {
  //       ...state,
  //       protectedRoute: false,
  //       usersCommunity: []
  //     };
  //   case SUBMIT_USER_FORM:
  //     return {
  //       ...state,
  //       userData: action.userData
  //     };
    default:
      return initialState;
  }
};
export default cartReduser;