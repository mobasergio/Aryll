import React, { useState, useEffect, useCallback } from 'react';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import Loader from '../assets/loader.svg';
import firebase from "../firebase/index"

const FanArt = () => {
  const [urls, setUrls] = useState();
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

  const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
  };

  isMobileDevice() === true ? (
    useEffect(() => {
      const getImages = async () => {
        let folder = await firebase.storage().ref().child('FANART/thumbs').listAll();
        try {
          const result = await Promise.all(Array.from(folder.items).map(itemRef => {
            return new Promise(async resolve => {
              const url = await itemRef.getDownloadURL()
              resolve({src: url, width: 1, height: 1})
            })
          }))
          setUrls(result)
          setLoading(false)
        } catch (error) { 
          console.error(error)
        }
      };
      getImages()
    }, [])
  ) : (
    useEffect(() => {
      const getImages = async () => {
        let folder = await firebase.storage().ref().child('FANART/').listAll();
        try {
          const result = await Promise.all(Array.from(folder.items).map(itemRef => {
            return new Promise(async resolve => {
              const url = await itemRef.getDownloadURL()
              resolve({src: url, width: 1, height: 1})
            })
          }))
          setUrls(result)
          setLoading(false)
        } catch (error) { 
          console.error(error)
        }
      };
      getImages()
    }, [])
  )

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
        <Gallery photos={urls} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel currentIndex={currentImage} views={urls.map(x => ({ ...x }))} />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
    </main>
  );

};

export default FanArt;
