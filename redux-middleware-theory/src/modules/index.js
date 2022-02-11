import { combineReducers } from 'redux';
import counter from './counter';
import webApiAsync from './webApiAsync';
import loading from './loading';

const rootReducer = combineReducers({ counter, webApiAsync, loading });

export default rootReducer;
