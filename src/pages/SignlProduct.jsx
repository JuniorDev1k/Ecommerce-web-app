import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { Link } from "react-router-dom";
import { Container } from "postcss";

// This Page is responsible for Displaying the Dettials of the Uniq Product
const SignlProduct = () => {
  const { productId } = useParams();
  const [signlproduct, setSignproduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="container p-20">
        {loading && (
          <div>{/* skeleton ui */} Lodingg..............................</div>
        )}
        <div className="Links">
          <Link to="/Products">Products&gt;</Link>
          <Link to="/Products">{signlproduct?.category} &gt;</Link>
          <Link to={"/Products/" + signlproduct?.id}>{signlproduct?.name}</Link>
        </div>
        <main className="product-Dtaails min-h-screen ">
          <section className="prodcut-dettials-header h-80 py-20 border-red-600  ">
            <div className="product-picture w-2/3">
              <img
                className="w-full h-full"
                src={signlproduct?.ImgUrl}
                alt="Procut-Picture"
              />
            </div>

            <div className="product-info-left">dd</div>
          </section>
          <section className="prodcut-dettials-bottom">
            the second section{" "}
          </section>
        </main>
        ll
      </div>
    </>
  );
};

export default SignlProduct;
