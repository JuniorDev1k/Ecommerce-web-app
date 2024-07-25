import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Button = ({ text, link }) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(link)}
      className=" rounded-lg hover:bg-black transition hover:text-secondary-0  bg-secondary-0 md:py-4 md:px-24 font-poppins font-medium -tracking-tighter text-lg p-2  "
    >
      {text}
    </button>
  );
};

export default Button;
