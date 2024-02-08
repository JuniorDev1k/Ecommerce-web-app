import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import {
  ProductsUserProfile,
  FilterSideBar,
  ProductsGrid,
  FeaturedProducts,
} from "../components";

const Products = () => {
  // const [Allproducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (searchQuery.trim() == "") {
        setSearchResults([]);
        let results = [];
        try {
          setLoading(true);
          const querySnapshot = await getDocs(collection(db, "Products"));
          querySnapshot.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setSearchResults(results);
          return;
        } catch (error) {
          console.log("err fetching all products ");
        } finally {
          setLoading(false);
        }
      }
      // Whene we Search
      try {
        setLoading(true);
        const q = query(
          collection(db, "Products"), // Replace 'yourCollectionName' with your Firestore collection name
          where("name", ">=", searchQuery.toLowerCase()), // Perform case-insensitive search
          where("", "<=", searchQuery.toLowerCase() + "\uf8ff") // Perform case-insensitive search
        );
        let results = [];
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() });
        });
        setSearchResults(results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [searchQuery]);

  return (
    <>
      <div className="flex flex-col  pt-20 w-screen bg-black ">
        <FeaturedProducts />
        <div className="Products-content flex w-full    ">
          <FilterSideBar className=" fixed w-1/2 left-0 bottom-0  file: bg-black p-4 " />
          <section className="products-left    ">
            <div className="search-useInfo  flex justify-between px-10  ">
              <input
                className="w-1/2  rounded-xl"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="w-1/5 border-2 border-green">
                <img
                  src=""
                  alt=""
                  width="40px"
                  height="40px"
                  className="rounded-3xl"
                />
                <p>DisplayName</p>
              </div>
            </div>
            <ProductsGrid
              className="border-4 border-yellow-400 p-2 "
              data={searchResults}
              loading={loading}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
