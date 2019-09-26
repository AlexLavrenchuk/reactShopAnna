import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import combineReducers from './reducer/index';

const store = createStore(combineReducers, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;