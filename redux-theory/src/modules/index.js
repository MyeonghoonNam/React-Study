// createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 한다.
// 그렇기 때문에 기존에 만들었던 리듀서를 하나로 합쳐 주어야 하는데,
// 이 작업은 리덕스에서 제공하는 combineReducers라는 유틸 함수를 사용하면 쉽게 처리할 수 있다.

import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
