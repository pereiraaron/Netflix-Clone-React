import firebase from "firebase";

const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "netflix-b353c.firebaseapp.com",
  projectId: "netflix-b353c",
  storageBucket: "netflix-b353c.appspot.com",
  messagingSenderId: "948914329367",
  appId: "1:948914329367:web:ad2421efa32eb28ae84952",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
