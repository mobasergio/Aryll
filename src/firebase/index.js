import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import dotenv from 'dotenv'
dotenv.config()

var config = firebase.initializeApp( {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId
});

export default config;