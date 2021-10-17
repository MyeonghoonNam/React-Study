// useEffect는 특정 요소의 변화가 있을 때 반응성으로 감지하여 나타나는 Hook이다.
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Clicked ${count} times.`);
  }, [count]); // count 변화 감지

  useEffect(() => {
    // 라이프사이클 처럼의 활용
    console.log('Component Loaded');

    const handleScroll = () => {
      console.log(window.scrollY);
    };

    document.addEventListener('scroll', handleScroll); // 전역 이벤트 사용할 때 활용

    return () => document.removeEventListener('scroll', handleScroll); // return으로 반환하는 함수는 컴포넌트 제거시 사용된다.
  });

  return (
    <div>
      <div>You Clicked {count} times.</div>
      <button onClick={() => setCount(count + 1)}>+</button>

      <div style={{ height: 10000 }}></div>
    </div>
  );
}

export default App;
