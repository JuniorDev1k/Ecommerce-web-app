import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import imag1 from "../../Assets/Images/andrey-matveev-WUqkLR1fyaw-unsplash.jpg";
import imag2 from "../../Assets/Images/christian-wiediger-c3ZWXOv1Ndc-unsplash.jpg";
import imag3 from "../../Assets/Images/unsplash_SsI775V5cDU.png";
import imag4 from "../../Assets/Images/joshua-ng-1sSfrozgiFk-unsplash.jpg";
import imag5 from "../../Assets/Images/joseph-greve-D_1-g2eLho8-unsplash.jpg";

const CategorySlider = () => {
  return (
    <>
      <div className="Container-ss">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag5} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img className="slide-img" src={imag5} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default CategorySlider;
