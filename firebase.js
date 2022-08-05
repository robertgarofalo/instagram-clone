import firebase from 'firebase' 

const firebaseConfig = {
  apiKey: "AIzaSyBP0RSQ6vqdIxqexqKHxzrRayqi6AdP7Bw",
  authDomain: "rn-ig-clone-29cb4.firebaseapp.com",
  projectId: "rn-ig-clone-29cb4",
  storageBucket: "rn-ig-clone-29cb4.appspot.com",
  messagingSenderId: "436198962403",
  appId: "1:436198962403:web:48b0bdaee1648b940a41d6"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebase.firestore()

export {firebase, db}