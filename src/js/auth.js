import { ref, set } from "firebase/database";
import { auth, database } from "./firebaseConfig"; 
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

// Register function with default profile data
export const registerUser = (email, password, userDetails) => {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      const user = userCredential.user;
      const userData = {
        ...userDetails,
        bio: "...",
        email: userDetails.email,
        school: userDetails.school,
        username: `${userDetails.firstName} ${userDetails.lastName}`,
        followers: {},
        following: {},
        profilePic: "https://via.placeholder.com/150", // Default profile picture
      };

      // Set user details in the Realtime Database using the new syntax
      const userRef = ref(database, `users/${user.uid}`);
      return set(userRef, userData);
    }
  );
};

// Login function
export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Forgot Password
export const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw new Error(error.message);
  }
};

// Logout function
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};
