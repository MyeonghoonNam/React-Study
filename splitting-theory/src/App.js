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
// React.lazy와 Suspense, Loadable Components를 통한 코드 스플리팅

import React, { useState } from 'react';
import loadable from '@loadable/component';
import logo from './logo.svg';
import './App.css';

// React.lazy는 컴포넌트를 렌더링하는 시점에서 비동기적으로 로딩할 수 있게 해 주는 유틸 함수
const Split = loadable(() => import('./splitCode'), {
  fallback: <div>loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  const onMouseOver = () => {
    // preload 메소드를 통해 미리 파일을 불러올 수 있는 기능
    Split.preload();
  };

  // Suspense는 리액트 내장 컴포넌트로서 코드 스플리팅된 컴포넌트를 로딩하도록 발동시킬 수 있고, 로딩이 끝나지 않았을 때 보여 줄 UI를 설정할 수 있다.
  // fallback	props를 통해 로딩 중에 보여 줄 JSX를 지정

  // Loadable Components는 코드 스플리팅을 편하게 하도록 도와주는 서드파티 라이브러리이다.
  // 이 라이브러리는 서버 사이드 렌더링을 지원힌디(React.lazy와 Suspense는 아직 서버 사이드 렌더링을 지원하지 않는다). 또한, 렌더링하기 전에 필요할 때 스플리팅된 파일을 미리 불러올 수 있는 기능도 있다.
  // 서버 사이드 렌더링은 웹 서비스의 초기 로딩 속도 개선, 캐싱 및 검색 엔진 최적화를 가능하게 해 주는 기술
  // 서버 사이드 렌더링을 사용하면 웹 서비스의 초기 렌더링을 사용자의 브라우저가 아닌 서버 쪽에서 처리
  // 사용자는 서버에서 렌더링한 html 결과물을 받아 와서 그대로 사용하기 때문에 초기 로딩 속도도 개선, 검색 엔진에서 크롤링할 때 유리한 이점이 있다.

  // 서버 사이드 렌더링을 사용할 경우 Loadable Components를 사용
  // 아닌 경우 React.lazy, Suspense를 사용

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {visible && <Split />}
      </header>
    </div>
  );
};

export default App;
