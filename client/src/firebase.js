// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-10846.firebaseapp.com",
  projectId: "mern-auth-10846",
  storageBucket: "mern-auth-10846.appspot.com",
  messagingSenderId: "707831767660",
  appId: "1:707831767660:web:9f74f25f9238493d0dee49"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);