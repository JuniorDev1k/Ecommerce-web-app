import React, { useEffect, useState } from "react";
import { db, Storage } from "../../src/config/firebase";
import { doc, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import Noimg from "../Assets/Images/image-tools.svg";
import { colorOptions } from "../data";

const AddProduct = () => {
  const [file, setFile] = useState(null);
  const [err, setErr] = useState(false);
  const [percentg, setPercentg] = useState(null);
  const Navigate = useNavigate();
  const [data, setData] = useState({});
  const [created, setCreated] = useState(false);
  const categorise = [
    { name: "Full config", value: "Full config" },
    { name: "Pieces", value: "Pieces" },
    { name: "Accessory", value: "Accessory" },
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
      setCreated(true);
      setTimeout(() => {
        setCreated(false);
      }, 3000);
    }
  };

  return (
    <>
      {created && (
        <div role="alert" className="alert alert-success m-20 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Product Added!</span>
        </div>
      )}
      <div className="form-product flex flex-col items-center justify-center p-2 mt-20 ">
        {err && <h1 className="text-red 500">{err}</h1>}
        <h1 className="text-center text-2xl font-medium font-robotto -tracking-tighter   ">
          Add Your Product
        </h1>
        <form
          onSubmit={AddProduct}
          className={`grid grid-cols-2 gap-4 p-4 w-full`}
        >
          <div className=" flex  gap-20 flex-col left-form">
            <div className="flex flex-col h-[17rem] align-center ">
              <label htmlFor="">Image</label>
              <input
                type="file"
                name="ImgUrl"
                onChange={(e) => setFile(e.target.files[0])}
                className="border-none ml-20 "
              />
              <img
                src={file ? URL.createObjectURL(file) : Noimg}
                alt={file ? "not yet" : "letgsgosogso"}
                className="w-full h-full border-2 border-solid border-black "
              />
            </div>

            <div className="Pr-dettials grid grid-cols-2  ">
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label htmlFor="reviews">reviews</label>
                  <input
                    type="number"
                    placeholder="reviews"
                    onChange={handlchange}
                    name="reviews"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Available">Available</label>
                  <input
                    type="checkbox"
                    onChange={handlchange}
                    name="available"
                  />
                </div>
                <div>
                  <label htmlFor="rating">Rating</label>
                  <input
                    type="number"
                    placeholder="rating"
                    onChange={handlchange}
                    name="rating"
                    required
                  />
                </div>
                <div>
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
                </div>
              </div>
              <div className="input-category flex flex-col gap-2">
                <label htmlFor="">Category</label>
                <select name="category" onChange={handlchange}>
                  {categorise.map((i) => (
                    <option key={i.value} value={i.value}>
                      {i.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="right-form">
            <div>
              <div>
                <label htmlFor="title">Product Title</label>
                <input
                  type="text"
                  placeholder="Product Title"
                  onChange={handlchange}
                  name="name"
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  placeholder="$"
                  onChange={handlchange}
                  name="price"
                  required
                />
              </div>
              <div>
                {" "}
                <label htmlFor="description">description</label>
                <input
                  type="text"
                  placeholder="Product Description"
                  onChange={handlchange}
                  name="subdescrb"
                  required
                />
              </div>
            </div>
            <div>
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
            </div>
          </div>
          <button
            className="  mt-20 rounded-xl p-2 bg-black w-1/2 text-white"
            type="submit"
          >
            Create Product
          </button>
        </form>
      </div>
    </>
  );
};
export default AddProduct;
