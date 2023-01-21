// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa_FsunOt7vv-HLGjG-htlIrE3kZ6oEN8",
  authDomain: "tacchat-51648.firebaseapp.com",
  projectId: "tacchat-51648",
  storageBucket: "tacchat-51648.appspot.com",
  messagingSenderId: "1021253005864",
  appId: "1:1021253005864:web:59baf37a14a7a3e324bb1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)