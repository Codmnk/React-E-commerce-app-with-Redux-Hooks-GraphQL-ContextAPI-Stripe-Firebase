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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const cratedAt = new Date();
    console.log(displayName, email, cratedAt, additionalData);
    try {
      await userRef.set({
        displayName,
        email,
        cratedAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
