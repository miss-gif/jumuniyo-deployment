import React from "react";
import { Link } from "react-router-dom";

const AccessHeader = () => {
  return (
    <div className="access-header">
      <h1>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            alt="Logo"
          />
        </Link>
      </h1>
      <h2 className="access-header-title">로그인</h2>
    </div>
  );
};

export default AccessHeader;
