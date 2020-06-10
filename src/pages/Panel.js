import React, { useState, useEffect, useRef } from "react";
import firebase from "../firebase/index";
import ImageUpload from "../components/ImageUpload"

const Panel = () => { 
  const [urls, setUrls] = useState([]);
  const [category, setCategory] = useState("-");
  const imagesRef = useRef({})

  const deleteImage = async (imagePath, imageURL) => {
    let deleteImage = window.confirm("¿Segura que quieres borrarla?");
    if (deleteImage) {
    const imageRef = firebase.storage().ref(imagePath)
    try {
      await imageRef.delete()
      localStorage.clear()
      setUrls(urls => urls.filter(item => item.url !== imageURL))
    } catch (error) { 
      console.error(error)
    }
    }
  }

  const getImages = async (categoryName) => {
    if (categoryName === '-') setUrls([])
    if (Reflect.has(imagesRef.current, categoryName)) {
      setUrls(imagesRef.current[categoryName])
      return
    }
    setUrls([])
    let folder = await firebase.storage().ref("").child(categoryName + "/").list({ maxResults: 100 });

    try {
      const result = await Promise.all(Array.from(folder.items).map(itemRef => {
        return new Promise(async resolve => {
          const url = await itemRef.getDownloadURL()
          resolve({url, fullPath: itemRef.fullPath})
        })
      }))
      imagesRef.current[categoryName] = result
      setUrls(result)
      localStorage.setItem('panel-images', JSON.stringify({
        images: imagesRef.current,
        timestamp: Date.now() / 1000
      }))
    } catch (error) { 
      console.error(error)
    }
  };

  useEffect(() => {
    try {
      const data = JSON.parse(localStorage.getItem('panel-images'))
      const now = new Date().getTime() / 1000
      if (now - data.timestamp <= 600) {
        imagesRef.current = data.images
      }
    } catch (error) { 
      console.warn(error)
    }
  }, [])

  useEffect(() => {
    getImages(category)
  }, [category])

  return (
    <main>
      <div id="panel">
        <h1>Admin panel</h1>
        <label htmlFor="category" style={{fontSize: 18}}>Elige una categoria: </label>
        <select id="category" onChange={(e) => { setCategory(e.target.value) }} style={{marginBottom: 20, fontSize: 16, outline: 0}}>
          <option value="-">-</option>
          <option value="CHARACTER-DESIGN">1.- Character Design</option>
          <option value="FANART">2.- Fanart</option>
          <option value="EMOTES">3.- Emotes</option>
          <option value="CONCEPT">4.- Concept Art</option>
        </select>
        <ImageUpload category={category}/>
        <div id="galeria">
          {urls.map(({url, fullPath}) =>
          <div style={{maxWidth: '300px', height: '300px', margin: '0 auto', border: '1px solid gray'}}>
            <img style={{width: '100%', height: '100%', cursor: 'pointer'}} onClick={() => deleteImage(fullPath, url)} src={url} key={url} alt=""></img>
          </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Panel;
