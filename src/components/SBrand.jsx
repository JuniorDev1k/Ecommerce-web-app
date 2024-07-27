import React from "react";

const SBrand = ({ brand }) => {
  const { img, name } = brand;
  return (
    <div className="brandSlide  border-white border-2 border-solid ">
      <img className="h-full w-[15vw] " src={img} alt={name} />
    </div>
  );
};

export default SBrand;
