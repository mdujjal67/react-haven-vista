import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITEAPIKEY,
  authDomain: import.meta.env.VITEAUTHDOMAIN,
  projectId: import.meta.env.VITEPROJECTID,
  storageBucket: import.meta.env.VITESTORAGEBUCKET,
  messagingSenderId: import.meta.env.VITEMESSAGINGSENDERID,
  appId: import.meta.env.VITEAPPID
};

const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;