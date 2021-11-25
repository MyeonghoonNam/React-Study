import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
