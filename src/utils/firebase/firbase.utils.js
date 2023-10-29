import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCY9-m3UfXWBwxqMBP8GGXhsZAoHOF5zzQ",
  authDomain: "habesha-clothing.firebaseapp.com",
  projectId: "habesha-clothing",
  storageBucket: "habesha-clothing.appspot.com",
  messagingSenderId: "297208119826",
  appId: "1:297208119826:web:b195adfeb8a75e9c894ecb",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  anotherInfo = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "Users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapshot.exists()) {
    const { fullName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        fullName,
        email,
        createdAt,
        ...anotherInfo,
      });
    } catch (error) {
      console.log("error catching the user", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
