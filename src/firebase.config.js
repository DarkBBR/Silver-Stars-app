import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyCb5rwO8VmCdp7FBRXcfAzPYFasK3HEQFI",
  authDomain: "silverstars-7e3cf.firebaseapp.com",
  projectId: "silverstars-7e3cf",
  storageBucket: "silverstars-7e3cf.appspot.com",
  messagingSenderId: "817253987373",
  appId: "1:817253987373:web:40591b61912fb3b77434a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app