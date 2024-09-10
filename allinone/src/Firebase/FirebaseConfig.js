// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"

// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyDOnNz2NgQ8f4Dbx_cJSO4psNV2KUKLXS8",
//   authDomain: "project1-d8116.firebaseapp.com",
//   projectId: "project1-d8116",
//   storageBucket: "project1-d8116.appspot.com",
//   messagingSenderId: "1058575823274",
//   appId: "1:1058575823274:web:c7b3a2ecdadbce1d197bd3",
//   measurementId: "G-72HSJT8Q9R"
// };


// const app = initializeApp(firebaseConfig);
// export const firestore = firebase.firestore();
// export const auth = getAuth(app)

// FirebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'; // Import Firebase Storage

const firebaseConfig = {
  apiKey: "AIzaSyDOnNz2NgQ8f4Dbx_cJSO4psNV2KUKLXS8",
  authDomain: "project1-d8116.firebaseapp.com",
  projectId: "project1-d8116",
  storageBucket: "project1-d8116.appspot.com",
  messagingSenderId: "1058575823274",
  appId: "1:1058575823274:web:c7b3a2ecdadbce1d197bd3",
  measurementId: "G-72HSJT8Q9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { auth, firestore, storage };
