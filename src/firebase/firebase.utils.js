import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBqyB_QEe6Uj0BXDRS6OpgrISdP0U_fEpw",
  authDomain: "oreo-e0436.firebaseapp.com",
  projectId: "oreo-e0436",
  storageBucket: "oreo-e0436.appspot.com",
  messagingSenderId: "518701931556",
  appId: "1:518701931556:web:3488def6c2040d31e18cb1",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export const createUserProfileDocument = async (userAuth, additionalData) => {
//   if (!userAuth) return;

//   const userRef = firestore.doc(`users/${userAuth.uid}`);

//   const snapShot = await userRef.get();

//   if (!snapShot.exists) {
//     const { displayName, email } = userAuth;
//     const createdAt = new Date();
//     try {
//       await userRef.set({
//         displayName,
//         email,
//         createdAt,
//         ...additionalData
//       });
//     } catch (error) {
//       console.log("error creating user", error.message);
//     }
//   }

//   return userRef;
// };

export default firebase;
