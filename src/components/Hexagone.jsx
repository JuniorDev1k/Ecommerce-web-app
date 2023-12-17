import React from "react";
// this is a u components that displays a hexagone
const Hexagone = (props) => {
  const Service = props.hex;
  return (
    <div className="hexagon relative">
      <p className="text-l  font-poppins  ">{Service}</p>
    </div>
  );
};

export default Hexagone;
