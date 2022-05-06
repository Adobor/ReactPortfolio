// import logo from './logo.svg';

import './App.css';
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './componente/NavBar';
import Topheader from './componente/Topheader'
import AboutMe from './componente/AboutMe';
import Footer from './componente/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          <NavBar/>
          <Topheader/>
          <AboutMe/>
          <Footer/>
        </p>
      
      </header>
    </div>
  );
}

export default App;
