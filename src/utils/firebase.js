// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9yvMjrUjsMnqzJ0xG-QNJ2-TpBymUVec",
  authDomain: "netflixgpt-c499e.firebaseapp.com",
  projectId: "netflixgpt-c499e",
  storageBucket: "netflixgpt-c499e.firebasestorage.app",
  messagingSenderId: "369766211059",
  appId: "1:369766211059:web:29ec1fa432bc8c8aa98686",
  measurementId: "G-19HHY1XJQH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
