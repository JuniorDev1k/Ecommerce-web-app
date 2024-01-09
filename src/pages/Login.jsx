import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from "../config/firebase";
import { Container } from "postcss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [derror, setDerror] = useState(false);
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  // const handlsubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       Auth,
  //       email,
  //       password
  //     );
  //     console.log(`email : ${email} passowd : ${password}`);
  //     const user = userCredential.user;
  //     setUser(user);
  //     Navigate("/Products");

  //     // Signed In
  //   } catch (error) {
  //     setDerror(true);
  //   }
  // };
  // const signOutuser = async () => {
  //   await signOut(Auth);
  // };
  return (
    <>
      <div className="login p-10 h-screen flex items-center justify-center flex-col text-red-700 ">
        <div className="border-2 border-white p-4 w-1/2  flex flex-col items-center  ">
          <h1 className="text-2xl text-white text-center mb-10">
            Login in to Gamevabe
          </h1>
          <form action="" className="w-3/4">
            <div className="flex flex-col gap-4 ">
              <input
                className="p-2"
                type="text"
                name=""
                id=""
                placeholder="Username"
              />
              <input
                className="p-2"
                type="text"
                name=""
                id=""
                placeholder="Password"
              />
            </div>
            <div className="flex m-10">
              <p>-------------</p>
              <p>or</p>
              <p>-------------</p>
            </div>
            <input
              className="p-2"
              type="text"
              placeholder="Continue with Google"
            />
            <i>icon</i>
          </form>
          <div className="mt-40">
            <p> Dont't have a Shopping account </p>
            <button>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
