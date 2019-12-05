import React from "react";
import './styles/style.css'
import { Router } from "@reach/router"
import Navbar from './components/Navbar'
import All from './pages/All'
import Cat1 from './pages/Cat1'
import Cat2 from './pages/Cat2'
import About from './pages/About'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'

export default () => (
  <div className="container">
    <Navbar />
    <Router>
      <All path="/" />
      <Cat1 path="/cat1"/>
      <Cat2 path="/cat2"/>
      <About path="/about"/>
      <Contact path="/contact"/>
      <Privacy path="/privacy-policy"/>
    </Router>
  </div>
)
