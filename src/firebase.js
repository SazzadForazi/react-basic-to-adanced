// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh8Cuiqluutug0AUNzGTFKX35_NLsa8JE",
  authDomain: "react-first-project-95873.firebaseapp.com",
  projectId: "react-first-project-95873",
  storageBucket: "react-first-project-95873.firebasestorage.app",
  messagingSenderId: "209901717660",
  appId: "1:209901717660:web:cdecbd3d177e6e237c0559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
