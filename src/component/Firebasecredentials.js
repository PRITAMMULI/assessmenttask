// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUzshBROeMzoSE2uOtWImkJyESNtO2Iko",
  authDomain: "pritamassessment.firebaseapp.com",
  projectId: "pritamassessment",
  storageBucket: "pritamassessment.appspot.com",
  messagingSenderId: "428146366024",
  appId: "1:428146366024:web:545160029cbed2ac5faa7d",
  measurementId: "G-TEFV2N8ML8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const firestore = getFirestore(app)
const db = getFirestore(app)

export {getFirestore, db} 