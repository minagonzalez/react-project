import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBaA7v6zWK_8aGSyrR9V9mvpd9qiNveJhI",
  authDomain: "proyecto-react-coder-e30e6.firebaseapp.com",
  projectId: "proyecto-react-coder-e30e6",
  storageBucket: "proyecto-react-coder-e30e6.appspot.com",
  messagingSenderId: "1013462798812",
  appId: "1:1013462798812:web:448b08374dfde4cdc8bf19"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);