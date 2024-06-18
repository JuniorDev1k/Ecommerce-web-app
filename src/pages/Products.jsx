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
import { FilterSideBar, ProductsGrid, FeaturedProducts } from "../components";
// import { CardLogo } from "../../Assets/Icons/CardLogo.png";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      // Get all products if search query is empty
      if (searchQuery.trim() == "") {
        setSearchResults([]);
        let results = [];
        try {
          setLoading(true); // fetching all the products ( first render)
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
          setAllProducts(results);
        }
      }
      // Whene we Search
      try {
        setLoading(true);
        const filtered = allProducts.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filtered);

        console.log(results); // testing.

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
        <FeaturedProducts /> // featured products cards
        <div className="Products-content flex w-full    ">
          <FilterSideBar />
          <section className="products-left    ">
            <div className="search-useInfo  gap-24 flex justify-center px-10  ">
              <input
                className="w-1/2 px-4 border-none
                  rounded-xl"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search product ..."
              />
              <div className="w-1/5 border-2 border-green flex justify-between p-2 items-center ">
                <img
                  src=""
                  alt=""
                  width="40px"
                  height="40px"
                  className="rounded-3xl"
                />
                <p className="text-text">DisplayName</p>
                {/* <img src={CardLogo} alt="cardLogo" /> */}
              </div>
            </div>
            <ProductsGrid className="" data={searchResults} loading={loading} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
