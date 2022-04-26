// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsnyWsIamoqjTMLl1MYpdTMfbaDbtyLfA",
  authDomain: "twit-7f515.firebaseapp.com",
  projectId: "twit-7f515",
  storageBucket: "twit-7f515.appspot.com",
  messagingSenderId: "118098122991",
  appId: "1:118098122991:web:3c37cb061df0b795daa31a",
  measurementId: "G-D4R5F4Z3J6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
