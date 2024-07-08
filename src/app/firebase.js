import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCptB0JGLBYIa-P7_S0g3aB3xZH65R1ZxA",
  authDomain: "vegaracing-f1.firebaseapp.com",
  projectId: "vegaracing-f1",
  storageBucket: "vegaracing-f1.appspot.com",
  messagingSenderId: "73346571659",
  appId: "1:73346571659:web:1e25436553c55e641d638e",
  measurementId: "G-FM391JTHV1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);