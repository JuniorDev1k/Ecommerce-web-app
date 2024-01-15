import React from "react";

import FeaturedProducts from "../components/FeaturedProducts";
import FilterSideBar from "../components/FilterSideBar";
import ProductsUserProfile from "../components/ProductsUserProfile";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
  return (
    <>
      <FeaturedProducts />
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
