import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Links } from "../data";
//  Navigation Links
const Nav = () => {
  // toggle functionality for small screen
  const [toggle, setToggle] = useState(false);
  console.log(toggle);
  return (
    <nav className=" bg-transparent p-5 flex justify-between absolute top-0 left-0 right-0 ">
      <Logo className=" text font-robotto " />
      {/* our Navigation Links */}
      <ul className="flex justify-center gap-10  flex-1  text-text font-robotto text-l items-center  tracking-wider max-lg:hidden">
        {Links.map((i) => {
          const { id, Lname, href } = i;
          return (
            <li className="" key={id}>
              <Link to={href}>{Lname}</Link>
            </li>
          );
        })}
      </ul>
      {toggle && (
        <ul className="small-screen-links absolute left-0 top-0 w-40 h-screen p-5 flex flex-col gap-8 items-center bg-transparent/75 lg:hidden ">
          {Links.map((i) => {
            const { id, Lname, href } = i;
            return (
              <div className="hover:bg-red-700/30 w-full ">
                <li className=" text-white " key={id}>
                  <Link to={href}>{Lname}</Link>
                </li>
              </div>
            );
          })}
        </ul>
      )}

      {/* Conditionall rendering user profile name and picture ? Logged : Login / Singup */}

      <div className="nav-log flex text-text gap-2  ">
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div className="h-3/4 bg-secondary w-1 rounded "></div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
        <button onClick={() => setToggle(!toggle)} className="lg:hidden">
          X
        </button>
      </div>
    </nav>
  );
};

export default Nav;
