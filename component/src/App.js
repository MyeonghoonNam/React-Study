import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';
import { css } from '@emotion/react';
import Box from './components/Box';
import { loginApi } from './utils/API/login';
import { authApi } from './utils/API/auth';

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
  const handleClick = async () => {
    const { user, token } = await loginApi({
      email: 'hoon@gmail.com',
      password: '1q2w3e4r',
    });

    console.log(user, token);

    const auth = await authApi({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(auth);
  };

  return (
    <div className="App">
      <SomeComponent />
      <Box />
      <header className="App-header">
        <button onClick={handleClick}>test</button>
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
