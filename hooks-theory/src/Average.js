import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중...');

  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((a, b) => a + b);
  const average = Math.floor(sum / numbers.length);

  return average;
};

const Average = () => {
  const [number, setNumber] = useState(0);
  const [list, setList] = useState([]);

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onClick = () => {
    const nextList = list.concat(parseInt(number));

    setList(nextList);
    setNumber('');
  };

  // useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.
  // 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값</b> : {avg}
      </div>
    </div>
  );
};

export default Average;
