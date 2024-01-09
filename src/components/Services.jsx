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
      <div className=" services-container min-h-screen">
        <section className="flex p-20 gap-5 max-sm:flex-col max-sm:items-center">
          <div className="felx w-1/2  " data-aos="zoom-in">
            <div className=" a2  flex justify-center gap-6  max-sm:flex-col ">
              <Hexagone hex="HIGHT QUALITY PRODUCTS" />
              <Hexagone hex="HAVE FUN" />
            </div>
            <div className="a2 flex justify-center gap-16 md:items-center max-md:gap-6 max-sm:flex-col">
              <Hexagone hex="CUSTOM STOR FUNCTIONALITIES" />
              <div className="border-b-4 border-red-400 rounded pb-1 max-md:hidden ">
                <Logo />
              </div>
              <Hexagone hex="HAVE FUN" />
            </div>
            <div className="a2 flex justify-center gap-6 max-md:gap-6 max-sm:flex-col">
              <Hexagone hex="HAVE FUN" />
              <Hexagone hex="HAVE FUN" />
            </div>
          </div>
          {/* left part  ---------------------------------------------------*/}
          <div className="flex flex-col w-1/2 justify-between  p-20">
            <h1 className="servicesTtitle  text-3xl mt-2 font-robotto">
              OUR SERVICES
            </h1>
            <div className="trustworthy flex flex-col gap-2 text-lg border-l-4 border-red-800  p-5 font-poppins  ">
              <div className="flex gap-4">
                <h1 className="font-bold text-secondary  "># 1</h1>
                <h1 className="text-text">OUE CLIENTS OUR PRIORITY</h1>
              </div>
              <div className="flex gap-4">
                <h1 className="font-bold text-secondary "># 2</h1>
                <h1 className="text-text">OUE CLIENTS OUR PRIORITY</h1>
              </div>
              <div className="flex gap-4">
                <h1 className="font-bold text-secondary "># 3</h1>
                <h1 className="text-text">OUE CLIENTS OUR PRIORITY</h1>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;
