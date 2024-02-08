import React from "react";

const ProductsGrid = (props) => {
  const { data, loading } = props;

  // this compponents is responsable for displaying all the product , + product search
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4  place-content-center p-4  gap-4  ">
      {loading && (
        <div>Loading....................................................</div>
      )}
      data ? (
      {data.map((p) => {
        const { name, ImgUrl, color } = p;

        return (
          <>
            <div className="w-3/4  placeholder:  border-2 border-slate-400  ">
              <img className="" src={ImgUrl} alt="cykablyat" />
              <h1 className="text-center text-zinc-300  "> {name}</h1>
            </div>
          </>
        );
      })}
      ): (<h1 className="text-2xl text-secondary ">No fuckinggg Products</h1>)
    </div>
  );
};

export default ProductsGrid;
