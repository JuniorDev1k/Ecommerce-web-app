import React from "react";
import { AddProduct } from "../../components";
// this is resposible for the dashboard project
const AdminDashboard = () => {
  return (
    <>
      {/* Some Routing here for the whole dashboard */}
      {/* path = Addproduct : we render the components below */}
      <AddProduct /*  { props }  */ />
    </>
  );
};

export default AdminDashboard;
