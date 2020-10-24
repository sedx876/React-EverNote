import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';


const firebase = require('firebase')
require('firebase/firestore')

  firebase.initializeApp({
    apiKey: "AIzaSyChR1qm7XWVKLLoFbPWNlgIqSIW41sERG4",
    authDomain: "evernote-edf35.firebaseapp.com",
    databaseURL: "https://evernote-edf35.firebaseio.com",
    projectId: "evernote-edf35",
    storageBucket: "evernote-edf35.appspot.com",
    messagingSenderId: "509308271893",
    appId: "1:509308271893:web:8385ec47cd62f674863d1c",
    measurementId: "G-EF31CGFG4H"
  });
  

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

