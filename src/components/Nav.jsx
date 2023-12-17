import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Links } from "../data";

const Nav = () => {
  const { toggle, setToggle } = useState(false);
  return (
    <nav className=" bg-background p-5 flex justify-between ">
      <Logo className=" text font-robotto " />
      {/* our Navigation Links */}
      <ul className="flex justify-center gap-10  flex-1  text-text font-robotto text-l items-center  tracking-wider   ">
        {Links.map((i) => {
          const { id, Lname, href } = i;
          return (
            <li className=" " key={id}>
              <Link to={href}>{Lname}</Link>
            </li>
          );
        })}
      </ul>
      {/* Conditionall rendering user profile name and picture ? Logged : Login / Singup */}
      <div className="nav-log flex text-text gap-2  ">
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div className="h-3/4 bg-secondary w-1 rounded "></div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
