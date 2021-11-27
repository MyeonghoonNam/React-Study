import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Profiles from './Profiles';
import Profile from './Profile';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />}>
          <Route path=":username" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
