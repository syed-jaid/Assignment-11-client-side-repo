// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGNur6asZsQlzSMBHBTj8bKY9F35n8LM4",
    authDomain: "assignment-11-auth-c0a3d.firebaseapp.com",
    projectId: "assignment-11-auth-c0a3d",
    storageBucket: "assignment-11-auth-c0a3d.appspot.com",
    messagingSenderId: "910477490452",
    appId: "1:910477490452:web:d849619abfcca3ac5eaa01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;