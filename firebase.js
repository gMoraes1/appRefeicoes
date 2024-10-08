import {initializeApp} from "firebase/app";
import{getFirestore}from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBdNP3vkowk55Rj6FbuOe3bierYMyS7ieQ",
    authDomain: "refeicaoapp-7b460.firebaseapp.com",
    projectId: "refeicaoapp-7b460",
    storageBucket: "refeicaoapp-7b460.appspot.com",
    messagingSenderId: "154187940018",
    appId: "1:154187940018:web:25e933cbf3903baa6149ab"
  };

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);