// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTyKi7US8_4PqRim-jT63ju5dPEXaaouI",
  authDomain: "react-concept-bbb1a.firebaseapp.com",
  projectId: "react-concept-bbb1a",
  storageBucket: "react-concept-bbb1a.appspot.com",
  messagingSenderId: "894315132098",
  appId: "1:894315132098:web:e3dbcf3c75cd6b5a16b75b",
  measurementId: "G-YBHLHQW1M6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);