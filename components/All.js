import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const All = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Axios.get('http://res.cloudinary.com/nytz/image/list/all.json')
      .then(result => setPhotos(result.data.resources))
      .catch(error => console.log('error:', error));
  }, []);

  return (
    <main>
      <div>
        {photos.map(photo => (
          <img key={photo.public_id} src={`http://res.cloudinary.com/nytz/${photo.public_id}`}></img>
        ))}
      </div>
    </main>
  );
};

export default All;
