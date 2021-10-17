/*
컴포넌트가 리렌더링 되는 조건

1. 함수 컴포넌트는 자신의 상태가 변경될 때 리렌더링된다
2. 부모 컴포넌트로 부터 받는 prop이 변경될 때 리렌더링된다
3. 부모 컴포넌트의 상태가 변경되면 리렌더링된다

이 때 불필요한 연산의 재진행을 방지하기 위해 사용하기에 용이한 hook이 useMemo이다.
*/

import { useState } from 'react';
import Sum from './components/Sum';

function App() {
  const [label, setLabel] = useState('Result : ');

  return (
    <div>
      <button onClick={() => setLabel(label + ':')}>Change Label</button>
      <Sum label={label} n={1000000} />
    </div>
  );
}

export default App;
