// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import the Auth module
import { getDatabase } from "firebase/database"; // Import the Database module

const firebaseConfig = {
  apiKey: "AIzaSyBVttCJ0zUmjOn3dEtx8dhV6tzeBXp26Lk",
  authDomain: "dtc-hub.firebaseapp.com",
  databaseURL:
    "https://dtc-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dtc-hub",
  storageBucket: "dtc-hub.appspot.com",
  messagingSenderId: "278036958475",
  appId: "1:278036958475:web:5394e6aaa260e94ccaa60e",
  measurementId: "G-54EW3ZX1GT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize Auth
const database = getDatabase(app); // Initialize Database

export { auth, database };
