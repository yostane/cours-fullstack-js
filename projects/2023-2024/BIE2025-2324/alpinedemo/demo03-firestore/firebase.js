// Import the functions you need from the SDKs you need
// CDN imports https://firebase.google.com/docs/web/alt-setup?hl=fr
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-firestore-lite.js";

import { firebaseConfig } from "./firebase-config.js";
/* create a firebase-config.js in the same folder with this content (replace with your app information)
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
*/

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

window.authenticateUserWithFirebase = async function (email, password) {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

function getCollection(email) {
  return collection(db, `users-${email}`);
}

window.addFbItem = async function (email, item) {
  const docRef = await addDoc(getCollection(email), item);
};

window.getFbItems = async function (email) {
  const querySnapshot = await getDocs(getCollection(email));
  const items = [];
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(item);
  });
  return items;
};

window.deleteFbItem = async function (email, id) {
  const docRef = doc(getCollection(email), id);
  await deleteDoc(docRef);
};
