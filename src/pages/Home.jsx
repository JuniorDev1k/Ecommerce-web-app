import React from "react";

import {
  About,
  Header,
  CategorySlider,
  FeaturedProducts,
  Services,
} from "../components";

// The whole components responsible for the Home page sections
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <CategorySlider />
      <FeaturedProducts />
      <Services />
    </>
  );
};

export default Home;
