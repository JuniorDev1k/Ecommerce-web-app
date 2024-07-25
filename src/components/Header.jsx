import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header
      className="min-h-screen bg-no-repeat bg-cover flex flex-col justify-end gap-20 p-10 text-text font-header "
      style={{ backgroundImage: 'URL("Assets/Header.jpg")' }}
    >
      <div className="flex flex-col tracking-widest w-screen">
        <div className="hero-right  lg:w-1/3 w-1/2   ">
          <h1 className="text-3xl max-sm:text-lg leading-10	max-sm:mt-10  font-bold ">
            BROWS TRENDS GAMING PRODUCTS
          </h1>
          <h1 className="text-l   max-sm:text-sm font-semibold ">
            SEARCH YOUR DESIRED PIECES
          </h1>
          {/* <Button button="NAVIGATE" /> */}
          {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            
          </button> */}
          <Button />
        </div>
      </div>

      <div className="  flex flex-col items-end tracking-wider ">
        <div className="   lg:w-1/3 w-1/2  ">
          <h1 className="text-3xl max-sm:text-lg font-bold "> WHO WE ARE</h1>
          <h1 className="text-l max-sm:text-sm  font-semibold ">
            {" "}
            DISCOVER US{" "}
          </h1>
          {/* <Button button="OUR STORY" /> */}
          {/* <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">
            Responsive
          </button> */}
          <Button />
        </div>
      </div>
    </header>
  );
};

//

export default Header;
