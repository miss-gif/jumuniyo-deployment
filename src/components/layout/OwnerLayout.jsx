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
        <div className="main-wrap">
          <main className="main">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
