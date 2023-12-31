import React from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../config/firebase";
import { signOut } from "firebase/auth";
import FeaturedProducts from "../components/FeaturedProducts";
import FilterSideBar from "../components/FilterSideBar";
import ProductsUserProfile from "../components/ProductsUserProfile";
import ProductsGrid from "../components/ProductsGrid";

const Products = () => {
  const Navigate = useNavigate();
  const signOutuser = async () => {
    await signOut(Auth);
    Navigate("/Login");
  };
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
          <button onClick={signOutuser}>LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Products;
