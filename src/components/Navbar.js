import React, { useState } from 'react';
import { Link } from "@reach/router"
import disableScroll from 'disable-scroll';
import Sakura from '../assets/sakura.png';
import Menu from '../assets/menu.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Twitch from '../assets/twitch.svg';

const NavLink = props => (
  <Link {...props} getProps={({ isCurrent }) => {
      return {
        style: { color: isCurrent ? "#FFB6C1" : "#444444" }
      };
    }}
  />
);

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const toggleMenu = () => {
    topFunction();
    setMenu(!menu);
    menu === true ? disableScroll.on() : disableScroll.off();
  };

  return (
    <header>
      <nav>
        <div>
          <div> <Link to="/"><img id="logo" src={Sakura}  alt=""/></Link> </div>
          <div onClick={toggleMenu}> <img src={Menu}  alt=""/> </div> 
        </div>
        <div>
          <div> <Link to="/"><img id="logo" src={Sakura}  alt=""/></Link> </div>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/character-design">Character Design</NavLink></li>
            <li><NavLink to="/fanart">Fanart</NavLink></li>
            <li><NavLink to="/emotes">Emotes</NavLink></li>
            <li><NavLink to="/concept">Concept</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/disclaimer">Disclaimer</NavLink></li>
            <ul id="social">
              <li><a href="https://www.twitter.com/PsychoAryll" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt=""/></a></li>
              <li><a href="https://www.instagram.com/psychoaryll/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt=""/></a></li>
              <li><a href="https://www.twitch.tv/aryllchan" target="_blank" rel="noopener noreferrer"><img src={Twitch} alt=""/></a></li>
            </ul>
            <li id="madeby"><a href="https://www.mobasergio.com" target="_blank" rel="noopener noreferrer">Made with ♥ by Mobasergio</a></li>
          </ul>
        </div>
      </nav>
      <div id="menu" className={menu ? 'hide' : ''}>
        <ul>
          <li><NavLink to="/" onClick={() => toggleMenu()}>Home</NavLink></li>
          <li><NavLink to="/character-design" onClick={() => toggleMenu()}>Character Design</NavLink></li>
          <li><NavLink to="/fanart" onClick={() => toggleMenu()}>Fanart</NavLink></li>
          <li><NavLink to="/emotes" onClick={() => toggleMenu()}>Emotes</NavLink></li>
          <li><NavLink to="/concept" onClick={() => toggleMenu()}>Concept</NavLink></li>
          <li><NavLink to="/contact" onClick={() => toggleMenu()}>Contact</NavLink></li>
          <li><NavLink to="/disclaimer" onClick={() => toggleMenu()}>Disclaimer</NavLink></li>
        </ul>
        <div>
          <ul>
            <li><a href="https://www.twitter.com/PsychoAryll" target="_blank" rel="noopener noreferrer"><img src={Twitter} alt=""/></a></li>
            <li><a href="https://www.instagram.com/psychoaryll/" target="_blank" rel="noopener noreferrer"><img src={Instagram} alt=""/></a></li>
            <li><a href="https://www.twitch.tv/aryllchan" target="_blank" rel="noopener noreferrer"><img src={Twitch} alt=""/></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
