import React from "react";
import ReactGA from 'react-ga';
import './styles/style.css'
import { Router } from "@reach/router"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CharacterDesign from './pages/CharacterDesign'
import FanArt from './pages/FanArt'
import Emotes from './pages/Emotes'
import Concept from './pages/Concept'
import Contact from './pages/Contact'
import Disclaimer from './pages/Disclaimer'

ReactGA.initialize('UA-112238639-2');

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
    </Router>
  </div>
)