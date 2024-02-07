import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import {
  ProductsUserProfile,
  FilterSideBar,
  ProductsGrid,
  FeaturedProducts,
} from "../components";

const Products = () => {
  const [Allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      let productsList = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Products"));

        querySnapshot.forEach((doc) => {
          productsList.push({ id: doc.id, ...doc.data() });
        });

        setAllProducts(productsList);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);
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
          {Allproducts && <ProductsGrid data={Allproducts} />}
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
