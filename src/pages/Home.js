import React from 'react';
import Profile from '../assets/profile.png';

const Home = () => {
  return (
    <main>
      <div id="profile">
        <img src={Profile} alt=""/>
      </div>
      <div id="bio">
        <h1>Hola! Soy Rosana</h1>
        <p>
          Me gradué en Bellas Artes en la Universidad de Sevilla y tengo un master en Noseque de Personajes en la escuela
          noseque de Madrid. A dia de hoy soy experta en ilustración y streamer a tiempo completo. Y yo que se que mas poner
          si este texto solo es para ver como queda ya me diras tu, la cosa es que cuentes tu vida un poquito y que digas a lo
          que te dedicas y ya esta y pa casa, aunque cuanto mas turra mejor la verdad.
        </p>
      </div>
      <iframe
        src="https://player.twitch.tv/?channel=aryllchan&muted=true"
        width="320"
        height="180"
        frameborder="0"
        scrolling="no"
        allowfullscreen="true">
      </iframe>
    </main>
  );
};

export default Home;
