import { useState } from 'react';

const Counter = ({ onIncrease }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
    onIncrease();
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrease}>+</button>
    </div>
  );
};

export default Counter;
