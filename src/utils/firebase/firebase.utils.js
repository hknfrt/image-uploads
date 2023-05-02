import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA-LURMNbBA7Pb8xwZfs_ragvrC0qA78Ik",
    authDomain: "crwn-clothing-db-158d1.firebaseapp.com",
    projectId: "crwn-clothing-db-158d1",
    storageBucket: "crwn-clothing-db-158d1.appspot.com",
    messagingSenderId: "295831899256",
    appId: "1:295831899256:web:24715944afd7445cb0718d"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account'
  });

  export const auth = getAuth();
  export const signInGoogleInWithPopup = () => signInWithPopup(auth,provider);