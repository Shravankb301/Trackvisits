// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);