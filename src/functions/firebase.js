import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyABT1R30qcXHrDwy9movGc9lceb7gL_W6g",
  authDomain: "ifriky-5fb40.firebaseapp.com",
  projectId: "ifriky-5fb40",
  storageBucket: "ifriky-5fb40.appspot.com",
  messagingSenderId: "561234511338",
  appId: "1:561234511338:web:99d004eb1eacba168c9e93",
  measurementId: "G-1377JLHXVM"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db, auth}