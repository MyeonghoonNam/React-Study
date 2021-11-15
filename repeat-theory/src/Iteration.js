import React from 'react';

const Iteration = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];

  // 리액트에서 key는 컴포넌트 배열을 렌더링했을 때 어떤 원소에 변동이 있었는지 알아내려고 사용한다.
  // 예를 들어 유동적인 데이터를 다룰 때는 원소를 새로 생성할 수도, 제거할 수도, 수정할 수도 있죠. key가 없을 때는 Virtual DOM을 비교하는 과정에서 리스트를 순차적으로 비교하면서 변화를 감지한다.
  //하지만 key가 있다면 이 값을 사용하여 어떤 변화가 일어났는지 더욱 빠르게 알아낼 수 있다.
  // key 값은 언제나 유일해야 한다. 따라서 데이터가 가진 고윳값을 key 값으로 설정해야 한다.
  // index를 key로 사용하면 배열이 변경될 때 효율적으로 리렌더링하지 못하는 단점이 있다.
  const nameList = names.map((name, index) => <li key={index}>{name}</li>);

  return <ul>{nameList}</ul>;
};

export default Iteration;
