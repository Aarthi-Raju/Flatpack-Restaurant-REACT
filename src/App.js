import React from 'react';
import './App.css';
import NavBar from './Files/NavBar';
import LandingPage from './Files/LandingPage';
import Services from './Files/Services';
import Branding from './Files/Branding';

function App() {
  return (
    <div>
      <NavBar />
      <LandingPage />
      <Services />
      <Branding />
    </div>
  );
}

export default App;
