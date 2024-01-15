import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";

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
      <div className="flex justify-center items-center h-screen   ">
        <div className="flex flex-col border-2 border-red-500 p-10  gap-2 items-center ">
          <form className="flex flex-col gap-10" onSubmit={SignFirbase}>
            {err}
            <label htmlFor="email">Email</label>
            <input
              className="p-2"
              type="Email"
              id="email"
              placeholder="example@gmai.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
            <input
              className="p-2"
              type="Password"
              id="password"
              placeholder="*******"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              hidden={loading}
              type="submit"
              className="bg-red-700 rounded p-2 hover:bg-slate-600 "
            >
              SignUp
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
