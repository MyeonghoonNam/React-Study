import React, { useState } from 'react';

const Say = () => {
  // useState에서는 반드시 객체가 아니어도 상관없다. 값의 형태는 자유이다.
  // 함수를 호출하면 배열이 반환되며 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꾸어 주는 함수이다.
  // 위 함수를 세터(Setter) 함수라고 부르며 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있다.
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  // 한 컴포넌트에서 useState 여러 번 사용할 수 있다.
  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
