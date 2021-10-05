import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD47VDn8nckXxU16fE3J3HV8Cp39BSp8Ng",
  authDomain: "my-clones.firebaseapp.com",
  projectId: "my-clones",
  storageBucket: "my-clones.appspot.com",
  messagingSenderId: "638253212770",
  appId: "1:638253212770:web:f6473535745e0753341d3b",
  measurementId: "G-KFGPQ387D7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
