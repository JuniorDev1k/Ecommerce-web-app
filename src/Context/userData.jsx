import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../config/firebase";

// creating conext
export const AuthContext = createContext();
// setting up our Auth Context.
export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(null);
  const Navigate = useNavigate();
  // create user fucntion for sign up
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // track user state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      //Setting the user
      setCurrentuser(user);
      ("");
    });

    return unsubscribe;
  }, []);

  // logout function
  const Logout = () => {
    return signOut(auth);
  };
  // login fucntion ( with email & password )

  const SigniWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // login fucntion ( With Google )-----------------------

  const SignWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const value = {
    currentuser,
    CreateUser,
    Logout,
    SigniWithEmail,
    SignWithGoogle,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

// here we setup our auth functions liek ( login, signup, logout, users data , usersAuthState)
//  and export them to use in their components
