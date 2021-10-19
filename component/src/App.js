import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import { css } from '@emotion/react';

const style = css`
  color: hotpink;
`;

const SomeComponent = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
);

function App() {
  return (
    <div className="App">
      <SomeComponent />
      <header className="App-header">
        <Logo size={300} />
        <Logo />
        {/* <Logo size='100px'/> */}
        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        <Paragraph size={14} color="blue">
          Edit blue code
        </Paragraph>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
