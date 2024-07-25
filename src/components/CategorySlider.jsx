import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import imag1 from "../../Assets/Images/andrey-matveev-WUqkLR1fyaw-unsplash.jpg";
import imag2 from "../../Assets/Images/christian-wiediger-c3ZWXOv1Ndc-unsplash.jpg";
import imag3 from "../../Assets/Images/unsplash_SsI775V5cDU.png";
import imag4 from "../../Assets/Images/joshua-ng-1sSfrozgiFk-unsplash.jpg";
import imag5 from "../../Assets/Images/joseph-greve-D_1-g2eLho8-unsplash.jpg";

const CategorySlider = () => {
  return (
    <>
      <div id="slider" className="">
        {/* <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <img className="slide-img w-full h-[10rem] " src={imag1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img w-full h-[10rem] " src={imag2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img w-full  h-[10rem]" src={imag2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide-img w-full   h-[10rem]"
                src={imag3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img w-full  h-[10rem]" src={imag4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img w-full  h-[10rem]" src={imag4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img w-full  h-[10rem]" src={imag5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide-img w-full h-full  h-[10rem]"
                src={imag5}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img
                className="slide-img w-full h-full h-[10rem]"
                src={imag5}
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper> */}
        <div id="slider-wrapper  " className="grid grid-cols-5">
          <img id="slide" src={imag5} className="w-[18rem] h-[18rem]" alt="" />
          <img id="slide" src={imag1} className="w-[18rem] h-[18rem]" alt="" />
          <img id="slide" src={imag2} className="w-[18rem] h-[18rem]" alt="" />
          <img id="slide" src={imag3} className="w-[18rem] h-[18rem]" alt="" />
          <img id="slide" src={imag4} className="w-[18rem] h-[18rem]" alt="" />
        </div>
      </div>
    </>
  );
};

export default CategorySlider;
