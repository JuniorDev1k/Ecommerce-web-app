import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FeatureProductCards } from "../data";

const FeaturedProducts = () => {
  // currently manullay adding featured products , later we can make dynamic ( from DB )

  return (
    <>
      <h1
        id="featured-products"
        className=" ml-4 mb-10 m-20   text-3xl    font-subheader font-semibold -tracking-tighter inline "
      >
        {" "}
        Featured Products
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-4 px-6  sm:mb-40 mb-20 max-w-full cursor-pointer   ">
        {FeatureProductCards.map((c) => {
          const { id, imgurl, title } = c;
          return (
            <>
              <Link
                to="/Products"
                className="hover:translate-y-4 duration w-3/4  transition duration-600 "
              >
                <img
                  className="h-full rounded-2xl w-full"
                  src={imgurl}
                  alt="featured product"
                />
                <h1 className="text-center font-Nunito font-bold text-zinc-300 m-4   ">
                  {title}
                </h1>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedProducts;
