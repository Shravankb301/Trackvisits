import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore,  } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtlg4eGTuNJsOm5ROMu3p3O-BPjK37uyM",
    authDomain: "heatscope-73958.firebaseapp.com",
    projectId: "heatscope-73958",
    storageBucket: "heatscope-73958.appspot.com",
    messagingSenderId: "570259018747",
    appId: "1:570259018747:web:a682906e6e269c7e34315e",
    measurementId: "G-0XGQGNYHTZ"
  };

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);

export { app, db, auth }