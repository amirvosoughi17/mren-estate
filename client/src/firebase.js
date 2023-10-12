// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-729b0.firebaseapp.com",
  projectId: "mern-estate-729b0",
  storageBucket: "mern-estate-729b0.appspot.com",
  messagingSenderId: "513716378414",
  appId: "1:513716378414:web:e5ee4ec8a3e7b26e7878bf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);