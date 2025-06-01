// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2yk2FcxTRJpmpZbPW9Uctw6G6siRwfSE",
  authDomain: "interviewprep-e52ba.firebaseapp.com",
  projectId: "interviewprep-e52ba",
  storageBucket: "interviewprep-e52ba.firebasestorage.app",
  messagingSenderId: "10528152158",
  appId: "1:10528152158:web:1e040c7df057591897b2cf",
  measurementId: "G-83RZG89JGN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);