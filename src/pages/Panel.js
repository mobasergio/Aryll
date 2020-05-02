import React, { useState, useEffect, useRef } from "react";
import firebase from "../firebase/index";
import ImageUpload from "../components/ImageUpload"

const Panel = () => { 
  const [urls, setUrls] = useState([]);
  const [category, setCategory] = useState("-");
  const imagesRef = useRef({})

  const deleteImage = async (imagePath, imageURL) => {
    let deleteImage = confirm("¿Segura que quieres borrarla?");
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
    if (categoryName == '-') return
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
        <ImageUpload category={category}/>
        <label htmlFor="category">Elige una categoria:</label>
        <select id="category" onChange={(e) => { setCategory(e.target.value) }}>
          <option value="-">-</option>
          <option value="CHARACTER-DESIGN">Character Design</option>
          <option value="FANART">Fanart</option>
          <option value="EMOTES">Emotes</option>
          <option value="CONCEPT">Concept Art</option>
        </select>
        <div id="galeria">
          {urls.map(({url, fullPath}) =>
            <img onClick={() => deleteImage(fullPath, url)} style={{width: '25%', height: 220, cursor: 'pointer'}} src={url} key={url}></img>
          )}
        </div>
      </div>
    </main>
  );
};

export default Panel;
