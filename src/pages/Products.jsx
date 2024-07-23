// Product page
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";

import { useAuth } from "../Context/userData";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
} from "firebase/firestore";
import { FilterSideBar, ProductsGrid, FeaturedProducts } from "../components";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userAavatar from "../../Assets/Images/Avatar.webp";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterdproducts, setFilterdproducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedcategory, setSelectedcategory] = useState("");
  const [selectedcolor, setSelectedcolor] = useState("");
  const [price, setPrice] = useState(50);

  const { currentuser } = useAuth(); // getting the userState to product page.
  currentuser && console.log(currentuser);
  // Fetch all products on initial render :
  useEffect(() => {
    let resultss = [];

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const querySnapshot = await getDocs(collection(db, "Products"));
        querySnapshot.forEach((doc) => {
          resultss.push({ id: doc.id, ...doc.data() });
        });
        console.log(resultss);
        setAllProducts(resultss);
        setFilterdproducts(resultss); // initial with all prodcuts
      } catch (error) {
        console.log("error  fetching all products ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // filtering System
  useEffect(() => {
    let results = allProducts;

    if (searchQuery.trim() !== "") {
      results = results.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      ); //
    }
    if (selectedcategory) {
      //  console.log(selectedcategory)  testing
      results = results.filter(
        (product) => product.category === selectedcategory
      );
    }

    if (selectedcolor) {
      //  console.log(selectedcolor)  testing

      results = results.filter((product) => product.color === selectedcolor);
    }
    if (price) {
      //  console.log(price)  testing
      results = results.filter((product) => product.price <= price);
    }

    setFilterdproducts(results); // search query is empty  : display all products
  }, [searchQuery, allProducts, selectedcategory, selectedcolor, price]);

  const ResetFilter = () => {
    setFilterdproducts(allProducts);
  };

  return (
    <>
      <div className="flex flex-col pt-20 bg-black ">
        <FeaturedProducts />
        <div className="Products-content grid grid-cols-12 w-full  ">
          <FilterSideBar
            selected={setSelectedcategory}
            setcolor={setSelectedcolor}
            prix={price}
            setprix={setPrice}
            Reset={ResetFilter}
          />

          <section className="products-left md:col-span-10 col-span-10  ">
            <div className="search-useInfo p-4 pt-0 grid grid-cols-8 gap-6    ">
              <input
                className="px-4 border-none
              
                 col-span-6
                 x
                  rounded-xl"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search product ..."
              />
              <div className="col-span-2  flex sm:gap-8 gap-2 justify-between items-center  relative  ">
                <div className="flex gap-2 ">
                  <img
                    src={userAavatar}
                    alt=""
                    width="40px"
                    height="40px"
                    className="rounded-3xl"
                    d
                  />
                  {/* currentuser?.photoURL  */}
                  <p className="text-neutral-content text-center hidden md:block ">
                    {currentuser?.displayName}
                  </p>
                </div>
                <div className="w-2 h-2 bg-red-600 absolute md:top-1 md:right-2 -top-2 right-0  rounded-xl  "></div>
                <FontAwesomeIcon
                  className="mr-2 "
                  icon={faCartShopping}
                  size="xl"
                />
              </div>
            </div>
            <ProductsGrid data={filterdproducts} loading={loading} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
