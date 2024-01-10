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
      <div className="flex justify-center items-center h-screen   ">
        <div className="flex flex-col border-2 border-red-500 p-10  gap-2 items-center ">
          <label htmlFor="email">Email</label>
          <input
            type="Email"
            id="email"
            placeholder="example@gmai.com"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="Password"
            id="password"
            placeholder="*******"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className="bg-red-700 rounded p-2 hover:bg-slate-600 "
            onClick={SignFirbase}
          >
            singup
          </button>
          <div>
            <h3 className="text-center mb-4 "> or</h3>
            <button
              className="bg-red-700 rounded p-2  hover:bg-slate-600"
              onClick={SignInWithGoogle}
            >
              Sign in With Goolg
            </button>
          </div>
          <button
            className="bg-red-700 rounded p-2  hover:bg-slate-600"
            onClick={Logout}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Signup;
