import React from "react";
// this is responsible for the about our story left part
const AboutLeft = (props) => {
  // const { img, story, year } = props;
  const { img, story, year } = props.object;

  return (
    <div className="about-right  ">
      <h1 className=" font-robotto">ABOUT US</h1>
      <div className="about-content">
        <div className="about-iimg">
          <img src={img} alt="img-of-us" />
        </div>
        <article>
          <h1 className="about-headTime  font-poppins  ">{year}</h1>
          <p className="about-story font-Nunito font-extralight  ">{story}</p>
        </article>
      </div>
    </div>
  );
};

export default AboutLeft;
