import { combineReducers } from 'redux';
import counter from './counter';
import webApiAsync from './webApiAsync';

const rootReducer = combineReducers({ counter, webApiAsync });

export default rootReducer;
