import { Route, Switch } from 'react-router-dom';
import firstComponent from './FirstComponent';
import secondComponent from './SecondComponent';
import UserInfo from './contexts/UserInfo';

function App() {
  return (
    <UserInfo>
      <div className="App">
        <Switch>
          <Route path={'/'} component={firstComponent} exact />
          <Route path={'/context'} component={secondComponent} exact />
        </Switch>
      </div>
    </UserInfo>
  );
}

export default App;
