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
      {/* <FeaturedProducts /> */}
      <div className="Products-content">
        <FilterSideBar />
        <section className="products-left">
          <header className="">
            <input type="search" />
            <ProductsUserProfile />
          </header>
          <div className="search">
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <ProductsGrid data={searchResults} loading={loading} />
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
