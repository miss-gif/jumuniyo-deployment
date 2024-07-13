import React from "react";
import { Outlet } from "react-router-dom";
import MypageHeader from "./MypageHeader";

const MyPageLayout = () => {
  return (
    <div className="mypage-layout">
      <div className="inner">
        <MypageHeader />
        <div className="mypage-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MyPageLayout;
