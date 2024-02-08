import React from "react";

const ProductsGrid = (props) => {
  const { data, loading } = props;

  // this compponents is responsable for displaying all the product , + product search
  return (
    <div className="grid grid-cols-3 p-2 gap-4 ">
      {loading && (
        <div>Loading....................................................</div>
      )}

      {data.map((p) => {
        const { name, ImgUrl, color } = p;

        return (
          <>
            <div className="">
              <img src={ImgUrl} alt="cykablyat" />
              <h1 className="text-center text-secondary "> {name}</h1>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
