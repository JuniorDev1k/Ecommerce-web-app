import React from "react";
import Logo from "./Logo";
import Hexagone from "./Hexagone";
const Services = () => {
  return (
    <>
      <div className="min-h-screen bg-background ">
        <section className="flex p-20">
          <div className="felx w-1/2 ">
            <div className="flex justify-center gap-6 ">
              <Hexagone hex="HIGHT QUALITY PRODUCTS" />
              <Hexagone hex="HAVE FUN" />
            </div>
            <div className="flex justify-center gap-16 items-center">
              <Hexagone hex="CUSTOM STOR FUNCTIONALITIES" />
              <div className="border-b-4 border-red-400 rounded pb-1">
                <Logo />
              </div>
              <Hexagone hex="HAVE FUN" />
            </div>
            <div className="flex justify-center gap-6">
              <Hexagone hex="HAVE FUN" />
              <Hexagone hex="HAVE FUN" />
            </div>
          </div>
          {/* left part  ---------------------------------------------------*/}
          <div class="flex flex-col w-1/2 justify-between items-center p-20">
            <h1 class="text-3xl text-text mt-2 font-robotto ">OUR SERVICES</h1>
            <div class="trustworthy flex flex-col gap-2 text-lg bg-background2 p-5 font-poppins  ">
              <div class="flex gap-4">
                <h1 class="font-bold text-secondary  "># 1</h1>
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
