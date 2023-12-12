import React from "react";
import About from "../components/About";
import Header from "../components/Header";
import Services from "../components/Services";
import CategorySlider from "../components/CategorySlider";
import FeaturedProducts from "../components/FeaturedProducts";

const Home = () => {
  return (
    <>
      <Header />
      {/* <Services />
      <About /> */}
      <CategorySlider />
      <FeaturedProducts />
      <Services />
      <About />
    </>
  );
};

export default Home;
