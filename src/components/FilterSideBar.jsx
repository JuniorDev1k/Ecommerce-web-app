import React from "react";

const FilterSideBar = () => {
  return (
    <>
      <div>
        <h1>Category</h1>
        <ul>
          <li>Full config</li>
          <li>Pieces</li>
          <li>Accessory</li>
        </ul>
      </div>
      <div>
        <h1>Price</h1>
      </div>
      <div>
        <h1>Colors</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <button>Clear Filters</button>
    </>
  );
};

export default FilterSideBar;
