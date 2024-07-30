import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";
import Logo from "./Logo";
import { Links } from "../data";

//  Navigation Links
const Nav = () => {
  // toggle functionality for small screen
  const [toggle, setToggle] = useState(false); // toggle state for responsive design
  const { currentuser, Logout } = useAuth(); // userState: to display username + email on top navbar

  const signout = async () => {
    try {
      await Logout();
      console.log("u r logged out");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className=" bg-transparent p-5 flex justify-between absolute top-0 left-0 right-0 ">
      <Logo className="" />
      {/* our Navigation Links */}
      <ul className="sm:flex justify-center hidden gap-10 flex-1 text-2xl text-text text-l items-center tracking-wider ">
        {Links.map((i) => {
          const { id, Lname, href } = i;
          return (
            <li
              className=" hover:text-secondary-0 ease-out duration-300 p-1 font-navLinks   "
              key={id}
            >
              <Link to={href}>{Lname}</Link>
            </li>
          );
        })}
      </ul>
      {toggle && (
        <ul className="small-screen-links absolute left-0 top-0 w-40 h-screen pt-14   flex flex-col gap-2 items-center bg-transparent/75 md:hidden">
          {Links.map((i) => {
            const { id, Lname, href } = i;
            return (
              <div className=" text-center h-10  bg-black  hover:border-l-2  border-secondary ease-in-out duration-300 w-full ">
                <li className=" text-text  hover:text-secondary-0" key={id}>
                  <Link to={href}>{Lname}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      )}

      {/* Conditionall rendering user profile name and picture ? Logged : Login / Singup */}

      <div className="nav-log flex text-text gap-8 justify-between font-subheader  -tracking-tighter text-lg ">
        {currentuser?.email || currentuser?.displayName ? (
          <>
            <div className="flex flex-col  ">
              <p className="text-sm">
                {" "}
                Wlecome : {currentuser?.email.slice(0, 12)}...{" "}
              </p>

              <p>
                {" "}
                {currentuser?.displayName &&
                  currentuser?.displayName.slice(0, 10)}
                ...{" "}
              </p>
            </div>

            <button
              className="bg-secondary-0 rounded-md p-2 text-black  "
              onClick={signout}
            >
              {" "}
              Log Out
            </button>
            <button onClick={() => setToggle(!toggle)} className="md:hidden ">
              X
            </button>
          </>
        ) : (
          <>
            <div>
              <Link to="/Login">Login</Link>
            </div>
            <div className="h-3/4 bg-secondary-0 w-1  "></div>
            <div>
              <Link to="/signup">Signup</Link>
            </div>
            <button onClick={() => setToggle(!toggle)} className="lg:hidden">
              X
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
