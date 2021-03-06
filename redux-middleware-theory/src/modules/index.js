// import { combineReducers } from 'redux';
// import counter from './counter';
// import webApiAsync from './webApiAsync';
// import loading from './loading';

// const rootReducer = combineReducers({ counter, webApiAsync, loading });

// export default rootReducer;

// ----------------------------------- react-saga
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import webApiAsync, { webApiAsyncSaga } from './webApiAsync';
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  webApiAsync,
  loading,
});

export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐 주는 역할
  yield all([counterSaga(), webApiAsyncSaga()]);
}

export default rootReducer;
