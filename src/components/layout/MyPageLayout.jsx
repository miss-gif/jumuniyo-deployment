import React from "react";
import { Outlet } from "react-router-dom";
import MypageHeader from "../account/MypageHeader";

const MyPageLayout = () => {
  return (
    <>
      <div className="mypage-layout">
        <MypageHeader />
        <div className="mypage-content">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyPageLayout;
