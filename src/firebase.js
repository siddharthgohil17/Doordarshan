import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDv5tCUb6WXdzgTZ54MHOcgA8wWzrJWV8M",
  authDomain: "doordarshan-1959.firebaseapp.com",
  projectId: "doordarshan-1959",
  storageBucket: "doordarshan-1959.appspot.com",
  messagingSenderId: "318607081983",
  appId: "1:318607081983:web:63a617f53b6253cccda7ca"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAYnVDzDbQCvxk3bagiCKh16FR8oHUxPXg",
//   authDomain: "eme2-2b3d2.firebaseapp.com",
//   projectId: "eme2-2b3d2",
//   storageBucket: "eme2-2b3d2.appspot.com",
//   messagingSenderId: "911864812855",
//   appId: "1:911864812855:web:ce86f6fc8d816390b4b6b2"
// };


// Initialize Firebase
const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};
export default db;
