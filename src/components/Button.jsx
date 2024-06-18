import React from "react";

const Button = (props) => {
  const text = props.button;
  return (
    <button className="btn btn-xs  bg-red-600 sm:btn-sm md:btn-md lg:btn-lg">
      Search Products
    </button>
  );
};

export default Button;
