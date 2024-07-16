import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";

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
  const orderItem = () => {
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
    }, 1000);
  };

  return (
    <>
      <div className=" p-20 px-10 md:p-40 md:px-20     ">
        {loading && (
          <div>{/* skeleton ui */} Lodingg..............................</div>
        )}
        {order && (
          <div role="alert" className="alert shadow-lg fixed top-0 ">
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
          <Link className="hover:text-red-400" to="/Products">
            Products&gt;
          </Link>
          <Link className="hover:text-red-400" to="/Products">
            {signlproduct?.category} &gt;
          </Link>
          <Link
            className="hover:text-red-400"
            to={"/Products/" + signlproduct?.id}
          >
            {signlproduct?.name}
          </Link>
        </div>
        <main className="product-Dtaails grid grid-cols-1 gap-20 items-center  ">
          <section className="prodcut-dettials-heade grid grid-cols-2 gap-8  ">
            <div className="product-picture">
              <img
                className="rounded-xl hover:translate-y-2 transition ease-linear  "
                src={signlproduct?.ImgUrl}
                alt="Procut-Picture"
              />
            </div>
            <div className="product-info-left px-10">
              <div>
                <h2 className="text-center">{signlproduct?.name}</h2>
                <p>{signlproduct?.subdescrb}</p>
                <p>{signlproduct?.description}</p>
                <p>${signlproduct?.price}</p>
                <p>{signlproduct?.reviews} reviews</p>
                <h3>Categor : {signlproduct?.category}</h3>
              </div>
              <button
                onClick={orderItem}
                className="p-2 bg-slate-950 rounded-md mt-8"
              >
                Order Now
              </button>
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
