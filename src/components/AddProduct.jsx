import React, { useState } from "react";
import { db } from "../../src/config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [file, setFile] = useState("");
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();
  const categorise = [
    { name: "Full congif", value: "Full config" },
    { name: "Pieces", value: "Pieces" },
    { name: "Accessory", value: "Accessory" },
  ];

  const colorOptions = [
    { name: "Red", value: "red" },
    { name: "Black", value: "black" },
    { name: "Blue", value: "blue" },
    { name: "Yellow", value: "yellow" },
    { name: "Purple", value: "purple" },
  ];

  const [data, setData] = useState({});
  const handlchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const AddProduct = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      await setDoc(doc(db, "Products", data.name), data);
    } catch (err) {
      console.log(err);
      setErr("error creating product,try again");
    } finally {
      Navigate("/Products");
    }

    // Add a new document in collection "Products"
  };

  return (
    <>
      <div className="form-product flex flex-col items-center justify-center p-2 ">
        {err && <h1 className="text-red 500">{err}</h1>}
        <h1 className="mb-10 text-2xl text-red-500  ">Admin Dashboard</h1>
        <form
          onSubmit={AddProduct}
          className={`flex flex-col gap-4 border-2  border-t-gray-900 p-2 w-1/2`}
        >
          <h1 className="text-center ">Add you Prudct</h1>

          <label htmlFor="title">Product Title</label>
          <input
            type="text"
            placeholder="Product Title"
            onChange={handlchange}
            name="name"
            required
          />

          <label htmlFor="description">description</label>
          <input
            type="text"
            placeholder="Product Description"
            onChange={handlchange}
            name="subdescrb"
            required
          />

          <label htmlFor="reviews">reviews</label>
          <input
            type="number"
            placeholder="reviews"
            onChange={handlchange}
            name="reviews"
            required
          />
          <div className="input-category">
            <select name="category" onChange={handlchange}>
              {categorise.map((i) => (
                <option key={i.value} value={i.value}>
                  {i.name}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="price">Price</label>
          <input
            type="number"
            placeholder="$"
            onChange={handlchange}
            name="price"
            required
          />

          <label htmlFor="Available">Available</label>
          <input type="checkbox" onChange={handlchange} name="available" />

          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            placeholder="rating"
            onChange={handlchange}
            name="rating"
            required
          />

          <label htmlFor="Descriptionbig">Sub Description</label>
          <textarea
            name="description"
            className="border-2 border-t-gray-900"
            id=""
            cols="2"
            rows="2"
            onChange={handlchange}
            required
          ></textarea>
          <label htmlFor="">Image</label>
          <input type="file" />
          <label htmlFor="">color</label>
          <div className="input-color">
            <select name="color" onChange={handlchange}>
              {colorOptions.map((C) => (
                <option
                  style={{ backgroundColor: C.value }}
                  key={C.value}
                  value={C.value}
                >
                  {C.name}
                </option>
              ))}
            </select>
          </div>

          <button
            className=" ml-40 rounded-xl p-2 bg-black w-1/2 text-white"
            type="submit"
          >
            Create Product
          </button>
          <h1>Functionality drop & drag with react Library</h1>
        </form>
      </div>
    </>
  );
};
export default AddProduct;
