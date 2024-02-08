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
  // currently manullay adding featured products , later we can make dynamic ( from DB )
  const FeatureProductCards = [
    { id: 1, imgurl: imag1, title: " Remote Controlletr" },
    { id: 2, imgurl: imag2, title: " Remote Controlletr" },
    { id: 3, imgurl: imag3, title: " Remote Controlletr" },
    { id: 4, imgurl: imag4, title: " Remote Controlletr" },
    { id: 5, imgurl: imag1, title: " Remote Controlletr" },
  ];
  return (
    <>
      <h1 className="m-20 mb-10 text-2xl  "> Featured Products</h1>
      <div className="grid grid-cols-5 gap-4 px-6  mb-20 max-w-full">
        {FeatureProductCards.map((c) => {
          const { id, imgurl, title } = c;
          return (
            <>
              <div className=" relative " key={id}>
                <span className="absolute top-0 right-2  bg-yellow-500 p-1 border-spacing-x-2  ">
                  #1
                </span>
                <img
                  className="h-full rounded-2xl"
                  src={imgurl}
                  alt="featured product"
                />
                <h1 className="text-center font-Nunito font-bold   ">
                  {title}
                </h1>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProducts;
