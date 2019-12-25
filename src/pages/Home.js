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
          Me gradué en Ilustración Digital y Visual Development en la Escuela Trazos (Madrid), e hice un máster de Experta
          en Diseño de Personajes en el Centro Universitario UTAD (Madrid). He trabajado en proyectos de videojuegos indie,
          aunque ahora estoy trabajando como ilustradora freelance. Además hago streamings todos los dias en mi canal de Twitch 
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
