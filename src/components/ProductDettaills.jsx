import { reauthenticateWithRedirect } from "firebase/auth";
import React, { useState } from "react";

const ProductDettaills = ({ data }) => {
  const [contentshown, setContentshown] = useState("Dettails");

  const RenderContet = () => {
    switch (contentshown) {
      case "Dettails":
        return (
          <>
            <div className="max-w-52 text-white md:tracking-widest font-robotto grid grid-rows-2 gap-8 p-4 text-xl leading-9">
              <div>
                <p>
                  Our product is crafted with the highest quality materials.
                </p>
                <p>Each piece undergoes rigorous quality control checks.</p>
                <p>Designed to meet the highest standards of performance.</p>
              </div>
              <div>
                <p>
                  Available in multiple sizes and colors to suit your needs.
                </p>
                <p>
                  Enjoy a sleek and modern design that complements any style.
                </p>
                <p>Backed by our satisfaction guarantee for peace of mind.</p>
              </div>
            </div>
          </>
        );
      case "Shipping":
        return (
          <div className="max-w-52 text-white md:tracking-widest font-robotto grid grid-rows-2 gap-8 p-4 text-xl leading-9 ">
            <div>
              <p>We offer free shipping on all orders over $50.</p>
              <p>All orders are processed within 1-2 business days.</p>
              <p>Standard shipping typically takes 3-5 business days.</p>
            </div>
            <div>
              <p>Expedited shipping options are available at checkout.</p>
              <p>You will receive a tracking number once your order ships.</p>
              <p>International shipping rates vary by destination.</p>
            </div>
          </div>
        );

      case "Returns":
        return (
          <>
            <div className="max-w-52 text-white md:tracking-widest font-robotto grid grid-rows-2 gap-8 p-4 text-xl md:leading-9">
              <div>
                <p>Returns are accepted within 30 days of purchase.</p>
                <p>Items must be in original condition with tags attached.</p>
                <p>Refunds will be processed to the original payment method.</p>
              </div>
              <div>
                <p>
                  Shipping fees for returns are the responsibility of the
                  customer.
                </p>
                <p>Contact our support team to initiate a return request.</p>
                <p>
                  We strive to make the return process as smooth as possible.
                </p>
              </div>
            </div>
          </>
        );

        defualt: return (
          <>
            <p>Nothing Displayed</p>
          </>
        );
    }
  };
  return (
    <>
      <div className="flex flex-cols gap-8 md:text-2xl text-xl ">
        <button
          className="px-2 tracking-widest opacity-75 duration-100	 hover:opacity-75 hover:border-b-2 hover:border-red-600 hover:border-solid  focus:border-red-700 focus:border-solid focus:border-b-2 focus:opacity-100"
          onClick={() => setContentshown("Dettails")}
        >
          Dettails
        </button>
        <button
          className="px-2 tracking-widest opacity-75 duration-100	 hover:opacity-75 hover:border-b-2 hover:border-red-600 hover:border-solid  focus:border-red-700 focus:border-solid focus:border-b-2 focus:opacity-100"
          onClick={() => setContentshown("Shipping")}
        >
          Shipping
        </button>
        <button
          className="px-2 tracking-widest opacity-75 duration-100	 hover:opacity-75 hover:border-b-2 hover:border-red-600 hover:border-solid  focus:border-red-700 focus:border-solid focus:border-b-2  focus:opacity-100"
          onClick={() => setContentshown("Returns")}
        >
          Returns
        </button>
      </div>
      <RenderContet />
    </>
  );
};

export default ProductDettaills;
