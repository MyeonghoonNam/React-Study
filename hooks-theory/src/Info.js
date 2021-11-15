import React, { useEffect } from 'react';
import useInputs from './useInputs';

// const reducer = (state, action) => {
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// };

const Info = () => {
  // 하나의 useState 함수는 하나의 상태 값만 관리할 수 있습니다. 컴포넌트에서 관리해야 할 상태가 여러 개라면 useState를 여러 번 사용하면 됩니다.
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  const [state, onChange] = useInputs({
    name: '',
    nickname: '',
  });

  const { name, nickname } = state;
  // const onChange = (e) => {
  //   // useReducer에서의 액션은 그 어떤 값도 사용 가능합니다. 그래서 이번에는 이벤트 객체가 지니고 있는 e.target 값 자체를 액션 값으로 사용했습니다. 이런 식으로 인풋을 관리하면 아무리 인풋의 개수가 많아져도 코드를 짧고 깔끔하게 유지할 수 있습니다.
  //   dispatch(e.target);
  // };

  // useEffect는 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook입니다. 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate를 합친 형태로 보아도 무방합니다.

  // useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 렌더링될 때만 실행하고, 업데이트될 때는 실행하지 않으려면 함수의 두 번째 파라미터로 비어 있는 배열을 넣어 주면 됩니다.

  // useEffect의 두 번째 파라미터로 전달되는 배열 안에 검사하고 싶은 값을 넣어 주면 특정 값의 변화가 이루어질 때도 useEffect가 실행됩니다.

  // useEffect는 기본적으로 렌더링되고 난 직후마다 실행되며, 두 번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라집니다.
  // 컴포넌트가 언마운트되기 전이나 업데이트되기 직전에 어떠한 작업을 수행하고 싶다면 useEffect에서 뒷정리(cleanup) 함수를 반환해 주어야 합니다.

  useEffect(() => {
    console.log('렌더링 완료');
    console.log({
      name,
      nickname,
    });

    return () => {
      console.log('cleanUp');
      console.log({
        name,
        nickname,
      });
    };
  }, [name, nickname]);

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
