// 리덕스에서 Ducks 패턴을 사용하여 액션 타입, 액션 생성 함수, 리듀서를 작성한 코드를 모듈이라고 한다.

// 가장 먼저 해야 할 작업은 액션 타입을 정의하는 것입니다. 액션 타입은 대문자로 정의하고, 문자열 내용은 '모듈	이름/액션	이름'과 같은 형태로 작성한다.
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
