import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCV2ljSDMl9ydqPdh1i2QcrDG0zsTPJKf8",
    authDomain: "dinesh1-portfolio.firebaseapp.com",
    projectId: "dinesh1-portfolio",
    storageBucket: "dinesh1-portfolio.appspot.com",
    messagingSenderId: "342943293893",
    appId: "1:342943293893:web:96fd990f2a70c40c922bac",
    measurementId: "G-2LMYQPTW80"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();