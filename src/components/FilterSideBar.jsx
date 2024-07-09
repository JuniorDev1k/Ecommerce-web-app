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
    <div className="text-text bg-red-900 w-3/4 py-10 flex w-40 px-2 flex-col justify-between font-poppins  ">
      <div className="mt-4 flex flex-col gap-4    ">
        <h1 className="text-center text-2xl   text-black font-robotto">
          Category
        </h1>

        {CategoryNames.map((btn) => {
          return (
            <>
              <button
                className="p-2 hover:bg-secondary text-xl"
                onClick={() => FilterCategory(btn.name)}
                key={btn.id}
              >
                {btn.name}
              </button>
            </>
          );
        })}
      </div>
      <div className="mt-4">
        <h1>Price</h1>
        <input
          type="range"
          min={1}
          max="3000"
          value={price}
          onChange={(e) => setprix(e.target.value)}
          className="range"
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 ">
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
          className="bg-black p-2 rounded-xl px-2 font-poppins text-xl mt-10 ml-4 "
          onClick={Reset}
        >
          {" "}
          Clear Filters{" "}
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
