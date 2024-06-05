import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGOEsbOvCnmrFyEaQeh3JMuOo6HjrPXRA",
  authDomain: "chat-app-29349.firebaseapp.com",
  projectId: "chat-app-29349",
  storageBucket: "chat-app-29349.appspot.com",
  messagingSenderId: "4529785736",
  appId: "1:4529785736:web:2d260f225a3876b76f483d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore();
