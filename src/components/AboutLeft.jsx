import React from "react";
// this is responsible for the about our story left part
const AboutLeft = (props) => {
  // const { img, story, year } = props;
  const { img, story, year } = props.object;

  return (
    <div className="flex  w-3/4 items-center ">
      <div className="  w-full ">
        <h1 className=" font-robotto text-center text-xl text-text fw-bold mb-20">
          ABOUT US
        </h1>
        <div className="border-2 border-text mr-2 ">
          <img src={img} alt="img-of-us" className="" />
        </div>

        <div />
      </div>
      <article className=" text-text ">
        <h1 className=" font-poppins  fw-bold  text-2xl mb-4 ">{year}</h1>
        <p className=" font-Nunito text-sm tracking-wider leading-6 text-accent ">
          {story}
        </p>
      </article>
    </div>
  );
};

export default AboutLeft;
