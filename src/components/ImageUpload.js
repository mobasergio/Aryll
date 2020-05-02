import React, { useState, useRef } from 'react'
import firebase from "../firebase/index";

const FileUpload = (props) => {
  const progressRef = useRef([]);
  const [progressValue, setProgressValue] = useState(0);

  const handleOnChange = async (event) => {
    try {

      if (!event.target.files) {
        console.error('No files to upload!', event.target.files)
        return
      }
      
      progressRef.current = Array.from({length: event.target.files.length}).map(() => 0);
  
      const result = await Promise.all([...event.target.files].map((file, index) => {
          return new Promise((resolve, reject) => {
            const storageRef = firebase.storage().ref(`${props.category}/${file.name}`)
            const task = storageRef.put(file)
            
            task.on('state_changed', (snapshot) => {
              let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              progressRef.current[index] = percentage
              setProgressValue(Math.min(...progressRef.current))
              if (percentage === 100) resolve(snapshot)
            }, (error) => {
              console.error(error.message)
            })
          })
        }))
        localStorage.clear()
    } catch (error) {
      console.error(error)
    }
  }

  if (props.category !== "-") {
    return (
      <div style={{marginBottom: 20}}>
        <progress value={progressValue} max="100">{progressValue}%</progress>
        {progressValue === 100 ? <span> &#x2705;</span> : ''}
        <br />
        <input type="file" onChange={handleOnChange} accept="image/*" multiple/>
      </div>
    );
  }
  return null
};

export default FileUpload;