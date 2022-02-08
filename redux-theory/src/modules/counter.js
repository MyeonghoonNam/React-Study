// redux-actions를 사용하면 액션 생성 함수를 더 짧은 코드로 작성할 수 있습니다.그리고 리듀서를 작성할 때도 switch/case 문이 아닌 handleActions라는 함수를 사용하여 각 액션마다 업데이트 함수를 설정하는 형식으로 작성해 줄 수 있습니다.

import { createAction } from 'redux-actions';

// 리덕스에서 Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 모듈이라고 한다.

// 가장 먼저 해야 할 작업은 액션 타입을 정의하는 것입니다. 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈	이름/액션	이름'과 같은 형태로 작성한다.
// 액션 타입 지정
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 액션 생성 함수
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 지정
const initialState = {
  number: 0,
};

// 리듀서 함수
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
