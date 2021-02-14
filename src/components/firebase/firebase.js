import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyANncJSzC19D0QK0b03QR6B4MzLydkGYrY",
    authDomain: "netflix-new-a8856.firebaseapp.com",
    projectId: "netflix-new-a8856",
    storageBucket: "netflix-new-a8856.appspot.com",
    messagingSenderId: "271616279929",
    appId: "1:271616279929:web:1f6c1e44587ef799ac5ba8",
    measurementId: "G-CQ9Q6WCF52"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;