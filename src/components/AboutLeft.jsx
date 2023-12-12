import React from "react";
// this is responsible for the about our story left part
const AboutLeft = ({ props }) => {
  const { year, img, story } = props;
  return (
    <div className="about-right">
      <h1>ABOUT US</h1>
      <div className="about-content">
        <div className="about-iimg">
          <img src={img} alt="img-of-us" />
        </div>
        <article>
          <h1 className="about-headTime">{year}</h1>
          <p className="about-story">{story}</p>
        </article>
      </div>
    </div>
  );
};

export default AboutLeft;
