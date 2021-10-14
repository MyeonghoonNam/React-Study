import logo from './logo.svg';
import './App.css';

function App() {
  const name = "리액트";
  const showLink = true; //false
  const showLogo = 'show'; // none
  const names = ['React', 'Vue', 'Angular'];

  return (
    // JSX
    // class는 예약어이므로 JSX문법에서는 className을 사용한다.
    // <></>인 프레그먼트 태그를 활용하여 하나의 컴포넌트 안에 최상위 DOM 요소안에 반드시 모든 태그들이 포함되지 않아도 된다.
    <> 
      <div className="App">
        <header className="App-header">
          {
            showLogo === 'show' ? (
              <img src={logo} className="App-logo" alt="logo" />
            ) : (
              <h1>React</h1>
            )
          }
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {showLink && (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn {name}
            </a>
          )}

          <ul>
            {
              names.map(item => (
                <li key={item}>{item}</li>
              ))
            }
          </ul>
        </header>
      </div>
      <span>text</span>
    </>
  );
}

export default App;
