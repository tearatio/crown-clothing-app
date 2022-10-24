import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAYMtujjvycajP5rED80ku-8QVj9FLkFI",
  authDomain: "crowns-db-8d9ee.firebaseapp.com",
  projectId: "crowns-db-8d9ee",
  storageBucket: "crowns-db-8d9ee.appspot.com",
  messagingSenderId: "1039326536377",
  appId: "1:1039326536377:web:70d20bd89378cfdaa07168",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);
