import React from "react";
import '../styles/style.css'
import { Router } from "@reach/router"
import Navbar from '../components/Navbar'
import All from '../components/All'

export default () => (
  <div className="container">
    <Navbar />
    <Router>
      <All path="/" />
    </Router>
  </div>
)
