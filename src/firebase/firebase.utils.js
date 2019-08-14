import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2VQoyUL-Nxg_0sce5mZlrJarhRDT2nBM",
  authDomain: "crwn-db-768d9.firebaseapp.com",
  databaseURL: "https://crwn-db-768d9.firebaseio.com",
  projectId: "crwn-db-768d9",
  storageBucket: "",
  messagingSenderId: "25599953616",
  appId: "1:25599953616:web:a02d99205b0cc632"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
