import React from 'react';
import Profile from '../assets/profile.png';

const Home = () => {
  return (
    <main>
      <div id="profile">
        <img src={Profile} alt="" />
      </div>
      <div id="bio">
        <h1>Hi! I'm Rosana</h1>
        <p>
          I'm a 27 years old girl from Spain. I've studied Arts at Sevilla University, Digital Illustration and Visual 
          Development at <a href="https://trazos.net/" target="_blank" rel="noopener noreferrer"> Escuela Trazos (Madrid)</a>, and a Character Design 
          Expert program at <a href="https://www.u-tad.com/" target="_blank" rel="noopener noreferrer">U-TAD, The Digital University Centre (Madrid)</a>. 
          I've worked in some indie videogame projects, but currently I'm working as a freelance illustrator. 
          Also, I <a href="https://www.twitch.tv/aryllchan" target="_blank" rel="noopener noreferrer"> stream everyday</a> on my Twitch channel.
        </p>
      </div>
      <iframe
        title="streaming"
        src="https://player.twitch.tv/?channel=aryllchan&parent=www.aryll.art&muted=true"
        width="320"
        height="180"
        frameBorder="0"
        scrolling="no"
        allowFullScreen={true}
      ></iframe>
    </main>
  );
};

export default Home;
