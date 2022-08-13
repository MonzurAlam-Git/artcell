// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpediTY7puFhK8ZlqbUobKsg4Et_qmrJM",
    authDomain: "artcellism-ca64c.firebaseapp.com",
    projectId: "artcellism-ca64c",
    storageBucket: "artcellism-ca64c.appspot.com",
    messagingSenderId: "50179517024",
    appId: "1:50179517024:web:d5e7678e55fdacb9f3f105"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;