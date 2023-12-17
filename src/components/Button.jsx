import React from "react";

const Button = (props) => {
  const text = props.button;
  return (
    <button className="bg-secondary text-background  w-full p-2 rounded mt-2 text-xl font-poppins ">
      {text}
    </button>
  );
};

export default Button;
