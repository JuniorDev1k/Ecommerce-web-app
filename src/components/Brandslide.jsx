import React from "react";
// import the brand images and display the rand component
import SBrand from "./SBrand";
import X from "../Assets/Images/unsplash_oOP4Qo-jF3w.png";
import AMD1 from "../Assets/Images/unsplash_nWgpCe-LQa4.png";
import AMD from "../Assets/Images/AMD.png";
import Intel from "../Assets/Images/intel-logo-1.png";
import Azus from "../Assets/Images/west-java-indonesia-oktober-05-260nw-2371188081.webp";
const brands = [
  { name: "X", img: X, id: 1 },
  { name: "AMD", img: AMD1, id: 2 },
  { name: "Asus", img: Azus, id: 3 },
  { name: "ASUS", img: Intel, id: 4 },
  { name: "AMDS", img: AMD, id: 5 },
];
const Brandslide = () => {
  return (
    <>
      <div className="h-[20vh]  flex justify-between bg-[#070101]   ">
        {brands.map((b) => {
          return <SBrand brand={b} key={b.id} />;
        })}
      </div>
    </>
  );
};

export default Brandslide;
