import React from "react";

const FilterSideBar = () => {
  return (
    <div className="text-text bg-red-900 w-3/4 py-10 flex w-40 px-2 flex-col justify-between font-poppins  ">
      <div className="mt-4 flex flex-col gap-4    ">
        <h1 className="text-center text-2xl   text-black font-robotto">
          Category
        </h1>
        <button className="p-2 hover:bg-secondary text-xl">Full config</button>
        <button className="p-2 hover:bg-secondary text-xl">Pieces</button>
        <button className="p-2 hover:bg-secondary text-xl">Accessory</button>
      </div>
      <div className="mt-4">
        <h1 className=" mb-2 text-2xl  text-black font-robotto text-center ">
          Price
        </h1>
        <hr />
      </div>
      <div className="mt-4 flex flex-col gap-4 ">
        <h1 className="text-2xl font-robotto text-center  text-black ">
          Colors
        </h1>
        <div className="flex justify-center gap-1  ">
          <button className="p-3 bg-black rounded-3xl"></button>
          <button className="p-3 bg-blue-400 rounded-3xl"></button>
          <button className="p-3 bg-white rounded-3xl"></button>
          <button className="p-3 bg-yellow-200 rounded-3xl"></button>
          <button className="p-3 bg-green-300 rounded-3xl"></button>
        </div>
        <button className="bg-black p-2 rounded-xl px-2 font-poppins text-xl mt-10 ml-4 ">
          {" "}
          Clear Filters{" "}
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
