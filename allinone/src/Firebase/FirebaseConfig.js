import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyDOnNz2NgQ8f4Dbx_cJSO4psNV2KUKLXS8",
  authDomain: "project1-d8116.firebaseapp.com",
  projectId: "project1-d8116",
  storageBucket: "project1-d8116.appspot.com",
  messagingSenderId: "1058575823274",
  appId: "1:1058575823274:web:c7b3a2ecdadbce1d197bd3",
  measurementId: "G-72HSJT8Q9R"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)