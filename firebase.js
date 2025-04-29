import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_cyyLl5Aarbh6QEnOHe1MAxdGYLgOVA8",
    authDomain: "ecohabitsapp.firebaseapp.com",
    projectId: "ecohabitsapp",
    storageBucket: "ecohabitsapp.firebasestorage.app",
    messagingSenderId: "579320101223",
    appId: "1:579320101223:web:8e475ffdd58b651ea897c2",
    measurementId: "G-S7JNTDDH5Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 