import React, { useState } from "react";

import { useAuth } from "../Context/userData";

import { Link } from "react-router-dom";
import CompletSignIp from "../components/CompletSignIp";

// import signUP from context

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

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
      if (currentuser) {
        addUsertoDB(currentuser);
        Navigate("/");
      }
      console.log("its not working");
    }
  };

  return (
    // we better write less html code below
    <>
      {currentuser ? (
        <CompletSignIp />
      ) : (
        <div className="flex justify-center items-center  h-screen  p-4  ">
          <div className="signup-container flex flex-col border-2 p-10 gap-2 rounded-lg items-center w-full sm:w-3/4  md:w-1/2   ">
            <h1 className="mb-10 text-2xl font-robotto  ">
              Sign Up to our Website
            </h1>
            <form
              className="flex flex-col w-full font-robotto gap-6 min-w-24  "
              onSubmit={SignFirbase}
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
                SignUp
              </button>
            </form>
            <div className="w-full">
              <h1 className="text-center mt-2 mb-2">OR</h1>
              <button className="bg-black text-red-500 rounded-md p-2 w-full   hover:text-black hover:bg-red-500 ease-in duration-300 ">
                SignUp With Google
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
