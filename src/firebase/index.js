import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";

var config = firebase.initializeApp( {
  apiKey: "AIzaSyBNMx4j51AYc2Qdk5VbAzHcK12FZJF_iho",
  authDomain: "aryll-fa86f.firebaseapp.com",
  databaseURL: "https://aryll-fa86f.firebaseio.com",
  projectId: "aryll-fa86f",
  storageBucket: "aryll-fa86f.appspot.com",
  messagingSenderId: "908166882936",
  appId: "1:908166882936:web:3de5fb98f9bec237a5ef8d",
  measurementId: "G-GQ7TZCE6VM"
});

export default config;