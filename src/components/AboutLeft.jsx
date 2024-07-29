import React from "react";
// this is responsible for the about our story left part
const AboutLeft = (props) => {
  // const { img, story, year } = props;
  const { img, story, year } = props.object;

  return (
    <div className=" w-3/4   flex flex-col sm:flex-row items-center gap-6">
      <div
        className=" w-full pt-6   flex flex-col  items-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className=" font-header font-semibold text-2xl text-text pb-2 tracking-widest	 ">
          ABOUT US
        </h1>
        <div
          className="w-80 h-80 sm:h-[25rem]  sm:w-[25rem]  "
          // data-aos="zoom-in"
        >
          <img
            src={img}
            alt="img-of-us"
            className="w-full h-full object-cover   rounded-lg  hover:translate-y-2 transition "
          />
        </div>

        <div />
      </div>
      <article
        className=" text-text text-center   "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className=" text-2xl mb-4 font-header font-semibold -tracking-tighter">
          {year}
        </h1>
        <p className=" font-nunito text-lg  font-thin tracking-wider leading-6 text-text  ">
          {story}
        </p>
      </article>
    </div>
  );
};

export default AboutLeft;
