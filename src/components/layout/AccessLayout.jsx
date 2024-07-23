import React from "react";
import { Outlet } from "react-router-dom";

const AccessLayout = () => {
  return (
    <div className="access-layout">
      <div className="inner">
        <Outlet />
      </div>
    </div>
  );
};

export default AccessLayout;
