// import logo from './logo.svg';
// import './App.css';

// // 코드스플리팅 : 빌드과정에서의 최적화를 위한 파일 분리 작업
// // 코드 비동기 로딩 역시 코드 스플리팅 방법 중 하나로 코드 비동기 로딩을 통해 자바스크립트 함수, 객체, 혹은 컴포넌트를 처음에는 불러오지 않고 필요한 시점에 불러와서 사용할 수 있다.

// function App() {
//   const onClick = () => {
//     // import를 함수로 사용하면 Promise를 반환하며 메서드 안에서 사용하면, 파일을 따로 분리시켜서 저장한다. 그리고 실제 함수가 필요한 지점에 파일을 불러와서 함수를 사용
//     import('./notify').then((result) => result.default());
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p onClick={onClick}>Hello React!</p>
//       </header>
//     </div>
//   );
// }

// export default App;

// -------------------------------------------------------------------
// React.lazy와 Suspense를 통한 코드 스플리팅

import React, { useState, Suspense } from 'react';
import logo from './logo.svg';
import './App.css';

// React.lazy는 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해 주는 유틸 함수
const Split = React.lazy(() => import('./splitCode'));

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  // Suspense는 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있고, 로딩이 끝나지 않았을 때 보여 줄 UI를 설정할 수 있다.
  // fallback	props를 통해 로딩 중에 보여 줄 JSX를 지정
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <Split />}
        </Suspense>
      </header>
    </div>
  );
};

export default App;
