// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/firebase-auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkMZC2DPQVSGQuKe4vCGKUE4jEGYezGaQ",
  authDomain: "melodywave-9ac7d.firebaseapp.com",
  projectId: "melodywave-9ac7d",
  storageBucket: "melodywave-9ac7d.appspot.com",
  messagingSenderId: "455140698286",
  appId: "1:455140698286:web:f19a7da5e6ab1b1472653f",
  measurementId: "G-FMP6MSVJJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)