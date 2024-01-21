import React from "react";

import {
  ProductsUserProfile,
  FilterSideBar,
  ProductsGrid,
  FeaturedProducts,
} from "../components";

const Products = () => {
  return (
    <>
      {/* <FeaturedProducts /> */}
      <div className="Products-content">
        <FilterSideBar />
        <section className="products-left">
          <header className="">
            <input type="search" />
            <ProductsUserProfile />
          </header>
          <ProductsGrid />
        </section>
        <div>
          <h1>Log our bro common u have to leave this page</h1>
          <button>signout</button>
        </div>
      </div>
    </>
  );
};

export default Products;
