import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import brandLogo from "../../Assets/Images/unsplash_oOP4Qo-jF3w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

// This Page is responsible for Displaying the Dettials of the Uniq Product
const SignlProduct = () => {
  const { productId } = useParams();
  const [signlproduct, setSignproduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    // Fetch the product details using the productId
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "Products", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setSignproduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("No such document!");
        }
        console.log("Product dettails ", signlproduct);
      } catch (error) {
        console.error("Error getting document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // order alert ( boolean value ) .
  const orderItem = () => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
    }, 1000);
  };

  return (
    <>
      <div className=" p-20 px-10 md:p-40 md:px-20 bg-info-content text-white  ">
        {loading && (
          <div>{/* skeleton ui */} Lodingg..............................</div>
        )}
        {order && (
          <div
            role="alert"
            className="alert shadow-lg fixed top-0 duration-200	"
          >
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
              <div className="text-xs">
                You have ordered {signlproduct?.name}
              </div>
            </div>
            <button className="btn btn-sm">See</button>
          </div>
        )}
        <div className="Links text-sm mb-6 md:text-lg ">
          <Link className="hover:text-red-400 " to="/Products">
            Products &gt;
          </Link>
          <Link className="hover:text-red-400 " to="/Products">
            {signlproduct?.category} &gt;
          </Link>
          <Link
            className="hover:text-red-400 text-red-600 "
            to={"/Products/" + signlproduct?.id}
          >
            <span className="ml-1"> {signlproduct?.name.slice(0, 15)}...</span>
          </Link>
        </div>
        <main className="product-Dtaails grid grid-cols-1 sm:gap-20 items-center  font-robotto ">
          <section className="prodcut-dettials-heade grid grid-cols-1 md:grid-cols-2 md:gap-2 md:h-70  ">
            <div className="product-picture h-2/3 sm:h-3/4 ">
              <img
                className="rounded-xl hover:translate-y-2 transition ease-linear  w-2/3 sm:w-3/4 h-full object-fill   "
                src={signlproduct?.ImgUrl}
                alt="Procut-Picture"
              />
            </div>
            <div className="product-info-left">
              <div className="flex  flex-col gap-10">
                <h1 className="md:text-3xl text-2xl  font-Nunito ">
                  {signlproduct?.name}
                </h1>
                <div className="prodcut-info text-neutral-content  flex flex-col gap-4">
                  <div className="grid grid-cols-12 gap-4   ">
                    <img
                      className="col-span-2 rounded-full align-top "
                      src={brandLogo}
                      alt="brand-logo"
                    />
                    <p className="col-span-10  ">{signlproduct?.description}</p>
                  </div>
                  <div className="rating-av-rev  flex gap-6">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className=" mask mask-star-2 bg-orange-400"
                      />
                    </div>
                    <p>
                      {" "}
                      <span className="text-white">
                        {" "}
                        {signlproduct?.reviews}{" "}
                      </span>{" "}
                      reviews{" "}
                    </p>

                    {signlproduct?.available ? (
                      <p className="text-green-600">Available</p>
                    ) : (
                      <p className="text-red-600"> Unavailable </p>
                    )}
                  </div>
                  <div className="price flex gap-12 mt-4  ">
                    <p className="decoration-dashed decoration-red-500 text-sm">
                      {signlproduct?.price} $
                    </p>
                    <p className="text-2xl text-white">
                      USD {signlproduct?.price / 5} $
                    </p>
                    <p className="text-red-600">-20%</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  gap-4 my-10 sm:my-0 ">
                <button
                  onClick={orderItem}
                  className=" bg-slate-950 rounded-md mt-12 p-4 px-10 hover:opacity-80 duration-100	 "
                >
                  <FontAwesomeIcon className="mr-2" icon={faCartShopping} />
                  Order Now
                </button>
                <div className="dettails grid sm:grid-cols-2 grid-cols-1 gap-2 sm:gap-8 text-sm ">
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faCashRegister}
                    />{" "}
                    Service payments
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faShieldHeart}
                    />{" "}
                    Free returns
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon className="mr-2" icon={faTag} /> Free
                    shipping
                  </span>
                  <span>
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faBagShopping}
                    />{" "}
                    Safty certified
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section className="prodcut-dettials-bottom grid grid-cols-1 md:grid-cols-3 ">
            <div>the shipping part</div>
            <div>the dettials part</div>
            <div>the service part</div>
          </section>
        </main>
      </div>
    </>
  );
};

export default SignlProduct;
