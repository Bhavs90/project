import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCQ_8l8LwvzWN37sPKcZvQY3Rv45sB9bhk",
  authDomain: "book-santa-53422.firebaseapp.com",
  databaseURL: "https://book-santa-53422.firebaseio.com",
  projectId: "book-santa-53422",
  storageBucket: "book-santa-53422.appspot.com",
  messagingSenderId: "49123142422",
  appId: "1:49123142422:web:d0a25fa910e9da9ac5be37"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
