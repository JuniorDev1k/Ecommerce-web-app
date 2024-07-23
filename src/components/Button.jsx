import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Button = (props) => {
  const text = props.button;
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/Products")}
      className="btn btn-xs  bg-red-600 sm:btn-sm md:btn-md lg:btn-lg"
    >
      Search Products
    </button>
  );
};

export default Button;
