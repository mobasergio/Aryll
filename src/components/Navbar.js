import React, { useState } from 'react';
import { Link } from "@reach/router"
import disableScroll from 'disable-scroll';

import Sakura from '../assets/sakura.png';
import Menu from '../assets/menu.svg';
import Twitter from '../assets/twitter.svg';
import Instagram from '../assets/instagram.svg';
import Twitch from '../assets/twitch.svg';

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "#FFB6C1" : "black"
        }
      };
    }}
  />
);

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const toggleMenu = () => {
    setMenu(!menu);
    menu == true ? disableScroll.on() : disableScroll.off()
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
            <li><NavLink to="/">HOME</NavLink></li>
            <li><NavLink to="/character-design">CHARACTER DESIGN</NavLink></li>
            <li><NavLink to="/fanart">FANART</NavLink></li>
            <li><NavLink to="/emotes">EMOTES</NavLink></li>
            <li><NavLink to="/concept">CONCEPT</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/privacy-policy">Privacy policy</NavLink></li>
            <ul id="social">
              <li><a href="https://www.twitter.com/PsychoAryll" target="_blank"><img src={Twitter} alt=""/></a></li>
              <li><a href="https://www.instagram.com/psychoaryll/" target="_blank"><img src={Instagram} alt=""/></a></li>
              <li><a href="https://www.twitch.tv/aryllchan" target="_blank"><img src={Twitch} alt=""/></a></li>
            </ul>
          </ul>
        </div>
      </nav>
      <div id="menu" className={menu ? 'hide' : ''}>
        <ul>
          <li><Link to="/" onClick={() => toggleMenu()}>HOME</Link></li>
          <li><Link to="/character-design" onClick={() => toggleMenu()}>CHARACTER DESIGN</Link></li>
          <li><Link to="/fanart" onClick={() => toggleMenu()}>FANART</Link></li>
          <li><Link to="/emotes" onClick={() => toggleMenu()}>EMOTES</Link></li>
          <li><Link to="/concept" onClick={() => toggleMenu()}>CONCEPT</Link></li>
          <li><Link to="/contact" onClick={() => toggleMenu()}>Contact</Link></li>
          <li><Link to="/privacy-policy" onClick={() => toggleMenu()}>Privacy policy</Link></li>
        </ul>
        <div>
          <ul>
            <li><a href="https://www.twitter.com/PsychoAryll" target="_blank"><img src={Twitter} alt=""/></a></li>
            <li><a href="https://www.instagram.com/psychoaryll/" target="_blank"><img src={Instagram} alt=""/></a></li>
            <li><a href="https://www.twitch.tv/aryllchan" target="_blank"><img src={Twitch} alt=""/></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
