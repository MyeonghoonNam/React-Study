import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [totalCount, setTotalCount] = useState(0);

  return (
    <div>
      TotalCount: {totalCount}
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
        }}
      />
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
        }}
      />
      <Counter
        onIncrease={() => {
          setTotalCount(totalCount + 1);
        }}
        onDecrease={() => {
          setTotalCount(totalCount - 1);
        }}
      />
    </div>
  );
}

export default App;
