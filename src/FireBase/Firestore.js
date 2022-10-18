// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdG128JDwj869DvbIw3uHjC4xHybbzwCQ",
  authDomain: "finalreact-41f55.firebaseapp.com",
  projectId: "finalreact-41f55",
  storageBucket: "finalreact-41f55.appspot.com",
  messagingSenderId: "779382240172",
  appId: "1:779382240172:web:df86df3dbc207aed4d0009",
  measurementId: "G-006W18VWPZ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
getAnalytics();