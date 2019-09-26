import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import productReducer from './productReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  cartReducer,
  productReducer,
  loginReducer
})
