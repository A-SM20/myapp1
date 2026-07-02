// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDmZSNGP15C0ROw6B4ymvwX-1nE8WRitKo",
    authDomain: "tpc-travels.firebaseapp.com",
    projectId: "tpc-travels",
    storageBucket: "tpc-travels.firebasestorage.app",
    messagingSenderId: "404762624068",
    appId: "1:404762624068:web:46c209515fff86b5063c11"
  };
  

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };