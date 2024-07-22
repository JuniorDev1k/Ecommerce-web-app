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
import { categoryS } from "../data";
// import { CardLogo } from "../../Assets/Icons/CardLogo.png";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterdproducts, setFilterdproducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedcategory, setSelectedcategory] = useState("");
  const [selectedcolor, setSelectedcolor] = useState("");
  const [price, setPrice] = useState(50);

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

          <section className="products-left md:col-span-10  ">
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
            <ProductsGrid data={filterdproducts} loading={loading} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Products;
