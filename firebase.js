import firebase from "./firebase";
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyC9wPxeLXxjWswKxhU4gTbPNpojeNt9rrc",
  authDomain: "tree-of-life-01.firebaseapp.com",
  databaseURL: "https://tree-of-life-01-default-rtdb.firebaseio.com",
  projectId: "tree-of-life-01",
  storageBucket: "tree-of-life-01.appspot.com",
  messagingSenderId: "297833766999",
  appId: "1:297833766999:web:3a2d37593bbdc785f30312",
  measurementId: "G-M5D8YCSWRX"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const db = getFirestore()

export { auth };
