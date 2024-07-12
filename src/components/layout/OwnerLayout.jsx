import React from "react";
import OwnerHeader from "./OwnerHeader";
import { Outlet } from "react-router-dom";
import OwnerNav from "./OwnerNav";
import Footer from "./Footer";

const OwnerLayout = () => {
  return (
    <div className="owner-layout">
      <OwnerHeader />
      <div className="owner-content">
        <OwnerNav />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default OwnerLayout;
