// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-site-c248b.firebaseapp.com",
  projectId: "mern-blog-site-c248b",
  storageBucket: "mern-blog-site-c248b.appspot.com",
  messagingSenderId: "155895983343",
  appId: "1:155895983343:web:4695e5b57ec36b17753f1a",
  measurementId: "G-H6Y2SNRC1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
