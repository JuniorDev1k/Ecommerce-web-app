import React, { useState } from "react";
import { Dabout } from "../data";
import AboutLeft from "./AboutLeft";

const About = () => {
  const [currentYEAR, setCurrentYear] = useState([Dabout][0]);
  const selectYear = (id) => {
    const New = Dabout.find((o) => o.id === id);
    setCurrentYear(New);
  };

  return (
    <>
      <AboutLeft object={currentYEAR} />
      <div className="about-left">
        {Dabout.map((y) => {
          const { year, id } = y;
          return <button onClick={selectYear(id)}>{year}</button>;
        })}
      </div>
    </>
  );
};

export default About;
