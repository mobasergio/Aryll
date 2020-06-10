import React from "react";
import './styles/style.css';
import { Router } from "@reach/router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Admin from './pages/Admin';


export default () => (
  <div className="container">
    <Navbar />
    <Router>
      <Home path="/" />
      <Gallery category="CHARACTER-DESIGN" path="/character-design"/>
      <Gallery category="FANART" path="/fanart"/>
      <Gallery category="EMOTES" path="/emotes"/>
      <Gallery category="CONCEPT" path="/concept"/>
      <Contact path="/contact"/>
      <Disclaimer path="/disclaimer"/>
      <Admin path="/admin"/>  
    </Router>
  </div>
)