import React, { useEffect, useState } from "react";
import { db, Storage } from "../../src/config/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Noimg from "../../Assets/Images/image-tools.svg";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);
  const [percentg, setPercentg] = useState(null);
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const categorise = [
    { name: "Full config", value: "Full config" },
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
  useEffect(() => {
    const upLoadFile = () => {
      // uploading product image
      const productFolderRef = ref(Storage, `ProductsImg/${file.name}`);
      const upload = uploadBytesResumable(productFolderRef, file);
      console.log(file);

      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(`Error uplading image`, error);
          // handling uploading error
        },
        () => {
          // After upladoing successfully, adding the imgUrl to data state
          getDownloadURL(upload.snapshot.ref).then((downloadURL) => {
            console.log("ing available at : ", downloadURL);
            setData((prev) => ({ ...prev, ImgUrl: downloadURL })); // handling the state ( prev )
          });
        }
      );
    };
    // chechking if the file exists  => running the uploading function
    file && upLoadFile();
  }, [file]);

  const handlchange = (e) => {
    // adding user inputs to data state
    const name = e.target.name;
    const value = e.target.value;

    setData({ ...data, [name]: value });
  };

  const AddProduct = async (e) => {
    // Add a new document in collection "Products"
    e.preventDefault();

    try {
      await addDoc(collection(db, "Products"), data);
      console.log(data);
    } catch (err) {
      // handling add prodcut to database errors
      console.log(err);
      setErr("error creating product,try again");
    } finally {
      // console.log(data);
      alert("Created product successfully !!!!");
    }
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
          <div className="flex gap-2">
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="ImgUrl"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <img
              src={file ? URL.createObjectURL(file) : Noimg}
              alt={file ? "not yet" : "letgsgosogso"}
            />
          </div>
          x<label htmlFor="">color</label>
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
      <div>
        {" "}
        thigs is th img
        {/* {file && <img src={file.name} alt="img" />} */}
      </div>
    </>
  );
};
export default AddProduct;
