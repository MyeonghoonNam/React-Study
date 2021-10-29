import './App.css';
import { css } from '@emotion/react';
import { loginApi } from '@utils/API/login';
import { authApi } from '@utils/API/auth';
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ColorProvider } from './contexts/color';
import {
  Logo,
  Paragraph,
  Box,
  CheckBox,
  ColorBox,
  SelectColors,
} from '@components';

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

  const [checked, setChecked] = useState(true);

  const handleClick2 = () => {
    setChecked(!checked);
  };
  return (
    <ColorProvider>
      <div className="App">
        <Switch>
          <Route path={'/'} exact>
            <CheckBox onClick={handleClick2} checked={checked} />
            {/* <CheckBox onClick={handleClick} checked={checked} /> */}
            <SomeComponent />
            <Box />
            <SelectColors />
            <ColorBox />
          </Route>
          <Route path={'/context'} exact>
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
          </Route>
        </Switch>
      </div>
    </ColorProvider>
  );
}

export default App;
