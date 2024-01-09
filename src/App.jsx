import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  AddProducts,
  Products,
  SignlProduct,
  Error,
  Signup,
  Login,
} from "./pages";

import { Nav, Footer } from "./components";

const App = () => {
  return (
    // we setup the routing
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Admin" element={<AddProducts />} />
        <Route path="/Products/4" element={<SignlProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
