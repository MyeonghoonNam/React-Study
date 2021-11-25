import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
