import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";
import { Link } from "react-router-dom";

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
      <div className="flex justify-center items-center  h-screen  p-4  ">
        <div className="signup-container flex flex-col border-2 p-10 gap-2 rounded-lg items-center w-full sm:w-3/4  md:w-1/2   ">
          <h1 className="mb-10 text-2xl font-robotto  ">
            Login to our Website
          </h1>
          <form
            className="flex flex-col w-full font-robotto gap-6 min-w-24  "
            onSubmit={handlsubmit}
          >
            {err}
            <div className="">
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 rounded-md w-full  "
                type="Email"
                id="email"
                placeholder="example@gmai.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                className="p-2 rounded-md w-full  "
                type="Password"
                id="password"
                placeholder="*******"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              hidden={loading}
              type="submit"
              className="bg-red-500 rounded-md p-2  hover:text-red-500 text-lg  hover:bg-black ease-in duration-300  "
            >
              Sign in
            </button>
          </form>
          <div className="w-full">
            <h1 className="text-center mt-2 mb-2">OR</h1>
            <button
              onClick={Google}
              className="bg-black text-red-500 rounded-md p-2 w-full   hover:text-black hover:bg-red-500 ease-in duration-300 "
            >
              Sign in With Google
            </button>
          </div>
          <p className="mt-10 font-robotto  ">
            Dont have an account ?
            <Link
              className=" font-bold underline decoration-solid hover:text-black/30 ease-in duration-100 ml-2  "
              to="/signup"
            >
              Get one
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
