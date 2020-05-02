import React from "react";
import './styles/style.css';
import { Router } from "@reach/router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CharacterDesign from './pages/CharacterDesign';
import FanArt from './pages/FanArt';
import Emotes from './pages/Emotes';
import Concept from './pages/Concept';
import Contact from './pages/Contact';
import Disclaimer from './pages/Disclaimer';
import Admin from './pages/Admin';

export default () => (
  <div className="container" onContextMenu={(e)=> e.preventDefault()}>
    <Navbar />
    <Router>
      <Home path="/" />
      <CharacterDesign path="/character-design"/>
      <FanArt path="/fanart"/>
      <Emotes path="/emotes"/>
      <Concept path="/concept"/>
      <Contact path="/contact"/>
      <Disclaimer path="/disclaimer"/>
      <Admin path="/admin"/>
    </Router>
  </div>
)