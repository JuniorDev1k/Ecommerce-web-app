import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [derror, setDerror] = useState(false);
  const [user, setUser] = useState(null);
  const Navigate = useNavigate();
  const handlsubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        Auth,
        email,
        password
      );
      console.log(`email : ${email} passowd : ${password}`);
      const user = userCredential.user;
      setUser(user);
      Navigate("/Products");

      // Signed In
    } catch (error) {
      setDerror(true);
    }
  };
  const signOutuser = async () => {
    await signOut(Auth);
  };
  return (
    <>
      {!user ? (
        <form onSubmit={handlsubmit}>
          <h1>Login</h1>
          <label htmlFor="" className="m-10">
            Email
          </label>
          <input
            type="Email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="m-10" htmlFor="">
            Youe passwored
          </label>
          <input
            type="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"> LogIn </button>
          <div>
            <h1>Don't Have an Account ? </h1>
            <button onClick={Navigate("/Signup")}> signup </button>
          </div>

          {derror && <span>Wrong Email or password !!</span>}
        </form>
      ) : (
        <div className="user">
          <h4>Welcommmeeee {user.email} !</h4>
          <button onClick={signOutuser}>Logout</button>
        </div>
      )}
    </>
  );
};

export default Login;
