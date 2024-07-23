import React from "react";
import AccessHeader from "./AccessHeader";
import { Outlet } from "react-router-dom";

const AccessLayout = () => {
  return (
    <div className="access-layout">
      <AccessHeader />
      <div className="mobile-inner">
        <Outlet />
      </div>
    </div>
  );
};

export default AccessLayout;
