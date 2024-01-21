import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/userData";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
// this component will render only if user clicked signup and provided email
// this componenet is responsible for ciompleting thew signup ( Display name + ProfilePicture. .. additioanl data )

const CompletSignIp = () => {
  const { currentuser } = useAuth();
  const Navigate = useNavigate();
  const [displayname, setDisplayname] = useState("");

  // getting the current user from the Context (  After SignUp  )

  console.log(displayname);
  //storing user info DB
  const addUsertoDB = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        displayname: displayname,
        imgUrl: "img Url",
        email: currentuser.email,
        id: currentuser.uid,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      Navigate("/");
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
          <label htmlFor="disp"> Display Name </label>
          <input
            type="text"
            required
            className="p-2 rounded-xl    "
            id="disp"
            placeholder="displayname ...."
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </div>
        <div>
          <h2>Upload image profile mother fucker</h2>
        </div>

        <button type="submit" className="bg-red-500 p-4 rounded-xl">
          {" "}
          SignUp{" "}
        </button>
      </form>
    </div>
  );
};

export default CompletSignIp;
