import React from "react";
import { colorOptions } from "../data";

const FilterSideBar = ({ selected, setcolor, price, setprix, Reset }) => {
  const CategoryNames = [
    { id: 1, name: "Full config" },
    { id: 2, name: "Pieces" },
    { id: 3, name: "Accessory" },
  ];

  const FilterCategory = (category) => selected(category);

  const FilterColor = (c) => setcolor(c);

  // const FilterPrice = (price) => setprix(price);

  return (
    <div className="text-text bg-secondary-0/10  md:col-span-2 col-span-2 sm:pt-10 flex flex-col justify-between  font-Nunito rounded-tr-2xl sticky top-0 h-screen py-2  p-0     sm:py-0   ">
      <div className="mt-4 flex flex-col gap-4    ">
        <h1 className=" md:text-2xl text-lg  text-center font-subheader -tracking-tighter">
          Category
        </h1>

        {CategoryNames.map((btn) => {
          return (
            <>
              <button
                className="   border-2 border-black border-solid  text-md sm:text-xl transition opacity-70 p-2  font-robotto "
                onClick={() => FilterCategory(btn.name)}
                key={btn.id}
              >
                {btn.name}
              </button>
            </>
          );
        })}
      </div>
      <div className=" md:p-6 p-2  ">
        <h1 className="  mb-2 font-subheader   text-center md:text-2xl text-lg -tracking-tighter ">
          Price
        </h1>
        <input
          type="range"
          min="1"
          max="11000"
          value={price}
          onChange={(e) => setprix(e.target.value)}
          className="range border-0 h-[0.7rem] "
        />
      </div>
      <div className=" flex flex-col gap-4 p-2 ">
        <h1 className="md:text-2xl text-lg    text-center  font-subheader -tracking-tighter  ">
          Colors
        </h1>
        <div className="flex justify-center lg:gap-4 gap-2  ">
          {colorOptions.map((color) => {
            return (
              <>
                <button
                  style={{
                    backgroundColor: color.value,
                    height: "1.2rem",
                    width: "1.2rem",
                    borderRadius: "50%",
                  }}
                  onClick={() => FilterColor(color.value)}
                ></button>
              </>
            );
          })}
        </div>
        <button
          className="bg-black  p-2 rounded-xl font-poppins sm:text-lg   sm:w-1/2 ml-[25%] md:mt-6 mt-2   "
          onClick={Reset}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
