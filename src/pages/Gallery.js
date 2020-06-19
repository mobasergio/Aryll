import React, { useState, useEffect, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from '../assets/loader.svg';
import firebase from "../firebase/index"

const FanArt = ({category}) => {
  const [LQimages, setLQimages] = useState([]);
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

  const randomizeImages = (imagesArray) => {
    return imagesArray.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
  }

  const fullImage = (images) => {
    const arr = []
    images.map(x => arr.push({src: x.src.replace("%2Fthumbs", "").replace("_400x400", "")}))
    return arr;
  }
  
  useEffect(() => {
    const getImages = async () => {
      let images = await firebase.storage().ref().child(`${category}/thumbs`).listAll();
      try {
        const result = await Promise.all(Array.from(images.items).map(itemRef => {
          return new Promise(async resolve => {
            const url = await itemRef.getDownloadURL()
            resolve({src: url, width: 1, height: 1})
          })
        }))
        setLQimages(randomizeImages(result));
        fullImage(result);
        setLoading(false)
      } catch (error) { 
        console.error(error)
      }
    };
    getImages()
  }, [category])

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
        <Gallery photos={LQimages} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel currentIndex={currentImage} views={fullImage(LQimages)} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </main>
  );

};

export default FanArt;
