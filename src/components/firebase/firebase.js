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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    // console.log(snapShot);

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.error( 'error creating user' ,error.message)
        }
    }
    return userRef;
  }

  firebase.initializeApp(config);


  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;