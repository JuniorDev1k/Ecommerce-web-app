import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { categoryS } from "../data";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SliderRemote = () => {
  const SlideriImages = [
    { id: 1, name: "", imgUrl: "", descb: "" },
    { id: 2, name: "", imgUrl: "", descb: "" },
    { id: 3, name: "", imgUrl: "", descb: "" },
    { id: 4, name: "", imgUrl: "", descb: "" },
    { id: 5, name: "", imgUrl: "", descb: "" },
  ];

  return (
    <>
      <div className="flex justify-center items-center w-screen p-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {categoryS.map((R) => {
            return (
              <>
                <SwiperSlide className="flex flex-col justify-center items-center">
                  <div className="h-[90vh] w-[55vw] flex flex-col justify-center items-center relative ">
                    <img className="w-full h-3/4 " src={R.img} alt="" />
                    <div className=" w-full   absolute left-0 bottom-[11.3vh] flex flex-col justify-between bg-gray-400/20">
                      <h1 className="font-poppins font-medium text-text  text-md sm:text-lg -tracking-tighter p-2  ">
                        {R.name}
                      </h1>
                      <div className="p-2 font-robotto text-text ">
                        <h2 className="mb-2 font-bold ">{R.category}</h2>
                        <p className="font-medium">{R.descb}</p>
                      </div>
                      <Link
                        className="p-2  sm:px-12 bg-black text-secondary-0 font-Nunito font-medium -tracking-tighter text-xl w-[12vw] mb-2 rounded-r-xl    "
                        to="/Products"
                      >
                        BROWS
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                ;
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
const items = [
  {
    id: 1,
    name: "Accessory",

    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 2,
    name: "Pieces",

    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 3,
    name: "FullConfig",

    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 4,
    name: "Pieces",

    discp: "Hight Qulaity Accessory for our setup",
  },
  {
    id: 5,
    name: "Accessory",

    discp: "Hight Qulaity Accessory for our setup",
  },
];

const CategorySlider = () => {
  return (
    <>
      <div className=" flex justify-center items-center gap-2 my-20 ">
        {items.map((I) => {
          const { id, name, imgUrl, discp } = I;
          return (
            <div
              key={id}
              className=" flex flex-nowrap justify-start  h-[60vh] "
            >
              <input
                className="radio-input  hidden"
                type="radio"
                name="slide"
                id={id}
              />
              <label
                id={name}
                htmlFor={id}
                className="card-category w-[4vw]  bg-slate-900 cursor-pointer overflow-hidden flex items-end    "
              >
                <div className="row md:py-6 ">
                  <div className="icon sm:p-2 ">{id}</div>
                  <div className="description">
                    <h4>{name}</h4>
                    <p className="  text-text">{discp}</p>
                  </div>
                </div>
              </label>
            </div>
          );
        })}
      </div>
      <SliderRemote />
    </>
  );
};

export default CategorySlider;
