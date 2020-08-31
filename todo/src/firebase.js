//npm i firebase
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
//copy the key from the firebase console herer
    apiKey: "AIzaSyDWHkmuedM3Uvki05ZuOXpW4O2ElUuLCo0",
    authDomain: "todo-4dd82.firebaseapp.com",
    databaseURL: "https://todo-4dd82.firebaseio.com",
    projectId: "todo-4dd82",
    storageBucket: "todo-4dd82.appspot.com",
    messagingSenderId: "506542379481",
    appId: "1:506542379481:web:28311dad11e855828989c8",
    measurementId: "G-E1HEX2ES6Y"
  

});

const db = firebaseApp.firestore();

export default db;


