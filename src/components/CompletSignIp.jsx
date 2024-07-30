import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
// this component will render only if user clicked signup and provided email
// this componenet is responsible for ciompleting thew signup ( Display name + ProfilePicture. .. additioanl data )

const CompletSignIp = () => {
  const { currentuser } = useAuth();
  const Navigate = useNavigate();

  const [file, setFile] = useState("file.jpg");
  const [data, setData] = useState({});

  // getting the current user from the Context (  After SignUp  )

  console.log(data);
  //storing user info DB
  const addData = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({
      ...data,

      email: currentuser.email,
      imgUrl: file,
      displayName: value,
    });
  };
  const addUsertoDB = async (e) => {
    e.preventDefault();

    try {
      await setDoc(doc(db, "Users", currentuser.uid), {
        ...data,
      });

      console.log("User Aded");
    } catch (e) {
      console.error("Error adding document: ", e);
      Navigate("/Signup");
    } finally {
    }
  };

  return (
    <div className="h-screen flex  flex-col p-10 gap-10 justify-center items-center">
      <h1>Complet Your Profile ......ect</h1>
      <form
        className="p-10 h-1/2 flex flex-col  gap-20 border-2 border-black "
        onSubmit={addUsertoDB}
      >
        <div className="flex flex-col gap-2 ">
          <label htmlFor="displayname"> Display Name </label>
          <input
            type="text"
            maxLength="16"
            required
            className="p-2 rounded-xl    "
            id="displayname"
            placeholder="displayname ...."
            onChange={addData}
          />
        </div>
        <div>
          <h2>Upload image profile</h2>
        </div>

        <button type="submit" className="bg-red-500 p-4 rounded-xl">
          SignUp
        </button>
      </form>
    </div>
  );
};

export default CompletSignIp;
