import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import marketReducer from './marketReducer';
import loginReducer from './loginReducer';

export default combineReducers({
  marketReducer,
  loginReducer
})
