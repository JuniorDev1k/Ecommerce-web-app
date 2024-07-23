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

  const FilterPrice = (price) => setprix(price);

  return (
    <div className="text-text bg-red-800 md:col-span-2 col-span-2 sm:pt-10 flex flex-col justify-between  font-poppins rounded-tr-lg sticky top-0 h-screen   ">
      <div className="mt-4 flex flex-col gap-4    ">
        <h1 className="text-center text-2xl   text-black font-robotto">
          Category
        </h1>

        {CategoryNames.map((btn) => {
          return (
            <>
              <button
                className="p-2 hover:bg-secondary  text-md sm:text-xl transition "
                onClick={() => FilterCategory(btn.name)}
                key={btn.id}
              >
                {btn.name}
              </button>
            </>
          );
        })}
      </div>
      <div className="mt-4 p-2 ">
        <h1 className="text-center mb-2">Price</h1>
        <input
          type="range"
          min={1}
          max="3000"
          value={price}
          onChange={(e) => setprix(e.target.value)}
          className="range"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 p-2  ">
        <h1 className="text-2xl font-robotto text-center  text-black ">
          Colors
        </h1>
        <div className="flex justify-center gap-1  ">
          {colorOptions.map((color) => {
            return (
              <>
                <button
                  style={{
                    backgroundColor: color.value,
                    height: "15px",
                    width: "15px",
                    borderRadius: 5,
                  }}
                  onClick={() => FilterColor(color.value)}
                ></button>
              </>
            );
          })}
        </div>
        <button
          className="bg-black p-2 rounded-xl px-2 font-poppins  sm:text-xl    "
          onClick={Reset}
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
