import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <header
      className="min-h-screen bg-no-repeat bg-cover flex flex-col justify-end gap-20 p-10 text-text font-robotto "
      style={{ backgroundImage: 'URL("../../Assets/Images/Header.jpg")' }}
    >
      <div className="  backdrop: flex flex-col tracking-widest	  ">
        <div className="hero-right   w-1/3 ">
          <h1 className="text-3xl  leading-10	  ">
            BROWS TRENDS GAMING PRODUCTS
          </h1>
          <h1 className="text-l text-accent ">SEARCH YOUR DESIRED PIECES </h1>
          <Button button="NAVIGATE" />
        </div>
      </div>

      <div className="  flex flex-col items-end tracking-wider ">
        <div className="   w-1/3  ">
          <h1 className="text-3xl"> WHO WE ARE</h1>
          <h1 className="text-l text-accent "> DISCOVER US </h1>
          <Button button="OUR STORY" />
        </div>
      </div>
    </header>
  );
};

//

export default Header;
