import React from "react";
import Button from "./Button";
import headerImage from "../assets/header.jpg"; // Adjust the path as necessary

const Header = () => {
  return (
    <header
      className="min-h-screen bg-no-repeat bg-cover flex flex-col justify-end gap-20 p-10 text-text font-header "
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <div className="flex flex-col  tracking-widest w-screen   ">
        <div className="hero-right  lg:w-1/3 w-1/2  font-medium  ">
          <h1 className="text-3xl max-sm:text-lg leading-10	max-sm:mt-10    ">
            BROWS TRENDS GAMING PRODUCTS
          </h1>
          <h1 className="text-l   max-sm:text-sm  my-4">
            SEARCH YOUR DESIRED PIECES
          </h1>

          <Button text="SEARCH PRODUCTS" link="/Products" />
        </div>
      </div>

      <div className="  flex flex-col items-end tracking-wider font-medium ">
        <div className="   lg:w-1/3 w-1/2     ">
          <h1 className="text-3xl max-sm:text-lg  leading-10"> WHO WE ARE</h1>
          <h1 className="text-l max-sm:text-sm my-4  ">OUR JOURNEY </h1>
          <Button text="DISCOVER US" link="/admin" />
        </div>
      </div>
    </header>
  );
};

//

export default Header;
