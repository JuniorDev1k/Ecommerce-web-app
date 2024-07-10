import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

// This Page is responsible for Displaying the Dettials of the Uniq Product
const SignlProduct = () => {
  const { productId } = useParams();
  const [signlproduct, setSignproduct] = useState(null);

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
        console.log("we completed the proicess", signlproduct);
      } catch (error) {
        console.error("Error getting document:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  return <></>;
};

export default SignlProduct;
