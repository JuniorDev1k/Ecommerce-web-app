import React from "react";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Context/userData";
import {
  Home,
  AddProducts,
  Products,
  SignlProduct,
  Error,
  Signup,
  Login,
} from "./pages";
import ForProducts from "./ProtectedRoutes/forProducts";

import { Nav, Footer } from "./components";

const App = () => {
  return (
    // we setup the routing
    <>
      <AuthProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/Products"
            element={
              // <ForProducts>
              <Products />
              // </ForProducts>
            }
          />
          <Route path="/Admin" element={<AddProducts />} />
          <Route path="/Products/4" element={<SignlProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </AuthProvider>
    </>
  );
};

export default App;
