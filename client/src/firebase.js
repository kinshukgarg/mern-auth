// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-7dd2d.firebaseapp.com",
  projectId: "mern-auth-7dd2d",
  storageBucket: "mern-auth-7dd2d.appspot.com",
  messagingSenderId: "476189406052",
  appId: "1:476189406052:web:62f52b79cb394b5b4f8071"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);