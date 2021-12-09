1. 액션
상태에 어떠한 변화가 필요하면 액션이란 것이 발생

```javascript
{
  type: 'ADD_TODO', // 필수 필드로 액션의 이름에 해당ㅎ한다.
  data: {
    id: 1,
    text: '리덕스 배우기'
  }
}

{
  type: 'CHANGE_INPUT',
  text: '안녕하세요'
}
```

2. 액션 생성 함수
- 액션 생성 함수는 액션 객체를 만들어 주는 함수
- 어떤 변화를 일으켜야 할 때마다 액션 객체를 만들어야 하는데 매번 액션 객체를 직접 작성하기 번거로울 수 있고, 만드는 과정에서 실수로 정보를 놓칠수도 있기에 이러한 일을 방지하기 위해 이를 함수로 만들어서 관리

```javascript
function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data
  };
}

// 화살표 함수로도 만들 수 있습니다.
const changeInput = text => ({
  type: 'CHANGE_INPUT',
  text
});
```

3. 리듀서
- 리듀서는 변화를 일으키는 함수
- 액션을 만들어서 발생시키면 리듀서가 현재 상태와 전달받은 액션 객체를 파라미터로 받아 오며 두 값을 참고하여 새로운 상태를 만들어서 반환한다.

```javascript
const initialState = {
  counter: 1
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1
      };
    default:
      return state;
  }
}
```

4. 스토어
- 프로젝트에 리덕스를 적용하기 위해 스토어(store)를 만듭니다.
- 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있습니다.
- 스토어 안에는 현재 애플리케이션 상태와 리듀서가 들어가 있으며, 그 외에도 몇 가지 중요한 내장 함수를 지닐 수 있습니다.

5. 디스패치
- 디스패치(dispatch)는 스토어의 내장 함수 중 하나입니다.
- 디스패치는 ‘액션을 발생시키는 것’이라고 이해하면 됩니다. 
- 이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출합니다.
- 이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 줍니다.

6. 구독
- 구독(subscribe)도 스토어의 내장 함수 중 하나입니다.
- subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치되어 상태가 업데이트될 때 마다 호출됩니다.

```
const listener = () => {
  console.log('상태가 업데이트됨');
}

const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 때 함수를 호출
```
