import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";
import { Link } from "react-router-dom";
import goolgIcon from "../../Assets/Icons/google-color-icon.svg";

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
      <div className="auth flex justify-center items-center   h-screen p-4  bg-[#FF0000]/40">
        <div className="signup-container flex flex-col  p-10 gap-2 rounded-lg items-center w-full sm:w-3/4  md:w-1/2   ">
          <h1 className="mb-4 text-2xl font-header text-text font-medium mt-12 sm:mt-4 ">
            Login to our Website
          </h1>
          <form
            className="flex flex-col w-full font-robotto gap-6 min-w-24  "
            onSubmit={handlsubmit}
          >
            {err && (
              <div role="alert" className="alert alert-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{err}.</span>
              </div>
            )}
            <div className="">
              <label
                className="font-semibold font-robotto text-text mb-2"
                htmlFor="email"
              >
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
              <label
                className="font-semibold font-robotto text-text mb-2"
                htmlFor="password"
              >
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
              className="bg-secondary-0 rounded-md p-2  hover:text-secondary-0 text-lg text-text hover:bg-black ease-in duration-300  "
            >
              Sign in
            </button>
          </form>
          <div className="w-full">
            <h1 className="text-center mt-2 mb-2 text-lg">OR</h1>
            <button
              onClick={Google}
              className="bg-black text-secondary-0 rounded-md p-4 w-full flex gap-4  items-center font-Nunito font-medium -tracking-tighter md:text-xl hover:text-black hover:bg-secondary-0 ease-in duration-300 "
            >
              <img
                src={goolgIcon}
                width="25rem"
                height="25rem"
                alt="Google icon"
              />
              <span className="ml-2">Sign in With Google</span>
            </button>
          </div>
          <p className="mt-10 font-robotto  text-text">
            Don't have an account ?
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
