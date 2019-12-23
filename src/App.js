import React from "react";
import './styles/aver.css'
import { Router } from "@reach/router"
import Navbar from './components/Navbar'
import Home from './pages/Home'
import CharacterDesign from './pages/CharacterDesign'
import FanArt from './pages/FanArt'
import Emotes from './pages/Emotes'
import Concept from './pages/Concept'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

export default () => (
  <div className="container">
    <Navbar />
    <Router>
      <Home path="/" />
      <CharacterDesign path="/character-design"/>
      <FanArt path="/fanart"/>
      <Emotes path="/emotes"/>
      <Concept path="/concept"/>
      <Contact path="/contact"/>
      <Privacy path="/privacy-policy"/>
    </Router>
  </div>
)