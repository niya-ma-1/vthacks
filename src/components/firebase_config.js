// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbIiduqN68vR68fChszeFC2NN3EVkGhpM",
  authDomain: "vthacks9.firebaseapp.com",
  projectId: "vthacks9",
  storageBucket: "vthacks9.appspot.com",
  messagingSenderId: "143014655756",
  appId: "1:143014655756:web:1893dcdd1846ff44babb29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();