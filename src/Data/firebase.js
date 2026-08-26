import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBxiZtsVECsOcg61l6IAjtmvuI_k5sZEbs",
    authDomain: "boxers-gtl-proyecto.firebaseapp.com",
    projectId: "boxers-gtl-proyecto",
    storageBucket: "boxers-gtl-proyecto.firebasestorage.app",
    messagingSenderId: "291583569623",
    appId: "1:291583569623:web:bd8c2de514a158bdce8a92",
    measurementId: "G-DTCZLCY702"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);