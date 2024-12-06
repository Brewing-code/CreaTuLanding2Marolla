
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUjSCju003CsGLgT2SxteqL5JK-fr40eE",
  authDomain: "soldierhopsdb-b04b0.firebaseapp.com",
  projectId: "soldierhopsdb-b04b0",
  storageBucket: "soldierhopsdb-b04b0.firebasestorage.app",
  messagingSenderId: "511025970896",
  appId: "1:511025970896:web:74b75cfdf4e5dd75b168d5"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)