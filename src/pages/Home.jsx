import React from "react";

import {
  About,
  Header,
  CategorySlider,
  FeaturedProducts,
  Services,
} from "../components";

// THE WHOLE COMPONENTS responsible for the Home page sections
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
