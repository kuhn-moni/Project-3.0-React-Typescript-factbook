// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDto3rsKvOb7Ei_A__mP2c7CDEIuB9IwOc",
  authDomain: "react-typescript-factbook.firebaseapp.com",
  projectId: "react-typescript-factbook",
  storageBucket: "react-typescript-factbook.appspot.com",
  messagingSenderId: "885217570880",
  appId: "1:885217570880:web:b938dd76592979aa3e2fa5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
