import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvb8SZT13iydHhtw3X8U4ADqQAj1UkozA",
  authDomain: "fb-crud-react-a22ab.firebaseapp.com",
  projectId: "fb-crud-react-a22ab",
  storageBucket: "fb-crud-react-a22ab.appspot.com",
  messagingSenderId: "335761663450",
  appId: "1:335761663450:web:1aaec3ba8c2a6b60b34ce3"
};
// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
