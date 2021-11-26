// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgOkSnKwb6t8ZfqWdm3SqnjU1AbXvyjsM",
  authDomain: "bellchan-react-basic.firebaseapp.com",
  projectId: "bellchan-react-basic",
  storageBucket: "bellchan-react-basic.appspot.com",
  messagingSenderId: "998647431156",
  appId: "1:998647431156:web:51d923c895afad617b03a1",
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore();
