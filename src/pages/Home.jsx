import React from "react";
import {
  About,
  Header,
  CategorySlider,
  Brandslid,
  Services,
} from "../components";

// The whole components responsible for the Home page sections
const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <About />
      <Brandslid />
      <CategorySlider />
    </>
  );
};

export default Home;
