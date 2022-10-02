// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAZcmjp03nEkdoz4HJoi6uceEePFZJh-kw',
  authDomain: 'pnp-shop-db.firebaseapp.com',
  projectId: 'pnp-shop-db',
  storageBucket: 'pnp-shop-db.appspot.com',
  messagingSenderId: '847187318869',
  appId: '1:847187318869:web:c624971ca808aa0ca2dcdc',
};

// Initialize Firebase
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGoooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, provider);

export const db = getFirestore();

// add documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = 'title'
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories'); //create ref
  const q = query(collectionRef); // create query
  const querySnapshot = await getDocs(q); // get documents
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const createUserAuthDoc = async (user) => {
  // early escape
  if (!user) return;
  const docRef = doc(db, 'users', user.uid);

  const userSnapshot = await getDoc(docRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log('error: ', err.message);
    }
  }

  return docRef;
};

export const createAuthUserWithEmailAndPass = async ({ email, password }) => {
  // early escape
  if (!email || !password) throw Error('email or password not provided');
  const authObj = await createUserWithEmailAndPassword(auth, email, password);
  return authObj;
};

export const signInWithEmailAndPass = async ({ email, password }) => {
  // early escape
  if (!email || !password) throw Error('email or password not provided');
  const authObj = await signInWithEmailAndPassword(auth, email, password);
  return authObj;
};

export const signOutCurrentUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedListener = (cb) => {
  if (!cb) return;
  onAuthStateChanged(auth, cb);
};
