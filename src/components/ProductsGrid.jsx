import React from "react";

const ProductsGrid = (props) => {
  const { data, loading } = props;

  // this compponents is responsable for displaying all the product , + product search
  return (
    <div className="flex gap-4">
      {loading && (
        <div>Loading....................................................</div>
      )}

      {data.map((p) => {
        const { name, ImgUrl, color } = p;

        let divStyle = {
          color: color,
          width: "20px",
          heigt: "15px",
        };
        return (
          <>
            <div className="border-2 border-y-stone-500 border-rounded  px-4 flex flex-col gap-4  ">
              <h1 className="text-center"> {name}</h1>
              <img src={ImgUrl} alt="cykablyat" />
              <h4>color Available : </h4>
              <div className="">{color}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
