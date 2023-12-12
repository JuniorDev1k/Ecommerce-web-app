import React from "react";
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

const FeaturedProducts = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div>
          <img className="slide-bottom" src={imag1} alt="images" />
          <div>
            <h1>wsp Product</h1>
            <p>70$</p>
            <p>GG well palyed</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="slide-bottom" src={imag2} alt="images" />
          <div>
            <h1>best Product</h1>
            <p>120$</p>
            <p>best for contrubuting</p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div>
          <img className="slide-bottom" src={imag3} alt="images" />
          <div>
            <h1>Hight Product</h1>
            <p>160$</p>
            <p>GG wellplated</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img className="slide-bottom" src={imag4} alt="images" />
          <div>
            <h1>best Product</h1>
            <p>500$</p>
            <p>mder fker</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default FeaturedProducts;
