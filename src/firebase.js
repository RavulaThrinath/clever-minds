import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB-Gf1z3294x4Zpqhy8HdtUm9BXpB6xNMQ",
  authDomain: "techlab-it.firebaseapp.com",
  projectId: "techlab-it",
  storageBucket: "techlab-it.appspot.com",
  messagingSenderId: "685287191044",
  appId: "1:685287191044:web:fcc1f68454dfb7194abb51",
  measurementId: "G-B0FC0CX8BQ",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
