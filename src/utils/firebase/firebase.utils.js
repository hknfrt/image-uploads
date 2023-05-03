import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from'firebase/auth'
import {getFirestore, doc,getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-LURMNbBA7Pb8xwZfs_ragvrC0qA78Ik",
    authDomain: "crwn-clothing-db-158d1.firebaseapp.com",
    projectId: "crwn-clothing-db-158d1",
    storageBucket: "crwn-clothing-db-158d1.appspot.com",
    messagingSenderId: "295831899256",
    appId: "1:295831899256:web:24715944afd7445cb0718d"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: 'select_account',
  });

  export const auth = getAuth();
  export const signInGoogleInWithPopup = () => signInWithPopup(auth, googleProvider);
 
  export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
  

    const userSnapshot = await getDoc(userDocRef);
  

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createAt = new Date()
      try {
        await setDoc(userDocRef, {
          displayName, 
          email,
          createAt
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
  }