import React from "react";
import { Link } from "react-router-dom";
// this compponents is responsable for displaying all the product  + product search

const ProductsGrid = ({ data, loading }) => {
  // console.log("this is from the child components : i found this : ", data);  Testing
  return (
    <div className="grid   md:grid-cols-4 2xl:grid-cols-5  place-content-center sm:p-4  gap-4  ">
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
              <div className="card bg-base-100  shadow-xl">
                <figure key={id}>
                  <Link to={id}>
                    <img
                      src={p?.ImgUrl}
                      alt="product"
                      className="h-60 w-full object-fill "
                    />
                  </Link>
                </figure>
                <div className="card-body">
                  <h2 className="card-title flex justify-between ">
                    {name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div className="card-actions justify-betwween">
                    <div className="badge badge-outline  ">Fashion</div>
                    <div className="badge badge-outline p-2 ">
                      {p?.category}
                    </div>
                  </div>
                </div>
              </div>

              {/* <li
              className="w-3/4  placeholder:  border-2 border-slate-400  "
        
            >
              
                {" "}
                <img className="" src={p?.ImgUrl} alt="cykablyat" />
                <h1 className="text-center text-zinc-300  "></h1>
              </Link>

              <button>Order now</button>
            </li> */}
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
