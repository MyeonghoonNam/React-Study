import React, { useState, useMemo, useCallback, useRef } from 'react';

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
  const inputEl = useRef(null); // useRef Hook은 함수형 컴포넌트에서 ref를 쉽게 사용할 수 있도록 해 줍니다.

  // useCallback은 useMemo와 상당히 비슷한 함수입니다. 주로 렌더링 성능을 최적화해야 하는 상황에서 사용하는데요. 이 Hook을 사용하면 이벤트 핸들러 함수를 필요할 때만 생성할 수 있습니다.
  //  onChange와 onInsert라는 함수를 이렇게 선언하면 컴포넌트가 리렌더링될 때마다 이 함수들이 새로 생성됩니다. 대부분의 경우 이러한 방식은 문제없지만, 컴포넌트의 렌더링이 자주 발생하거나 렌더링해야 할 컴포넌트의 개수가 많아지면 이 부분을 최적화해 주는 것이 좋습니다.
  // useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고, 두 번째 파라미터에는 배열을 넣으면 됩니다. 이 배열에는 어떤 값이 바뀌었을 때 함수를 새로 생성해야 하는지 명시해야합니다.
  // 숫자, 문자열, 객체처럼 일반 값을 재사용하려면 useMemo를 사용하고, 함수를 재사용하려면 useCallback을 사용
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onClick = useCallback(() => {
    const nextList = list.concat(parseInt(number));

    setList(nextList);
    setNumber('');

    inputEl.current.focus();
  }, [number, list]); // 렌더링, number 혹은 list가 바뀌었을 때만 함수를 다시 생성

  // useMemo를 사용하면 함수형 컴포넌트 내부에서 발생하는 연산을 최적화할 수 있습니다.
  // 렌더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고, 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용하는 방식
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input ref={inputEl} value={number} onChange={onChange} />
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
