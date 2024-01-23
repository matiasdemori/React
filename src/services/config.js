import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
    authDomain: "proyectofinalcoder-cb161.firebaseapp.com",
    projectId: "proyectofinalcoder-cb161",
    storageBucket: "proyectofinalcoder-cb161.appspot.com",
    messagingSenderId: "72928912933",
    appId: "1:72928912933:web:03c05e590421bbc5ebc1cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);