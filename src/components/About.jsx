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
      <div className=" h-screen flex pl-20 bg-background relative  ">
        <AboutLeft object={currentYEAR} />
        {/* listing the year at the rights  */}
        <div className=" flex  flex-col text-text absolute top-0 right-0 justify-between h-4/5">
          {Dabout.map((y) => {
            const { year, id } = y;
            return (
              <button
                className="hover:text-secondary h-1/6 rounded-l"
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
