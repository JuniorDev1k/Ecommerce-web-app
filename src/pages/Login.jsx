import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";

const Login = () => {
  // user inputs values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // error hadnling + loading for userExperience
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  // login fucntion from context
  const { SigniWithEmail, currentuser, SignWithGoogle } = useAuth();

  // navigation link

  const Navigate = useNavigate();

  const handlsubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("processing .....");
      await SigniWithEmail(email, password);
      setLoading(true);
      Navigate("/");
    } catch (error) {
      console.log(`error occured : ${error}`);
      setLoading(false);
      setErr("Wrong Email or Password");
      return;
    }
  };
  const Google = async () => {
    try {
      await SignWithGoogle();
      console.log("proceccing");
      setLoading(true);
      Navigate("/");
    } catch (err) {
      console.log(`error with google : ${err}`);
      setLoading(false);
      setErr("erorr Google Auth");
    }
  };

  return (
    <>
      <div className="login p-10   flex items-center justify-center flex-col text-red-700 ">
        <div className="border-2 border-white p-4 w-1/2  flex flex-col items-center  ">
          <h1 className="text-2xl text-white text-center mb-10">
            Login in to Gamevabe
          </h1>
          <form onSubmit={handlsubmit} className="w-3/4">
            <div className="flex flex-col gap-4 ">
              <label htmlFor="Emial">Email</label>
              <input
                className="p-2"
                type="Email"
                name=""
                id="Email"
                placeholder="Example@,,,,,.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                className="p-2"
                type="password"
                name=""
                id="passqord"
                placeholder="******"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="bg-white p-2 rounded-2xl mt-4 ml-10   "
              type="submite"
            >
              {" "}
              SingIn{" "}
            </button>
            {err && <h1 className="text-red-600 text-center">{err}</h1>}
          </form>

          <div className="flex m-10">
            <p>-------------</p>
            <p>or</p>
            <p>-------------</p>
          </div>
          <button onClick={Google}>Google</button>

          <div className="mt-10">
            <p> Dont't have a Shopping account </p>
            <button>Sign Up</button>
            {/* redirect to signup */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
