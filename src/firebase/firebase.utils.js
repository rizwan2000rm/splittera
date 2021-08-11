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
export const db = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = db.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const getBills = (email) => {
  return db.collection("bills").where("userEmails", "array-contains", email);
};

export const addBill = async (vendor, amount, userEmails, authUser) => {
  const splitAmount = amount / (userEmails.length + 1);
  if (authUser) {
    return db.collection("bills").add({
      createdAt: firebase.firestore.Timestamp.now(),
      name: vendor,
      creatorEmail: authUser.email,
      creatorId: authUser.uid,
      totalAmount: amount,
      userEmails: [...userEmails, authUser.email],
      users: [...userEmails, authUser.email].map((userEmail) => ({
        amount: splitAmount,
        email: userEmail,
        paid: false,
      })),
    });
  }
};

export const getBill = async (billId) => {
  console.log(billId);
  return db.collection("bills").doc(billId).get();
};

export const payBill = async (updatedUsers, billId) => {
  return db.collection("bills").doc(billId).update({
    users: updatedUsers,
  });
};

export const declineBill = async (billId, authUser, updatedUsers) => {
  return db
    .collection("bills")
    .doc(billId)
    .update({
      userEmails: firebase.firestore.FieldValue.arrayRemove(authUser.email),
      users: updatedUsers,
    });
};

export const getUserById = async (creatorId) => {
  return db.collection("users").doc(creatorId).get();
};

export const getUsersByEmail = (...emails) => {
  return db.collection("users").where("email", "in", [...emails]);
};

export default firebase;
