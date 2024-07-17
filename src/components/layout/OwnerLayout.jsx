import React from "react";
import OwnerHeader from "./OwnerHeader";
import { Outlet } from "react-router-dom";
import OwnerNav from "./OwnerNav";
import FooterMini from "../common/FooterMini";

const OwnerLayout = () => {
  return (
    <div className="owner-layout">
      <OwnerHeader />
      <div className="owner-content">
        <OwnerNav />
        <div className="mypage-content">
          <main className="mypage-cover">
            <Outlet />
          </main>
          <FooterMini />
        </div>
      </div>
    </div>
  );
};

export default OwnerLayout;
