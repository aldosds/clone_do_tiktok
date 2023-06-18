import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBk5nWY43mtAnruMm9Bn8pWW4EwlfMjago",
  authDomain: "tiktok-jornada-31c51.firebaseapp.com",
  projectId: "tiktok-jornada-31c51",
  storageBucket: "tiktok-jornada-31c51.appspot.com",
  messagingSenderId: "242197992042",
  appId: "1:242197992042:web:5e7f95049e54da08207013"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;