import React, { useState } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  // useState는 가장 기본적인 Hook이며, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해 줍니다.
  // useState 함수의 파라미터에는 상태의 기본값을 넣어 줍니다. 현재 0을 넣어 주었는데, 결국 카운터의 기본값을 0으로 설정하겠다는 의미입니다. 이 함수가 호출되면 배열을 반환하는데요. 그 배열의 첫 번째 원소는 상태 값, 두 번째 원소는 상태를 설정하는 함수입니다. 이 함수에 파라미터를 넣어서 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링됩니다.

  return (
    <div>
      <p>
        현재 counter 값은 <b>{value}</b>입니다.
      </p>
      <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button>
    </div>
  );
};

export default Counter;
