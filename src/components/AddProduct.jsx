import React, { useState } from "react";
import { db } from "../../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import "../App.css";

const AddProduct = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const AddProduct = async (e) => {
    e.preventDefault();
    console.log(data);
    // Add a new document in collection "Products"
    await setDoc(doc(db, "Products", data.name), data);
  };
  const handlchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  return (
    <>
      <div className="form-product">
        <h1>Admin Dashboard</h1>
        <form onSubmit={AddProduct}>
          <h1>Add you Prudct</h1>

          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            placeholder="Product Title"
            onChange={handlchange}
            name="name"
          />

          <label htmlFor="description">description</label>
          <input
            type="text"
            placeholder="Product Description"
            onChange={handlchange}
            name="subdescrb"
          />

          <label htmlFor="reviews">reviews</label>
          <input
            type="number"
            placeholder="reviews"
            onChange={handlchange}
            name="reviews"
          />
          <label htmlFor="">category</label>
          <input type="text" name="category" onChange={handlchange} />

          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="$"
            onChange={handlchange}
            name="price"
          />

          <label htmlFor="Available">Available</label>
          <input type="checkbox" onChange={handlchange} name="available" />

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            placeholder="rating"
            onChange={handlchange}
            name="rating"
          />
          <label htmlFor="Descriptionbig"></label>
          <textarea
            name="description"
            id=""
            cols="30"
            rows="10"
            onChange={handlchange}
          ></textarea>
          <label htmlFor="">Image</label>
          <input type="file" />
          <label htmlFor="">color</label>
          <input type="color" name="color" onChange={handlchange} />
          <button type="submit">Create Product</button>
        </form>
      </div>
    </>
  );
};
export default AddProduct;
