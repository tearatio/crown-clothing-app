import {initializeApp} from "firebase/app";

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
} from "firebase/auth";

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBAYMtujjvycajP5rED80ku-8QVj9FLkFI",
    authDomain: "crowns-db-8d9ee.firebaseapp.com",
    projectId: "crowns-db-8d9ee",
    storageBucket: "crowns-db-8d9ee.appspot.com",
    messagingSenderId: "1039326536377",
    appId: "1:1039326536377:web:70d20bd89378cfdaa07168",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = ()=> signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {

    if (!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid); // 3 arguments: database, name of the collection, unique identifier
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInformation,
            })
        } catch (e) {
            console.log('error during creating a user', e.message)
        }
        return userDocRef;
    }
}

export const createAuthUserWithEmailAndPassword = async (email, password)=>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
};