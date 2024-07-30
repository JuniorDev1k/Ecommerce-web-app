import React, { useState } from "react";

import { useAuth } from "../Context/userData";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CompletSignIp from "../components/CompletSignIp";
import goolgIcon from "../Assets/Icons/google-color-icon.svg";

// import signUP from context

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const Navigate = useNavigate();

  const { CreateUser, currentuser } = useAuth();

  const SignFirbase = async (e) => {
    e.preventDefault();
    try {
      setErr("");
      setLoading(true);
      await CreateUser(email, password);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
      Navigate("/");
    }
  };

  return (
    // we better write less html code below
    <>
      (
      <div className=" auth flex justify-center items-center p-4 h-screen ">
        <div className="signup-container flex flex-col  p-10 gap-2 rounded-lg items-center w-full sm:w-3/4  md:w-1/2   ">
          <h1 className="mb-4 text-2xl font-robotto  mt-12 sm:mt-4  ">
            Sign Up to our Website
          </h1>
          <form
            className="flex flex-col w-full font-robotto gap-6 min-w-24  "
            onSubmit={SignFirbase}
          >
            {err}
            <div className="">
              <label
                className="font-robotto text-text font-medium mb-2"
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
                className="font-robotto text-text font-medium mb-2"
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
              className="bg-secondary-0 rounded-md p-2  hover:text-secondary-0 text-lg  hover:bg-black ease-in duration-300  "
            >
              SignUp
            </button>
          </form>
          <div className="w-full">
            <h1 className="text-center mt-2 mb-2">OR</h1>
            <button className="bg-black text-secondary-0    md:text-xl w-full rounded-md p-4  flex gap-4  items-center font-Nunito font-medium -tracking-tighter  hover:text-black hover:bg-secondary-0 ease-in duration-300 ">
              <img
                src={goolgIcon}
                width="25rem"
                height="25rem"
                alt="Google icon"
              />
              <span>SignUp With Google</span>
            </button>
          </div>
          <p className="mt-10 font-robotto  ">
            Already have an account ?
            <Link
              className=" font-bold underline decoration-solid hover:text-black/30 ease-in duration-100 ml-2  "
              to="/Login"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
      )}
    </>
  );
};

export default Signup;
