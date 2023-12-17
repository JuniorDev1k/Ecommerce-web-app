import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { Links } from "../data";

const Nav = () => {
  const { toggle, setToggle } = useState(false);
  return (
    <nav>
      <Logo />
      {/* our Navigation Links */}
      <ul className=" ">
        {Links.map((i) => {
          const { id, Lname, href } = i;
          return (
            <li key={id}>
              <Link to={href}>{Lname}</Link>
            </li>
          );
        })}
      </ul>
      {/* Conditionall rendering user profile name and picture ? Logged : Login / Singup */}
      <div className="nav-log">
        <div>
          <Link to="/Login">Login</Link>
        </div>
        <div></div>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
