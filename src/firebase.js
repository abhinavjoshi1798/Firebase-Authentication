import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCoJC9pqAdkpVH7qCvbqGejIkjIJgGpJs8",
  authDomain: "mykaa-427be.firebaseapp.com",
  projectId: "mykaa-427be",
  storageBucket: "mykaa-427be.appspot.com",
  messagingSenderId: "140553173838",
  appId: "1:140553173838:web:87b3d848861ae694a67c1f",
  measurementId: "G-Y7F7QX87S2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth};