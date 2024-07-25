import React from "react";
import { Link } from "react-router-dom";
// this compponents is responsable for displaying all the product  + product search

const ProductsGrid = ({ data, loading }) => {
  // console.log("this is from the child components : i found this : ", data);  Testing
  return (
    <div className="grid  sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  place-content-center sm:p-4 p-8  sm:gap-6 gap-4  ">
      {loading && (
        <div>
          {" "}
          <p className="text-blue-400 p-10  text-2xl ">
            Loading....................................................
          </p>{" "}
        </div>
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
                <div className="card-body shadow-xl bg-secondary-0/10  rounded-b-lg  font-Nunito ">
                  <h2 className="card-title flex justify-between text-lg font-robotto ">
                    {name.slice(0, 16)}
                  </h2>
                  <p>{p?.description.slice(0, 7)}</p>
                  <div className="card-actions  ">
                    <div className="badge badge-outline flex-start p-4">
                      {p?.available ? (
                        <p className="text-green-600">Available</p>
                      ) : (
                        <p className="text-red-600"> Unavailable </p>
                      )}
                    </div>
                    <div className="badge badge-outline p-4 ">
                      {p?.category}
                    </div>
                  </div>
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
