// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, collection, } from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3Gerzi6t8bqfR3gGEOLqRG4Ub7Wl-qCI",
  authDomain: "bulls-and-barber.firebaseapp.com",
  projectId: "bulls-and-barber",
  storageBucket: "bulls-and-barber.appspot.com",
  messagingSenderId: "566410836080",
  appId: "1:566410836080:web:546a6b4cce04b1724e1cb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const pointRef = collection(db,'points');
const provider = new GoogleAuthProvider();
export {pointRef, db, auth, provider}
