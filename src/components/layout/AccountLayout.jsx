import React from "react";
import AccountHeader from "./AccountHeader";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <>
      <div className="inner">
        <AccountHeader />
        <Outlet />
      </div>
    </>
  );
};

export default AccountLayout;
