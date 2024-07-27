import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Logo from "./Logo";
import Hexagone from "./Hexagone";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section
        id="Services"
        className="services-container min-h-screen flex p-16 gap-10 max-sm:flex-col max-sm:items-center bg-[#070101] "
      >
        <div
          className="felx w-1/2  font-poppins font-semibold "
          data-aos="zoom-in"
        >
          <div className=" a2  flex justify-center gap-6  max-sm:flex-col ">
            <Hexagone hex="HIGHT QUALITY PRODUCTS" />
            <Hexagone hex="DELIVERY" />
          </div>
          <div className="a2 flex justify-center gap-16 md:items-center max-md:gap-6 max-sm:flex-col">
            <Hexagone hex="CUSTOM STOR FUNCTIONALITIES" />
            <div className="border-b-4 border-secondary-0 rounded pb-1 max-lg:hidden  ">
              <Logo />
            </div>
            <Hexagone hex="SHIPPING" />
          </div>
          <div className="a2 flex justify-center gap-6 max-md:gap-6 max-sm:flex-col">
            <Hexagone hex="RETURNS" />
            <Hexagone hex="VISUAL INDENTITY" />
          </div>
        </div>
        {/* left part  ---------------------------------------------------*/}
        <div className="w-1/2 flex flex-col items-center justify-center pb-20 font-header  ">
          <h1 className="servicesTtitle  text-4xl mt-2 mb-4 font-bold -tracking-tighter ">
            OUR SERVICES
          </h1>
          <h3 className="text-white   text-2xl font-semibold -tracking-tight ">
            An Overview of what we offer to our clients!
          </h3>
        </div>
      </section>
    </>
  );
};

export default Services;
