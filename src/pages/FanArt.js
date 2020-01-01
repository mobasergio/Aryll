import React, { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from '../assets/loader.svg';

const FanArt = () => {
  const [urls, setUrls] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  useEffect(() => {
    async function fetchData() {
      await Axios.get("https://res.cloudinary.com/aryll/image/list/fanarts.json")
        .then(result => setUrls(result.data.resources))
        .catch(error => console.log("error:", error));
      await setLoading(false);
    }
    fetchData();
  }, []);
  
  const photos = []
  const thumbPhotos = []
  urls.map(x => photos.push({src: `https://res.cloudinary.com/aryll/${x.public_id}`, width: 1, height: 1}))
  urls.map(x => thumbPhotos.push({src: `https://res.cloudinary.com/aryll/c_thumb,w_400/${x.public_id}`, width: 1, height: 1}))

  if (loading) {
    return (
      <main>
        <img id="loader" src={Loader} alt=""/>
      </main>
    )
  }

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

export default FanArt;
