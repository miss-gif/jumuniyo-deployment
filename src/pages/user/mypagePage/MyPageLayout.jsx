import React from "react";
import { Outlet } from "react-router-dom";
import MypageHeader from "./MypageHeader";
import Footer from "../../../components/layout/Footer";

const MyPageLayout = () => {
  return (
    <div className="mypage-layout">
      <div className="inner">
        <MypageHeader />
        <main className="mypage-content">
          <div className="mypage-cover">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default MyPageLayout;
