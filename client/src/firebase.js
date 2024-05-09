// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "developer-b5f08.firebaseapp.com",
  projectId: "developer-b5f08",
  storageBucket: "developer-b5f08.appspot.com",
  messagingSenderId: "636908972183",
  appId: "1:636908972183:web:ba57d915947f0aec2ca1d2",
  measurementId: "G-FC54ZB4DP8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);