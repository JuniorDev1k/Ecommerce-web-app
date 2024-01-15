import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

import { auth } from "../config/firebase";

// setting up our Auth Context.
export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentuser, setCurrentuser] = useState(null);
  const Navigate = useNavigate();

  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
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
    return auth.signOut();
  };

  const value = {
    currentuser,
    CreateUser,
    Logout,
  };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

// here we setup our auth functions liek ( login, signup, logout, users data , usersAuthState)
//  and export them to use in their components
