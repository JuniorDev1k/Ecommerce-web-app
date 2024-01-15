import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/userData";

const ForProducts = ({ children }) => {
  const { currentuser } = useAuth();

  if (currentuser === null) {
    return <Navigate to="/" />;
  }

  // return <Navigate to="/" />;

  return children;
};

export default ForProducts;
