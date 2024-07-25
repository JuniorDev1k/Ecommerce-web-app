import React, { useState } from "react";
import { Dabout } from "../data";
import AboutLeft from "./AboutLeft";

const About = () => {
  const [currentYEAR, setCurrentYear] = useState({ ...Dabout[0] });
  const selectYear = (id) => {
    const New = Dabout.find((o) => o.id === id);

    setCurrentYear(New);
  };

  return (
    <>
      <div className=" h-screen flex pl-20 bg-[#070101] relative  ">
        <AboutLeft object={currentYEAR} />
        {/* listing the year at the rights  */}
        <div className=" flex  flex-col text-text absolute top-0 right-0 justify-between h-screen py-4">
          {Dabout.map((y) => {
            const { year, id } = y;
            return (
              <button
                className="hover:text-secondary  rounded-l-md hover:bg-white p-4 transition "
                key={id}
                onClick={() => selectYear(id)}
              >
                {year}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
