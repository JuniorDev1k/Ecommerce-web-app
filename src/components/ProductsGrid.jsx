import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// this compponents is responsable for displaying all the product  + product search

const ProductsGrid = ({ data, loading }) => {
  const [order, setOrder] = useState(false);
  const orderItem = () => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
    }, 1000);
  };
  // console.log("this is from the child components : i found this : ", data);  Testing
  return (
    <div className="grid  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  place-content-center sm:p-4 p-8  sm:gap-6 gap-4  ">
      {order && (
        <div role="alert" className="alert shadow-lg fixed top-0 duration-200	">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">New Order</h3>
            <div className="text-xs">You have ordered an item</div>
          </div>
          <button className="btn btn-sm">See</button>
        </div>
      )}
      {loading && (
        <span className="loading loading-dots w-[6rem] h-screen   ml-[50%]  ">
          Loadding ....
        </span>
      )}
      {data ? (
        data.map((p) => {
          const { name, ImgUrl, id } = p;
          // const ProductUrl = "Products/" + id;
          return (
            <>
              <div className="card">
                <div key={id} className="w-full h-60 ">
                  <Link to={id}>
                    <img
                      src={p?.ImgUrl}
                      alt="product"
                      className="h-full  w-full object-fill  "
                    />
                  </Link>
                </div>
                <div className="card-body shadow-xl bg-secondary-0/10  rounded-b-xl  font-Nunito ">
                  <h2 className="card-title flex justify-between text-lg font-robotto ">
                    {p?.name.slice(0, 16)}
                  </h2>
                  <div className="flex items-center">
                    <p className="text-[#FAFF0C] font-robotto font-bold ">
                      {p?.price} ${" "}
                    </p>
                    <div className="card-actions   ">
                      <div className="badge badge-outline  p-4">
                        {p?.available ? (
                          <p className="text-green-600">Available</p>
                        ) : (
                          <p className="text-red-600"> Unavailable </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={orderItem}
                    className=" bg-slate-950 rounded-lg p-4 py-2   font-poppins font-semibold  mt-2 hover:opacity-80 duration-100	 "
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <h1 className="text-2xl text-secondary ">Theres No Products</h1>
      )}
    </div>
  );
};

export default ProductsGrid;
