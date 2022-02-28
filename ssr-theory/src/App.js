import Menu from './components/Menu';
import { Route, Routes } from 'react-router-dom';
import RedPage from './pages/RedPage';
import Red from './components/Red';
import BluePage from './pages/BluePage';
import Blue from './components/Blue';

const App = () => {
  return (
    <>
      <Menu />
      <hr />
      <Routes>
        <Route path="/red" component={<RedPage />}>
          <Route path="" element={<Red />} />
        </Route>
        <Route path="/blue" component={<BluePage />}>
          <Route path="" element={<Blue />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
