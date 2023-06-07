import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTLYNC_LSiZrWYMtzQjvphfLiVV5wyCqI",
  authDomain: "doordarshan-1959.firebaseapp.com",
  projectId: "doordarshan-1959",
  storageBucket: "doordarshan-1959.appspot.com",
  messagingSenderId: "318607081983",
  appId: "1:318607081983:web:63a617f53b6253cccda7ca"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
