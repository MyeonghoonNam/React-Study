import logo from './logo.svg';
import './App.css';

// 코드스플리팅 : 빌드과정에서의 최적화를 위한 파일 분리 작업
// 코드 비동기 로딩 역시 코드 스플리팅 방법 중 하나로 코드 비동기 로딩을 통해 자바스크립트 함수, 객체, 혹은 컴포넌트를 처음에는 불러오지 않고 필요한 시점에 불러와서 사용할 수 있다.

function App() {
  const onClick = () => {
    // import를 함수로 사용하면 Promise를 반환하며 메서드 안에서 사용하면, 파일을 따로 분리시켜서 저장한다. 그리고 실제 함수가 필요한 지점에 파일을 불러와서 함수를 사용
    import('./notify').then((result) => result.default());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick}>Hello React!</p>
      </header>
    </div>
  );
}

export default App;
