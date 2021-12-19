import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCXivB9RBZsFqADz80GUTumvQsqI0OJ28E",
    authDomain: "clone-cd35a.firebaseapp.com",
    projectId: "clone-cd35a",
    storageBucket: "clone-cd35a.appspot.com",
    messagingSenderId: "70290420465",
    appId: "1:70290420465:web:508f199a311192d2a36f50"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}