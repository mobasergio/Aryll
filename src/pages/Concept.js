import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const Concept = () => {
  const [urls, setUrls] = useState([]);
  const [thumbUrls, setThumbUrls] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    Axios.get('http://res.cloudinary.com/aryll/image/list/concept.json')
      .then(result => setUrls(result.data.resources))
      .catch(error => console.log('error:', error));
    }, []);
  
  const photos = []
  urls.map(x => photos.push({src: `http://res.cloudinary.com/aryll/${x.public_id}`, width: 1, height: 1}))

  const thumbPhotos = []
  urls.map(x => thumbPhotos.push({src: `http://res.cloudinary.com/aryll/c_thumb,w_400,g_face/${x.public_id}`, width: 1, height: 1}))

  return (
    <main>
      <div id="gallery">
        <Gallery photos={thumbPhotos} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel currentIndex={currentImage} views={photos.map(x => ({ ...x }))} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </main>
  );

};

export default Concept;
