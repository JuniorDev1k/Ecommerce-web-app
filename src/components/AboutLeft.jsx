import React from "react";
// this is responsible for the about our story left part
const AboutLeft = (props) => {
  // const { img, story, year } = props;
  const { img, story, year } = props.object;

  return (
    <div className=" w-3/4   flex flex-col sm:flex-row items-center gap-6">
      <div className=" w-full pt-6   flex flex-col  items-center">
        <h1 className=" font-robotto  text-2xl text-text pb-2 tracking-widest	 ">
          ABOUT US
        </h1>
        <div className="w-80 h-80 sm:h-[25rem]  sm:w-[25rem]">
          <img
            src={img}
            alt="img-of-us"
            className="w-full h-full object-cover   rounded-sm "
          />
        </div>

        <div />
      </div>
      <article className=" text-text text-center font-poppins  ">
        <h1 className=" font-poppins  fw-bold  text-2xl mb-4 ">{year}</h1>
        <p className=" font-Nunito text-lg tracking-wider leading-6 text-text  ">
          {story}
        </p>
      </article>
    </div>
  );
};

export default AboutLeft;
