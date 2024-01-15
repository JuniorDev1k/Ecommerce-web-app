import React from "react";

const Button = (props) => {
  const text = props.button;
  return (
    <button className="bg-secondary text-background hover:bg-opacity-75  ease-out duration-300 w-full p-2 rounded-xl mt-2 text-md font-bold  font-robotto ">
      {text}
    </button>
  );
  secondary;
};

export default Button;
