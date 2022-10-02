// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from  'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABnFY9rweAcvdyQJR3XDrTgwqWk9Zykjw",
  authDomain: "react-curso-fb-1528c.firebaseapp.com",
  projectId: "react-curso-fb-1528c",
  storageBucket: "react-curso-fb-1528c.appspot.com",
  messagingSenderId: "125574126213",
  appId: "1:125574126213:web:8fe8a227d393f8a9dde7ec"
};

// Initialize Firebase
export const FireBaseApp  = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FireBaseApp );
export const FireBaseDB   = getFirestore(FireBaseApp);