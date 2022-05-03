
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAHUEWwv8jnsQYvWIc9qDMBh2eIlEhf5qE",
  authDomain: "user-database-getitout.firebaseapp.com",
  projectId: "user-database-getitout",
  storageBucket: "user-database-getitout.appspot.com",
  messagingSenderId: "486686066925",
  appId: "1:486686066925:web:c31f357a3227d55662e4e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)