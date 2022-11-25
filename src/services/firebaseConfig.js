import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDrROO6Y1UW-f5J663RVa_GZQ9JdMSDXVY",
  authDomain: "react-45060-egc.firebaseapp.com",
  projectId: "react-45060-egc",
  storageBucket: "react-45060-egc.appspot.com",
  messagingSenderId: "524553503338",
  appId: "1:524553503338:web:23f35b35e2c19eb3d68013"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const collectionProd = collection (db, 'products');
