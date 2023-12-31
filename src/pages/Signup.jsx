import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Auth, GoolgSign, db } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  // use usercredentiel for getting the data of user
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [custmer, setCustmer] = useState("");
  const Navigate = useNavigate();
  const adduserTocollection = async (userID) => {
    await setDoc(doc(db, "Users", userID), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
    });
  };

  const SignFirbase = async () => {
    try {
      await createUserWithEmailAndPassword(Auth, email, password);

      const user = Auth.currentUser;
      !user
        ? console.log(`shit happend bro there s no user bro`)
        : console.log(
            `the fucking user is : ${user & user.displayName} and the id : ${
              user.uid
            }  `
          );
      Navigate("/Products");

      setCustmer(user);
      //add the user to firesotre database
      await adduserTocollection(user.uid);
    } catch (err) {
      console.error(err);
    }
  };

  const SignInWithGoogle = async () => {
    await signInWithPopup(Auth, GoolgSign);
  };
  const Logout = async () => {
    await signOut(Auth);
  };
  return (
    <>
      <input
        type="Email"
        placeholder="example@gmai.com"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="Password"
        placeholder="*******"
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button onClick={SignFirbase}>singup</button>
      <div>
        <h3>or</h3>
        <button onClick={SignInWithGoogle}>Sign in With Goolg</button>
      </div>
      <button onClick={Logout}>Logout</button>
      <div className="profile-dettils">
        <h3>{}</h3>
      </div>
    </>
  );
};

export default Signup;
