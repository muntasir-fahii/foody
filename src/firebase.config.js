import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0EJ14CNwwsAiFiYP6nXJ72doJ1abLrhg",
  authDomain: "restaurentapp-4f684.firebaseapp.com",
  databaseURL: "https://restaurentapp-4f684-default-rtdb.firebaseio.com",
  projectId: "restaurentapp-4f684",
  storageBucket: "restaurentapp-4f684.appspot.com",
  messagingSenderId: "962397632438",
  appId: "1:962397632438:web:639f9c19ebdd47b719b317",
};

const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, fireStore, storage };
