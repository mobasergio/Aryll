import React, { useState } from 'react';
import { Link } from "@reach/router"
import disableScroll from 'disable-scroll';

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
        <img src={require('../assets/noodles.svg')}  alt=""/>
        </div>
        <div onClick={toggleMenu}>
          <img src={require('../assets/menu.svg')}  alt=""/>
        </div>
      </nav>
      <div id="menu" className={menu ? 'hide' : ''}>
        <ul>
          <li><Link to="/" onClick={() => toggleMenu()}>MIXED PROJECTS</Link></li>
          <li><Link to="/cat1" onClick={() => toggleMenu()}>CATEGORIA1</Link></li>
          <li><Link to="/cat2" onClick={() => toggleMenu()}>CATEGORIA2</Link></li>
          <li><Link to="/cat3" onClick={() => toggleMenu()}>CATEGORIA3</Link></li>
          <li><Link to="/cat4" onClick={() => toggleMenu()}>CATEGORIA4</Link></li>
          <li><Link to="/about" onClick={() => toggleMenu()}>About me</Link></li>
          <li><Link to="/contact" onClick={() => toggleMenu()}>Contact</Link></li>
          <li><Link to="/privacy-policy" onClick={() => toggleMenu()}>Privacy policy</Link></li>
        </ul>
        <div>
          <ul>
            <li><a href=""><img src={require('../assets/twitter.svg')} alt=""/></a></li>
            <li><a href=""><img src={require('../assets/instagram.svg')} alt=""/></a></li>
            <li><a href=""><img src={require('../assets/twitch.svg')} alt=""/></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
