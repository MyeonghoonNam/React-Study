import { useRef, useState } from 'react';

const AutoCounter = () => {
  const [count, setCount] = useState(0);
  const intervalId = useRef();

  const handleStart = () => {
    intervalId.current = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
};

export default AutoCounter;
