import { useState } from 'react';

function Counter({ onIncrease, onDecrease }) {
  // 상태와 상태설정함수
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    if (onIncrease) onIncrease();
  };

  const handleDecrease = () => {
    setCount(count - 1);
    if (onDecrease) onDecrease();
  };

  return (
    <div>
      <span style={{ fontSize: 40 }}>{count}</span>
      <br />
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </div>
  );
}

export default Counter;
