import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAGXmhunVMMFUr-wZxbwoP0Dj7k3pzmif8",
    authDomain: "crud-90797.firebaseapp.com",
    projectId: "crud-90797",
    storageBucket: "crud-90797.appspot.com",
    messagingSenderId: "549678665725",
    appId: "1:549678665725:web:4371ba215ab3e5f9155394"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)