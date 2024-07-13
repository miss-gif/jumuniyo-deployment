import React from "react";
import { Outlet } from "react-router-dom";
import MypageHeader from "./MypageHeader";

const MyPageLayout = () => {
  return (
    <div className="mypage-layout">
      <div className="inner">
        <MypageHeader />
        <main className="mypage-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MyPageLayout;
