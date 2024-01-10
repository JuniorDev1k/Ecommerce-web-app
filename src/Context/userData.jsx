import React, { Children, useContext } from "react";
import { createContext } from "react";
import { Auth } from "../config/firebase";
// setting up our Auth Context

export const AppContext = createContext({});
//   -- Custome hook for Authuntication context
export const useAuth = () => {
  return useContext(AppContext);
};
const AuthContext = (children) => {
  const [currentuser, setCurrentuser] = userState();
  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  Auth.onAuthStateChanged((user) => {
    //Setting the user
    setCurrentuser(user);
  });
  const value = {
    currentuser,
    SignUp,
  };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
};
export default AuthContext;
