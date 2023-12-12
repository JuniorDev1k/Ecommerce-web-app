import React, { useState } from "react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [derror, setDerror] = useState(false);
  const [user, setUser] = useState(null);
  const handlsubmit = async (e) => {
    e.preventDefault();
    const userCredential = await signInWithEmailAndPassword(
      Auth,
      email,
      password
    );
    // Signed In
    const user = userCredential.user;
    setUser(user);
    navigate("/");

    try {
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
          <input
            type="Email"
            placeholder="Enter your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="*****"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit"> LogIn </button>

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
