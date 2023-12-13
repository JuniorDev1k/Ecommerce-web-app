import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Products,
  SignlProduct,
  Error,
  Signup,
  Login,
} from "./pages";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    // we setup the routing
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Admin" element={<Dashboard />} />
        <Route path="/Products/4" element={<SignlProduct />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
