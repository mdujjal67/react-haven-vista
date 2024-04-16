import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqferkgUocxuulSqD9fsUst9GzBFk_jbA",
  authDomain: "haven-vista.firebaseapp.com",
  projectId: "haven-vista",
  storageBucket: "haven-vista.appspot.com",
  messagingSenderId: "807028968175",
  appId: "1:807028968175:web:28cebf6324331168a2a91a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;