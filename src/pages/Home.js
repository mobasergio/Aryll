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
          I'm a 27 years old girl from Spain. I've studied Arts at Sevilla
          University, Digital Illustration and Visual Development at Escuela
          Trazos (Madrid), and a Character Design Expert program at U-TAD, The
          Digital University Centre (Madrid). I've worked in some indie
          videogame projects, but currently I'm working as a freelance
          illustrator. Also, I stream everyday on my Twitch channel.
        </p>
      </div>
      <iframe
        src="https://player.twitch.tv/?channel=aryllchan&muted=true"
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
